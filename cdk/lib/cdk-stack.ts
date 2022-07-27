import * as cdk from '@aws-cdk/core';
import * as dotenv from 'dotenv';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as s3 from '@aws-cdk/aws-s3';
import * as deploy from '@aws-cdk/aws-s3-deployment';
import * as codebuild from '@aws-cdk/aws-codebuild';
import { Role } from '@aws-cdk/aws-iam';

// dotenv Must be the first expression
dotenv.config();

const environment = <string>process.env.CDK_ENVIRONMENT;
const configBucket = <string>process.env.APP_CONFIGS_S3_BUCKET_NAME;
const appConfigsFolder = <string>process.env.APP_CONFIGS_S3_FOLDER;

const githubOwner = <string>process.env.GITHUB_OWNER;
const githubRepo = <string>process.env.GITHUB_REPO;
const githubBranch = <string>process.env.GITHUB_BRANCH;

const S3_BUCKET_NAME = `${environment}-maintenance-dapp`;
const CD_ROLE_ARN = <string>process.env.SINGULARITYNET_CD_ROLE_ARN;

// eslint-disable-next-line import/prefer-default-export
export class MaintenancePipeLineStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: any) {
    super(scope, id, props);

    const role = Role.fromRoleArn(this, 'AccessPolicy', CD_ROLE_ARN);

    const projectSource = codebuild.Source.gitHub({
      owner: githubOwner,
      repo: githubRepo,
      branchOrRef: githubBranch,
      fetchSubmodules: false,
      cloneDepth: 25,
      webhook: true,
      webhookTriggersBatchBuild: false,
      webhookFilters:
      [codebuild.FilterGroup.inEventOf(codebuild.EventAction.PUSH).andBranchIs(githubBranch)],
    });

    // eslint-disable-next-line no-new
    new codebuild.Project(this, `${environment}-maintenance-dapp-source`, {
      source: projectSource,
      concurrentBuildLimit: 1,
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_5_0,
      },
      role,
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          pre_build: {
            commands: ['node --version', `aws s3 sync s3://${configBucket}/${appConfigsFolder}/app .`, 'npm install'],
          },
          build: {
            commands: ['npm run build', 'cd cdk', `aws s3 sync s3://${configBucket}/${appConfigsFolder}/cdk .`, 'npm install', 'npm run deploy'],
          },
        },
      }),
    });

    const siteBucket = new s3.Bucket(this, `${environment}-maintenance-dapp`, {
      bucketName: S3_BUCKET_NAME,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const siteDistribution = new cloudfront.CloudFrontWebDistribution(this, `${environment}-maintenance-dapp-distribution`, {
      defaultRootObject: 'index.html',
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: siteBucket,
          },
          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    });

    // eslint-disable-next-line no-new
    new deploy.BucketDeployment(this, `${environment}-maintenance-dapp-deployment`, {
      sources: [deploy.Source.asset('../build')],
      destinationBucket: siteBucket,
      distribution: siteDistribution,
      distributionPaths: ['/*'],
      prune: true,
    });
  }
}
