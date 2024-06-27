import AppRoute from './AppRoute'
import {Toaster} from "react-hot-toast"

import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function App() {

  const location = useLocation();

  const handleModeChange = () => {
    // Container 
    const modeBtn = document.getElementById("mode-btn");
    modeBtn.classList.toggle("night-mode-btn-container");

    //Outer Circle
    const outerCircle = document.getElementById("outer-circle");
    outerCircle.classList.toggle("night-mode-outer-circle");

    // Setting up for Night Mode (Circle)
    const modeCircle = document.getElementById("mode-circle");
    modeCircle.classList.toggle("night-mode-inner-circle");
    modeCircle.classList.toggle("rotate-circle")

    // Changing background and color 
    let currentMode = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');
  
    if(currentMode === "white"){
      localStorage.setItem("mode",JSON.stringify(
        {mode: "dark",
        bg: "black", 
        text: "white", 
        bg_1:"url('Images/background/bg-dark.png')",
        bg_2:"url('Images/background/bg-dark-2.png')",
      }
      ));
      document.documentElement.style.setProperty("--bg-color","black");
      document.documentElement.style.setProperty("--text-color","white");
      document.documentElement.style.setProperty("--bg-image-1","url('/Images/background/bg-dark.png')");
      document.documentElement.style.setProperty("--bg-image-2","url('/Images/background/bg-dark-2.png')");
    }else{
      localStorage.setItem("mode",JSON.stringify(
        {mode: "light",
        bg: "white",
        text: "black",
        bg_1:"url('Images/background/bg-light.png')",
        bg_2:"url('Images/background/bg-light-2.png')",
      }
      ));
      document.documentElement.style.setProperty("--bg-color","white");
      document.documentElement.style.setProperty("--text-color","black");
      document.documentElement.style.setProperty("--bg-image-1","url('/Images/background/bg-light.png')");
      document.documentElement.style.setProperty("--bg-image-2","url('/Images/background/bg-light-2.png')");
    }
  }

  const isPaymentPage = location.pathname.includes('/payment-success') || location.pathname === '/payment-failed';
 
  useEffect(() => {
    if(location.pathname.includes('/dashboard')){
      document.body.style.overflow = "auto";
    }
  },[])

  return (
    <>
      {/* <Preloader /> */}
      <Toaster
        position="top-left"
        reverseOrder={false}
      />
      <div id='mode-btn' className='day-mode-btn-container' onClick={handleModeChange}>
        <div id='outer-circle' className='day-mode-outer-circle' >
        <div id="mode-circle" className='day-mode-inner-circle' />
        </div>
      </div>
      <AppRoute />
      {/* {!isPaymentPage && <Footer />}  */}
    </>
  )
}

export default App


      // Brand Images
      {/* <div className='flex justify-center items-center flex-wrap gap-4'>
        {data.make.map((item,i) => {
          return (
            <div className='w-[100px] h-[100px]'>
              <img src={item.img} alt={item.name} />
            </div>
          )
        })}
      </div> */}

      
    // // Rotating Mode Circle
    // let currentDegree = parseFloat(getComputedStyle(modeCircle).getPropertyValue('--degree'));
    // currentDegree += 360;
    // modeCircle.style.setProperty("--degree",currentDegree + "deg");



    // box on box (stack)

          {/* <div className='relative inline-block skew-x-[10deg]'>
        <div className='w-[400px] h-[400px] bg-red-600 z-[998] absolute top-[10px] left-[10px] rounded-[10px]' />
        <div className='w-[400px] h-[400px] bg-yellow-500  z-[997] absolute top-0 left-0 rounded-[10px]' />
        <div className='w-[400px] h-[400px] bg-green-500 z-[999] absolute top-[25px] left-[25px] rounded-[10px]'>
          <div className='w-[400px] h-[400px] bg-blue-500 z-[999] absolute top-[20px] left-[20px] rounded-[10px]' />
        </div>
      </div> */}