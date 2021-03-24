import Gallery from '@modules/Paint/Gallery/Gallery';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Paint from '../modules/Paint/Paint';

function PaintRouter() {
  return (
    <>
      <Switch>
        <Route path="/gallery" component={Gallery} />
        <Route path="/" component={Paint} />
      </Switch>
    </>
  );
}
export default PaintRouter;
