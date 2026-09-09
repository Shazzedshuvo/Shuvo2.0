'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, Sparkles, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '@/lib/data/siteConfig';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-[#00bf8f] font-bold">✨ Shazzed Shuvo v2.0 Interactive CLI Environment initialized.</p>
          <p className="text-[var(--muted)]">Type <span className="text-[#1cd8d2] font-semibold">help</span> to explore available commands or <span className="text-[#00bf8f] font-semibold">projects</span> to inspect my code.</p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, isMinimized, history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="grid grid-cols-2 gap-2 text-xs py-1">
            <div><span className="text-[#00bf8f] font-bold">about</span> - Summary bio & mission</div>
            <div><span className="text-[#00bf8f] font-bold">skills</span> - Tech stack breakdown</div>
            <div><span className="text-[#00bf8f] font-bold">projects</span> - Featured live applications</div>
            <div><span className="text-[#00bf8f] font-bold">experience</span> - Professional work history</div>
            <div><span className="text-[#00bf8f] font-bold">education</span> - Academic background</div>
            <div><span className="text-[#00bf8f] font-bold">contact</span> - Direct email & phone</div>
            <div><span className="text-[#00bf8f] font-bold">sudo hire</span> - 🚀 Instant recruit trigger</div>
            <div><span className="text-[#00bf8f] font-bold">clear</span> - Flush terminal window</div>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="text-xs space-y-1 text-[var(--muted)]">
            <p className="text-[var(--foreground)] font-semibold">{siteConfig.name} - {siteConfig.title}</p>
            <p>{siteConfig.bio}</p>
            <p className="text-[#00bf8f]">📍 {siteConfig.location} • Available worldwide</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="text-xs space-y-1 text-[var(--muted)]">
            <p><span className="text-[#1cd8d2] font-semibold">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS, Three.js, Framer Motion, Redux</p>
            <p><span className="text-[#00bf8f] font-semibold">Backend:</span> Node.js, Express.js, MongoDB, Mongoose, REST APIs, JWT Auth</p>
            <p><span className="text-[#00f5a0] font-semibold">CMS / Commerce:</span> WordPress, Shopify, Wix Studio, Squarespace, Framer</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="text-xs space-y-1.5 py-1">
            <p>1. <a href="https://techlearning-website.vercel.app/" target="_blank" rel="noreferrer" className="text-[#00bf8f] underline font-semibold">TechLearning Platform</a> - Next.js 15, React 19, Tailwind</p>
            <p>2. <a href="https://elatronix-store420.netlify.app/" target="_blank" rel="noreferrer" className="text-[#1cd8d2] underline font-semibold">Elatronix Store</a> - Full-Stack MERN E-Commerce</p>
            <p>3. <a href="https://shazzedshuvo.vercel.app/" target="_blank" rel="noreferrer" className="text-[#00f5a0] underline font-semibold">NovaAI 3D Platform</a> - Next.js, WebGL & Three.js</p>
          </div>
        );
        break;

      case 'experience':
        response = (
          <div className="text-xs space-y-1 text-[var(--muted)]">
            <p className="text-[var(--foreground)] font-semibold">Web Developer @ softvence.agency</p>
            <p className="text-[#00bf8f]">January 2026 – Present (1+ Year)</p>
            <p>Engineering modern web apps, high-converting eCommerce stores, and headless CMS platforms.</p>
          </div>
        );
        break;

      case 'education':
        response = (
          <div className="text-xs space-y-1.5 text-[var(--muted)]">
            <p>🎓 <span className="text-[var(--foreground)] font-semibold">Uttara University</span>: B.Sc. in Computer Science (2025–Present)</p>
            <p>🎓 <span className="text-[var(--foreground)] font-semibold">Thakurgaon Polytechnic</span>: Diploma in Engineering (2020–2024)</p>
            <p>🎓 <span className="text-[var(--foreground)] font-semibold">Panchagarh Tech School</span>: SSC in Science (2018–2020)</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs space-y-1">
            <p>📧 Email: <a href={`mailto:${siteConfig.email}`} className="text-[#00bf8f] underline">{siteConfig.email}</a></p>
            <p>📱 Phone / WhatsApp: <a href={`tel:${siteConfig.phone}`} className="text-[#1cd8d2] underline">{siteConfig.phone}</a></p>
            <p>🌐 GitHub: <a href={siteConfig.socialLinks.github} target="_blank" rel="noreferrer" className="text-[#00f5a0] underline">{siteConfig.socialLinks.github}</a></p>
          </div>
        );
        break;

      case 'sudo hire':
      case 'hire':
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 }
        });
        response = (
          <div className="text-xs space-y-1 text-[#00bf8f] font-semibold">
            <p>🎉 Permission granted! Shazzed Shuvo is ready to build incredible products for you.</p>
            <p className="text-[var(--foreground)]">Direct Line: {siteConfig.phone} | {siteConfig.email}</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        response = (
          <p className="text-xs text-red-400">
            command not recognized: &quot;{trimmed}&quot;. Type <span className="text-[#00bf8f] underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  return (
    <>
      {/* Floating launcher trigger */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full glass-panel border border-[#00bf8f]/40 bg-[#05080c]/90 px-4 py-2.5 text-xs font-semibold text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,191,143,0.25)] hover:border-[#00bf8f] hover:scale-105 transition-all duration-300 group cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bf8f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00bf8f]"></span>
          </span>
          <TerminalIcon className="h-4 w-4 text-[#00bf8f] group-hover:rotate-12 transition-transform" />
          <span className="font-mono">shazzed.cli</span>
          <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded bg-[#00bf8f]/15 text-[#00bf8f]">Terminal</span>
        </button>
      )}

      {/* Terminal Modal Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ${
            isMinimized
              ? 'bottom-6 right-6 w-80 h-12'
              : 'bottom-6 right-4 sm:right-6 w-[92vw] sm:w-[500px] h-[360px] sm:h-[420px]'
          } rounded-2xl overflow-hidden glass-card border border-[#00bf8f]/40 shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col font-mono text-sm`}
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#03060a]/90 border-b border-[#00bf8f]/20 select-none">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80 cursor-pointer hover:opacity-100 opacity-80" onClick={() => setIsOpen(false)} />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80 cursor-pointer hover:opacity-100 opacity-80" onClick={() => setIsMinimized(!isMinimized)} />
              <div className="h-3 w-3 rounded-full bg-green-500/80 cursor-pointer hover:opacity-100 opacity-80" onClick={() => setIsMinimized(false)} />
              <span className="ml-2 text-xs font-semibold text-[var(--muted)] flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-[#00bf8f]" /> shazzed@portfolio:~
              </span>
            </div>

            <div className="flex items-center gap-2 text-[var(--muted)]">
              <button
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          {!isMinimized && (
            <div
              className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#05080c]/95"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                    <span className="text-[#00bf8f] font-semibold">shazzed@portfolio:~$</span>
                    <span className="text-[var(--foreground)] font-medium">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}

              {/* Live prompt input */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2 text-xs pt-1">
                <span className="text-[#00bf8f] font-semibold shrink-0">shazzed@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type a command... (e.g. help)"
                  className="flex-1 bg-transparent text-[var(--foreground)] outline-none caret-[#00bf8f] border-none p-0 focus:ring-0 text-xs"
                />
                <button type="submit" className="text-[var(--muted)] hover:text-[#00bf8f] transition-colors">
                  <CornerDownLeft className="h-3 w-3" />
                </button>
              </form>
              <div ref={bottomRef} />
            </div>
          )}
        </div>
      )}
    </>
  );
}
