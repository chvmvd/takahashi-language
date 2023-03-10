export const availableTakahashiLangCommands = [
  "高橋",
  "髙橋",
  "高𣘺",
  "髙𣘺",
  "高𫞎",
  "髙𫞎",
  "高槗",
  "髙槗",
];
export type TakahashiLangCommand =
  | "高橋"
  | "髙橋"
  | "高𣘺"
  | "髙𣘺"
  | "高𫞎"
  | "髙𫞎"
  | "高槗"
  | "髙槗";
export type TakahashiLangCommands = TakahashiLangCommand[];
export const takahashiLangCommandTable = {
  高橋: ">",
  髙橋: "<",
  高𣘺: "+",
  髙𣘺: "-",
  高𫞎: ".",
  髙𫞎: ",",
  高槗: "[",
  髙槗: "]",
};
export type TakahashiLangSyntaxStatus =
  | "OK"
  | "Too many 髙槗!"
  | "Too many 高槗!"
  | "bracket mismatch!";
