import { IoMenu } from "react-icons/io5";

import { useAuthContext } from "../../Context/AuthContext";

const DashboardHeader = () => {


  const {authUser} = useAuthContext();
  return (
    <>
      <div className='dashboard-header'>
        <div className='menu-icon'>
          <IoMenu size={30}/>
        </div>
        <div className='user-profile'>
          <div className="avatar-icon" />
          <div className="user-details">
            <h1>{authUser.username}</h1>
            <h5>{authUser.email}</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHeader
