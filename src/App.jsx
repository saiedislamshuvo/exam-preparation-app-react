import { useState } from 'react'
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import { useStoreActions, useStoreState } from 'easy-peasy';

const RequireAuth = ({ children }) => {
  const isAuthenticated = useStoreState((state) => state.auth.token);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

const App = () => {
  return <div >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mocktests" element={<Mocktests />} />
        <Route path="login" element={<Login />} />
        <Route path="account" element={
          <RequireAuth >
            <Account />
          </RequireAuth>
        } />
        <Route path="questions" element={<Questions />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </div >
}

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
                  <Link className="nav-link active" to="/" >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mocktests" >
                    Mocktests
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/questions" >
                    Questions
                  </Link>
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
  </>
}

const Home = () => {
  return <div>
    <div className="bg-app vh-60">
      <div className="container">
        <div className="row py-3 align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="text-heading-hero">
              exam qoutes
            </h1>
            <p className="text-p-hero px-5 px-lg-0">
              about mocktest
            </p>
          </div>
          <div className="col-md-6 vh-50-max">
            <img className="img-fluid br-20" src="/public/images/img-1.jpg" alt="exam" />
          </div>
        </div>
      </div >
    </div >
  </div>
}

const Mocktests = () => {
  return <div className='container'>
    <div className="py-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card course-card">
            <div className="card-header">
              <div className="course-card-rating">
                <i className="fa fa-star"></i>
                5.0
              </div>
              <a>
                <img
                  src="/public/images/placeholder.jpg"
                  className="card-img-top course-card-img"
                  alt=""
                />
              </a>
            </div>
            <div className="card-body py-2 px-3">
              <button
                type="button"
                className="btn btn-sm tag-yellow mb-1"
              >
                course title
              </button>
              <button type="button" className="btn mt-3"></button>
              <a>
                <h5 className="card-title my-1">
                  course name
                </h5>
              </a>
            </div>
            <div className="card-footer py-1">
              <div className="d-flex justify-content-end">
                <a className="btn btn-text" >
                  See Details
                </a>
              </div>
            </div>
          </div >
        </div>
      </div>
    </div>
  </div >
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useStoreActions((actions) => actions.auth.login);
  const token = useStoreState((state) => state.auth.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  if (token) {
    return <div>You are logged in!</div>;
  }

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
  </div>
}

const Account = () => {
  return <div className='container'>
    <div className="account-layout">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 sidebar mb-4">
            <AccountSidebar />
          </div>
          <div className="main col-lg-9 ms-sm-auto px-md-4">

          </div>
        </div>
      </div>
    </div>
  </div>
}

const AccountSidebar = () => {
  return <nav className="account-navigation d-none d-md-block">
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
          >
            Home
          </Link>
          <Link
            to="/mocktests"
            className="nav-link"
          >
            Mocktest
          </Link>
        </li>
      </ul >
    </div>
  </nav >
}

const Questions = () => {
  return <div className=''>
    <div className="mocktest-exam app-layout">
      {/* <app-breadcrumb
      :title="this.$route.query.topic || 'Questions Builder'"
      subtitle="Build Questions"
      className="px-4 px-md-0"
    /> */}
      <div className="container my-md-5">
        <form>
          <div className="card mocktest-card">
            <div className="card-header py-2 py-md-4 px-4 sticky-sm">
              <div
                className="d-flex justify-content-between align-items-center"
              >
                <h5 className="text-body1 mb-0">Questions</h5>
                <div className="d-flex align-items-center">
                  <div className="me-4">
                    <div v-if="isLoading" className="spinner">
                      <div className="double-bounce1"></div>
                      <div className="double-bounce2"></div>
                    </div>
                  </div>
                  <button v-if="editMode" type="submit" className="btn btn-primary me-3">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary me-3"
                  >
                    Add Questions
                  </button>
                  <h5 className="text-body1 mb-0 me-3">edit:</h5>
                  {/* <toggle-button @change="handleEditMode" /> */}
                </div>
              </div>
            </div>
            <div className="card-body h-min-40 mb-5 mb-md-0">
              <div >
                <div className="mx-2 mx-md-3 my-3 my-md-5">
                  <div>
                    <div
                      v-if="isEdittingQuestionText[question.id] || false"
                      className="input-group"
                    >
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div >
                      <h6 className="text-body2">
                        1. questions
                        <button
                          v-if="editMode"
                          className="btn btn-sm"

                        >
                          <i className="fas fa-pen"></i>
                        </button>
                      </h6>
                    </div>
                    <div className="row mt-3 mt-md-5">
                      <div
                        className="col-md-6"
                      >
                        <div className="my-3">
                          <input
                            type="text"
                            className="form-control mb-0"
                          />
                        </div>
                        <div
                          className="card mocktest-option-item my-3"
                        >
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex">
                                <button
                                  className="btn btn-sm me-2"
                                  title="option-edit-btn"
                                >
                                  <i className="fas fa-pen" title="option-edit-btn"></i>
                                </button>
                                <h6 className="text-body2 me-4 mb-0">
                                  optionsName[index]
                                </h6>
                                <p className="option-text mb-0">
                                  option
                                </p>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="my-3"
                    >
                      <input
                        type="text"
                        className="form-control mb-0"
                      />
                    </div>
                    <div >
                      <p className="text-p">
                        explanations
                        <button
                          v-if="editMode"
                          className="btn btn-sm"
                        >
                          <i className="fas fa-pen"></i>
                        </button>
                      </p>
                    </div>
                  </div >
                </div >
              </div >
              <div >
                <div className="mx-5 my-5">
                  <h6 className="text-body2">No Questions Found!</h6>
                </div>
              </div>
            </div >
            <div className="card-footer py-2 d-none d-md-block"></div>
          </div >
        </form >
      </div >
    </div >
  </div >
}

export default App
