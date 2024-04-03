# Sign mac app

This template has a GitHub workflow that signs and the notorizes the app bundle,
and you need to set following secrects in repo/orgnaization to make it work.

## `BUILD_CERTIFICATE_BASE64`/`P12_PASSWORD`/`KEYCHAIN_PASSWORD`

Check [Installing an Apple certificate on macOS runners for Xcode development](https://docs.github.com/en/actions/deployment/deploying-xcode-applications/installing-an-apple-certificate-on-macos-runners-for-xcode-development)
on how to generate the required secrects for Apple certificate.

## `APPLE_TEAM_ID`

The [Team ID](https://developer.apple.com/help/account/manage-your-team/locate-your-team-id/)
of your Apple Developer account is used for signing and notarizing the app
bundle.

## `APPLE_ID`/`APPLE_PASSWORD`

This repo uses the [Notarize Action](https://github.com/lando/notarize-action)
to notarize the app bundle, which requires your Apple ID and an [app-specific
password](https://support.apple.com/en-us/102654).
