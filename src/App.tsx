import React, { useState, useEffect } from "react";
import {
  availableTakahashiLangCommands,
  type TakahashiLangSyntaxStatus,
} from "./components/takahashiLangDefinitions";
import takahashiLangInterpreter from "./components/takahashiLangInterpreter";
import takahashiLangSyntaxChecker from "./components/takahashiLangSyntaxChecker";
import {
  type Memory,
  defaultMemory,
} from "./components/brainfuck-playground/src/components/brainfuckDefinitions";
import { Toolbar, Box, Stack } from "@mui/material";
import {
  AppBarComponent,
  ProgramComponent,
  InputComponent,
  RunButtonComponent,
  OutputComponent,
  MemoryComponent,
} from "./components/brainfuck-playground/src/components/UIComponents";

function App(): JSX.Element {
  const [sourceCode, setSourceCode] = useState<string>("");
  const [syntaxStatus, setSyntaxStatus] =
    useState<TakahashiLangSyntaxStatus>("OK");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [memory, setMemory] = useState<Memory>(defaultMemory);
  const [pointer, setPointer] = useState<number>(0);
  useEffect(() => {
    setSyntaxStatus(takahashiLangSyntaxChecker(sourceCode));
  }, [sourceCode]);
  return (
    <>
      <AppBarComponent
        title="たかはし言語(Takahashi Language) Playground"
        GitHubUrl="https://github.com/chvmvd/takahashi-language/"
        availableCommands={availableTakahashiLangCommands}
      />
      <Toolbar />
      <Box sx={{ m: 2 }}>
        <Stack spacing={2}>
          <Stack spacing={1}>
            <ProgramComponent<TakahashiLangSyntaxStatus>
              syntaxStatus={syntaxStatus}
              sourceCode={sourceCode}
              setSourceCode={setSourceCode}
            />
            <Stack direction="row" spacing={2} alignItems="flex-end">
              <Box flexGrow={1}>
                <InputComponent input={input} setInput={setInput} />
              </Box>
              <RunButtonComponent
                onClick={() => {
                  if (syntaxStatus === "OK") {
                    const result = takahashiLangInterpreter(sourceCode, input);
                    setOutput(result.output);
                    setMemory(result.memory);
                    setPointer(result.pointer);
                  }
                }}
              />
            </Stack>
          </Stack>
          <Stack spacing={1}>
            <OutputComponent output={output} />
            <MemoryComponent memory={memory} pointer={pointer} />
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default App;
