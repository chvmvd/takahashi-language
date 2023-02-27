import {
  takahashiLangCommand,
  type TakahashiLangCommand,
  type TakahashiLangCommands,
  takahashiLangCommandTable,
} from "./takahashiLangDefinitions";
import { type BrainfuckCommands } from "./brainfuck-playground/src/components/brainfuckDefinitions";

/**
 * remove comments from the source code and convert takahashi language source code to an array of brainfuck commands
 * @param sourceCode takahashi language source code
 * @returns an array of brainfuck commands
 */
export default function takahashiLangParser(
  sourceCode: string
): BrainfuckCommands {
  const takahashiLangCommands: TakahashiLangCommands = [];
  let i = 0;
  while (i < sourceCode.length - 1) {
    const nextCommand = `${sourceCode[i]}${sourceCode[i + 1]}`;
    if (takahashiLangCommand.includes(nextCommand)) {
      takahashiLangCommands.push(nextCommand as TakahashiLangCommand);
      i += 2;
    } else {
      i++;
    }
  }
  const brainfuckCommands: BrainfuckCommands = takahashiLangCommands.map(
    (takahashiLangCommand) => takahashiLangCommandTable[takahashiLangCommand]
  ) as BrainfuckCommands;
  return brainfuckCommands;
}
