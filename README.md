# Takahashi Language

[![React](https://img.shields.io/badge/React-555.svg?logo=react)](https://github.com/facebook/react)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white)](https://github.com/microsoft/TypeScript)
[![Vite](https://img.shields.io/badge/Vite-1e1e20.svg?logo=vite)](https://github.com/vitejs/vite)
[![Build and Deploy](https://github.com/chvmvd/takahashi-language/actions/workflows/deploy.yml/badge.svg)](https://github.com/chvmvd/takahashi-language/actions/workflows/deploy.yml)
[![Prettier](https://github.com/chvmvd/takahashi-language/actions/workflows/prettier.yml/badge.svg)](https://github.com/chvmvd/takahashi-language/actions/workflows/prettier.yml)
[![ESLint](https://github.com/chvmvd/takahashi-language/actions/workflows/eslint.yml/badge.svg)](https://github.com/chvmvd/takahashi-language/actions/workflows/eslint.yml)
![license](https://img.shields.io/badge/license-MIT-informational.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

[日本語版 README はこちら](README-ja.md)

Takahashi Language is a Brainfuck-based programming language.

https://user-images.githubusercontent.com/104971044/221582662-7f3553ad-9216-4928-82d6-5c00bcb01809.mp4

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Development](#development)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Local Development](#local-development)
- [License](#license)
- [Contributing](#contributing)

## About

Takahashi Language is a Brainfuck-based language.
You can try it in the playground at [this link](https://chvmvd.github.io/takahashi-language/).

## Usage

Takahashi Language has only 8 commands, similar to Brainfuck.

| Command | Meaning                                                                                                                                                                      |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `高橋`  | Increment the data pointer.(Equivalent to the `>` command in Brainfuck.)                                                                                                     |
| `髙橋`  | Decrement the data pointer.(Equivalent to the `<` command in Brainfuck.)                                                                                                     |
| `高𣘺`  | Increment the byte at the data pointer.(Equivalent to the `+` command in Brainfuck.)                                                                                         |
| `髙𣘺`  | Decrement the byte at the data pointer.(Equivalent to the `-` command in Brainfuck.)                                                                                         |
| `高𫞎`  | Output the byte at the data pointer.(Equivalent to the `.` command in Brainfuck.)                                                                                            |
| `髙𫞎`  | Receive one byte from input and store it in the byte at the data pointer.(Equivalent to the `-` command in Brainfuck.)                                                       |
| `高槗`  | If the byte at the data pointer is zero, jump the instruction pointer forward to the command after the matching `髙槗` command.(Equivalent to the `[` command in Brainfuck.) |
| `髙槗`  | If the byte at the data pointer is nonzero, jump the instruction pointer back to the command after the matching `高槗` command.(Equivalent to the `]` command in Brainfuck.) |

Below is a Hello World! program by Takahashi Language.

```plain
高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺
高槗高橋高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高橋高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高橋高𣘺高𣘺高𣘺高橋高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高橋髙橋髙橋髙橋髙橋髙橋髙𣘺髙槗
高橋高𣘺高𣘺高𫞎高橋高𣘺高𫞎高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𫞎高𫞎高𣘺高𣘺高𣘺高𫞎高橋高𣘺高𣘺高𫞎
高橋高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𣘺高𫞎髙橋髙橋高𫞎高𣘺高𣘺高𣘺高𫞎髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺高𫞎髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺髙𣘺高𫞎高橋高𣘺高𫞎
```

## Development

### Requirements

- [npm](https://github.com/npm/cli)

### Installation

```shell
npm ci
```

### Local Development

```shell
npm run dev
```

After running the command above, visit [http://localhost:5173/](http://localhost:5173/).

## License

Takahashi Language is licensed under the [MIT](LICENSE) license.

Copyright © 2023 WATAHIKI Yuto.

## Contributing

Issue or PR is always welcome.
