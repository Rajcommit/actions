// https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md
const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');


function run() {
// 1) get some input values
    const bucket = core.getInput('bucket', { required: true });  // Get the S3 bucket name from the input, this is required for deployment
    const region = core.getInput('region', { required: false }) || 'us-east-1';  // Get the AWS region from the input, default to 'us-east-1' if not provided
    const accessKeyId = core.getInput('accessKeyId', { required: true }); // Get the AWS access key ID from the input, this is required for deployment
    const secretAccessKey = core.getInput('secretAccessKey', { required: true });   // Get the AWS secret access key from the input, this is required for deployment
    const sourceDir = core.getInput('sourceDir', { required: true }); // Get the source directory from which files will be uploaded to the S3 bucket, this is required for deployment

// 2) Upload files to S3
const s3Uri = `s3://${bucket}`;  // Construct the S3 URI using the bucket name and  default region
const awsCliCommand = `aws s3 sync ${sourceDir} ${s3Uri} --region ${region} --delete`;  // Sync files from sourceDir to S3 bucket and delete files in the bucket that are not present in sourceDir

    core.notice('Starting deployment to S3...');
}

run();