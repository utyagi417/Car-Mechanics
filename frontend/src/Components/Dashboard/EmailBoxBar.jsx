import { CiStar } from "react-icons/ci";

const EmailBoxBar = ({onClick, data, title="Title",selectedMail}) => {

  return (
    <>
        <div className="email-boxbar">
            <h1 className="title">{title}</h1>
            <ul>
                {data.map((item,i) => (
                    <li key={i} onClick={() => onClick(item)} 
                    className={`${selectedMail?.id === item.id ? "bg-[var(--color-light-blue)] !text-[var(--color-black)]":""}`}>
                        <div className="flex justify-between">
                            <h3 className="font-bold">{item.name}</h3>
                            <h4 className="font-light">{item.date}</h4>
                        </div>
                        <p className="font-light whitespace-nowrap overflow-hidden text-ellipsis">
                            {item.subject}
                        </p>
                        <p className="flex">
                            <CiStar size={25}/>
                            <CiStar size={25}/>
                            <CiStar size={25}/>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default EmailBoxBar;

