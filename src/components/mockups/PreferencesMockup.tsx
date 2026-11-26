"use client";

import { Settings, Moon, Minus, X, LayoutDashboard, BarChart2, AppWindow, Wifi, Wrench } from "lucide-react";

export default function PreferencesMockup() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .watchman-app * { box-sizing: border-box; }
        .watchman-app {
          font-family: var(--font-inter), -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          font-weight: 600;
        }
        .watchman-numbers {
          font-family: var(--font-nunito-sans), var(--font-inter), sans-serif;
        }
        .watchman-mono {
          font-family: var(--font-jetbrains-mono), monospace;
        }
      `}} />

      <div className="watchman-app w-[522px] h-[782px] bg-white border border-[#121212] shadow-2xl flex flex-col text-black overflow-hidden relative select-none shrink-0" style={{ borderRadius: '10px' }}>
        
        {/* Background Blobs (blurred behind modal) */}
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none z-0" style={{ top: '-10%', left: '-20%', background: 'rgba(244, 114, 182, 0.5)' }}></div>
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0" style={{ bottom: '-10%', right: '-20%', background: 'rgba(253, 224, 71, 0.4)' }}></div>
        <div className="absolute w-[250px] h-[250px] rounded-full blur-[120px] pointer-events-none z-0" style={{ top: '40%', left: '30%', background: 'rgba(251, 146, 60, 0.4)' }}></div>

        {/* Fake Top Bar */}
        <div className="flex items-center justify-between px-4 h-[48px] shrink-0 border-b border-[#121212] relative z-0 bg-transparent opacity-50">
          <div className="flex items-center gap-[12px]">
            <div className="w-[22px] h-[22px] flex items-center justify-center relative top-[1px]">
              <img src="/watchman-logo.svg" alt="Watchman" className="w-full h-full object-contain block" />
            </div>
            <span className="font-[700] tracking-[2px] text-[14px] uppercase mt-[1px]">Watchman</span>
          </div>
          <div className="flex items-center gap-[4px] text-black">
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full"><Settings size={14} strokeWidth={1.5} /></div>
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full"><Moon size={14} strokeWidth={1.5} /></div>
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full"><Minus size={14} strokeWidth={1.5} /></div>
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full"><X size={14} strokeWidth={1.5} /></div>
          </div>
        </div>

        {/* Fake Tabs */}
        <div className="flex items-center px-[12px] h-[48px] shrink-0 border-b border-[#121212] gap-[2px] text-[11px] font-[700] tracking-[0.5px] uppercase relative z-0 bg-transparent opacity-50">
          <div className="flex items-center gap-[5px] text-[#121212] px-[12px] py-[6px] rounded-full">
            <LayoutDashboard size={14} strokeWidth={1.5} /> Dashboard
          </div>
        </div>
        
        {/* Fake Footer */}
        <div className="absolute bottom-0 w-full h-[32px] border-t border-[#121212] flex items-center justify-between px-[16px] text-[10px] font-[700] text-[#121212] z-0 bg-transparent uppercase tracking-[1px] opacity-50">
          <div className="flex items-center gap-[8px]">
             <div className="w-[8px] h-[8px] rounded-full bg-[#10b981] border border-[#10b981]"></div>
             <span className="pt-[1px]">Connected</span>
          </div>
          <span className="pt-[1px] watchman-mono">Uptime: 11H 59M</span>
        </div>

        {/* Modal Overlay */}
        <div className="absolute inset-0 bg-black/50 z-[100] flex justify-center items-center p-[24px]">
          
          {/* Modal Container */}
          <div className="bg-white w-[454px] rounded-[24px] shadow-2xl flex flex-col relative px-[28px] py-[16px]">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="text-[16px] font-[800] text-[#111] tracking-[0.5px]">Preferences</h2>
              <button aria-label="Close preferences" className="text-[#111] hover:bg-black/5 p-[4px] -mr-[4px] rounded-full transition-colors"><span className="sr-only">Close preferences</span><X size={16} strokeWidth={2.5}/></button>
            </div>

            {/* Top Toggles */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-[600] text-[#111]">Run on Windows Startup</span>
                <div className="w-[38px] h-[22px] rounded-full bg-[#10b981] relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-[#10b981]">
                  <div className="absolute right-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-[600] text-[#111]">Use Bits/s instead of Bytes/s</span>
                <div className="w-[38px] h-[22px] rounded-full bg-[#d1d5db] relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-[#d1d5db]">
                  <div className="absolute left-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[13px] font-[600] text-[#111]">Hide Hardware Gauges</span>
                <div className="w-[38px] h-[22px] rounded-full bg-[#d1d5db] relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-[#d1d5db]">
                  <div className="absolute left-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[#e5e7eb] w-full my-[16px]"></div>

            {/* Data Limit */}
            <div className="flex items-center justify-between">
              <label htmlFor="monthly-data-limit" className="text-[13px] font-[600] text-[#111] cursor-pointer">Monthly Data Limit (GB)</label>
              <input id="monthly-data-limit" type="text" placeholder="0 = nor" className="w-[84px] h-[36px] rounded-[12px] border border-[#111] px-[8px] text-center text-[11px] text-[#666] outline-none font-mono placeholder-[#666] bg-transparent" />
            </div>

            <div className="h-[1px] bg-[#e5e7eb] w-full my-[16px]"></div>

            {/* High Usage Warnings */}
            <div className="flex flex-col mb-[12px]">
              <span className="text-[13px] font-[800] text-[#111] tracking-[0.5px]">High Usage Warnings</span>
              <span className="text-[11px] font-[600] text-[#666] mt-[4px]">Send me a warning when:</span>
            </div>

            <div className="flex flex-col gap-[14px]">
              {/* Traffic Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <label htmlFor="today-traffic-limit" className="text-[12px] font-[700] text-[#222] cursor-pointer">Today's Traffic</label>
                  <span className="text-[12px] font-[600] text-[#666]">hits</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <input id="today-traffic-limit" type="text" defaultValue="500" className="w-[50px] h-[36px] rounded-[12px] border border-[#111] text-center text-[12px] font-[600] text-[#111] outline-none bg-transparent font-mono" />
                  <div className="relative">
                    <select aria-label="Today's traffic warning unit" className="h-[36px] pl-[10px] pr-[22px] rounded-[12px] border border-[#111] text-[11px] font-[700] text-[#111] outline-none appearance-none bg-transparent cursor-pointer font-mono">
                      <option>MB</option>
                      <option>GB</option>
                    </select>
                    <div className="absolute right-[8px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="8" height="5" viewBox="0 0 10 6" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L5 5L9 1" /></svg>
                    </div>
                  </div>
                  <div className="w-[38px] h-[22px] rounded-full bg-[#d1d5db] relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] ml-[4px] border border-[#d1d5db]">
                    <div className="absolute left-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Memory Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <label htmlFor="memory-limit" className="text-[12px] font-[700] text-[#222] cursor-pointer">Memory Usage</label>
                  <span className="text-[12px] font-[600] text-[#666]">hits</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <input id="memory-limit" type="text" defaultValue="80" className="w-[50px] h-[36px] rounded-[12px] border border-[#111] text-center text-[12px] font-[600] text-[#111] outline-none bg-transparent font-mono" />
                  <span className="text-[12px] font-[700] text-[#111] w-[26px] text-center">%</span>
                  <div className="w-[38px] h-[22px] rounded-full bg-[#10b981] relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] ml-[4px] border border-[#10b981]">
                    <div className="absolute right-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* CPU Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <label htmlFor="cpu-temp-limit" className="text-[12px] font-[700] text-[#222] cursor-pointer">CPU Temperature</label>
                  <span className="text-[12px] font-[600] text-[#666]">hits</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <input id="cpu-temp-limit" type="text" defaultValue="80" className="w-[50px] h-[36px] rounded-[12px] border border-[#111] text-center text-[12px] font-[600] text-[#111] outline-none bg-transparent font-mono" />
                  <span className="text-[12px] font-[700] text-[#111] w-[26px] text-center">°C</span>
                  <div className="w-[38px] h-[22px] rounded-full bg-[#10b981] relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] ml-[4px] border border-[#10b981]">
                    <div className="absolute right-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* GPU Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <label htmlFor="gpu-temp-limit" className="text-[12px] font-[700] text-[#222] cursor-pointer">GPU Temperature</label>
                  <span className="text-[12px] font-[600] text-[#666]">hits</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <input id="gpu-temp-limit" type="text" defaultValue="80" className="w-[50px] h-[36px] rounded-[12px] border border-[#111] text-center text-[12px] font-[600] text-[#111] outline-none bg-transparent font-mono" />
                  <span className="text-[12px] font-[700] text-[#111] w-[26px] text-center">°C</span>
                  <div className="w-[38px] h-[22px] rounded-full bg-[#10b981] relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] ml-[4px] border border-[#10b981]">
                    <div className="absolute right-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Disk Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <label htmlFor="disk-temp-limit" className="text-[12px] font-[700] text-[#222] cursor-pointer">Disk Temperature</label>
                  <span className="text-[12px] font-[600] text-[#666]">hits</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <input id="disk-temp-limit" type="text" defaultValue="80" className="w-[50px] h-[36px] rounded-[12px] border border-[#111] text-center text-[12px] font-[600] text-[#111] outline-none bg-transparent font-mono" />
                  <span className="text-[12px] font-[700] text-[#111] w-[26px] text-center">°C</span>
                  <div className="w-[38px] h-[22px] rounded-full bg-[#10b981] relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] ml-[4px] border border-[#10b981]">
                    <div className="absolute right-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Mainboard Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <label htmlFor="mainboard-temp-limit" className="text-[12px] font-[700] text-[#222] cursor-pointer">Mainboard Temperature</label>
                  <span className="text-[12px] font-[600] text-[#666]">hits</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <input id="mainboard-temp-limit" type="text" defaultValue="80" className="w-[50px] h-[36px] rounded-[12px] border border-[#111] text-center text-[12px] font-[600] text-[#111] outline-none bg-transparent font-mono" />
                  <span className="text-[12px] font-[700] text-[#111] w-[26px] text-center">°C</span>
                  <div className="w-[38px] h-[22px] rounded-full bg-[#10b981] relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] ml-[4px] border border-[#10b981]">
                    <div className="absolute right-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-[700] text-[#6b7280]">
                Temperature warnings may require administrator mode on some systems.
              </div>
            </div>

            <div className="h-[1px] bg-[#e5e7eb] w-full my-[16px]"></div>

            {/* Footer */}
            <div className="flex flex-col gap-[12px]">
              <div className="text-[10px] font-[700] text-[#6b7280]">Watchman v2.0.2</div>
              
              <div className="flex items-center gap-[12px]">
                <button className="h-[42px] px-[20px] bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-[10px] font-[800] rounded-[21px] transition-colors border-none flex items-center justify-center text-center shadow-sm whitespace-nowrap tracking-[0.5px]">
                  <span className="leading-[1.1]">USE<br/>RECOMMENDED</span>
                </button>
                <button className="h-[42px] px-[20px] bg-white hover:bg-gray-50 text-[#4b5563] text-[11px] font-[800] uppercase tracking-[1px] rounded-[21px] transition-colors border border-[#d1d5db] flex items-center justify-center shadow-sm">
                  UNDO
                </button>
                <button className="h-[42px] flex-1 bg-[#4b5563] text-white text-[13px] font-[800] uppercase tracking-[1.5px] rounded-[21px] transition-colors border-none flex items-center justify-center shadow-md cursor-not-allowed">
                  SAVE
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
