import { BrowserRouter, Switch } from 'react-router-dom';

import { LayoutType } from '../layouts';
import DefaultRoute from './DefaultRoute';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultRoute layout={LayoutType.basic} exact path="/">
        </DefaultRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;