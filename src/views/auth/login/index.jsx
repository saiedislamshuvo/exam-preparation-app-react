import { useState, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useStoreActions((actions) => actions.auth.login);
    const token = useStoreState((state) => state.auth.token);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
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
                        <h3 className="text-bold1">Welcome</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
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
                        <input type="submit" value="Sign in" className="btn btn-block btn-primary w-100" />
                    </form >
                </div>
            </div>
        </div >
    </div>;
};

export default Login;