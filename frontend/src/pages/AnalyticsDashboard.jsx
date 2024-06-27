import DashboardHeader from "../Components/Dashboard/DashboardHeader"
import DashboardSidebar from '../Components/Dashboard/DashboardSidebar';
import Analytics from "../Components/Dashboard/Analytics";


const AnalyticsDashboard = () => {
  return (
    <>
        <div className='flex'>
          <DashboardSidebar selectedTab="Analytics"/>
          <div className='w-[calc(100%-var(--dashboard-sidebar-width))] flex flex-col mx-6 mt-4 overflow-hidden'>
            <DashboardHeader />
            <div className='h-[calc(100%-8%)]'>
              <Analytics />
            </div>
          </div>
        </div>
    
    </>
  )
}

export default AnalyticsDashboard
