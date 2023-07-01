import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const userData=JSON.parse(localStorage.getItem('userData')|| '{}');
  const deleteSession=async () => {
    localStorage.removeItem('userData');
   }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <p className="text-xl font-bold text-center text-gray-800 mb-8">Name : {userData.name}</p>
      <p className="text-xl font-bold text-center text-gray-800 mb-8">Email : {userData.email}</p>
    <Link to="/signin" id='logout-link'><button id='logout' onClick={deleteSession} className='bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white '> Logout </button></Link>
    </div>
  );
}

export default Dashboard;