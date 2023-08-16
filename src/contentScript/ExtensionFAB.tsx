import React from 'react'

export default function ExtensionFAB() {
  return (
    <div>
      <h1>Keywords</h1>
    </div>
  );
}

export function ExtensionFAB2() {
  return (
    <div>
      <h1>Keywords2</h1>
    </div>
  );
}

export function AskAI() {
  const askButton = {
      height : '30px',
      width: '60px',
      display: 'inline-flex',
      padding: 'var(--space-s, 4px) var(--space-m, 4px)',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'var(--space-xs, 4px)',
      borderRadius: 'var(--space-xl, 64px)',
      background: 'var(--color-blue-blue-500, #0697E0)',
  };
  const askText = {
    color: 'white',
  }
  return (
    <div style={askButton} onClick={() => console.log("hello click")}>
      <p style={askText}>Ask AI</p>
    </div>
  );
}

export function generating() {
  const generate = {
      height : '30px',
      width: '60px',
      display: 'inline-flex',
      padding: 'var(--space-s, 4px) var(--space-m, 4px)',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'var(--space-xs, 4px)',
      borderRadius: 'var(--space-xl, 64px)',
      background: 'var(--color-blue-blue-500, #0697E0)',
  };
  const genText = {
    color: 'white',
  }
  return (
    <div style={generate} onClick={() => console.log("generating")}>
      <p style={genText}>Generating</p>
    </div>
  );
}

