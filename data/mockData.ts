
import { PerformanceData, Month, Category } from '../types';

export const performanceData: PerformanceData = {
  [Month.May]: {
    [Category.International]: [
      { agentName: 'Adviye', incomingData: 436, contacted: 263, unreachable: 35, noAnswer: 138, rejected: 0, negative: 0, appointments: 4, salesRate: 1 },
      { agentName: 'Cengiz', incomingData: 70, contacted: 37, unreachable: 1, noAnswer: 20, rejected: 0, negative: 12, appointments: 5, salesRate: 7 },
      { agentName: 'Dilara', incomingData: 93, contacted: 33, unreachable: 33, noAnswer: 22, rejected: 3, negative: 2, appointments: 5, salesRate: 5 },
      { agentName: 'Enedelya', incomingData: 119, contacted: 49, unreachable: 32, noAnswer: 19, rejected: 0, negative: 19, appointments: 5, salesRate: 4 },
      { agentName: 'Jennifer', incomingData: 186, contacted: 71, unreachable: 72, noAnswer: 42, rejected: 1, negative: 0, appointments: 12, salesRate: 6 },
      { agentName: 'Merve', incomingData: 614, contacted: 297, unreachable: 38, noAnswer: 226, rejected: 19, negative: 34, appointments: 2, salesRate: 0 },
      { agentName: 'Nadia', incomingData: 1005, contacted: 519, unreachable: 20, noAnswer: 307, rejected: 60, negative: 99, appointments: 9, salesRate: 1 },
      { agentName: 'Nour', incomingData: 159, contacted: 259, unreachable: 115, noAnswer: 0, rejected: 0, negative: 44, appointments: 6, salesRate: 4 },
    ],
    [Category.Domestic]: [
      { agentName: 'Cengiz', incomingData: 408, contacted: 305, noAnswer: 61, rejected: 2, negative: 40, appointments: 0, surgeryAppointmentsGiven: 4, salesRate: 0 },
      { agentName: 'Çiğdem', incomingData: 373, contacted: 281, noAnswer: 79, rejected: 12, negative: 1, appointments: 15, surgeryAppointmentsGiven: 15, salesRate: 4 },
      { agentName: 'Hande', incomingData: 291, contacted: 206, noAnswer: 85, rejected: 0, negative: 0, appointments: 20, surgeryAppointmentsGiven: 25, salesRate: 7 },
      { agentName: 'Hilal', incomingData: 240, contacted: 115, noAnswer: 77, rejected: 39, negative: 9, appointments: 26, surgeryAppointmentsGiven: 20, salesRate: 11 },
      { agentName: 'Nazlı', incomingData: 198, contacted: 115, noAnswer: 76, rejected: 5, negative: 2, appointments: 5, surgeryAppointmentsGiven: 5, salesRate: 3 },
      { agentName: 'Saliha', incomingData: 378, contacted: 248, noAnswer: 125, rejected: 5, negative: 0, appointments: 28, surgeryAppointmentsGiven: 27, salesRate: 7 },
      { agentName: 'Yekta Check Up', incomingData: 158, contacted: 132, noAnswer: 21, rejected: 0, negative: 5, appointments: 71, surgeryAppointmentsGiven: 2, salesRate: 45 },
    ],
  },
  [Month.June]: {
    [Category.International]: [
      { agentName: 'Adviye', incomingData: 186, contacted: 93, unreachable: 3, noAnswer: 90, rejected: 0, negative: 0, appointments: 4, salesRate: 2 },
      { agentName: 'Cengiz', incomingData: 58, contacted: 43, unreachable: 2, noAnswer: 13, rejected: 0, negative: 4, appointments: 1, salesRate: 2 },
      { agentName: 'Dilara', incomingData: 64, contacted: 31, unreachable: 22, noAnswer: 11, rejected: 2, negative: 1, appointments: 0, salesRate: 0 },
      { agentName: 'Enedelya', incomingData: 102, contacted: 84, unreachable: 16, noAnswer: 2, rejected: 0, negative: 9, appointments: 8, salesRate: 8 },
      { agentName: 'Jennifer', incomingData: 152, contacted: 76, unreachable: 47, noAnswer: 29, rejected: 0, negative: 0, appointments: 11, salesRate: 7 },
      { agentName: 'Merve', incomingData: 515, contacted: 253, unreachable: 96, noAnswer: 166, rejected: 24, negative: 48, appointments: 5, salesRate: 1 },
      { agentName: 'Nadia', incomingData: 682, contacted: 385, unreachable: 20, noAnswer: 277, rejected: 45, negative: 68, appointments: 5, salesRate: 1 },
      { agentName: 'Nour', incomingData: 110, contacted: 36, unreachable: 71, noAnswer: 3, rejected: 0, negative: 35, appointments: 1, salesRate: 1 },
    ],
    [Category.Domestic]: [
      { agentName: 'Cengiz', incomingData: 253, contacted: 173, noAnswer: 73, rejected: 7, negative: 0, appointments: 3, surgeryAppointmentsGiven: 12, salesRate: 1 },
      { agentName: 'Çiğdem', incomingData: 66, contacted: 37, noAnswer: 21, rejected: 8, negative: 0, appointments: 6, surgeryAppointmentsGiven: 1, salesRate: 9 },
      { agentName: 'Hande', incomingData: 182, contacted: 105, noAnswer: 37, rejected: 40, negative: 0, appointments: 16, surgeryAppointmentsGiven: 10, salesRate: 9 },
      { agentName: 'Hilal', incomingData: 150, contacted: 102, noAnswer: 28, rejected: 20, negative: 0, appointments: 10, surgeryAppointmentsGiven: 3, salesRate: 7 },
      { agentName: 'Nazlı', incomingData: 282, contacted: 223, noAnswer: 59, rejected: 0, negative: 0, appointments: 1, surgeryAppointmentsGiven: 3, salesRate: 0 },
      { agentName: 'Saliha', incomingData: 364, contacted: 236, noAnswer: 126, rejected: 0, negative: 2, appointments: 11, surgeryAppointmentsGiven: 7, salesRate: 3 },
    ],
  }
};
