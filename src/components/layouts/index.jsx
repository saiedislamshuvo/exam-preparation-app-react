import { Link, NavLink, Outlet } from "react-router-dom";
import { useStoreState } from 'easy-peasy';

const Layout = () => {
    const token = useStoreState((state) => state.auth.token);

    return <>
        <div id="navbar" className="sticky">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold" href="#">Exam Prepration</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" activeclassname="active" >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/mocktests" activeclassname="active" >
                                        Mocktests
                                    </NavLink>
                                </li>
                            </ul>
                            {
                                token ? <Link to="/account" className="btn btn-primary">
                                    Account
                                </Link> : <Link to="/login" className="btn btn-primary">
                                    Login
                                </Link>
                            }

                        </div>
                    </div>
                </nav>
            </div>
        </div >
        <Outlet />
    </>;
};

export default Layout;