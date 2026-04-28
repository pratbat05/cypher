import { FileText, Filter, Search, MoreVertical, ChevronRight, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { CLAIMS } from '../constants';
import { motion } from 'motion/react';

interface ActiveClaimsProps {
  onOpenClaim: (id: string) => void;
}

export default function ActiveClaims({ onOpenClaim }: ActiveClaimsProps) {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h3 className="text-4xl font-extrabold tracking-tighter">Active Claims</h3>
          <p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
            Real-time monitoring of all clinical nodes. Cypher Sentinel is currently processing {CLAIMS.length} active claims with a mean confidence of 84%.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-2 border border-on-surface/5">
            <Filter className="w-4 h-4 text-on-surface-variant" />
            <span className="text-xs font-bold uppercase tracking-widest">Filter</span>
          </div>
          <div className="bg-primary text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 cursor-pointer hover:bg-primary/90 transition-colors">
            Export Data
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4">
        {CLAIMS.map((claim, i) => (
          <motion.div
            key={claim.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onOpenClaim(claim.id)}
            className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center shrink-0",
                  claim.status === 'ANALYZING' ? "bg-primary-container text-primary" :
                  claim.status === 'RESOLVED' ? "bg-success-container text-success" :
                  "bg-surface-container-high text-on-surface-variant"
                )}>
                  {claim.status === 'ANALYZING' ? <Clock className="w-6 h-6" /> :
                   claim.status === 'RESOLVED' ? <CheckCircle2 className="w-6 h-6" /> :
                   <AlertCircle className="w-6 h-6" />}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono font-bold text-primary bg-primary-container/30 px-2 py-0.5 rounded">
                      {claim.id}
                    </span>
                    <span className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-widest">
                      {claim.classification}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{claim.subject}</h4>
                  <p className="text-xs text-on-surface-variant mt-1">Last updated: 2 minutes ago • Node: CYP-01</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-right hidden sm:block">
                  <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Confidence</p>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${claim.confidence}%` }}></div>
                    </div>
                    <span className="text-sm font-bold">{claim.confidence}%</span>
                  </div>
                </div>
                <div className="text-right min-w-[100px]">
                  <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Status</p>
                  <span className={cn(
                    "text-[0.625rem] font-bold uppercase px-2 py-1 rounded",
                    claim.status === 'ANALYZING' ? "bg-primary-container text-on-primary-container" :
                    claim.status === 'RESOLVED' ? "bg-success-container text-on-success-container" :
                    "bg-surface-container-high text-on-surface-variant"
                  )}>
                    {claim.status}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-surface-container-low p-8 rounded-xl border border-on-surface/5 text-center">
        <p className="text-sm text-on-surface-variant">Showing {CLAIMS.length} of {CLAIMS.length} claims</p>
        <button className="mt-4 text-primary font-bold text-sm hover:underline">Load More History</button>
      </div>
    </div>
  );
}
