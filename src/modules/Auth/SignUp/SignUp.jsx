import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import allActions from '@store/actions';
import { errorToast } from '@configs/toastConfig';

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const dispatch = useDispatch();
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    } else if (name === 'displayName') {
      setDisplayName(value);
    }
  };
  const createUser = () => {
    dispatch(allActions.authActions.signUp(email, password, displayName));
    history.push('/');
  };
  const logginGoogle = () => {
    try {
      dispatch(allActions.authActions.signInGoogle());
      history.push('/');
    } catch (error) {
      errorToast('SignIn Error');
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col className="auth-wrapper" xs={12}>
            <div className="icon">how_to_reg</div>
            <h1>Sign Up</h1>
            <form className="form">
              <input
                type="text"
                className="input"
                name="displayName"
                value={displayName}
                placeholder="Your Name"
                id="displayName"
                onChange={onChangeHandler}
              />
              <input
                type="email"
                className="input"
                name="userEmail"
                value={email}
                placeholder="Email"
                id="userEmail"
                onChange={onChangeHandler}
              />
              <input
                type="password"
                className="input"
                name="userPassword"
                value={password}
                placeholder="Password"
                id="userPassword"
                onChange={onChangeHandler}
              />
              <button className="button primary-button" onClick={createUser}>
                Sign Up
              </button>
            </form>
            <button onClick={logginGoogle} className="button google-button">
              Sign In with Google
            </button>

            <p>
              Already have an account?{' '}
              <Link to="/" className="link">
                Sign in here
              </Link>{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
