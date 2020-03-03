import React from 'react';
import DashboardHeader from './DashboardHeader';
import ClientProgramList from './ClientProgramList';

const Dashboard = () => {
  return (
    <div className="flex flex-col px-4 py-5 lg:w-full lg:h-auto lg:px-8 py-10" style={{ minHeight: 'calc(100vh - 4.10rem)' }}>
      <DashboardHeader />
      <ClientProgramList />
      {/* mobile-only button */}
      <button className="bg-blaze-orange text-white font-semibold text-lg text-center rounded py-2 lg:hidden">
        + Add new client
      </button>
    </div>
  );
};

export default Dashboard;
