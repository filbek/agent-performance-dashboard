import React, { useMemo } from 'react';
import { AgentPerformanceData } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

const CHART_COLORS = ['#267DFF', '#34d399', '#f59e0b', '#ef4444', '#a855f7', '#ec4899', '#6366f1', '#14b8a6'];
const PIE_CHART_COLORS = {
    'Görüşülen': '#22c55e',
    'Cevap Vermiyor': '#f59e0b',
    'Ulaşılamadı': '#ef4444'
};


const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-brand-primary/80 backdrop-blur-sm p-3 rounded-lg border border-brand-border shadow-lg">
                <p className="font-bold text-brand-text-primary">{label}</p>
                {payload.map((p, i) => (
                    <p key={i} style={{ color: p.color }}>
                        {`${p.name}: ${p.value}`}
                        {p.name.toLowerCase().includes('oranı') && '%'}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};


interface ChartCardProps {
    title: string;
    children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-lg h-[400px] flex flex-col">
        <h3 className="text-lg font-semibold text-brand-text-primary mb-4">{title}</h3>
        <div className="flex-grow">
            {children}
        </div>
    </div>
);

interface PerformanceChartsProps {
  data: AgentPerformanceData[];
}

const PerformanceCharts: React.FC<PerformanceChartsProps> = ({ data }) => {

    const contactRatioData = useMemo(() => {
        const totals = data.reduce((acc, row) => {
            acc.contacted += row.contacted;
            acc.noAnswer += row.noAnswer;
            acc.unreachable += row.unreachable ?? 0;
            return acc;
        }, { contacted: 0, noAnswer: 0, unreachable: 0 });

        return [
            { name: 'Görüşülen', value: totals.contacted },
            { name: 'Cevap Vermiyor', value: totals.noAnswer },
            { name: 'Ulaşılamadı', value: totals.unreachable },
        ].filter(d => d.value > 0);
    }, [data]);


  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
            <ChartCard title="Agent'a Göre Satış Oranı">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                        <XAxis dataKey="agentName" stroke="#A8B3CF" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#A8B3CF" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} />
                        <Legend iconSize={10} />
                        <Bar dataKey="salesRate" name="Satış Oranı" fill={CHART_COLORS[0]} radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </ChartCard>
        </div>
        
        <ChartCard title="İletişim Başarı Oranı">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={contactRatioData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius="80%"
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                            return (
                                <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12}>
                                    {`${(percent * 100).toFixed(0)}%`}
                                </text>
                            );
                        }}
                    >
                        {contactRatioData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[entry.name as keyof typeof PIE_CHART_COLORS] || CHART_COLORS[index % CHART_COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend iconSize={10} />
                </PieChart>
            </ResponsiveContainer>
        </ChartCard>

        <div className="lg:col-span-3">
            <ChartCard title="Agent'a Göre Randevu Sayısı">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                        <XAxis dataKey="agentName" stroke="#A8B3CF" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#A8B3CF" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} />
                        <Legend iconSize={10} />
                        <Bar dataKey="appointments" name="Randevular" fill={CHART_COLORS[1]} radius={[4, 4, 0, 0]} />
                        {data.some(d => d.surgeryAppointmentsGiven) && 
                            <Bar dataKey="surgeryAppointmentsGiven" name="Ameliyat Rand." fill={CHART_COLORS[4]} radius={[4, 4, 0, 0]} />
                        }
                    </BarChart>
                </ResponsiveContainer>
            </ChartCard>
        </div>
    </div>
  );
};

export default PerformanceCharts;
