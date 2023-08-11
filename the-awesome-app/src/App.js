import React, { Suspense } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { routes } from './routes/routes';
import ProtectedRoute from './components/ProtectedRoute';
import AppErrorBoundary from './error-boundary/AppErrorBoundary';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">React</a>
            <ul className="nav">

              {routes.filter(item => item.isOnMainMenu).map(item => {
                return (
                  <li key={item.path} className="nav-item">
                    <Link className="nav-link" to={item.path}>{item.title}</Link>
                  </li>
                )
              })}
              {/* <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/login'>Login</Link>
                </li> */}
            </ul>
          </div>
        </nav>
        <AppErrorBoundary>
          <section>
            <Suspense fallback={"loading please wait..."}>
              <Routes>
                {/* <Route path='/' element={<Hello/>} />
              <Route path='/counter' element={<Counter initValue={5}/>} />
              <Route path='/products' element={<ListProducts/>} /> */}

                {routes.map(item => {

                  if (item.isProtected) {
                    return (

                      <Route key={item.path} path={item.path}
                        element={<ProtectedRoute><item.component {...item.props} /> </ProtectedRoute>} />

                    )
                  }
                  else {
                    return (
                      <Route key={item.path} path={item.path} element={<item.component {...item.props} />} />
                    )
                  }
                })}

              </Routes>
            </Suspense>
          </section>
        </AppErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
