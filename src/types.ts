export interface Claim {
  id: string;
  classification: string;
  subject: string;
  confidence: number;
  status: 'ANALYZING' | 'RESOLVED' | 'QUEUED' | 'HIGH ALERT';
  intensity?: number;
  description?: string;
}

export interface SecurityLog {
  timestamp: string;
  eventType: string;
  description: string;
  source: string;
  riskScore: number;
  status: 'Mitigated' | 'Isolated' | 'Flagged';
}

export interface UserPermission {
  id: string;
  name: string;
  role: string;
  avatar: string;
  permissions: string[];
}
