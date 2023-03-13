import AccountSidebar from "./AccountSidebar";

const AccountLayout = (props) => (<div className='container'>
    <div className="account-layout">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 sidebar mb-4">
                    <AccountSidebar />
                </div>
                <div className="main col-lg-9 ms-sm-auto px-md-4 mt-3">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
</div>);

export default AccountLayout;