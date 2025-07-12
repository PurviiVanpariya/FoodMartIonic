import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './../src/theme/variables.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
*/

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/home/Home';
import Categories from './components/categories';
import About from './pages/about/About';
import ShopList from './pages/shoplist/ShopList';
import SingleProduct from './pages/single-product/SingleProduct';
import Cart from './pages/cart/Cart';
import CheckOut from './pages/checkout/CheckOut';
import MyProfile from './pages/my-profile/MyProfile';
import MyAddress from './pages/my-address/MyAddress';
import OrderList from './pages/order-list/OrderList';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
         <Route exact path="/shoplist">
          <ShopList showList={true}/>
        </Route>
         <Route exact path="/single-product">
          <SingleProduct showSingleProduct={true}/>
        </Route>
          <Route exact path="/cart">
          <Cart showCart={true} />
        </Route>
          <Route exact path="/checkout">
          <CheckOut showLogin={true} />
        </Route>
           <Route exact path="/my-profile">
          <MyProfile showMyProfile={true} />
        </Route>
         <Route exact path="/my-address">
          <MyAddress showMyAddress={true} />
        </Route>
         <Route exact path="/order-list">
          <OrderList showOrderList={true} />
        </Route>
         <Route exact path="/about">
          <About />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
