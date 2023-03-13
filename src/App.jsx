import { Routes, Route, Navigate } from "react-router-dom";
import { useStoreState } from 'easy-peasy';
import Layout from "./components/layouts";
import Home from './views/home/index';
import Mocktests from './views/mocktests/index';
import Login from './views/auth/login/index';
import Account from './views/account/dashboard/index';

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
