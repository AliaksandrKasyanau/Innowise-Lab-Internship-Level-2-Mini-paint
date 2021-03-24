import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import PaintRouter from './PaintRouter';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@firebaseAlias/firebase';
import { generateUserDocument } from '@firebaseAlias/firebaseDBQueries';
import allActions from '@store/actions/index';

function Routes() {
  const user = useSelector((state) => state.currentAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      if (user) {
        dispatch(allActions.authActions.signIn(user));
      }
    });
  }, []);

  return user.login ? (
    <div className="App">
      <Router>
        <PaintRouter />
      </Router>
    </div>
  ) : (
    <div className="App">
      <Router>
        <AuthRouter />
      </Router>
    </div>
  );
}

export default Routes;
