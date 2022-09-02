const core = require('@actions/core');
const github = require('@actions/github');

async function run() {

  try {

    const repository = core.getInput('repository');
    console.log(`Get Repository: ${repository}`);

    const milestoneName = core.getInput('name');
    console.log(`Get Milestone Name: ${milestoneName}`);

    const token = core.getInput('token');
    const octokit = github.getOctokit(token);

    const response = await octokit.request(`GET /repos/${repository}/milestones`);
    const data = response.data;

    console.log(data);
    core.setOutput('data', data);

  } catch (error) {

    core.setFailed(error.message);

  }

}

run();