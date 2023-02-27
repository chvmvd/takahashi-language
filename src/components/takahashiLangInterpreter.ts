import { type Memory } from "./brainfuck-playground/src/components/brainfuckDefinitions";
import brainfuckInterpreter from "./brainfuck-playground/src/components/brainfuckInterpreter";
import takahashiLangParser from "./takahashiLangParser";

/**
 * interpret takahashi language source code
 * @param sourceCode source code
 * @param input input
 * @returns output, memory state and pointer state
 */
export default function takahashiLangInterpreter(
  sourceCode: string,
  input: string
): { output: string; memory: Memory; pointer: number } {
  const brainfuckCommands = takahashiLangParser(sourceCode);
  return brainfuckInterpreter(brainfuckCommands.join(), input);
}
