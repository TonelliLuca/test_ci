var config = require('semantic-release-preconfigured-conventional-commits');

config.branches = ["main", "release"];

config.plugins.push(
  "@semantic-release/github",
  [
    "semantic-release-github-pullrequest",
    {
      "assets": ["CHANGELOG.md", "package.json"],
      "baseRef": "main",
      "branch": "release-pr-${nextRelease.version}"
    }
  ],
  [
    "@semantic-release/exec",
    {
      prepareCmd: 'echo "Preparing version ${nextRelease.version}"',
      publishCmd: 'echo "Publishing version ${nextRelease.version}"',
      successCmd: 'echo "::set-output name=release_created::true"',
      failCmd: 'echo "::set-output name=release_created::false"'
    }
  ]
);

module.exports = config;