import React from 'react';
import { AgentPerformanceData, Category, Month } from '../types';
import ReportTable from './ReportTable';
import PerformanceCharts from './PerformanceCharts';

interface DashboardProps {
  data: AgentPerformanceData[];
  month: Month;
  category: Category;
  setMonth: (month: Month) => void;
  setCategory: (category: Category) => void;
}

const FilterButton: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  const baseClasses = "px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-50";
  const activeClasses = "bg-brand-accent text-white shadow";
  const inactiveClasses = "bg-brand-secondary hover:bg-brand-accent/30 text-brand-text-secondary";

  return (
    <button onClick={onClick} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      {label}
    </button>
  );
};

const Dashboard: React.FC<DashboardProps> = ({ data, month, category, setMonth, setCategory }) => {
  return (
    <div className="flex-grow p-8 overflow-y-auto">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
            <h1 className="text-3xl font-bold text-white">Aylık Performans Raporu</h1>
            <p className="text-brand-text-secondary mt-1">Agent performansını ay ve kategoriye göre inceleyin.</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
          <div className="flex space-x-2 p-1 bg-brand-primary rounded-lg">
            {Object.values(Month).map(m => (
              <FilterButton key={m} label={m} isActive={month === m} onClick={() => setMonth(m)} />
            ))}
          </div>
          <div className="flex space-x-2 p-1 bg-brand-primary rounded-lg">
            {Object.values(Category).map(c => (
              <FilterButton key={c} label={c} isActive={category === c} onClick={() => setCategory(c)} />
            ))}
          </div>
        </div>
      </header>

      <div className="space-y-6">
        <ReportTable data={data} category={category} />
        <PerformanceCharts data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
