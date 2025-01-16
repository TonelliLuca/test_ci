import config from 'semantic-release-preconfigured-conventional-commits' with { type: "json" }
config.plugins.push(
    [
        "semantic-release-github-pullrequest",
        {
        assets: ["package.json", "CHANGELOG.md"],
        baseRef: "main",
        title: "chore(release): ${nextRelease.version}",
        body: "This pull request includes the changes for version ${nextRelease.version}.",
        branch: "release-${nextRelease.version}"
        }
    ],
    "@semantic-release/github",
    [
        "@semantic-release/git",
        {
          "assets": ["package.json", "CHANGELOG.md"],
          "message": "chore(release): ${nextRelease.version} [skip ci]"
        }
    ]
)


export default config