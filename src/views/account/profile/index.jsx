import { useState, useEffect } from "react";
import AccountLayout from "../components/AccountLayout";
import { useStoreActions, useStoreState } from "easy-peasy";

const Profile = () => {

    const [, user] = useStoreState((state) => [
        state.auth.token,
        state.auth.user
    ]);

    return <AccountLayout>
        <div className="app-layout">
            <div className="bg-app br-20 my-4" >
                <div className="row p-4">
                    <div className="col-12">
                        <h2 className="text-secondary-heading1">
                            Welcome
                        </h2>
                        <form onSubmit={() => { }}>
                            <div className="form-group">
                                <div className="d-flex align-items-center mt-4">
                                    <div className="mx-2">
                                        <label className="fw-bold">Name</label>
                                        <input
                                            type="text"
                                            className="form-control mb-0"
                                            placeholder="Enter Name"
                                            value={user.name}
                                            readOnly
                                        />
                                    </div>
                                    <div className="mx-2">
                                        <label className="fw-bold">Email</label>
                                        <input
                                            type="text"
                                            className="form-control mb-0"
                                            placeholder="Email"
                                            value={user.email}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ChangePasswordForm />
        </div>
    </AccountLayout>
}

const ChangePasswordForm = () => {
    const [curPassword, setCurPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const changePassword = useStoreActions((actions) => actions.auth.changePassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (curPassword != '' && newPassword != '' && confirmPassword != '') {
            if (newPassword == confirmPassword) {
                changePassword({
                    current_password: curPassword,
                    new_password: newPassword
                });
            }
        }
    }

    return <div className="bg-app br-20 my-4" >
        <div className="row p-4">
            <div className="col-12">
                <h2 className="text-secondary-heading1">
                    Change Password
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="d-flex align-items-center mt-4">
                            <div className="mx-2">
                                <label className="fw-bold">Current Password</label>
                                <input
                                    type="password"
                                    className="form-control mb-0"
                                    placeholder="Enter Current Password"
                                    value={curPassword}
                                    onChange={(e) => setCurPassword(e.target.value)}
                                />
                            </div>
                            <div className="mx-2">
                                <label className="fw-bold">New Password</label>
                                <input
                                    type="password"
                                    className="form-control mb-0"
                                    placeholder="Enter New Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className="mx-2">
                                <label className="fw-bold">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control mb-0"
                                    placeholder="Enter Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className='mx-3'>
                                <label className="fw-bold">.</label>
                                <input type="submit" className="btn btn-dark" value="Submit" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default Profile;