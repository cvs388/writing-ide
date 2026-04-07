"use client";

import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Home() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>[p1] Start writing here...</p>",
  });

  const runCommand = async () => {
    const { from, to } = editor.state.selection;
    const selectedText = editor.state.doc.textBetween(from, to);

    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ command, text: selectedText }),
    });

    const data = await res.json();
    setOutput(data.result);

    editor.chain().focus().deleteSelection().insertContent(data.result).run();
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      <div style={{ flex: 2, padding: 20, borderRight: "1px solid #ccc" }}>
        <h3>Document</h3>
        <EditorContent editor={editor} />
      </div>

      <div style={{ flex: 1, padding: 20, background: "#111", color: "#0f0" }}>
        <h3>Terminal</h3>

        <textarea
          style={{
            width: "100%",
            height: 100,
            background: "#000",
            color: "#0f0"
          }}
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />

        <button onClick={runCommand}>Run</button>

        <pre>{output}</pre>
      </div>
    </div>
  );
}
