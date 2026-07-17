"use client";
import { useEffect, useRef, useState } from "react";

const COMMANDS: Record<string, string[]> = {
  whoami: [
    "Hasta Budiawan",
    "A software engineer focused on fullstack development. I build end-to-end web apps — from database, API, to a UI people enjoy using.",
  ],
  portfolio: [
    "1. inventory & stock management system — laravel",
    "2. e-commerce marketplace backend — node.js + postgresql",
    "",
    "type 'contact' for links to live demos / repos",
  ],
  experience: [
    "work history:",
    "Dec 2025 - Now  IT Programmer, PT Cipta Kesehatan Mandiri",
    "Sep 2022 - Jun 2025  IT Programmer, Rumah Sakit Qadr",
  ],
  skills: [
    "Backend & database: Laravel, Node.js, GO, Express, MySQL, PostgreSQL",
    "Frontend: React, Next.js, Vuejs, Tailwind CSS",
    "Tools & infra: Git, Docker, WSL/Linux",
  ],
  contact: [
    "email:     hastabudiawan7@gmail.com",
    "github:    github.com/hastabdwn",
    "linkedin:  linkedin.com/in/hasta-budiawan/",
  ],
};

const HELP_LINES = [
  "available commands:",
  ...Object.entries({
    whoami: "who is this guy",
    portfolio: "live projects I shipped",
    experience: "work history",
    skills: "tools I run in prod",
    contact: "how to reach me",
    clear: "wipe the screen",
  }).map(([cmd, desc]) => `  ${cmd.padEnd(12)} ${desc}`),
];

type Line =
  | { kind: "command"; text: string }
  | { kind: "output"; text: string };

const BOOT_LINES: Line[] = [
  { kind: "command", text: "whoami" },
  { kind: "output", text: "Hasta Budiawan, Tangerang, ID" },
  { kind: "command", text: "stack" },
  { kind: "output", text: "fullstack / backend / frontend" },
];

export default function TerminalCard() {
  const [history, setHistory] = useState<Line[]>(BOOT_LINES);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [history]);

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    const echoed: Line = { kind: "command", text: cmd };

    if (cmd === "help") {
      setHistory((h) => [
        ...h,
        echoed,
        ...HELP_LINES.map((text): Line => ({ kind: "output", text })),
      ]);
      return;
    }

    const output = COMMANDS[cmd];
    if (output) {
      setHistory((h) => [
        ...h,
        echoed,
        ...output.map((text): Line => ({ kind: "output", text })),
      ]);
    } else {
      setHistory((h) => [
        ...h,
        echoed,
        {
          kind: "output",
          text: `command not found: ${cmd} — type 'help' for a list`,
        },
      ]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    runCommand(input);
    setInput("");
  }

  return (
    <div className="relative w-full max-w-md shrink-0">
      <div className="absolute inset-0 rounded-full translate-y-4"></div>
      <div
        className="relative border border-border rounded-xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-2 duration-500 cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="bg-muted/50 px-4 py-3 flex items-center justify-between border-b border-border/50 font-mono text-xs text-muted-foreground">
          <span>hasta@prod:~</span>
          <span>zsh</span>
        </div>

        <div
          ref={bodyRef}
          className="p-5 md:p-6 font-mono text-sm md:text-base leading-relaxed text-left h-80 overflow-y-auto overflow-x-hidden"
        >
          {history.map((line, i) =>
            line.kind === "command" ? (
              <p key={i} className="flex gap-2">
                <span className="text-green-400 select-none shrink-0">$</span>
                <span className="text-foreground font-semibold break-words min-w-0">{line.text}</span>
              </p>
            ) : (
              <p key={i} className="text-muted-foreground whitespace-pre-wrap break-words">
                {line.text || "\u00A0"}
              </p>
            )
          )}

          <form onSubmit={handleSubmit} className="flex gap-2 mt-1">
            <span className="text-green-400 select-none shrink-0">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              placeholder="help"
              className="flex-1 min-w-0 bg-transparent outline-none text-foreground font-mono caret-foreground"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
