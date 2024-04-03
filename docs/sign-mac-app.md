# Sign mac app

This template has a GitHub workflow that signs and the notorizes the app bundle,
and you need to set following secrects in repo/orgnaization to make it work.

## `BUILD_CERTIFICATE_BASE64`/`P12_PASSWORD`/`KEYCHAIN_PASSWORD`

https://docs.github.com/en/actions/deployment/deploying-xcode-applications/installing-an-apple-certificate-on-macos-runners-for-xcode-development

## `APPLE_TEAM_ID`

https://developer.apple.com/help/account/manage-your-team/locate-your-team-id/

## `APPLE_ID`/`APPLE_PASSWORD`

https://github.com/lando/notarize-action
https://support.apple.com/en-us/102654
