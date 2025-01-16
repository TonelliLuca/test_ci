var config = require('semantic-release-preconfigured-conventional-commits');

config.plugins.push(
  "@semantic-release/changelog",
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  [
    "@semantic-release/npm",
    {
      npmPublish: false,
    },
  ],
  [
    "@semantic-release/git",
    {
      assets: ["package.json", "CHANGELOG.md"],
      message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }
  ],
  "@semantic-release/github",
  [
    "@semantic-release/exec",
    {
      prepareCmd: 'echo "Preparing version ${nextRelease.version}"',
      publishCmd: 'echo "Publishing version ${nextRelease.version}"',
      successCmd: 'echo "::set-output name=release_created::true"',
      failCmd: 'echo "::set-output name=release_created::false"'
    }
  ],
  [
    "semantic-release-github-pullrequest",
    {
      assets: ["package.json", "CHANGELOG.md"],
      baseRef: "main",
      title: "chore(release): ${nextRelease.version}",
      body: "This pull request includes the changes for version ${nextRelease.version}.",
      branch: "release-${nextRelease.version}"
    }
  ]
);

module.exports = config;
