import React, {
  useState,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react";
import { type TakahashiLangSyntaxStatus } from "./components/takahashiLangDefinitions";
import takahashiLangSyntaxChecker from "./components/takahashiLangSyntaxChecker";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

function AppBarComponent(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" component="h1" flexGrow={1}>
            Takahashi Language Playground
          </Typography>
          <IconButton
            color="inherit"
            size="large"
            href="https://chvmvd.github.io/takahashi-language/"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => {
              setOpen(true);
            }}
          >
            <HelpOutlineOutlinedIcon fontSize="inherit" />
          </IconButton>
          <Dialog
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <DialogTitle>Available Commands</DialogTitle>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Command</TableCell>
                    <TableCell>Meaning</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <code>高橋</code>
                    </TableCell>
                    <TableCell>Increment the data pointer.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>髙橋</code>
                    </TableCell>
                    <TableCell>Decrement the data pointer.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>高𣘺</code>
                    </TableCell>
                    <TableCell>
                      Increment the byte at the data pointer.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>髙𣘺</code>
                    </TableCell>
                    <TableCell>
                      Decrement the byte at the data pointer.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>高𫞎</code>
                    </TableCell>
                    <TableCell>Output the byte at the data pointer.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>髙𫞎</code>
                    </TableCell>
                    <TableCell>
                      Receive one byte from input and store it in the byte at
                      the data pointer.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>高槗</code>
                    </TableCell>
                    <TableCell>
                      If the byte at the data pointer is zero, jump the
                      instruction pointer forward to the command after the
                      matching <code>髙槗</code> command.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <code>髙槗</code>
                    </TableCell>
                    <TableCell>
                      If the byte at the data pointer is nonzero, jump the
                      instruction pointer back to the command after the matching{" "}
                      <code>高槗</code> command.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Dialog>
        </Toolbar>
      </AppBar>
    </>
  );
}

function ProgramComponent({
  syntaxStatus,
  sourceCode,
  setSourceCode,
}: {
  syntaxStatus: TakahashiLangSyntaxStatus;
  sourceCode: string;
  setSourceCode: Dispatch<SetStateAction<string>>;
}): JSX.Element {
  return (
    <>
      <Typography variant="h5" component="h2">
        Program
      </Typography>
      <TextField
        variant="outlined"
        error={syntaxStatus !== "OK"}
        helperText={syntaxStatus === "OK" ? "" : syntaxStatus}
        placeholder="Write your code here."
        multiline
        rows={10}
        fullWidth
        value={sourceCode}
        onChange={(e) => {
          setSourceCode(e.target.value);
        }}
      />
    </>
  );
}

function App(): JSX.Element {
  const [sourceCode, setSourceCode] = useState<string>("");
  const [syntaxStatus, setSyntaxStatus] =
    useState<TakahashiLangSyntaxStatus>("OK");
  useEffect(() => {
    setSyntaxStatus(takahashiLangSyntaxChecker(sourceCode));
  }, [sourceCode]);
  return (
    <>
      <AppBarComponent />
      <Toolbar />
      <ProgramComponent
        syntaxStatus={syntaxStatus}
        sourceCode={sourceCode}
        setSourceCode={setSourceCode}
      />
    </>
  );
}

export default App;
