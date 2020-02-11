import React from "react";
import Login from '../../components/auth/Login';

const ProtectedRoutes = ({ as: Component, ...props }) => {
  const isLoggedIn = localStorage.getItem('token');
  return (
    <div>
      {isLoggedIn ? <Component {...props}/> : <Login />}
    </div>
  );
};

export default ProtectedRoutes;

// const ProtectedRoutes = ({component:Component, ...rest}) => (
//   <Router
//     {...rest}
//     render = {props => {
//       if(localStorage.getItem('token')){
//         return<Component {...props} />;
//       } else {
//         return redirectTo('/login');
//       }
//     }}>
//     <Dashboard path='/dashboard'/>
//   </Router>
// );

// export default ProtectedRoutes;