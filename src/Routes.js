import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from './components/AsyncComponent'

const AsyncHome = asyncComponent(() => import("./containers/Home/"))
const AsyncBeef = asyncComponent(() => import("./containers/Beef/"))
const AsyncWholesale = asyncComponent(() => import("./containers/Wholesale/"))
const AsyncLamb = asyncComponent(() => import("./containers/Lamb/"))
const AsyncHalal = asyncComponent(() => import("./containers/Halal/"))
const AsyncAbout = asyncComponent(() => import("./containers/About/"))
const AsyncContact = asyncComponent(() => import("./containers/Contact/"))
const AsyncSitemap = asyncComponent(() => import("./containers/Sitemap/"))
const AsyncPrivacy = asyncComponent(() => import("./containers/Sitemap/"))

  export default () => <Switch>
      <Route exact path="/" component={AsyncHome} />
      <Route exact path="/wholesale" component={AsyncWholesale} />
      <Route exact path="/beef" component={AsyncBeef} />
      <Route exact path="/lamb" component={AsyncLamb} />
      <Route exact path="/halal" component={AsyncHalal} />
      <Route exact path="/about" component={AsyncAbout} />
      <Route exact path="/contact" component={AsyncContact} />
      <Route exact path="/sitemap" component={AsyncSitemap} />
      <Route exact path="/privacy" component={AsyncPrivacy} />
      <Route render={function() {
          return <p>Not Found</p>;
        }} />
    </Switch>;

