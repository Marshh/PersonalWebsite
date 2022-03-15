import { AiFillHome, AiFillMail, AiFillExperiment } from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs';

const Sidebar = () => {
    return(
        <div className="fixed top-0 left-0 h-screen w-32 m-0
                        flex flex-col
                        bg-primary text-secondary shadow-lg">
            <SideBarIcon icon={<AiFillHome size="64" /> } text={"Home"}/>
            <SideBarIcon icon={<BsPersonFill size="64" />} text={"About Me"}/>
            <SideBarIcon icon={<AiFillExperiment size="64"/>} text={"Projects"}/>
            <SideBarIcon icon={<AiFillMail size="64"/>} text={"Contact"}/>
        </div>
    );
};

const SideBarIcon = ({icon, text='tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default Sidebar;