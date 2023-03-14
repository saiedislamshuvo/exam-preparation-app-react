import { useState, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useNavigate, Link } from 'react-router-dom';
import { notify, fieldRequired } from '../../../services/helper/utils';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const register = useStoreActions((actions) => actions.auth.register);
    const token = useStoreState((state) => state.auth.token);

    const handleSubmit = (e) => {
        e.preventDefault();
        const status = fieldRequired([
            { name: 'Name', value: name },
            { name: 'Email', value: email },
            { name: 'Password', value: password },
            { name: 'confirmPassword', value: confirmPassword }
        ]);
        if (status) return;
        if (password != confirmPassword) {
            notify({
                message: 'Confirm password not matched!',
                status: false,
            });
            return
        }
        register({ name, email, password });
    };

    useEffect(() => {
        if (token) {
            navigate('/account');
        }
    }, [token]);

    return <div className='container'>
        <div className='app-layout'>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="mt-3 mb-lg-5">
                        <h3 className="text-bold1">Sign Up</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group first mt-4">
                            <label htmlFor="name" className="d-none d-lg-block">Name</label>
                            <input type="text" className="form-control" placeholder="Name" id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group first mt-4">
                            <label htmlFor="email" className="d-none d-lg-block">Email</label>
                            <input type="email" className="form-control" placeholder="your@email.com" id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group last mb-3 mt-4">
                            <label htmlFor="password-login" className="d-none d-lg-block">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Your Password"
                                id="password-login"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group last mb-3 mt-4">
                            <label htmlFor="password-confirm" className="d-none d-lg-block">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Your Password"
                                id="password-confirm"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <input type="submit" value="Sign Up" className="btn btn-block btn-primary w-100" />
                    </form >
                    <div className='mt-2'>
                        <p className="text-body1">Already have an account? <Link to="/login" className="text-active" >Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div >
    </div>;
};

export default Register;