import takahashiLangParser from "./takahashiLangParser";
import brainfuckSyntaxChecker from "./brainfuck-playground/src/components/brainfuckSyntaxChecker";
import { type TakahashiLangSyntaxStatus } from "./takahashiLangDefinitions";

/**
 * check the syntax of the source code
 * @param sourceCode source code
 * @returns syntax status
 */
export default function takahashiLangSyntaxChecker(
  sourceCode: string
): TakahashiLangSyntaxStatus {
  const brainfuckCommands = takahashiLangParser(sourceCode);
  const brainfuckSyntaxStatus = brainfuckSyntaxChecker(
    brainfuckCommands.join()
  );
  switch (brainfuckSyntaxStatus) {
    case "OK":
      return "OK";
    case "Too many close bracket!":
      return "Too many 髙槗!";
    case "Too many open bracket!":
      return "Too many 高槗!";
    case "bracket mismatch!":
      return "bracket mismatch!";
  }
}
