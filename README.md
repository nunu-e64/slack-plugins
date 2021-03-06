# slack-plugins
Slack使いやすくするためのUserScript  
[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)とかで使えばいいんではなかろうか  
インストール後に下記のリンク踏めば使えるようになると思います☺️

- [mentionをChatWork風にハイライト表示する](#mentionをchatwork風にハイライト表示する)
- [ChatWork風に返信する](#chatwork風に返信する)
- [SlackのProxyを通して表示できない画像を直接インライン展開する](#slackのproxyを通して表示できない画像を直接インライン展開する)
- [打鍵中のステータスを表示させない](#打鍵中のステータスを表示させない)
- [チャンネル内検索をやりやすくする](#チャンネル内検索をやりやすくする)

#### 上記をまとめた版
https://wamei.github.io/slack-plugins/loaders/plugins.user.js


#### オプション
- [[fluid] Dockアイコンに未読数の表示](#fluid-dockアイコンに未読数の表示)
- [メッセージの文字サイズだけを調整する](#メッセージの文字サイズだけを調整する)

## mentionをChatWork風にハイライト表示する
https://wamei.github.io/slack-plugins/loaders/mention.user.js
![mention](https://user-images.githubusercontent.com/2811188/38767201-4ea94346-4018-11e8-8a3d-c57035311a2e.png)

## ChatWork風に返信する
https://wamei.github.io/slack-plugins/loaders/reply.user.js  
- 返信ボタン  
mentionを挿入します  
範囲選択しながら押すと引用も挿入されます  
  
- 引用ボタン  
メッセージの引用を挿入します  
範囲選択しながら押すと該当部分のみを引用します  

![reply](https://user-images.githubusercontent.com/2811188/38855966-09474484-4260-11e8-9c0f-733446ae075b.PNG)

## SlackのProxyを通して表示できない画像を直接インライン展開する
https://wamei.github.io/slack-plugins/loaders/inline-image.user.js
![inline-image](https://user-images.githubusercontent.com/2811188/38767762-7e2d0fee-4022-11e8-8693-2be3c1d38d36.png)
#### クリックすればモーダル表示されます
![modal-image](https://user-images.githubusercontent.com/2811188/38856326-13c046bc-4261-11e8-94bf-da6e54d5dff3.PNG)

## 打鍵中のステータスを表示させない
https://wamei.github.io/slack-plugins/loaders/suspend-typing-status.user.js  
標準オプションのものとは違って他人に自分の打鍵中ステータスが表示されなくなる

## チャンネル内検索をやりやすくする
https://wamei.github.io/slack-plugins/loaders/search-in-channel.user.js  
ボタンを押すとin:~が自動入力される
![search-in-channel](https://user-images.githubusercontent.com/2811188/39082895-7d1c03bc-4595-11e8-9a88-64a4777437b2.png)

# オプション

## [fluid] Dockアイコンに未読数の表示
https://wamei.github.io/slack-plugins/loaders/fluid-badge.user.js  

## メッセージの文字サイズだけを調整する
https://wamei.github.io/slack-plugins/loaders/message-font-size.user.js  
![message-font-size](https://user-images.githubusercontent.com/2811188/39223602-ecfaaf9a-487d-11e8-93b3-603c305f2b4a.png)
- ``alt`` + ``+``: 文字の拡大
- ``alt`` + ``-``: 文字の縮小
