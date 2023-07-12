import { createAuth0Client } from '@auth0/auth0-spa-js';
const init = async () => {
  const client = await createAuth0Client({
    clientId: '5de63480d4a1c7081dd4423a',
    domain: 'auth.liqid.rocks',
    authorizationParams: {
      redirect_uri: 'https://arnels-ultra-awesome-site-8feb2b.webflow.io/',
    },
  });
  console.log(client);
  const hidebtn = document.getElementById('hideLink') as HTMLAnchorElement;
  console.log(hidebtn);

  const url = new URLSearchParams(window.location.search);
  const code = url.get('code');

  if (code) {
    await client.handleRedirectCallback();
    history.replaceState({}, document.title, window.location.origin + window.location.pathname);
  }

  const isLoggedIn = await client.isAuthenticated();
  if (!isLoggedIn) {
    hidebtn.href = `http://nolink`;
  }
  console.log(isLoggedIn);

  if (isLoggedIn) {
    hidebtn.href = 'http://google.com';
  }

  console.log(client);

  window.Webflow ||= [];
  window.Webflow.push(() => {
    //const name = 'Liqid';
    // console.log('jj');

    const signupBtn = document.getElementById('authSignup');
    const logOutUser = document.getElementById('authLogout');
    if (!signupBtn || !logOutUser) return;

    signupBtn.addEventListener('click', async (e) => {
      (await client).loginWithRedirect();
      console.log(e);
    });

    logOutUser.addEventListener('click', async () => {
      (await client).logout();
    });
    //console.log(name);
  });
};

init();
