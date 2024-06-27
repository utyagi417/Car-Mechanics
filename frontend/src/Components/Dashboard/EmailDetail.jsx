
import { FaTrashAlt } from "react-icons/fa";
import { FaTrashRestore } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BsExclamationDiamond } from "react-icons/bs";
import { CiAlignRight } from "react-icons/ci";

const EmailDetail = ({selectedMail=null, moveToTrash, moveToInbox}) => {
  return (
   <>
    {selectedMail===null ? (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-340px)]">
            <h1 className="text-2xl">Please select a mail</h1>
            <div className="no-mail-selected" />
        </div>
    ):(
        <div className="email-detail-box">
            <div className="email-detail-header">
                <div className="flex items-center justify-start cursor-pointer">
                    <span>
                        <CiAlignRight size={30}/>
                    </span>
                    <span>
                        <CiStar size={30}/>
                    </span>
                    <span>
                        <BsExclamationDiamond size={25}/>
                    </span>
                </div>
                {selectedMail.box === "inbox" && <span onClick={moveToTrash}>
                    <FaTrashAlt size={25}/>
                </span>}
                {selectedMail.box === "trash" && <span onClick={moveToInbox}>
                    <FaTrashRestore size={25}/>
                </span>}
            </div>

            <div className="m-10">
                <div className="flex justify-between">
                    <div className="email-sender-detail">
                        <div className="avatar-icon" style={{backgroundImage:`url(${selectedMail.img})`}}/>
                        <div className="user-info">
                            <h1>{selectedMail.name}</h1>
                            <h5 className="font-light">{selectedMail.emailId}</h5>
                        </div>
                    </div>  
                    <h5 className="email-date">{selectedMail.date}</h5>
                </div>

                <div className="email-content">
                    <h2 className="text-lg">
                        {selectedMail.subject}
                    </h2>
                    <p className="font-light mt-6 text-justify">
                        {selectedMail.desc}
                    </p>
                </div>

                <button className="dbtn-one">Reply</button>
            </div>
        </div>

    )}
   
   </>
  )
}

export default EmailDetail
