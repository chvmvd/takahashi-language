# たかはし言語

[![React](https://img.shields.io/badge/React-555.svg?logo=react)](https://ja.reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/ja/)
[![Vite](https://img.shields.io/badge/Vite-1e1e20.svg?logo=vite)](https://ja.vitejs.dev/)
[![Build and Deploy](https://github.com/chvmvd/takahashi-language/actions/workflows/deploy.yml/badge.svg)](https://github.com/chvmvd/takahashi-language/actions/workflows/deploy.yml)
[![Prettier](https://github.com/chvmvd/takahashi-language/actions/workflows/prettier.yml/badge.svg)](https://github.com/chvmvd/takahashi-language/actions/workflows/prettier.yml)
[![ESLint](https://github.com/chvmvd/takahashi-language/actions/workflows/eslint.yml/badge.svg)](https://github.com/chvmvd/takahashi-language/actions/workflows/eslint.yml)
![LICENSE](https://img.shields.io/badge/license-MIT-informational.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

[English README is here.](README.md)

たかはし言語は、Brainfuck をベースとしたプログラミング言語です。

https://user-images.githubusercontent.com/104971044/221582662-7f3553ad-9216-4928-82d6-5c00bcb01809.mp4

## 目次

- [概要](#概要)
- [使い方](#使い方)
- [開発](#開発)
  - [要件](#要件)
  - [環境構築](#環境構築)
  - [開発用サーバーの起動](#開発用サーバーの起動)
- [ライセンス](#ライセンス)
- [貢献](#貢献)

## 概要

たかはし言語は、Brainfuck をベースとしたプログラミング言語です。
[このリンク](https://chvmvd.github.io/takahashi-language/)にあるプレイグラウンドで実際に試すことができます。

## 使い方

たかはし言語には、Brainfuck と同じで 8 種類のコマンドしかありません。

| コマンド | 意味                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------ |
| `高橋`   | ポインタをインクリメントする。(Brainfuck の `>` に相当)                                          |
| `髙橋`   | ポインタをデクリメントする。(Brainfuck の `<` に相当)                                            |
| `高𣘺`   | ポインタが指す値をインクリメントする。(Brainfuck の `+` に相当)                                  |
| `髙𣘺`   | ポインタが指す値をインクリメントする。(Brainfuck の `-` に相当)                                  |
| `高𫞎`   | ポインタが指す値を出力に書き出す。(Brainfuck の `.` に相当)                                      |
| `髙𫞎`   | 入力から 1 バイト読み込んで、ポインタが指す値に代入する。(Brainfuck の `,` に相当)               |
| `高槗`   | ポインタが指す値が 0 なら、対応する `髙槗` の直後にポインタを移動する。(Brainfuck の `[` に相当) |
| `髙槗`   | ポインタが指す値が 0 なら、対応する `高槗` の直後にポインタを移動する。(Brainfuck の `]` に相当) |

以下が、たかはし言語による Hello World! です。

```plain
高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺
高槗高橋高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高橋高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高橋高𣘺高𣘺高𣘺高橋高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高橋髙橋髙橋髙橋髙橋髙橋髙𣘺髙槗
高橋高𣘺高𣘺高𫞎高橋高𣘺高𫞎高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𫞎高𫞎高𣘺高𣘺高𣘺高𫞎高橋高𣘺高𣘺高𫞎
高橋高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𫞎髙橋髙橋高𫞎高𣘺高𣘺高𣘺高𫞎髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺高𫞎髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺高𫞎高橋高𣘺高𫞎
```

## 開発

### 要件

- [Node.js](https://nodejs.org/ja/)
- [npm](https://www.npmjs.com/)

### 環境構築

```shell
npm ci
```

## 開発用サーバーの起動

```shell
npm run dev
```

上記のコマンドを実行した後、[http://localhost:5173/](http://localhost:5173/) にアクセスしてください。

## ライセンス

たかはし言語は [MIT](https://opensource.org/licenses/MIT) ライセンスのもとで公開されています。
Copyright © 2023 WATAHIKI Yuto.

## 貢献

Issue や PR などはいつでも歓迎します。
