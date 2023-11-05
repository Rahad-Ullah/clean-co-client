import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="flex menu-horizontal gap-4">
            <li><NavLink to={'about'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'}>About</NavLink></li>
            <li><NavLink to={'contact'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'}>Contact</NavLink></li>
            <li><NavLink to={'admin'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'}>Admin</NavLink></li>
    </ul>
    );
};

export default Navbar;