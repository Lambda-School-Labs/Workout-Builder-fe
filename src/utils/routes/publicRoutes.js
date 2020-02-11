import React from 'react';

const PublicRoutes = ({ component: Component, ...rest }) => {
  return(<div>
    <Component {...rest} />
  </div>
  );
};

export default PublicRoutes;
