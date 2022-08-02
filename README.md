
## ディレクトリ構成

```
.
├── app
│   ├── be       #<= SpringBootアプリケーションのソースコードと .devcontainer を配置している
│   └── fe       #<= Next.jsアプリケーションのソースコードと .devcontainer を配置している
│
└── docker       #<= 各種コンテナ
    ├── dbclient #<= DBクライアントのコンテナ
    ├── java     #<= Java17のコンテナ
    ├── mysql    #<= MySQLのコンテナ
    └── nextjs   #<= Node16のコンテナ
```

## BE参考

https://github.com/gel1123/smd_api

## FE参考

下記のリポジトリに少し手を加えている ( Next.jsアプリケーションのルートディレクトリを /app 直下にしたなど )

https://github.com/gel1123/docker_on_next

## どこからVSCodeのリモートコンテナを開く？

バックエンドは、 `./app/be` ディレクトリをVSCodeで開いた上で Remote Containers を開く。
フロントエンドは、 `./app/fe` ディレクトリをVSCodeで開いた上で Remote Containers を開く。

## これは何？

「ひとつの docker-compose.yml で複数の開発言語をVSCodeで開ける」状態のリポジトリです。具体的には、 app/fe でNext.jsが入っているNode16コンテナ、 app/be でSpringBootコンテナが開きます。

なおこのような構成は、VSCode公式からの解説がありますので、アレンジしたい方などはこちらをご覧ください。
https://code.visualstudio.com/remote/advancedcontainers/connect-multiple-containers

### 補足

一方のVSCodeを閉じた時に、docker-compose.yml で管理するコンテナ全体がシャットダウンしないようにするには、
`devcontainer.json` について上記のVSCode公式ドキュメントに記載に従い設定を変更してください。
（このリポジトリでは設定済みです）

> "shutdownAction":"none"ファイル内のはdevcontainer.jsonオプションですが、VS Code を閉じるときにコンテナーを実行> したままにします。これにより、1 つのウィンドウを閉じて両方のコンテナーを誤ってシャットダウンするのを防ぐことができます。


## どう動かすの？

app/fe ：コンテナに入ったら yarn dev で localhost:3000 で Next.js が起動
app/be：コンテナに入ったら ApiApplication.java から Run すれば localhost:8080 でSpringBootアプリケーションが起動（MySQLに接続済み）
https://github.com/gel1123/smd_api_with_next
