import { NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const AccountSidebar = () => {
    const { handleLogout } = useAuth();

    return <nav className="account-navigation d-none d-md-block">
        <div className="position-sticky pt-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink
                        to="/account"
                        className="nav-link"
                        activeclassname="active"
                    >
                        My Mocktests
                    </NavLink >
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/results"
                        className="nav-link"
                        activeclassname="active"
                    >
                        Results
                    </NavLink >
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/profile"
                        className="nav-link"
                        activeclassname="active"
                    >
                        Profile
                    </NavLink >
                </li>
                <li onClick={handleLogout} className="nav-item">
                    <a href='#' className='nav-link'>
                        Logout
                    </a>
                </li>
            </ul >
        </div>
    </nav >;
};

export default AccountSidebar;