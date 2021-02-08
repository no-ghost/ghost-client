import React from 'react';
import { Form } from 'shards-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Login from './GoogleButton';
import constants from '../constants';
import config from '../config';

function SignUp() {
  const history = useHistory();

  const onSuccess = (res) => {
    axios
      .post(`${config.apiUrl}/api/auth/googleSignup`, {
        idToken: res.tokenObj.id_token,
        desiredRole: constants.REVIEWEE,
      })
      .then((response) => {
        console.log(response);
        const { role } = response.data;
        localStorage.setItem('isLoggedIn', true);
        if (role === constants.REVIEWER) {
          history.push('/reviewerDashboard');
        } else if (role === constants.REVIEWEE) {
          history.push('/revieweeDashboard');
        }
      })
      .catch((err) => {
        console.log(err);
        history.push('/');
      });
  };

  return (
    <Form>
      <Login onSuccess={onSuccess} desiredRole={constants.REVIEWEE} />
    </Form>
  );
}

export default SignUp;
