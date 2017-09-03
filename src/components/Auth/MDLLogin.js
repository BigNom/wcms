import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">

  <main className="mdl-layout__content mdl-color--grey-100">
    <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
      <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
        <div className="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">
          <h2 className="mdl-card__title-text">Google Authentication with Popup</h2>
        </div>
        <div className="mdl-card__supporting-text mdl-color-text--grey-600">
          <p>Sign in with your Google account below.</p>
          <button  className="mdl-button mdl-js-button mdl-button--raised" 
          id="quickstart-sign-in">Sign in with Google</button>
          <div className="quickstart-user-details-container">
            Firebase sign-in status: <span id="quickstart-sign-in-status">Unknown</span>
            <div>Firebase auth <code>currentUser</code> object value:</div>
            <pre><code id="quickstart-account-details">null</code></pre>
            <div>Google OAuth Access Token:</div>
            <pre><code id="quickstart-oauthtoken">null</code></pre>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
    );
  }
}

export default Login;