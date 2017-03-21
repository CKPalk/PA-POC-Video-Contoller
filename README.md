# React Chrome Video Ad Control Extension

## Installation

```bash
# Install dependencies
$ npm install
```

## Development

1. Start dev server
```bash
# build files to './dev'
# start webpack development server
$ npm run dev
```
2. Load `/dev` as Unpacked Extension in Chrome

#### React/Redux hot reload

Using `Webpack`, `react-transform`, and `Redux` hot reloading works for Popup & Window & Inject page

#### Using Redux DevTools Extension

You can use [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) on development mode.

## Build

```bash
# build files to './build'
$ npm run build
```

## Compress

```bash
# compress build folder to {manifest.name}.zip and crx
$ npm run build
$ npm run compress -- [options]
```
