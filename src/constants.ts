import { Claim, SecurityLog, UserPermission } from './types';

export const CLAIMS: Claim[] = [
  {
    id: 'CPH-88-293',
    classification: 'Collision Liability',
    subject: 'Major intersection bypass conflict',
    confidence: 94,
    status: 'ANALYZING',
  },
  {
    id: 'CPH-88-294',
    classification: 'Theft/Recovery',
    subject: 'High-value asset geo-deviation',
    confidence: 82,
    status: 'RESOLVED',
  },
  {
    id: 'CPH-88-295',
    classification: 'Injury Assessment',
    subject: 'Soft tissue claim validation',
    confidence: 76,
    status: 'QUEUED',
  },
];

export const DISTRESS_QUEUE: Claim[] = [
  {
    id: '#CLM-9021',
    classification: 'Collision',
    subject: 'Multiple vehicle impact',
    confidence: 0,
    status: 'HIGH ALERT',
    intensity: 92,
    description: 'Multiple vehicle high-velocity impact, disputed liability.',
  },
  {
    id: '#CLM-8842',
    classification: 'Structural',
    subject: 'Integrity compromise',
    confidence: 0,
    status: 'HIGH ALERT',
    intensity: 88,
    description: 'Structural integrity compromise, legal escalation flagged.',
  },
];

export const SECURITY_LOGS: SecurityLog[] = [
  {
    timestamp: '2023-10-24 14:22:01',
    eventType: 'INPUT_ANOMALY',
    description: 'Pattern mismatch in neural relay',
    source: 'Node_Ext_142.33',
    riskScore: 15,
    status: 'Mitigated',
  },
  {
    timestamp: '2023-10-24 14:18:55',
    eventType: 'AI_JAILBREAK_ATTEMPT',
    description: 'Unusual prompt recursion detected',
    source: 'User_9921_Beta',
    riskScore: 88,
    status: 'Isolated',
  },
  {
    timestamp: '2023-10-24 13:59:12',
    eventType: 'DATA_EGRESS_LIMIT',
    description: 'Batch export above soft threshold',
    source: 'Internal_Admin_Root',
    riskScore: 45,
    status: 'Flagged',
  },
];

export const USERS: UserPermission[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Lead Neuro-Analyst',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    permissions: ['READ', 'EXEC', 'AUDIT'],
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Ethics Supervisor',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    permissions: ['READ', 'VETO'],
  },
];
