
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import PageHeader from '../Components/PageHeader';
import ButtonTwo from '../Components/Buttons/ButtonTwo';
import { useState } from 'react';
import {toast} from "react-hot-toast";
import Footer from '../Components/Footer/Footer';

import { useAuthContext } from '../Context/AuthContext';

const SignUp = () => {

    const navigate = useNavigate();
    const {setAuthUser} = useAuthContext();

    const [user, setUser] = useState({
        username:"",
        email:"",
        password:"",
        confirm_password:"",
    });


    const verifyUserDetails = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailRegex.test(user.email);
        const passwordMatches = user.password === user.confirm_password;

        if(user.username.length >= 4 && isValidEmail && user.password.length >= 6 && passwordMatches){
            return true;
        }else{
            return false;
        }
    }

    const handleSignUp = async () => {
        if(!verifyUserDetails()) return toast.error("Invalid Information Entered",{
            duration: 1000,
        });

        try {
            const response = await fetch("/api/auth/signup",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(user)
            })
            const data = await response.json();
            
            if(data.error){
                toast.error(data.error);
            }else{
                const user = {
                    _id: data._id,
                    username: data.username,
                    email: data.email,
                }
                sessionStorage.setItem("SecureAuth_v2_srr8i9rto34zx_AuthUser_Mechanics",JSON.stringify(user));
                setAuthUser(user);
                navigate("/");
            }

        } catch (error) {
            toast.error("Something unexpected Occurs!! Try again later");
            console.log(error.message);
        }
    }

  return (
    <>  
        <Navbar selectedTab='login'/>
        <PageHeader  heading='My Account'/>

        <section className='!pb-[300px]'>
            <div className='container-xl'>
                <h1 className='item--title !mb-[70px] !text-[var(--text-color)]'>Sign Up</h1>

                <div className=''>
                    <input className='input-field !mb-10' 
                        type="text" 
                        placeholder='User Name'
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}
                    />
                    <input className='input-field !mb-10' 
                        type="email" 
                        placeholder='Email Address'
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                    <input className='input-field !mb-8' 
                        type="password" 
                        placeholder='Password'
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                    <input className='input-field !mb-8' 
                        type="password" 
                        placeholder='Confirm Password'
                        value={user.confirm_password}
                        onChange={(e) => setUser({...user, confirm_password: e.target.value})}
                    />
                    <p className='item--description !mb-10 '>Already have an account? Login {" "}
                    <span className='text-red-600 underline underline-offset-2 cursor-pointer'>
                        <Link to="/login">Here</Link>
                    </span>
                    </p>
                </div>

                <ButtonTwo text='Sign Up' onClick={handleSignUp}/>

            </div>

        </section>

        <Footer />
    </>
  )
}

export default SignUp
