import './sidebar.scss';

interface SidebarProps{
    headerText?: string;
    linkList?: string [];
};

const Sidebar = ({...props}: SidebarProps)=>{
    return(
        <h2>I am sidebar</h2>
    );
};

export default Sidebar;