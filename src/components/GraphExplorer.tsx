import { Network, Search, Filter, Info, Smartphone, MapPin, User, AlertTriangle, MoreVertical, Plus, Minus, Maximize2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function GraphExplorer() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col gap-6 max-w-7xl mx-auto">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h3 className="text-4xl font-extrabold tracking-tighter">Graph Explorer</h3>
          <p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
            Visualizing the neural connections and entity correlations across the Cypher Intelligence network. Explore the relationships between policies, incidents, and risk signals.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-2 border border-on-surface/5">
            <Search className="w-4 h-4 text-on-surface-variant" />
            <span className="text-xs font-bold uppercase tracking-widest">Search Entities</span>
          </div>
          <div className="bg-primary text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 cursor-pointer hover:bg-primary/90 transition-colors">
            Analyze Clusters
          </div>
        </div>
      </section>

      <div className="flex-1 bg-surface-container-lowest rounded-2xl shadow-sm relative overflow-hidden border border-on-surface/5">
        {/* Graph Controls */}
        <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
          <button className="p-3 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors shadow-sm">
            <Plus className="w-5 h-5 text-on-surface" />
          </button>
          <button className="p-3 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors shadow-sm">
            <Minus className="w-5 h-5 text-on-surface" />
          </button>
          <div className="h-[1px] bg-on-surface/10 mx-2 my-1"></div>
          <button className="p-3 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors shadow-sm">
            <Maximize2 className="w-5 h-5 text-on-surface" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-6 left-6 bg-surface-container-low/80 backdrop-blur-md p-4 rounded-xl border border-on-surface/5 z-10">
          <h4 className="text-[0.625rem] font-bold uppercase tracking-widest text-on-surface-variant mb-3">Entity Legend</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-[0.6875rem] font-medium">Policy Holder</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <span className="text-[0.6875rem] font-medium">Risk Signal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success"></div>
              <span className="text-[0.6875rem] font-medium">Verified Asset</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-on-surface-variant"></div>
              <span className="text-[0.6875rem] font-medium">Incident Node</span>
            </div>
          </div>
        </div>

        {/* Simulated Graph Canvas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-4xl max-h-[600px]">
            {/* Center Node */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center border-4 border-surface shadow-2xl ring-4 ring-primary/20">
                <Network className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                <p className="text-sm font-bold">CYP-NODE-01</p>
                <p className="text-[0.625rem] text-on-surface-variant font-bold uppercase tracking-widest">Active Root</p>
              </div>
            </motion.div>

            {/* Connection Lines (Simulated) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Satellite Nodes */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-[20%] left-[20%] flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center border-2 border-surface group-hover:bg-primary-container transition-colors shadow-lg">
                <User className="w-8 h-8 text-on-surface-variant group-hover:text-primary" />
              </div>
              <span className="mt-2 text-[0.6875rem] font-bold">Policy: #88293</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-[20%] right-[20%] flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center border-2 border-surface group-hover:bg-error-container transition-colors shadow-lg">
                <AlertTriangle className="w-8 h-8 text-on-surface-variant group-hover:text-error" />
              </div>
              <span className="mt-2 text-[0.6875rem] font-bold">Risk: High Distress</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-[20%] left-[20%] flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center border-2 border-surface group-hover:bg-primary-container transition-colors shadow-lg">
                <MapPin className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-on-surface-variant group-hover:text-primary w-8 h-8" />
              </div>
              <span className="mt-2 text-[0.6875rem] font-bold">Loc: Intersection A</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-[20%] right-[20%] flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center border-2 border-surface group-hover:bg-primary-container transition-colors shadow-lg">
                <Smartphone className="w-8 h-8 text-on-surface-variant group-hover:text-primary" />
              </div>
              <span className="mt-2 text-[0.6875rem] font-bold">Device: Mobile Relay</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-[15%] left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center border-2 border-surface group-hover:bg-primary-container transition-colors shadow-lg">
                <Info className="w-8 h-8 text-on-surface-variant group-hover:text-primary" />
              </div>
              <span className="mt-2 text-[0.6875rem] font-bold">Metadata: Neural Log</span>
            </motion.div>
          </div>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>
    </div>
  );
}
