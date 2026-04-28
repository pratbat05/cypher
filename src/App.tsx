import { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Network, 
  Settings, 
  ShieldAlert, 
  Search, 
  Bell, 
  User,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Activity,
  ShieldCheck,
  Mic,
  MessageSquare,
  ArrowRight,
  Info,
  MoreVertical,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import Dashboard from './components/Dashboard';
import ClaimDeepDive from './components/ClaimDeepDive';
import ClaimSubmission from './components/ClaimSubmission';
import SystemSettings from './components/SystemSettings';
import ActiveClaims from './components/ActiveClaims';
import GraphExplorer from './components/GraphExplorer';
import SecurityLogs from './components/SecurityLogs';

type Screen = 'dashboard' | 'claims' | 'graph' | 'settings' | 'security' | 'deep-dive' | 'submission';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'claims', label: 'Active Claims', icon: FileText },
    { id: 'graph', label: 'Graph Explorer', icon: Network },
    { id: 'settings', label: 'System Settings', icon: Settings },
    { id: 'security', label: 'Security Logs', icon: ShieldAlert },
  ];

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard': return <Dashboard onOpenNode={() => setActiveScreen('deep-dive')} onNewClaim={() => setActiveScreen('submission')} />;
      case 'claims': return <ActiveClaims onOpenClaim={() => setActiveScreen('deep-dive')} />;
      case 'graph': return <GraphExplorer />;
      case 'security': return <SecurityLogs />;
      case 'deep-dive': return <ClaimDeepDive />;
      case 'submission': return <ClaimSubmission onBack={() => setActiveScreen('dashboard')} />;
      case 'settings': return <SystemSettings />;
      default: return <Dashboard onOpenNode={() => setActiveScreen('deep-dive')} onNewClaim={() => setActiveScreen('submission')} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-surface text-on-surface">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-surface-container-low border-r-0 sticky top-0 h-screen">
        <div className="p-6 mb-8">
          <h1 className="text-xl font-black tracking-tight text-on-surface">Cypher Intelligence</h1>
          <p className="text-[0.6875rem] text-on-surface-variant font-bold tracking-widest uppercase mt-1">Clinical Node 01</p>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveScreen(item.id as Screen)}
              className={cn(
                "flex items-center w-full px-3 py-2 text-sm font-medium transition-colors rounded-sm",
                activeScreen === item.id 
                  ? "bg-surface-container-lowest text-primary border-r-2 border-primary" 
                  : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              )}
            >
              <item.icon className={cn("w-4 h-4 mr-3", activeScreen === item.id ? "text-primary" : "text-on-surface-variant")} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 mt-auto border-t border-on-surface/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=100&h=100&fit=crop" 
                alt="Dr. Aris Thorne"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold truncate">Dr. Aris Thorne</span>
              <span className="text-[0.625rem] text-on-surface-variant">L3 Investigator</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 flex items-center justify-between px-6 bg-surface sticky top-0 z-10">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tight">Cypher</span>
            <div className="hidden lg:flex items-center bg-surface-container-low px-3 py-1.5 rounded-lg w-64">
              <Search className="w-4 h-4 text-on-surface-variant mr-2" />
              <input 
                type="text" 
                placeholder="Search clinical nodes..." 
                className="bg-transparent border-none focus:ring-0 text-xs w-full placeholder:text-on-surface-variant"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full">
              <Settings className="w-5 h-5" />
            </button>
            <div className="h-8 w-[1px] bg-on-surface/10 mx-2"></div>
            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold leading-none">Command Center</p>
                <p className="text-[0.625rem] text-on-surface-variant">Session: Active</p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center">
                <User className="w-4 h-4 text-on-surface-variant" />
              </div>
            </div>
          </div>
        </header>

        {/* Screen Content */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6 md:p-8"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container-lowest border-t border-on-surface/5 flex items-center justify-around px-4 z-50">
        {navItems.slice(0, 4).map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveScreen(item.id as Screen)}
            className={cn(
              "flex flex-col items-center gap-1",
              activeScreen === item.id ? "text-primary" : "text-on-surface-variant"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase">{item.label.split(' ')[0]}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
