import { createAuth0Client } from '@auth0/auth0-spa-js';

console.log('Liqid');

const init = async () => {
  const client = await createAuth0Client({
    clientId: 'SaYMf7u7esx5uE091UgWC7b4it47HCeu',
    domain: 'liqid-dev.eu.auth0.com',
    authorizationParams: {
      redirect_uri: 'https://arnels-ultra-awesome-site-8feb2b.webflow.io/',
    },
  });
  //https://arnels-ultra-awesome-site-8feb2b.webflow.io/
  //   clientID
  // SaYMf7u7esx5uE091UgWC7b4it47HCeu
  // DOMAIN
  // http://liqid-dev.eu.auth0.com
  console.log(client);
  const hidebtn = document.getElementById('hideLink') as HTMLAnchorElement;
  console.log(hidebtn);

  const url = new URLSearchParams(window.location.search);
  const code = url.get('code');

  if (code) {
    await client.handleRedirectCallback();
    history.replaceState({}, document.title, window.location.origin + window.location.pathname);
  }
  // console.log(code);
  const logoutBtn = document.getElementById('logOutbtn');
  const loginUser = document.getElementById('authLogin');
  const signUpUser = document.getElementById('authSignUp');
  const accessDenied = document.querySelector('[Lf-element="deniedEl"]') as HTMLElement;
  const accessPage = document.querySelector('[Lf-element="mainPage"]');

  ////////////User authentication
  const isLoggedIn = await client.isAuthenticated();
  console.log(isLoggedIn);
  const unregisteredUser = function () {
    if (!isLoggedIn) {
      hidebtn.href = ``;
      hidebtn.style.opacity = `50%`;
      // window.location.href = 'https://arnels-ultra-awesome-site-8feb2b.webflow.io';

      accessDenied ? (accessDenied.style.display = `flex`) : '';
    }
    console.log(isLoggedIn);
  };

  const activeUser = function () {
    if (isLoggedIn) {
      hidebtn.href = 'https://test.liqid.rocks/22_referral-client-page-test';
      hidebtn.classList.remove('disabled');
      //console.log(client);
      accessDenied ? (accessDenied.style.display = `none`) : '';
      accessPage ? accessPage.classList.remove('hide') : '';
    }
  };
  unregisteredUser();
  activeUser();
  //console.log('gbemi');
  ////User authentication end
  //console.log(client);

  window.Webflow ||= [];
  window.Webflow.push(() => {
    //console.log('check');
    //console.log(loginUser, logoutBtn, signUpUser);
    if (!loginUser || !logoutBtn || !signUpUser) return;

    // console.log('check2');
    loginUser.addEventListener('click', async (e) => {
      (await client).loginWithRedirect();
    });

    //signUpUser.addEventListener('click', async () => {});

    logoutBtn.addEventListener('click', async () => {
      (await client).logout();
      console.log('logoit');
    });
    //console.log(name);
  });
};

init();
