import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import Home from '../pages/home/Home';

// Import other pages as needed
// import Dashboard from "../pages/Dashboard";
// import Calendar from "../pages/Calendar";
// ...

const Router: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/home" component={Home} />
      {/* Add more routes here as needed */}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
        <Route path="/categories"><Redirect to="/categories" /></Route>
    </IonRouterOutlet>
  </IonReactRouter>
);

export default Router;