import { useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {

    const navigate = useNavigate();

    const [logout] = useStoreActions((actions) => [
        actions.auth.logout
    ]);

    const handleLogout = () => {
        if (confirm('Are you sure?')) {
            logout().then(() => {
                navigate('/');
            });
        }
    };

    return {
        handleLogout,
    };
};

export default useAuth;