
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight,faAngleRight } from '@fortawesome/free-solid-svg-icons';

import ButtonThree from '../Buttons/ButtonThree';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ContactForm = () => {

    const [data, setData] = useState({
        fullName:"",
        email:"",
        subject:"",
        description:""
    });


    const verifyData = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailRegex.test(data.email);

        const subjectWords = data.subject.trim().split(/\s+/);
        const validSubject = subjectWords.length >= 5;

        const descWords = data.description.trim().split(/\s+/);
        const validDesc = descWords.length >= 100;

        if(data.fullName.length === 0){
            toast.error("Please enter a full name");
            return false;
        }

        if(!isValidEmail){
            toast.error("Invalid email address");
            return false;
        }
        if(!validSubject){
            toast.error("Enter Appropriate subject");
            return false;
        }
        if(!validDesc){
            toast.error("Enter Detailed Description");
            return false;
        }

        return true;
    }

    const handleSendQuery = async () => {
        if(!verifyData()){
            return;
        }
        try {
            const res = await fetch("/api/contact/",{
                method: "POST",
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(data)
            })

            const resData = await res.json();
            if(resData.error){
                toast.error(resData.error);
            }else{
                toast.success("Query Sent Successfully");
                window.location.reload();
            }
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error.message);
        }
    }


  return (
    <>
        <section id="contact-form">
            <div className="container-xl">
                <div className="row">
                    <div className="col-lg-5 pb-10">
                        <div className="text-wrapper lg:p-10">
                            <div className="item--subtitle !text-7xl">
                                <FontAwesomeIcon icon={faAnglesRight} />
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <h1 className="item--title !text-[var(--text-color)] pb-6">
                                Feel Free To Ask Us Anything For Car Servicing
                            </h1>
                            <p className="item--description !text-[var(--text-color)] !text-justify">When you bring your vehicle to Ducatibox Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands. We take every possible step to ensure that your experience with us is pleasant and efficient.</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form className='flex flex-col justify-center gap-6'>
                            <div className='flex items-center justify-center gap-6 flex-wrap xl:flex-nowrap'> 
                                <input className='input-field' 
                                    type="text" 
                                    placeholder='Full Name*' 
                                    required
                                    value={data.fullName}
                                    onChange={(e) => setData({...data, fullName: e.target.value})}
                                />
                                <input className='input-field' 
                                    type="email" 
                                    placeholder='Email*'
                                    required
                                    value={data.email}
                                    onChange={(e) => setData({...data, email: e.target.value})}
                                />
                            </div>
                            <input className='input-field' 
                                type="text" 
                                placeholder='Subject (min 5 words)'
                                value={data.subject}
                                onChange={(e) => setData({...data, subject: e.target.value})}
                            />
                            <textarea className='textarea-field' 
                                cols={30} rows={10} 
                                placeholder='Text (min 100 words)' 
                                value={data.description}
                                onChange={(e) => setData({...data, description: e.target.value})}
                            />
                            
                            <div className='col'>
                                <ButtonThree firstText="Send Query" color='gray' onClick={handleSendQuery}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactForm
