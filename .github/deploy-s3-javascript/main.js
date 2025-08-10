const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');


function run() {
    core.notice('Starting deployment to S3...');
}

run();