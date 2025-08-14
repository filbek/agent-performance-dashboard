import React, { useMemo } from 'react';
import { AgentPerformanceData, Category } from '../types';

interface ReportTableProps {
  data: AgentPerformanceData[];
  category: Category;
}

const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <th className="px-4 py-3 text-left text-xs font-semibold text-brand-text-secondary uppercase tracking-wider">{children}</th>
);

const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <td className={`px-4 py-4 whitespace-nowrap text-sm ${className}`}>{children}</td>
);

const ReportTable: React.FC<ReportTableProps> = ({ data, category }) => {

  const totals = useMemo(() => {
    return data.reduce((acc, row) => {
      acc.incomingData += row.incomingData;
      acc.contacted += row.contacted;
      acc.unreachable += row.unreachable ?? 0;
      acc.noAnswer += row.noAnswer;
      acc.rejected += row.rejected;
      acc.negative += row.negative;
      acc.appointments += row.appointments;
      acc.surgeryAppointmentsGiven += row.surgeryAppointmentsGiven ?? 0;
      return acc;
    }, {
      incomingData: 0, contacted: 0, unreachable: 0, noAnswer: 0,
      rejected: 0, negative: 0, appointments: 0, surgeryAppointmentsGiven: 0
    });
  }, [data]);

  const isInternational = category === Category.International;
  const isDomestic = category === Category.Domestic;

  return (
    <div className="bg-brand-secondary rounded-lg overflow-hidden shadow-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-brand-border">
          <thead className="bg-brand-primary/50">
            <tr>
              <TableHeader>Agent</TableHeader>
              <TableHeader>Gelen Data</TableHeader>
              <TableHeader>Görüşülen</TableHeader>
              {isInternational && <TableHeader>Ulaşılamadı</TableHeader>}
              <TableHeader>Cevap Vermiyor</TableHeader>
              <TableHeader>{isInternational ? 'Red (VKİ uygun olmayan)' : 'Uyumsuz (VKİ,Yaş,Hastalık vb.)'}</TableHeader>
              <TableHeader>Olumsuz</TableHeader>
              <TableHeader>Randevu</TableHeader>
              {isDomestic && <TableHeader>Ameliyat Randevusu</TableHeader>}
              <TableHeader>Satış Yüzdesi</TableHeader>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {data.map((row) => (
              <tr key={row.agentName} className="hover:bg-brand-primary/70 transition-colors duration-150">
                <TableCell className="font-semibold text-brand-text-primary">{row.agentName}</TableCell>
                <TableCell>{row.incomingData.toLocaleString()}</TableCell>
                <TableCell>{row.contacted.toLocaleString()}</TableCell>
                {isInternational && <TableCell>{row.unreachable?.toLocaleString()}</TableCell>}
                <TableCell>{row.noAnswer.toLocaleString()}</TableCell>
                <TableCell>{row.rejected.toLocaleString()}</TableCell>
                <TableCell>{row.negative.toLocaleString()}</TableCell>
                <TableCell>{row.appointments.toLocaleString()}</TableCell>
                {isDomestic && <TableCell>{row.surgeryAppointmentsGiven?.toLocaleString()}</TableCell>}
                <TableCell>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-brand-accent/20 text-brand-accent">
                    {row.salesRate}%
                  </span>
                </TableCell>
              </tr>
            ))}
            <tr className="bg-brand-primary font-bold">
              <TableCell>TOPLAM</TableCell>
              <TableCell>{totals.incomingData.toLocaleString()}</TableCell>
              <TableCell>{totals.contacted.toLocaleString()}</TableCell>
              {isInternational && <TableCell>{totals.unreachable.toLocaleString()}</TableCell>}
              <TableCell>{totals.noAnswer.toLocaleString()}</TableCell>
              <TableCell>{totals.rejected.toLocaleString()}</TableCell>
              <TableCell>{totals.negative.toLocaleString()}</TableCell>
              <TableCell>{totals.appointments.toLocaleString()}</TableCell>
              {isDomestic && <TableCell>{totals.surgeryAppointmentsGiven.toLocaleString()}</TableCell>}
              <TableCell>--</TableCell>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTable;
