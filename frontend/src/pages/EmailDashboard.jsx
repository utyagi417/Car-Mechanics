import '../styles/dashboard.css'

import Preloader from '../Components/Preloader';
import DashboardHeader from "../Components/Dashboard/DashboardHeader"
import DashboardSidebar from '../Components/Dashboard/DashboardSidebar';
import DashboardEmail from '../Components/Dashboard/DashboardEmail';

const EmailDashboard = () => {
  return (
    <>
        <div className='flex'>
          <DashboardSidebar selectedTab="Email"/>
          <div className='w-[calc(100%-var(--dashboard-sidebar-width))] flex flex-col mx-6 mt-4'>
            <DashboardHeader />
            <div className='h-[calc(100%-8%)]'>
              <DashboardEmail />
            </div>
          </div>
        </div>
    </>
  )
}

export default EmailDashboard
