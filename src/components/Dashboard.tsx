import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Verified, Activity, Sparkles, Filter, MoreVertical } from 'lucide-react';
import { cn } from '../lib/utils';
import { CLAIMS, DISTRESS_QUEUE } from '../constants';

const PERFORMANCE_DATA = [
  { name: 'MON', volume: 60, confidence: 40 },
  { name: 'TUE', volume: 45, confidence: 55 },
  { name: 'WED', volume: 80, confidence: 30 },
  { name: 'THU', volume: 40, confidence: 70 },
  { name: 'FRI', volume: 55, confidence: 45 },
  { name: 'SAT', volume: 30, confidence: 20 },
];

interface DashboardProps {
  onOpenNode: () => void;
  onNewClaim: () => void;
}

export default function Dashboard({ onOpenNode, onNewClaim }: DashboardProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight uppercase">Command Center</h1>
          <p className="text-on-surface-variant text-sm mt-1">Real-time clinical prioritization & network health.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-surface-container-high text-xs font-medium rounded-lg hover:bg-on-surface/10 transition-colors">
            Export Report
          </button>
          <button 
            onClick={onNewClaim}
            className="px-4 py-2 bg-primary text-on-primary-container bg-primary-container text-xs font-bold rounded-lg hover:bg-primary-container/80 transition-colors"
          >
            New Claim
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* KPI Column */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest">Trust Index</span>
              <Verified className="w-4 h-4 text-primary" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">98.4</span>
              <span className="text-primary text-xs font-medium">+0.2%</span>
            </div>
            <div className="mt-4 h-1 w-full bg-surface-container-low rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '98.4%' }}></div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest">Distress Mean</span>
              <Activity className="w-4 h-4 text-error" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">12.1</span>
              <span className="text-error text-xs font-medium">-4.5%</span>
            </div>
            <div className="mt-4 flex items-end gap-1 h-8">
              {[3, 5, 2, 6, 8, 4].map((h, i) => (
                <div key={i} className="flex-1 bg-primary-container rounded-t-sm" style={{ height: `${h * 10}%` }}></div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest">Auto-Resolved</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">4,812</span>
            </div>
            <p className="text-[0.6875rem] text-on-surface-variant mt-2">Units cleared in last 24h</p>
          </div>
        </div>

        {/* Performance Matrix */}
        <div className="col-span-12 lg:col-span-6 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest">Performance Matrix</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-[0.6875rem] text-on-surface-variant">Claim Volume</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                <span className="text-[0.6875rem] text-on-surface-variant">Confidence</span>
              </div>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PERFORMANCE_DATA} barGap={4}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f4f6" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#586064' }} 
                  dy={10}
                />
                <Tooltip 
                  cursor={{ fill: '#f8f9fa' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                />
                <Bar dataKey="confidence" fill="#dae8be" radius={[2, 2, 0, 0]} />
                <Bar dataKey="volume" fill="#566342" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distress Queue */}
        <div className="col-span-12 lg:col-span-3 bg-surface-container-low rounded-xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest">Distress Queue</h3>
            <span className="px-2 py-0.5 bg-error text-white text-[0.625rem] font-bold rounded">HIGH ALERT</span>
          </div>
          <div className="space-y-4 flex-1">
            {DISTRESS_QUEUE.map((item) => (
              <div key={item.id} className="p-4 bg-surface-container-lowest rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold">{item.id}</span>
                  <span className="text-error font-mono text-[10px]">{item.intensity}% INTENSITY</span>
                </div>
                <p className="text-[0.6875rem] text-on-surface-variant mb-4 leading-relaxed">{item.description}</p>
                <button className="w-full py-2 bg-error text-white text-[0.6875rem] font-bold rounded uppercase tracking-wider hover:bg-error/90 transition-colors">
                  Intercept
                </button>
              </div>
            ))}
          </div>
          <button className="mt-6 text-center text-xs text-on-surface-variant font-medium hover:text-on-surface transition-colors">
            View All Urgent Nodes
          </button>
        </div>

        {/* Live Intel Stream */}
        <div className="col-span-12 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-on-surface/5 flex justify-between items-center">
            <h3 className="text-sm font-bold uppercase tracking-widest">Live Intel Stream</h3>
            <div className="flex gap-2">
              <button className="p-1 text-on-surface-variant hover:bg-surface-container-low rounded"><Filter className="w-4 h-4" /></button>
              <button className="p-1 text-on-surface-variant hover:bg-surface-container-low rounded"><MoreVertical className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/30">
                  <th className="px-6 py-3 text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-wider">Node ID</th>
                  <th className="px-6 py-3 text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-wider">Classification</th>
                  <th className="px-6 py-3 text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-wider">Confidence</th>
                  <th className="px-6 py-3 text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-on-surface/5">
                {CLAIMS.map((claim) => (
                  <tr key={claim.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-6 py-4 text-xs font-mono">{claim.id}</td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2 py-0.5 text-[0.625rem] font-medium rounded",
                        claim.classification === 'Collision Liability' ? "bg-primary-container text-on-primary-container" : "bg-surface-container-high text-on-surface-variant"
                      )}>
                        {claim.classification}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs">{claim.subject}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 w-12 bg-surface-container-low rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${claim.confidence}%` }}></div>
                        </div>
                        <span className="text-[0.625rem] font-bold text-primary">{claim.confidence}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "text-[0.625rem] font-semibold",
                        claim.status === 'RESOLVED' ? "text-primary" : "text-on-surface-variant"
                      )}>
                        {claim.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={onOpenNode}
                        className="text-primary text-xs font-bold hover:underline"
                      >
                        OPEN NODE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
