import { AiFillHome, AiFillMail, AiFillTool } from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs';

const Sidebar = () => {
    return(
        <div className="fixed top-0 left-0 h-screen w-32 m-0
                        flex flex-col
                        bg-primary text-secondary shadow-lg">
            <SideBarIcon icon={<AiFillHome size="64"/>}/>
            <SideBarIcon icon={<BsPersonFill size="64"/>}/>
            <SideBarIcon icon={<AiFillTool size="64"/>}/>
            <SideBarIcon icon={<AiFillMail size="64"/>}/>
        </div>
    );
};

const SideBarIcon = ({icon}) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);

export default Sidebar;