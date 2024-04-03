# boilerplate-nodejs

A Node.js template of the [Yue library](https://github.com/yue/yue) for building
cross-platform desktop apps with system webview and native GUI widgets.

For a real world example, check the open source [Chie](https://chie.app) app.

## Features

* Build desktop apps with Node.js, system webview and native UI.
* Generate portable executables for Linux/Windows.
* Generate signed app bundle for macOS.
* Add Node.js bindings to web pages.
* Custom protocols in webview.

## Screenshots

|  macOS            |    Linux          |  Windows          |
| ----------------- | ----------------- | ----------------- |
| ![][mac-shot]     | ![][lin-shot]     | ![][win-shot]     |

## How to use

1. Clone the project.
2. Put your web app in `app/`.
3. `npm install` to install dependencies.
4. `npm start` to start the app.
5. `npm run dist` to create distribution.

## Docs

* [Architecture](https://github.com/yue/boilerplate-nodejs/blob/main/docs/architecture.md)
* [How to sign macOS app in CI](https://github.com/yue/boilerplate-nodejs/blob/main/docs/sign-mac-app.md)
* [Yue documents (external link)](http://libyue.com/docs/latest/js/)

## License

Public domain.

[mac-shot]: https://github.com/yue/boilerplate-nodejs/assets/639601/5191c3df-60df-4647-a665-f8a9d39ba242
[lin-shot]: https://github.com/yue/boilerplate-nodejs/assets/639601/29e4af2b-8ad4-4bb8-8648-0ad42f66a853
[win-shot]: https://github.com/yue/boilerplate-nodejs/assets/639601/a9442e5a-bb4b-4501-9f04-49217cd5535f
