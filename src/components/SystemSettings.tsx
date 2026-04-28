import { ShieldAlert, ShieldCheck, Brain, Verified, Info, Activity } from 'lucide-react';
import { cn } from '../lib/utils';
import { USERS, SECURITY_LOGS } from '../constants';

export default function SystemSettings() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <section className="mb-12">
        <h3 className="text-4xl font-extrabold tracking-tighter">Clinical Intelligence Framework</h3>
        <p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
          Manage the ethical parameters and cryptographic boundaries of the Cypher Node. Changes to these settings are logged in real-time and require Level 5 authorization for deployment.
        </p>
      </section>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Privacy Controls */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-lg font-bold">Privacy Controls</h4>
                <p className="text-xs text-on-surface-variant">Data masking and session integrity parameters.</p>
              </div>
              <ShieldAlert className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                <div>
                  <p className="font-bold text-sm">Dynamic PII Masking</p>
                  <p className="text-xs text-on-surface-variant">Anonymize patient data in real-time telemetry.</p>
                </div>
                <button className="w-10 h-5 bg-primary rounded-full relative transition-colors">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border-l-2 border-primary bg-surface-container-low/50">
                  <p className="text-[0.6875rem] font-bold text-primary uppercase tracking-widest">Anonymization Level</p>
                  <select className="mt-2 block w-full bg-transparent border-none focus:ring-0 text-sm font-semibold p-0">
                    <option>Strict (Differential Privacy)</option>
                    <option>Balanced (K-Anonymity)</option>
                    <option>Minimal (Basic Strip)</option>
                  </select>
                </div>
                <div className="p-4 border-l-2 border-primary bg-surface-container-low/50">
                  <p className="text-[0.6875rem] font-bold text-primary uppercase tracking-widest">Session Token Expiry</p>
                  <select className="mt-2 block w-full bg-transparent border-none focus:ring-0 text-sm font-semibold p-0">
                    <option>15 Minutes</option>
                    <option>45 Minutes</option>
                    <option>2 Hours</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Model Calibration */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-lg font-bold">Model Calibration</h4>
                <p className="text-xs text-on-surface-variant">Ethical guardrails and neural output thresholds.</p>
              </div>
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-10 py-4">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-bold">Trust Thresholds</label>
                  <span className="text-[10px] font-mono text-primary bg-primary-container px-2 py-0.5 rounded">0.94 Alpha</span>
                </div>
                <input type="range" className="w-full h-1 bg-surface-container-high accent-primary rounded-lg appearance-none cursor-pointer" />
                <p className="text-[0.6875rem] text-on-surface-variant italic">Defines the minimum confidence score required for AI-generated clinical diagnosis.</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-bold">Distress Sensitivity</label>
                  <span className="text-[10px] font-mono text-error bg-error-container/20 px-2 py-0.5 rounded">High (0.12ms)</span>
                </div>
                <input type="range" className="w-full h-1 bg-surface-container-high accent-error rounded-lg appearance-none cursor-pointer" />
                <p className="text-[0.6875rem] text-on-surface-variant italic">Trigger rate for anomaly escalation when detecting high-risk clinical patterns.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-6">User Permissions</h4>
            <div className="space-y-4">
              {USERS.map((user) => (
                <div key={user.id} className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-lg shadow-sm">
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-bold">{user.name}</p>
                    <p className="text-[0.6875rem] text-on-surface-variant mb-3">{user.role}</p>
                    <div className="flex flex-wrap gap-1">
                      {user.permissions.map((p) => (
                        <span key={p} className={cn(
                          "text-[0.625rem] px-2 py-0.5 rounded-full font-bold",
                          p === 'VETO' ? "bg-error-container text-on-error-container" : "bg-primary-container text-on-primary-container"
                        )}>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm font-bold border-2 border-on-surface/10 hover:bg-surface-container-high transition-colors rounded-lg">
              Manage All Users
            </button>
          </div>

          <div className="bg-primary text-on-primary-container bg-primary-container p-6 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[0.6875rem] uppercase font-bold tracking-widest opacity-80">Encryption Integrity</p>
              <p className="text-3xl font-bold mt-2">99.998%</p>
              <p className="text-[0.6875rem] mt-4 font-mono opacity-80">Node: CYP-01-SECURE</p>
            </div>
            <Verified className="absolute -right-8 -bottom-8 w-32 h-32 opacity-10" />
          </div>
        </div>

        {/* Logs Table */}
        <div className="col-span-12">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-on-surface/5 flex justify-between items-center">
              <h4 className="text-sm font-bold uppercase tracking-widest">Real-time Security Logs</h4>
              <div className="flex items-center text-xs font-medium text-on-surface-variant">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Live Stream Active
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low text-[0.6875rem] font-bold uppercase tracking-widest text-on-surface-variant">
                  <tr>
                    <th className="px-6 py-4">Timestamp</th>
                    <th className="px-6 py-4">Event Type</th>
                    <th className="px-6 py-4">Source Origin</th>
                    <th className="px-6 py-4">Risk Score</th>
                    <th className="px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-on-surface/5">
                  {SECURITY_LOGS.map((log, i) => (
                    <tr key={i} className="hover:bg-surface-container-low/30 transition-colors">
                      <td className="px-6 py-4 font-mono text-[0.6875rem]">{log.timestamp}</td>
                      <td className="px-6 py-4">
                        <span className={cn("text-sm font-bold", log.status === 'Isolated' ? "text-error" : "text-on-surface")}>
                          {log.eventType}
                        </span>
                        <p className="text-[0.625rem] text-on-surface-variant">{log.description}</p>
                      </td>
                      <td className="px-6 py-4 text-xs">{log.source}</td>
                      <td className="px-6 py-4">
                        <div className="w-24 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                          <div className={cn("h-full", log.riskScore > 50 ? "bg-error" : "bg-primary")} style={{ width: `${log.riskScore}%` }}></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={cn(
                          "text-[0.625rem] font-bold uppercase px-2 py-1 rounded",
                          log.status === 'Mitigated' ? "bg-primary-container text-on-primary-container" :
                          log.status === 'Isolated' ? "bg-error-container text-on-error-container" :
                          "bg-surface-container-high text-on-surface-variant"
                        )}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
