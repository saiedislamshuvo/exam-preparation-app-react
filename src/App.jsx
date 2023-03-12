import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useStoreActions, useStoreState } from 'easy-peasy';

const App = () => {
  return <div >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mocktests" element={<Mocktests />} />
        <Route path="login" element={<Login />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </div >
}

const Layout = () => {
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
                  <Link className="nav-link" to="/login" >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/account" >
                    Account
                  </Link>
                </li>
              </ul>
              <button type="button" className="btn btn-primary">
                Login
              </button>
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
              <a
              >
                <img
                  src="/public/images/placeholder.jpg"
                  className="card-img-top course-card-img"
                  alt=""
                />
              </a>
            </div>
            <div className="card-body py-2 px-3">
              <button
                v-if="course.accredation_name || false"
                type="button"
                className="btn btn-sm tag-yellow mb-1"
              >
                course titrle
              </button>
              <button v-else type="button" className="btn mt-3"></button>
              <a

              >
                <h5 className="card-title my-1">
                  course name
                </h5>
              </a>
            </div>
            <div className="card-footer py-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-0 text-price">

                    200৳
                  </p>
                </div>
                <a
                  className="btn btn-text"
                >
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
    <div class="account-layout">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 sidebar mb-4">
            <AccountSidebar />
          </div>
          <div class="main col-lg-9 ms-sm-auto px-md-4">

          </div>
        </div>
      </div>
    </div>
  </div>
}

const AccountSidebar = () => {
  return <nav class="account-navigation d-none d-md-block">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <Link
            to="/"
            class="nav-link"
          >
            Home
          </Link>
          <Link
            to="/mocktests"
            class="nav-link"
          >
            Mocktest
          </Link>
        </li>
      </ul >
    </div>
  </nav >
}

const Todo = ({ todo }) => {
  const { remove, toggleCompleted } = useStoreActions((actions) => ({
    remove: actions.todos.remove,
    toggleCompleted: actions.todos.toggleCompleted,
  }));

  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
        />
        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
        >
          {todo.text}
        </span>
        <button onClick={() => remove(todo.id)}>x</button>
      </li>
    </div>
  );
}

const TodoList = () => {
  const todos = useStoreState((state) => state.todos.items);
  console.log(todos);
  return (
    <div className='container'>
      <AddTodo />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

const AddTodo = () => {
  const [text, setText] = useState('');
  const addTodo = useStoreActions((actions) => actions.todos.add);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default App
