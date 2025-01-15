var config = require('semantic-release-preconfigured-conventional-commits');

config.plugins.push(
    "@semantic-release/git",
    "@semantic-release/github",
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

