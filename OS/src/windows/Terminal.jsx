import React, { useRef } from "react";
import MacWindow from "./MacWindow";
import "./Terminal.scss";
import TerminalEmulator from "react-console-emulator";

const commands = {
  echo: {
    description: "Prints text to the terminal",
    usage: "echo <text>",
    fn: (...args) => args.join(" "),
  },
  ls: {
    description: "List directory contents",
    usage: "ls [path]",
    fn: () => {
      return "Applications  Desktop  Documents  Downloads  Library  Movies  Music  Pictures  Public";
    },
  },
  pwd: {
    description: "Print working directory",
    usage: "pwd",
    fn: () => "/Users/shivanshrathore",
  },
  whoami: {
    description: "Print current user",
    usage: "whoami",
    fn: () => "shivanshrathore",
  },
  date: {
    description: "Print current date and time",
    usage: "date",
    fn: () => new Date().toString(),
  },
  uname: {
    description: "Print system information",
    usage: "uname [-a]",
    fn: () =>
      "Darwin SHIVANSHs-MacBook-Air-2 23.0.0 Darwin Kernel Version 23.0.0 arm64",
  },
  hostname: {
    description: "Print hostname",
    usage: "hostname",
    fn: () => "SHIVANSHs-MacBook-Air-2.local",
  },
  help: {
    description: "Print available commands",
    usage: "help",
    fn: () => {
      const cmdList = Object.entries(commands)
        .map(([name, cmd]) => `${name} - ${cmd.description}`)
        .join("\n");
      return `Available commands:\n\n${cmdList}`;
    },
  },
  clear: {
    description: "Clear the terminal",
    usage: "clear",
    fn: () => {
      return "clear";
    },
  },
  cat: {
    description: "Print file contents",
    usage: "cat <filename>",
    fn: (...args) => {
      if (args.length === 0) return "cat: missing operand";
      return `Contents of ${args[0]}...`;
    },
  },
  mkdir: {
    description: "Create directory",
    usage: "mkdir <dirname>",
    fn: (...args) => {
      if (args.length === 0) return "mkdir: missing operand";
      return `Directory '${args[0]}' created`;
    },
  },
  rmdir: {
    description: "Remove directory",
    usage: "rmdir <dirname>",
    fn: (...args) => {
      if (args.length === 0) return "rmdir: missing operand";
      return `Directory '${args[0]}' removed`;
    },
  },
  touch: {
    description: "Create empty file",
    usage: "touch <filename>",
    fn: (...args) => {
      if (args.length === 0) return "touch: missing file operand";
      return `File '${args[0]}' created`;
    },
  },
  rm: {
    description: "Remove file",
    usage: "rm <filename>",
    fn: (...args) => {
      if (args.length === 0) return "rm: missing operand";
      return `File '${args[0]}' removed`;
    },
  },
  cp: {
    description: "Copy file",
    usage: "cp <source> <dest>",
    fn: (...args) => {
      if (args.length < 2) return "cp: missing file operand";
      return `Copied '${args[0]}' to '${args[1]}'`;
    },
  },
  mv: {
    description: "Move file",
    usage: "mv <source> <dest>",
    fn: (...args) => {
      if (args.length < 2) return "mv: missing file operand";
      return `Moved '${args[0]}' to '${args[1]}'`;
    },
  },
  grep: {
    description: "Search for pattern in file",
    usage: "grep <pattern> <file>",
    fn: (...args) => {
      if (args.length < 2) return "grep: missing pattern";
      return `Searching for '${args[0]}' in '${args[1]}'...`;
    },
  },
  find: {
    description: "Search for files",
    usage: "find <path> -name <pattern>",
    fn: (...args) => {
      return "Searching...";
    },
  },
  ping: {
    description: "Ping a host",
    usage: "ping <host>",
    fn: (...args) => {
      if (args.length === 0) return "ping: usage: ping <host>";
      return `PING ${args[0]} (${args[0]}): 56 data bytes\n64 bytes from ${args[0]}: icmp_seq=0 ttl=64 time=0.041 ms\n64 bytes from ${args[0]}: icmp_seq=1 ttl=64 time=0.042 ms`;
    },
  },
  curl: {
    description: "Transfer data from URL",
    usage: "curl <url>",
    fn: (...args) => {
      if (args.length === 0)
        return "curl: try 'curl --help' for more information";
      return `Fetching ${args[0]}...`;
    },
  },
  git: {
    description: "Git version control",
    usage: "git <command>",
    fn: (...args) => {
      if (args.length === 0) return "git: usage: git <command>";
      return `git: '${args[0]}' is not a git command.`;
    },
  },
  npm: {
    description: "Node package manager",
    usage: "npm <command>",
    fn: (...args) => {
      if (args.length === 0) return "npm: try 'npm help' for more information";
      return `Running npm ${args.join(" ")}...`;
    },
  },
  node: {
    description: "Node.js runtime",
    usage: "node [script.js]",
    fn: (...args) => {
      if (args.length === 0)
        return 'Welcome to Node.js v19.0.0.\nType ".help" for more information.';
      return `Running ${args[0]}...`;
    },
  },
  python: {
    description: "Python interpreter",
    usage: "python [script.py]",
    fn: (...args) => {
      if (args.length === 0) return "Python 3.11.0";
      return `Running ${args[0]}...`;
    },
  },
  brew: {
    description: "Homebrew package manager",
    usage: "brew <command>",
    fn: (...args) => {
      if (args.length === 0) return "brew: usage: brew <command>";
      return "Homebrew is running...";
    },
  },
  top: {
    description: "Display running processes",
    usage: "top",
    fn: () => {
      return `Processes: 156 total, 2 running, 154 sleeping
  CPU: 12.3% user, 5.2% system, 82.5% idle
  Mem: 8.2 GB used, 3.8 GB free`;
    },
  },
  df: {
    description: "Display disk usage",
    usage: "df",
    fn: () => {
      return `Filesystem    512-blocks      Used Available Capacity  Mounted on
/dev/disk1s1     490566720  234567890  255998830    48%    /
/dev/disk1s2     490566720  123456789  367109931    25%    /System/Volumes/Data`;
    },
  },
  ps: {
    description: "Process status",
    usage: "ps",
    fn: () => {
      return `  PID TTY          TIME CMD
    1 ??         0:00.02 /sbin/init
  512 ??         0:01.23 /usr/sbin/CoreStorageAgent
 1024 ttys000    0:00.05 -bash`;
    },
  },
  env: {
    description: "Print environment variables",
    usage: "env",
    fn: () => {
      return `USER=shivanshrathore
HOME=/Users/shivanshrathore
SHELL=/bin/zsh
PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
TERM=xterm-256color
LANG=en_US.UTF-8`;
    },
  },
  exit: {
    description: "Exit the terminal",
    usage: "exit",
    fn: () => {
      return "exit";
    },
  },
};

const TerminalApp = (pop) => {
  const terminalRef = useRef(null);

  const welcomeMessage = (
    <div className="welcome-message">
      <pre className="ascii-art">{` WELCOME TO SHIVANSH's TERMINAL `}</pre>
      <div className="version-info">
        macOS Terminal [Version 1.0.0] (c) 2024 Apple Inc. All rights reserved.
      </div>
      <div className="startup-info">
        Last login: {new Date().toLocaleString()} on ttys000
      </div>
      <br />
    </div>
  );

  return (
    <MacWindow
      width={800}
      height={500}
      title="Terminal"
      Zindex={pop.Index.Terminal}
      setIndex={pop.setIndex}
      setOpenWindows={pop.setOpenWindows}
      openWindows={pop.openWindows}
    >
      <div className="terminal-window">
        <TerminalEmulator
          ref={terminalRef}
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabelColor="#4ade80"
          inputTextColor="#ffffff"
          outputTextColor="#e5e5e5"
          errorTextColor="#ef4444"
          backgroundColor="transparent"
          containerBackgroundColor="rgba(0, 0, 0, 0.3)"
          contentFontFamily="'SF Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace"
          contentFontSize="13px"
          promptLabel={"shivanshRathore:~$"}
          style={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
          }}
          autoFocus={true}
          disableOnProcess={false}
          noSandbox={true}
          noDefaults={true}
        />
      </div>
    </MacWindow>
  );
};

export default TerminalApp;
