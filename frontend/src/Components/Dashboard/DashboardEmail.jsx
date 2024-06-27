
import DashboardBreadcrumbs from './DashboardBreadcrumbs'
import EmailSidebar from './EmailSidebar';
import EmailBoxBar from './EmailBoxBar';
import EmailDetail from './EmailDetail';

import { useState, useEffect } from 'react';

const DashboardEmail = () => {

  const breadcrumbList = ['Dashboard','Email'];
  
   const [inbox,setInbox] = useState([
     {
         box: "inbox",
         id: "inbox_01",
         name: "John",
         img:"https://modernize-angular-main.netlify.app/assets/images/profile/user-6.jpg",
         emailId: "john@example.com",
         subject: "Email Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, numquam.",
         date: "10-Jun",
         desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti repudiandae hic maiores quam ad facilis ab sunt amet, provident recusandae omnis vero accusamus possimus culpa. Dolore delectus officiis mollitia? Accusantium molestiae perferendis eius earum minima corporis possimus, consectetur velit quo tempore quisquam animi, vitae sequi voluptatem eligendi at ullam."
     },
     {
         box: "inbox",
         id: "inbox_02",
         name: "Daisy",
         img:"https://modernize-angular-main.netlify.app/assets/images/profile/user-4.jpg",
         emailId: "daisy@example.com",
         subject: "Inbox Email Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, numquam.",
         date: "10-Jun",
         desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti repudiandae hic maiores quam ad facilis ab sunt amet, provident recusandae omnis vero accusamus possimus culpa. Dolore delectus officiis mollitia? Accusantium molestiae perferendis eius earum minima corporis possimus, consectetur velit quo tempore quisquam animi, vitae sequi voluptatem eligendi at ullam."
     },
 ])
   const [sent, setSent] = useState([
     {
         box: "sent",
         id: "sent_01",
         name: "John Andrew",
         img:"https://modernize-angular-main.netlify.app/assets/images/profile/user-2.jpg",
         emailId: "johnAndrew@example.com",
         subject: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, numquam.",
         date: "10-Jun",
         desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti repudiandae hic maiores quam ad facilis ab sunt amet, provident recusandae omnis vero accusamus possimus culpa. Dolore delectus officiis mollitia? Accusantium molestiae perferendis eius earum minima corporis possimus, consectetur velit quo tempore quisquam animi, vitae sequi voluptatem eligendi at ullam."
     }
 ])
   const [trash, setTrash] = useState([
     {
         box: "trash",
         id: "trash_01",
         name: "Dew Trash",
         img:"https://modernize-angular-main.netlify.app/assets/images/profile/user-6.jpg",
         emailId: "dew@example.com",
         subject: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, numquam.",
         date: "10-Jun",
         desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti repudiandae hic maiores quam ad facilis ab sunt amet, provident recusandae omnis vero accusamus possimus culpa. Dolore delectus officiis mollitia? Accusantium molestiae perferendis eius earum minima corporis possimus, consectetur velit quo tempore quisquam animi, vitae sequi voluptatem eligendi at ullam."
     },
 ])
  const [data, setData]  = useState(inbox);
  const [title, setTitle] = useState("Inbox");
  const [selectedMail, setSelectedMail] = useState(null)

 useEffect(() => {
    if(title === "Inbox"){
      setData(inbox)
    }else if(title === "Trash"){
      setData(trash)
    }
 },[inbox,trash])

  const handleSelectedEmail = (mail) => {
    setSelectedMail(mail);
  }

  const handleSelectedTab = (targetTab) => {
    document.querySelectorAll(".email-tab").forEach((tab) => tab.classList.remove("active-email-tab"));
    targetTab.classList.add("active-email-tab");
    const dataTab = targetTab.getAttribute("data-tab")
    setTitle(dataTab);
    const tempSelectedMail = selectedMail;
    setSelectedMail(tempSelectedMail);
    if (dataTab === "Inbox"){
      setData(inbox);
    }else if (dataTab === "Sent"){
      setData(sent);
    }else if (dataTab === "Trash"){
      setData(trash);
    }
  }

  const moveToTrash = () => {
    const tempInbox = inbox.filter((mail) => mail.id !== selectedMail.id);
    setInbox(tempInbox);
    
    const tempSelectedMail = { ...selectedMail, box: "trash" };
    const newTrashMail = [...trash, tempSelectedMail];
    setTrash(newTrashMail);
    setSelectedMail(null);
  }
  const moveToInbox = () => {
    const tempTrash = trash.filter((mail) => mail.id !== selectedMail.id);
    setTrash(tempTrash);
    
    const tempSelectedMail = { ...selectedMail, box: "inbox" };
    const newInboxMail = [...inbox, tempSelectedMail];
    setInbox(newInboxMail);
    setSelectedMail(tempSelectedMail);
  }

  return (
    <>
        <div className='mt-[10px]'>
          <DashboardBreadcrumbs title='Email' breadcrumbList={breadcrumbList}/>

          <div className='dashboard-email-content'>
            <EmailSidebar onClick={handleSelectedTab} />
            <EmailBoxBar title={title} data={data} onClick={handleSelectedEmail} selectedMail={selectedMail}/>
            <EmailDetail 
              title={title} 
              selectedMail={selectedMail}  
              moveToTrash={moveToTrash}
              moveToInbox={moveToInbox}
            />
          </div>
        </div>
    </>
  )
}

export default DashboardEmail
