import React from 'react';

import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';

const login = () => {
  return (
    <AppLayout>
      <div id="loginPageWrapper">
        <div id="loginFormWrapper">
          <LoginForm />
        </div>
      </div>
    </AppLayout>
  );
};

export default login;
