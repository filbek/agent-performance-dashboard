export enum Category {
  International = 'Yurtdışı',
  Domestic = 'Yurtiçi',
}

export enum Month {
  May = 'Mayıs',
  June = 'Haziran',
}

export interface AgentPerformanceData {
  agentName: string;
  incomingData: number;
  contacted: number;
  unreachable?: number; // International only
  noAnswer: number;
  rejected: number;
  negative: number;
  appointments: number;
  surgeryAppointmentsGiven?: number; // Domestic only
  salesRate: number; // As a percentage value, e.g. 5 for 5%
}

export type PerformanceData = {
  [key in Month]: {
    [key in Category]: AgentPerformanceData[];
  };
};
