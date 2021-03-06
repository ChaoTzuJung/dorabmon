# dorabmon

## QR code of your bot

![Demo](https://imgur.com/TSeXjUP.png)

![QR code](https://github.com/ChaoTzuJung/dorabmon/blob/master/image/QR%20code.png)

![Mockup](https://i.imgur.com/v6X0AHw.png)

## 支援的指令

### 開團

開始一個團體訂單

```
開團
```

### 截止

結束一個團體訂單

```
截止
```

### 統計

輸出目前訂單內容

```
統計
```

### 下訂單

點自己想要的內容，一人限點一次

```
我要<訂單內容>
我也要<訂單內容>
```

範例：

```
我要珠珠奶茶
我也要抹茶拿鐵
```

### 取消訂單

取消自己的訂單

```
取消
```

## 目錄結構

整個目錄結構大概是這樣：

```
DOLABMON/
  actions/
  node_modules/
  index.js
  bottender.config.js
  handler.js
  package.json
  README.md
  yarn.lock
  .env
```

檔案大致的職責分配：

* `index.js` - 程式進入點、Bot 初始化相關、Server 相關的程式碼。
* `handler.js` - 用 Builder 建立的主邏輯。
* `actions/*.js` - 在 `handler.js` 裡面引入的各單一動作。
* `bottender.config.js` - 所有 Bottender 相關的設定放置位置。
* `.env` - 放置環境變數，包括 `ACCESS_TOKEN` 以及 `CHANNEL_SECRET`。

## Setup

```
yarn
cp .env.sample .env
```

然後必須在 `.env` 中編輯 `ACCESS_TOKEN` 以及 `CHANNEL_SECRET`。或是不使用 `.env` 而在執行 server 的時候直接設定環境變數。

## NPM Scripts

有兩個預先寫好的指令：

### `npm run dev`

用 [nodemon](https://github.com/remy/nodemon) 執行 Bot，會監控修改進行重啟，適合開發使用。

### `npm start`

執行 Bot。
