#!/usr/bin/env node
import * as dotenv from 'dotenv';
import { MaintenancePipeLineStack } from '../lib/cdk-stack';
import * as cdk from 'aws-cdk-lib';

dotenv.config();

const appEnv = process.env.CDK_ENVIRONMENT || 'dev';
const region = process.env.CDK_REGION;

const app = new cdk.App();
new MaintenancePipeLineStack(app, `${appEnv}-maintenance-dapp-pipeline`, { env: { region } });

app.synth();