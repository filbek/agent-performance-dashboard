
import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { performanceData } from './data/mockData';
import { Category, Month } from './types';

const App: React.FC = () => {
  const [month, setMonth] = useState<Month>(Month.June);
  const [category, setCategory] = useState<Category>(Category.International);

  const activeData = useMemo(() => {
    return performanceData[month][category];
  }, [month, category]);

  return (
    <div className="flex w-full h-screen font-sans bg-brand-primary">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Dashboard
          data={activeData}
          month={month}
          category={category}
          setMonth={setMonth}
          setCategory={setCategory}
        />
      </main>
    </div>
  );
};

export default App;
