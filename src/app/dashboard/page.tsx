'use client';

import { useUser } from '@clerk/nextjs';

const Dashboard = () => {
  const { user } = useUser();
  console.log('user', user?.fullName);
  return (
    <div className='flex justify-center items-center'>
      Welcome, {user?.fullName}
    </div>
  );
};
export default Dashboard;