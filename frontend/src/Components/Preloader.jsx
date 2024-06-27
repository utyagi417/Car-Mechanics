import { useEffect } from "react"



const Preloader = () => {

    useEffect(() => {

        document.body.style.overflow = "hidden";

        const hidePreloader = () => {
            const preloader = document.getElementById('preloader');
            preloader.classList.add('hide');
        }   
        const removeBodyOverflowHidden = () => {
            document.body.style.overflow = "auto";
            document.body.style.overflowX = "hidden";
        }

        const timeOut = setTimeout(() => {
            hidePreloader();
            removeBodyOverflowHidden();
        },1000)

    },[])
    



  return (
    <>
        <div id="preloader" className='preloader-container'>
            <div className='preloader'>
                <div className='preloader-wheel' />
            </div>
            <h1>AUTO<span>FIXERS</span></h1>
        </div>
    </>
  )
}

export default Preloader
