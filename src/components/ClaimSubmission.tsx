import { useState } from 'react';
import { Check, Mic, MessageSquare, ArrowRight, Info, ShieldCheck, MapPin, Upload, FileText, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface ClaimSubmissionProps {
  onBack: () => void;
}

interface FormData {
  policyId: string;
  claimType: string;
  incidentDate: string;
  location: string;
  description: string;
}

export default function ClaimSubmission({ onBack }: ClaimSubmissionProps) {
  const [currentStep, setCurrentStep] = useState(2);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    policyId: 'CYP-492-902-X',
    claimType: 'Vehicle Damage',
    incidentDate: '',
    location: '',
    description: '',
  });

  const steps = [
    { id: 1, label: 'POLICY' },
    { id: 2, label: 'DETAILS' },
    { id: 3, label: 'EVIDENCE' },
    { id: 4, label: 'REVIEW' },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 2) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center py-12"
      >
        <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl font-extrabold mb-4">Claim Submitted Successfully</h1>
        <p className="text-on-surface-variant mb-8 leading-relaxed">
          Your claim <span className="font-bold text-on-surface">#CLM-{Math.floor(Math.random() * 100000)}</span> has been received. 
          Cypher Sentinel is now performing a deep-dive analysis. You will be notified within 24 hours.
        </p>
        <div className="bg-surface-container-low p-6 rounded-xl text-left mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Submission Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Policy ID</span>
              <span className="font-medium">{formData.policyId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Claim Type</span>
              <span className="font-medium">{formData.claimType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Incident Date</span>
              <span className="font-medium">{formData.incidentDate || 'Not specified'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Location</span>
              <span className="font-medium">{formData.location || 'Not specified'}</span>
            </div>
          </div>
        </div>
        <button 
          onClick={onBack}
          className="bg-primary text-white px-8 py-3 rounded-lg font-bold transition-transform active:scale-95 shadow-lg shadow-primary/10"
        >
          Return to Dashboard
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Claim Submission</h1>
          <p className="text-on-surface-variant max-w-md">Provide details about your incident. Our AI-driven portal ensures a supportive and clinical processing experience.</p>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center gap-2 bg-primary-container/40 text-on-primary-container px-4 py-2 rounded-full border border-primary-container/50">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold tracking-wider uppercase">Cypher Sentinel: Analyzing for empathetic context</span>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="relative flex justify-between items-center max-w-3xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-high -translate-y-1/2 z-0"></div>
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-surface transition-colors",
                step.id < currentStep ? "bg-primary-container text-on-primary-container" :
                step.id === currentStep ? "bg-primary text-white" :
                "bg-surface-container-high text-on-surface-variant"
              )}>
                {step.id < currentStep ? <Check className="w-5 h-5" /> : step.id}
              </div>
              <span className={cn(
                "absolute top-12 text-[10px] font-bold whitespace-nowrap",
                step.id === currentStep ? "text-on-surface" : "text-on-surface-variant"
              )}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 lg:col-span-8 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-sm"
            >
              {currentStep === 2 && (
                <>
                  <h2 className="text-xl font-bold mb-8">Incident Overview</h2>
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-on-surface-variant tracking-wider uppercase">Policy ID</label>
                        <input 
                          type="text" 
                          value={formData.policyId}
                          onChange={(e) => updateField('policyId', e.target.value)}
                          className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg h-12 px-4 transition-all" 
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-on-surface-variant tracking-wider uppercase">Claim Type</label>
                        <select 
                          value={formData.claimType}
                          onChange={(e) => updateField('claimType', e.target.value)}
                          className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg h-12 px-4 transition-all appearance-none"
                        >
                          <option>Vehicle Damage</option>
                          <option>Property Liability</option>
                          <option>Personal Injury</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-on-surface-variant tracking-wider uppercase">Incident Date</label>
                        <input 
                          type="date" 
                          value={formData.incidentDate}
                          onChange={(e) => updateField('incidentDate', e.target.value)}
                          className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg h-12 px-4 transition-all" 
                        />
                      </div>
                      <div className="space-y-1 relative">
                        <label className="text-[11px] font-bold text-on-surface-variant tracking-wider uppercase">Location</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            placeholder="Search address..." 
                            value={formData.location}
                            onChange={(e) => updateField('location', e.target.value)}
                            className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg h-12 pl-10 pr-4 transition-all" 
                          />
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-on-surface-variant tracking-wider uppercase">Description</label>
                      <textarea 
                        rows={4}
                        placeholder="Describe the incident in detail..."
                        value={formData.description}
                        onChange={(e) => updateField('description', e.target.value)}
                        className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-4 transition-all resize-none"
                      />
                    </div>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <h2 className="text-xl font-bold mb-8">Evidence Upload</h2>
                  <div className="space-y-8">
                    <div className="border-2 border-dashed border-on-surface/10 rounded-xl p-12 text-center hover:border-primary/30 transition-colors cursor-pointer group">
                      <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-container transition-colors">
                        <Upload className="w-8 h-8 text-on-surface-variant group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-sm font-bold mb-1">Upload Photos or Documents</p>
                      <p className="text-xs text-on-surface-variant">Drag and drop files here, or click to browse</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-surface-container-low rounded-lg flex items-center gap-3">
                        <div className="w-10 h-10 bg-surface-container-lowest rounded flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold truncate">incident_photo_01.jpg</p>
                          <p className="text-[10px] text-on-surface-variant">2.4 MB • Uploaded</p>
                        </div>
                        <button className="text-on-surface-variant hover:text-error transition-colors">
                          <Check className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentStep === 4 && (
                <>
                  <h2 className="text-xl font-bold mb-8">Final Review</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Policy ID</p>
                        <p className="text-sm font-medium">{formData.policyId}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Claim Type</p>
                        <p className="text-sm font-medium">{formData.claimType}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Incident Date</p>
                        <p className="text-sm font-medium">{formData.incidentDate || 'Not specified'}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Location</p>
                        <p className="text-sm font-medium">{formData.location || 'Not specified'}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-on-surface/5">
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Description</p>
                      <p className="text-sm leading-relaxed text-on-surface-variant">
                        {formData.description || 'No description provided.'}
                      </p>
                    </div>
                    <div className="bg-primary-container/20 p-4 rounded-lg flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-xs text-on-primary-container leading-relaxed">
                        By submitting, you confirm that the information provided is accurate to the best of your knowledge. 
                        Cypher Intelligence will process this data in accordance with our clinical privacy standards.
                      </p>
                    </div>
                  </div>
                </>
              )}

              <div className="pt-8 flex justify-between items-center border-t border-on-surface/5 mt-8">
                <button 
                  type="button" 
                  onClick={handleBack} 
                  className="text-primary font-bold text-sm hover:underline"
                >
                  {currentStep === 2 ? 'Back to Policy' : 'Previous Step'}
                </button>
                <button 
                  type="button" 
                  onClick={handleNext}
                  className="bg-primary text-white px-8 h-12 rounded-lg font-bold text-sm tracking-tight transition-transform active:scale-95 shadow-lg shadow-primary/10"
                >
                  {currentStep === 4 ? 'Submit Claim' : 'Continue Submission'}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="bg-surface-container-low/50 p-6 rounded-xl flex items-start gap-4">
            <div className="w-5 h-5 text-primary shrink-0">
              <Info className="w-full h-full" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Need help?</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-1">Our claim assistants are standing by. Cypher’s clinical submission model ensures your statement is captured accurately to expedite settlement.</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
            <h3 className="text-lg font-bold mb-4">Voice Statement</h3>
            <p className="text-xs text-on-surface-variant mb-8">Speak naturally. Cypher's voice recognition translates your tone and details into clinical intelligence.</p>
            <div className="flex items-end justify-center gap-[3px] h-20 mb-10 px-4">
              {[4, 8, 12, 16, 10, 14, 18, 10, 12, 15, 7, 9, 4].map((h, i) => (
                <div key={i} className={cn("w-1.5 rounded-full", [3, 4, 6, 9].includes(i) ? "bg-primary" : "bg-primary-container")} style={{ height: `${h * 5}%` }}></div>
              ))}
            </div>
            <button className="w-full bg-primary-container text-on-primary-container flex items-center justify-center gap-3 h-14 rounded-lg font-bold transition-all hover:bg-primary-container/80">
              <Mic className="w-5 h-5" /> Begin Voice Recording
            </button>
            <div className="mt-4 text-center">
              <span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">Encryption active • Hi-Fi Audio</span>
            </div>
          </div>
          <div className="bg-primary-container/20 p-8 rounded-xl border border-primary-container/30 relative group overflow-hidden">
            <MessageSquare className="absolute -bottom-4 -right-4 w-24 h-24 text-primary/10 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2 text-primary">Live Assistance</h3>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Struggling with a field? Our human-in-the-loop coordinators can join this session instantly.</p>
            <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">Chat with an agent <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
