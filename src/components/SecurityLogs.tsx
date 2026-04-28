import { ShieldAlert, Search, Filter, MoreVertical, ShieldCheck, AlertTriangle, Info, Clock, Download, Share2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { SECURITY_LOGS } from '../constants';
import { motion } from 'motion/react';

export default function SecurityLogs() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h3 className="text-4xl font-extrabold tracking-tighter">Security Logs</h3>
          <p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
            Real-time monitoring of system integrity and neural relay anomalies. All system events are cryptographically signed and stored in the immutable Cypher ledger.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-2 border border-on-surface/5">
            <Download className="w-4 h-4 text-on-surface-variant" />
            <span className="text-xs font-bold uppercase tracking-widest">Export Logs</span>
          </div>
          <div className="bg-primary text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 cursor-pointer hover:bg-primary/90 transition-colors">
            Audit Session
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Stats Summary */}
        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-on-surface/5">
            <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Total Events (24h)</p>
            <p className="text-3xl font-bold">14,293</p>
            <p className="text-xs text-success font-bold mt-2 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> System Nominal
            </p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-on-surface/5">
            <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-widest mb-2">High Risk Alerts</p>
            <p className="text-3xl font-bold text-error">12</p>
            <p className="text-xs text-error font-bold mt-2 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> Action Required
            </p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-on-surface/5">
            <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Mean Risk Score</p>
            <p className="text-3xl font-bold">14.2</p>
            <p className="text-xs text-on-surface-variant font-bold mt-2 flex items-center gap-1">
              <Clock className="w-3 h-3" /> Last 60m
            </p>
          </div>
        </div>

        {/* Main Logs Table */}
        <div className="col-span-12">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-on-surface/5">
            <div className="p-6 border-b border-on-surface/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <h4 className="text-sm font-bold uppercase tracking-widest">Live Security Stream</h4>
                <div className="flex items-center text-[0.625rem] font-bold text-primary bg-primary-container/30 px-2 py-1 rounded">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 animate-pulse"></span>
                  LIVE
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="bg-surface-container-low px-3 py-1.5 rounded-lg flex items-center gap-2 flex-1 sm:flex-none">
                  <Search className="w-3.5 h-3.5 text-on-surface-variant" />
                  <input type="text" placeholder="Filter logs..." className="bg-transparent border-none focus:ring-0 text-xs w-full sm:w-32" />
                </div>
                <button className="p-2 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors">
                  <Filter className="w-4 h-4 text-on-surface-variant" />
                </button>
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
                    <motion.tr 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-surface-container-low/30 transition-colors group cursor-pointer"
                    >
                      <td className="px-6 py-4 font-mono text-[0.6875rem]">{log.timestamp}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={cn(
                            "text-sm font-bold",
                            log.riskScore > 50 ? "text-error" : "text-on-surface"
                          )}>
                            {log.eventType}
                          </span>
                          {log.riskScore > 50 && <AlertTriangle className="w-3 h-3 text-error" />}
                        </div>
                        <p className="text-[0.625rem] text-on-surface-variant">{log.description}</p>
                      </td>
                      <td className="px-6 py-4 text-xs font-mono">{log.source}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                            <div className={cn("h-full", log.riskScore > 50 ? "bg-error" : "bg-primary")} style={{ width: `${log.riskScore}%` }}></div>
                          </div>
                          <span className="text-[0.6875rem] font-bold">{log.riskScore}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <span className={cn(
                            "text-[0.625rem] font-bold uppercase px-2 py-1 rounded",
                            log.status === 'Mitigated' ? "bg-primary-container text-on-primary-container" :
                            log.status === 'Isolated' ? "bg-error-container text-on-error-container" :
                            "bg-surface-container-high text-on-surface-variant"
                          )}>
                            {log.status}
                          </span>
                          <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreVertical className="w-4 h-4 text-on-surface-variant" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-surface-container-low/50 text-center">
              <button className="text-primary font-bold text-xs hover:underline">View Full Audit Trail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
