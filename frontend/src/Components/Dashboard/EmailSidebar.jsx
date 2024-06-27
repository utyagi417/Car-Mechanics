

import { FaPaperPlane } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const EmailSidebar = ({onClick}) => {
  return (
    <>
        <div className="email-sidebar">
            <ul>
                <li className="email-tab active-email-tab" data-tab="Inbox" onClick={(e) => onClick(e.target)}>
                  <MdOutlineEmail size={25}/>Inbox
                </li>
                <li className="email-tab" data-tab="Sent" onClick={(e) => onClick(e.target)}>
                  <FaPaperPlane size={25} /> Sent
                </li>
                <li className="email-tab" data-tab="Trash" onClick={(e) => onClick(e.target)}>
                  <FaTrashAlt size={25}/>Trash
                </li>
            </ul>
        </div>
    </>
  )
}

export default EmailSidebar
