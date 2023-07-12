import { createAuth0Client } from '@auth0/auth0-spa-js';
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

  console.log(client);

  window.Webflow ||= [];
  window.Webflow.push(() => {
    //const name = 'Liqid';
    // console.log('jj');

    const loginUser = document.getElementById('authLogin');
    const signUpUser = document.getElementById('logOut');

    const logOutUser = document.getElementById('logOut');

    if (!loginUser || !logOutUser || !signUpUser) return;

    loginUser.addEventListener('click', async (e) => {
      (await client).loginWithRedirect();
    });

    const isLoggedIn = await client.isAuthenticated();
    if (!isLoggedIn) {
      hidebtn.href = `http://nolink`;
      hidebtn.style.opacity = `50%`;
    }
    console.log(isLoggedIn);

    if (isLoggedIn) {
      hidebtn.href = 'http://google.com';
      hidebtn.classList.remove('disabled');
    }

    //signUpUser.addEventListener('click', async () => {});

    logOutUser.addEventListener('click', async () => {
      (await client).logout();
      console.log(logOutUser);
    });
    //console.log(name);
  });
};

init();
