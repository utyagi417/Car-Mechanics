import {Stack, Group} from  "@mantine/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faToolbox,faXmark,faBars } from '@fortawesome/free-solid-svg-icons'

import { FaChartPie } from "react-icons/fa6";
import { BiLogOutCircle } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";

import { useEffect } from "react";

import {Link} from "react-router-dom"
import toast from "react-hot-toast";

const DashboardSidebar = ({selectedTab}) => {

    useEffect(() => {
        document.querySelector(`li[data-tab='${selectedTab}']`).classList.add("active-tab");

    },[selectedTab])

    const handleLogout = () => {
        fetch("/api/auth/logout")
        .then((response) => {
            return response.json();
        }).then(data => {
            sessionStorage.removeItem("SecureAuth_v2_srr8i9rto34zx_AuthUser_Mechanics");
            window.location.reload();
            toast.success(data.message);
        }).catch((error) => {
            toast.error("Something went wrong!!");
            console.log(error.message)
        })
    }

  return (
    <>
        <div className="dashboard-sidebar">
            <Stack className="h-full">
                <Group>
                    <h1 className="item--title text-center !font-[var(--font-family-heading)] !text-[var(--text-color)] ">
                        <FontAwesomeIcon icon={faToolbox} style={{color:"var(--color-red)"}}/>
                        <span className="ml-3">
                            FIX
                            <span className="text-[var(--color-red)]">
                            TON
                            </span>
                        </span>
                    </h1>
                </Group>

                <div className="dashboard-sidebar-links">
                    <ul>
                        <li className="sidebar-list" data-tab="Analytics"><FaChartPie size={25} /> 
                            <Link to="/AutoFixers/admin/dashboard/analytics">Analytics</Link>
                        </li>
                        <li className="sidebar-list" data-tab="Email"><MdOutlineEmail size={25}/> <Link to="/AutoFixers/admin/dashboard/email">Email</Link></li>
                        <li className="sidebar-list" data-tab="Services">
                            <MdDesignServices size={25} /> 
                            <Link to="/AutoFixers/admin/dashboard/service/manage">Services</Link>
                        </li>
                    </ul>
                    <li onClick={handleLogout}><BiLogOutCircle size={25} /> Logout</li>
                </div>
            </Stack>
        </div>
    </>
  )
}

export default DashboardSidebar
