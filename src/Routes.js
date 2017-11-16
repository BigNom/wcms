import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from './containers/Contact'
import SimpleRouter from './containers/SimpleRouter/SimpleRouter'
import Roster from './containers/SimpleRouter/Roster'
import Schedule from './containers/SimpleRouter/Schedule'

import asyncComponent from './components/AsyncComponent'

const AsyncHome = asyncComponent(() => import("./containers/Home/"))
const AsyncBeef = asyncComponent(() => import("./containers/Beef/"))
const AsyncWholesale = asyncComponent(() => import("./containers/Wholesale/"))
const AsyncLamb = asyncComponent(() => import("./containers/Lamb/"))
const AsyncPoultry = asyncComponent(() => import("./containers/Poultry/"))
const AsyncHalal = asyncComponent(() => import("./containers/Halal/"))
const AsyncAbout = asyncComponent(() => import("./containers/About/"))
//const AsyncContact = asyncComponent(() => import("./containers/Contact/"))
const AsyncSitemap = asyncComponent(() => import("./containers/Sitemap/"))
const AsyncPrivacy = asyncComponent(() => import("./containers/Privacy/"))
const AsyncMembers = asyncComponent(() => import ("./containers/Members"))



  export default () => <Switch>
      <Route exact path="/" component={AsyncHome} />
      <Route exact path="/wholesale" component={AsyncWholesale} />
      <Route exact path="/beef" component={AsyncBeef} />
      <Route exact path="/lamb" component={AsyncLamb} />
      <Route exact path="/poultry" component={AsyncPoultry} />
      <Route exact path="/halal" component={AsyncHalal} />
      <Route exact path="/about" component={AsyncAbout} />
      <Route exact path="/members" component={AsyncMembers} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/sitemap" component={AsyncSitemap} />
      <Route exact path="/privacy-policy" component={AsyncPrivacy} />

      <Route exact path="/simplerouter" component={SimpleRouter} />
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route render={function() {
          return <p>Not Found</p>;
        }} />
    </Switch>;

