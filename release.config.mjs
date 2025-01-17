import config from 'semantic-release-preconfigured-conventional-commits' with { type: "json" };

// Define the release branch name
const releaseBranch = `release-${nextRelease.version}`;

// Add a step to create a new branch before the prepare step
config.plugins.unshift({
  verifyConditions: [],
  prepare: [
    {
      path: '@semantic-release/exec',
      cmd: `git checkout -b ${releaseBranch}`
    }
  ]
});

// Configure the plugins
config.plugins.push(
  [
    "@semantic-release/git",
    {
      assets: ["package.json", "CHANGELOG.md"],
      message: "chore(release): ${nextRelease.version} [skip ci]",
      branch: releaseBranch
    }
  ],
  [
    "semantic-release-github-pullrequest",
    {
      assets: ["package.json", "CHANGELOG.md"],
      baseRef: "main",
      title: "chore(release): ${nextRelease.version}",
      body: "This pull request includes the changes for version ${nextRelease.version}.",
      branch: releaseBranch
    }
  ]
);

export default config;
