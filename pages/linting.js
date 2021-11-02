import { useMemo } from 'react';
import { basicSetup } from '@codemirror/basic-setup';
import { oneDark } from '@codemirror/theme-one-dark';
import { esLint, javascript } from '@codemirror/lang-javascript';
import CodeMirror from 'rodemirror';
import { linter, openLintPanel } from '@codemirror/lint';
import Linter from 'eslint4b';

export default function Home() {
  const esLintLinter = useMemo(() => esLint(new Linter()), []);

  const extensions = useMemo(
    () => [basicSetup, oneDark, javascript(), linter(esLintLinter)],
    [esLintLinter]
  );

  const value = `const a = 5
a = 10
console.log(a)`;

  return (
    <CodeMirror
      value={value}
      extensions={extensions}
      // open lint panel at start
      onEditorViewChange={(editorView) => openLintPanel(editorView)}
    />
  );
}
