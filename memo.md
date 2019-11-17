必ず環境変数を先に書く
例
"scripts": {
  "dev": "NODE_ENV=development webpack-dev-server --config ./webpack.config.js",
  "prod": "NODE_ENV=production webpack-dev-server --config ./webpack.config.js"
},

externals
packageが依存しているファイルをbundleしないように指定する
externals: ['jquery']などと指定するが、node-webpack-externalsを使うといい感じにnode_modulesのファイルをが依存しているファイルを除外してくれる