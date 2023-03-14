import { Routes, Route, Navigate } from "react-router-dom";
import { useStoreState } from 'easy-peasy';
import Layout from "./components/layouts";
import Home from './views/home/index';
import Mocktests from './views/mocktests/index';
import Login from './views/auth/login/index';
import Account from './views/account/dashboard/index';
import Questions from './views/account/questions/index';
import CreateQuestions from './views/account/questions/create.jsx';
import ExamView from './views/account/exam';
import Results from './views/account/results';
import Profile from "./views/account/profile";
import Register from "./views/auth/register";

const RequireAuth = ({ children }) => {
  const isAuthenticated = useStoreState((state) => state.auth.token);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  return <div >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mocktests" element={<Mocktests />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<RequireAuth ><Account /></RequireAuth>} />
        <Route path="questions/:mocktestid" element={<RequireAuth><Questions /></RequireAuth>} />
        <Route path="questions/:mocktestid/create" element={<RequireAuth><CreateQuestions /></RequireAuth>} />
        <Route path="exam/:mocktestid" element={<RequireAuth><ExamView /></RequireAuth>} />
        <Route path="results" element={<RequireAuth><Results /></RequireAuth>} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </div >;
};

export default App;
