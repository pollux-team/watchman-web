import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.05] bg-[#050505]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/watchman-logo.svg"
                alt="Watchman Logo"
                width={28}
                height={28}
                className="h-7 w-auto"
              />
              <span className="font-bold tracking-[0.2em] text-white text-sm">
                WATCHMAN
              </span>
            </div>
            <p className="text-neutral-400 text-sm max-w-xs">
              A lightweight, local-first network monitor for Windows and Mac.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-center mt-6 md:mt-0">
            <a href="/#privacy" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy</a>
            <span className="text-neutral-800 hidden sm:inline">&middot;</span>
            <a href="https://github.com/rayhan138/Watchman/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white text-sm transition-colors">License</a>
            <span className="text-neutral-800 hidden sm:inline">&middot;</span>
            <a href="https://github.com/rayhan138/Watchman" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white text-sm transition-colors">GitHub</a>
            <span className="text-neutral-800 hidden sm:inline">&middot;</span>
            <a href="https://github.com/rayhan138/Watchman/releases" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white text-sm transition-colors">Releases</a>
            <span className="text-neutral-800 hidden sm:inline">&middot;</span>
            <a href="https://github.com/rayhan138/Watchman/issues/new" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white text-sm transition-colors">Report a Bug</a>
            <span className="text-neutral-800 hidden sm:inline">&middot;</span>
            <a
              href="https://tally.so/r/81WZrx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 text-xs font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.05)] whitespace-nowrap"
            >
              Submit Feedback
            </a>
          </div>
        </div>

        {/* BlinkEye Promo Card */}
        <div className="mt-12 bg-[#0c0c0d] border border-white/[0.05] rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-white/[0.08] transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 max-w-4xl">
            <div className="shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-14 sm:h-14 select-none drop-shadow-[0_0_12px_rgba(255,77,90,0.22)]">
                <defs>
                  <filter id="eye-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.18" />
                  </filter>
                </defs>

                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes logo-blink {
                    0%, 8%, 18%, 26%, 100% { transform: scale(1, 1); }
                    4%, 22% { transform: scale(1.1, 0); }
                  }
                `}} />

                {/* Outer Organic Red Blob */}
                <path 
                  d="M 50 8 C 72 6, 92 24, 94 49 C 96 74, 80 92, 50 92 C 20 92, 4 74, 6 49 C 8 24, 28 10, 50 8 Z" 
                  fill="#ff4d5a" 
                />

                {/* Blinking Eyeball Group */}
                <g 
                  className="animate-[logo-blink_2.5s_cubic-bezier(0.25,0.8,0.25,1)_infinite]"
                  style={{ transformOrigin: '50px 50px' }}
                >
                  {/* White Eyeball with Shadow */}
                  <path 
                    d="M 50 22 C 66 20, 80 34, 81 51 C 82 68, 71 81, 50 81 C 29 81, 18 68, 19 51 C 20 34, 34 24, 50 22 Z" 
                    fill="#ffffff" 
                    filter="url(#eye-shadow)"
                  />
                  
                  {/* Black Pupil */}
                  <circle cx="44" cy="54" r="18" fill="#0c0c0d" />
                  
                  {/* White Highlight */}
                  <circle cx="37" cy="46" r="4.5" fill="#ffffff" />
                </g>
              </svg>
            </div>
            <div>
              <h3 className="font-play font-bold text-white text-base mb-1.5 tracking-wide flex items-center gap-2">
                Also try BlinkEye
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Prevent eye strain, improve posture, and stay productivity with Blink Eye!{" "}
                <span className="text-red-400 font-semibold">Follow the 20-20-20 rule</span> with smart break
                reminders, screen time tracking, and a built-in task manager—helping you work smarter and
                feel better every day.
              </p>
            </div>
          </div>
          <a
            href="https://blinkeye.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-bold tracking-wider text-xs flex items-center gap-1.5 whitespace-nowrap self-end md:self-center transition-colors group"
          >
            VISIT BLINKEYE.APP
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-xs">
            © 2026 Watchman. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/watchmanapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/yourswatchman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="X (Twitter) Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/RSrx4zs2Hh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Discord Server"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.078.078 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/rayhan138/Watchman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
