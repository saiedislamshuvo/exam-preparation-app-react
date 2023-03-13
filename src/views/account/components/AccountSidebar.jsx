import { Link } from "react-router-dom";

const AccountSidebar = () => (<nav className="account-navigation d-none d-md-block">
    <div className="position-sticky pt-3">
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link
                    to="/"
                    className="nav-link active"
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/mocktests"
                    className="nav-link"
                >
                    Mocktest
                </Link>
            </li>
        </ul >
    </div>
</nav >);

export default AccountSidebar;