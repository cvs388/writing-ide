"use client";

import { useState } from "react";

export default function Home() {
  const [command, setCommand] = useState("");

  return (
    <div style={styles.app}>
      <div style={styles.topBar}>
        <div style={styles.brand}>Composition Workflow</div>
        <div style={styles.reqCardGood}>R1 Problem<br />Approved</div>
        <div style={styles.reqCardWarn}>R2 Solution<br />Awaiting Approval</div>
        <div style={styles.reqCardBlue}>R3 Evidence<br />Ready</div>
        <div style={styles.reqCardPurple}>R4 Recommendation<br />Needs Info</div>
        <div style={styles.reqCardLocked}>Final Check<br />Locked</div>
        <div style={styles.score}>84%</div>
      </div>

      <div style={styles.main}>
        <aside style={styles.sources}>
          <h3>Sources <button style={styles.smallBtn}>+</button></h3>
          <Source name="assignment.pdf" role="Authoritative" active />
          <Source name="rubric.docx" role="Requirements" active />
          <Source name="notes.txt" role="Reference" active />
          <Source name="prior_paper.docx" role="Style Profile" active />
          <Source name="research.pdf" role="Evidence" />

          <h3 style={{ marginTop: 28 }}>Requirements <button style={styles.smallBtn}>+</button></h3>
          <Req name="R1 Explain the problem" status="Approved" />
          <Req name="R2 Recommend solution" status="Awaiting Approval" />
          <Req name="R3 Support with evidence" status="Ready" />
          <Req name="R4 Final recommendation" status="Needs Info" />
        </aside>

        <section style={styles.document}>
          <div style={styles.tab}>composition.md</div>
          <h2>R2: Describe the recommended solution</h2>

          <p style={styles.line}><span style={styles.lineNo}>L42 [p8]</span>A well-designed solution should address the root cause while remaining feasible, scalable, and measurable.</p>

          <div style={styles.proposal}>
            <p><span style={styles.removed}>The proposed solution involves a comprehensive platform that centralizes data and improves communication across all teams.</span> <span style={styles.added}>The proposed solution is a centralized platform that streamlines data management and improves communication across teams.</span></p>
            <div>
              <button style={styles.accept}>Accept</button>
              <button style={styles.reject}>Reject</button>
              <button style={styles.action}>Edit</button>
              <button style={styles.action}>Alternative</button>
              <button style={styles.action}>Why</button>
            </div>
          </div>

          <p style={styles.line}><span style={styles.lineNo}>L51 [p9]</span>This approach reduces redundancy, increases transparency, and supports faster decision-making.</p>

          <div style={styles.pending}>
            <p><span style={styles.removed}>It also ensures that all stakeholders have access to the same information in real time.</span> <span style={styles.pendingText}>It ensures all stakeholders have access to the same information in real time, improving alignment and accountability.</span></p>
            <div>
              <button style={styles.accept}>Accept</button>
              <button style={styles.reject}>Reject</button>
              <button style={styles.action}>Edit</button>
              <button style={styles.action}>Alternative</button>
              <button style={styles.action}>Why</button>
            </div>
          </div>

          <h2>R3: Support with source evidence</h2>
          <p style={styles.muted}>[Content will be generated when ready]</p>

          <div style={styles.statusBar}>Words: 1,248 | Paragraphs: 28 | ASCII OK | No Unicode | No Em Dashes</div>
        </section>

        <div style={styles.minimap}>
          <div style={styles.green}></div>
          <div style={styles.red}></div>
          <div style={styles.yellow}></div>
          <div style={styles.blue}></div>
        </div>

        <aside style={styles.terminal}>
          <h3>Terminal</h3>
          <pre style={styles.termText}>{`> rev p2 shorter clearer
✓ Proposed revision for paragraph 2

> tone p3 more direct
✓ Proposed revision for paragraph 3

> check requirement R2
✓ R2 is partially complete
- Solution described
- Needs more on implementation`}</pre>

          <textarea
            style={styles.input}
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="type command..."
          />

          <h3>AI Context</h3>
          <p>R2: Describe the recommended solution</p>
          <p style={styles.muted}>Sources: assignment.pdf, rubric.docx, notes.txt</p>

          <h3>Style Profile</h3>
          <p style={styles.muted}>Voice: analytical, clear, direct</p>
        </aside>
      </div>
    </div>
  );
}

function Source({ name, role, active }) {
  return (
    <div style={styles.item}>
      <input type="checkbox" checked={active} readOnly />
      <div>
        <div>{name}</div>
        <small>{role}</small>
      </div>
    </div>
  );
}

function Req({ name, status }) {
  return (
    <div style={styles.reqItem}>
      <div>{name}</div>
      <small>{status}</small>
    </div>
  );
}

const styles = {
  app: { background: "#0f141a", color: "#e6edf3", minHeight: "100vh", fontFamily: "Arial, sans-serif" },
  topBar: { display: "flex", alignItems: "center", gap: 12, padding: 14, borderBottom: "1px solid #30363d", background: "#161b22" },
  brand: { width: 180, textTransform: "uppercase", fontSize: 13, color: "#c9d1d9" },
  reqCardGood: { padding: 12, minWidth: 150, background: "#111d13", border: "1px solid #238636", borderRadius: 8, color: "#7ee787" },
  reqCardWarn: { padding: 12, minWidth: 170, background: "#241a0a", border: "1px solid #d29922", borderRadius: 8, color: "#f2cc60" },
  reqCardBlue: { padding: 12, minWidth: 140, background: "#0d1d2c", border: "1px solid #1f6feb", borderRadius: 8, color: "#79c0ff" },
  reqCardPurple: { padding: 12, minWidth: 190, background: "#1b1428", border: "1px solid #8957e5", borderRadius: 8, color: "#d2a8ff" },
  reqCardLocked: { padding: 12, minWidth: 140, background: "#161b22", border: "1px solid #30363d", borderRadius: 8, color: "#8b949e" },
  score: { marginLeft: "auto", fontSize: 28, border: "2px solid #7ee787", borderRadius: "50%", width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center" },
  main: { display: "grid", gridTemplateColumns: "260px 1fr 70px 360px", height: "calc(100vh - 101px)" },
  sources: { borderRight: "1px solid #30363d", padding: 18, background: "#111820", overflow: "auto" },
  document: { padding: 28, overflow: "auto", background: "#0f141a" },
  terminal: { borderLeft: "1px solid #30363d", padding: 18, background: "#111820", overflow: "auto" },
  minimap: { borderLeft: "1px solid #30363d", background: "#0c1117", padding: 12 },
  tab: { color: "#79c0ff", marginBottom: 30 },
  line: { lineHeight: 1.6, fontSize: 17 },
  lineNo: { color: "#8b949e", marginRight: 12, fontSize: 13 },
  proposal: { borderLeft: "3px solid #3fb950", padding: 16, margin: "24px 0", background: "#111d13", borderRadius: 6 },
  pending: { borderLeft: "3px solid #d29922", padding: 16, margin: "24px 0", background: "#241a0a", borderRadius: 6 },
  removed: { color: "#ff7b72", textDecoration: "line-through" },
  added: { color: "#7ee787" },
  pendingText: { color: "#f2cc60" },
  accept: { marginRight: 8, padding: "8px 14px", background: "#112d18", color: "#7ee787", border: "1px solid #238636", borderRadius: 6 },
  reject: { marginRight: 8, padding: "8px 14px", background: "#2d1111", color: "#ff7b72", border: "1px solid #da3633", borderRadius: 6 },
  action: { marginRight: 8, padding: "8px 14px", background: "#21262d", color: "#c9d1d9", border: "1px solid #30363d", borderRadius: 6 },
  item: { display: "flex", gap: 10, marginBottom: 16, alignItems: "center" },
  reqItem: { marginBottom: 14, padding: 10, background: "#161b22", border: "1px solid #30363d", borderRadius: 6 },
  smallBtn: { float: "right", background: "#21262d", color: "#c9d1d9", border: "1px solid #30363d", borderRadius: 4 },
  muted: { color: "#8b949e" },
  statusBar: { position: "sticky", bottom: 0, paddingTop: 20, color: "#8b949e", background: "#0f141a" },
  termText: { color: "#7ee787", whiteSpace: "pre-wrap", lineHeight: 1.6 },
  input: { width: "100%", height: 70, background: "#0d1117", color: "#7ee787", border: "1px solid #30363d", borderRadius: 6, padding: 10 },
  green: { height: 45, background: "#238636", marginBottom: 8, borderRadius: 4 },
  red: { height: 60, background: "#da3633", marginBottom: 8, borderRadius: 4 },
  yellow: { height: 50, background: "#d29922", marginBottom: 8, borderRadius: 4 },
  blue: { height: 90, border: "2px solid #1f6feb", marginTop: 40, borderRadius: 4 }
};
