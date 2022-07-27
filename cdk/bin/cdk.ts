#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as dotenv from 'dotenv';
import { MaintenancePipeLineStack } from '../lib/cdk-stack';

dotenv.config();

const appEnv = process.env.CDK_ENVIRONMENT || 'dev';
const region = process.env.CDK_REGION;

const app = new cdk.App();
new MaintenancePipeLineStack(app, `${appEnv}-maintenance-dapp-pipeline`, { env: { region } });

app.synth();