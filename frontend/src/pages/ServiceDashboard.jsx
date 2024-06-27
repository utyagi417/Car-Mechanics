import DashboardHeader from "../Components/Dashboard/DashboardHeader"
import DashboardSidebar from '../Components/Dashboard/DashboardSidebar';
import ServiceManage from "../Components/Dashboard/ServiceManage";

const ServiceDashboard = () => {
  return (
    <>
       <div className='flex'>
          <DashboardSidebar selectedTab="Services"/>
          <div className='w-[calc(100%-var(--dashboard-sidebar-width))] flex flex-col mx-6 mt-4 overflow-hidden'>
            <DashboardHeader />
            <div className='h-[calc(100%-8%)]'>
              <ServiceManage />
            </div>
          </div>
        </div>
    </>
  )
}

export default ServiceDashboard
