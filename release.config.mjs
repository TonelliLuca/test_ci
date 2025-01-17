import config from 'semantic-release-preconfigured-conventional-commits' with { type: "json" };

export default {
  ...config,
  branches: ["main"],
  plugins: [
    ...config.plugins,
    [
      "semantic-release-github-pullrequest",
      {
        assets: ["package.json", "CHANGELOG.md"],
        baseRef: "main",
        title: "chore(release): ${nextRelease.version}",
        body: "This pull request includes the changes for version ${nextRelease.version}.",
      },
    ],
    "@semantic-release/github",
  ],
};