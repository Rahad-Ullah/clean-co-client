import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <ul className="p-4 w-80 min-h-full bg-base-200">
            <li><NavLink to={'about'} className={({isActive}) => isActive ? 'btn btn-primary w-full' : 'btn btn-ghost w-full'}>About</NavLink></li>
            <li><NavLink to={'contact'} className={({isActive}) => isActive ? 'btn btn-primary w-full' : 'btn btn-ghost w-full'}>Contact</NavLink></li>
            <li><NavLink to={'admin'} className={({isActive}) => isActive ? 'btn btn-primary w-full' : 'btn btn-ghost w-full'}>Admin</NavLink></li>
    </ul>
    );
};

export default Sidebar;