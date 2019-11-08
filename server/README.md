# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

//migration ファイルは一回実行したら、その後ファイルに編集を加えてもう一度実行しても意味がない。（多分一回目のファイルの内容がキャッシュされてそれがもう一度実行されている？）
//なので、もう一個 migration ファイルを作るか, migration:revert して migration をリセットする必要がある。
