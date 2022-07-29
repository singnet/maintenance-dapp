import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as dotenv from 'dotenv';

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
export class MaintenancePipeLineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const role = iam.Role.fromRoleArn(this, 'CDRole', CD_ROLE_ARN);

    const projectSource = codebuild.Source.gitHub({
      owner: githubOwner,
      repo: githubRepo,
      branchOrRef: githubBranch,
      fetchSubmodules: false,
      cloneDepth: 25,
      webhook: true,
      webhookTriggersBatchBuild: false,
      webhookFilters: [
        codebuild.FilterGroup.inEventOf(
          codebuild.EventAction.PULL_REQUEST_MERGED
        ).andBranchIs(githubBranch),
      ],
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
          build: {
            commands: [
              'cd cdk',
              `aws s3 sync s3://${configBucket}/${appConfigsFolder}/cdk .`,
              'npm install',
              'npm run deploy',
              'cd ..',
              'npm install',
              'npm install -g serverless',
              `aws s3 sync s3://${configBucket}/${appConfigsFolder}/app .`,
              'serverless',
            ],
          },
        },
      }),
    });

    const siteBucket = new s3.Bucket(this, `${environment}-maintenance-dapp`, {
      bucketName: S3_BUCKET_NAME,
      publicReadAccess: true,
    });


    const siteDistribution = new cloudfront.Distribution(
      this,
      "static-dist",
      {
        defaultBehavior: {
          origin: new origins.S3Origin(siteBucket),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
      }
    );

    // eslint-disable-next-line no-new
    new CfnOutput(this, `${environment}-maintenance-dapp-cf`, {
      value: siteDistribution.distributionDomainName,
      exportName: `${environment}-maintenance-dapp-cf`,
    });
  }
}
