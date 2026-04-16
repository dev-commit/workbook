# Okta

::: info
https://www.okta.com/
https://cli.okta.com/
https://github.com/okta/okta-auth-js/blob/master/docs/authn.md
:::

## Vue.js

### Установка

npm i --save-dev @okta/okta-auth-js
npm i --save-dev @okta/okta-vue

### API

```js
import { useAuth } from '@okta/okta-vue';

const auth = useAuth();
```

#### Authorization

```js
// Авторизация с редиректом
// Откроется форма Okta для авторизации
// После авторизации произойдет редирект на redirectUri, указанный в конфиге
// redirectUri: 'http://localhost:8080/login/callback',
auth.token.getWithRedirect({
	responseType: 'id_token'
});

// Авторизация без редиректа
// Вернет Promise
auth.signInWithCredentials({
	username: 'username',
	password: 'password'
})
```

#### tokenManager

```js
// Добавляет данные в tokenManager (хранится в LocalStorage) в момент получения токена
auth.tokenManager.add('idToken', response.tokens.idToken);
auth.tokenManager.setTokens({ accessToken, idToken });

// Читает данные из tokenManager (LocalStorage) в момент валидации токена tokenManager
auth.tokenManager.get('idToken').then(data => console.log('tokenManager', data));

const expireTime = auth.tokenManager.getExpireTime(idToken);
```

#### session

```js
// Получить данные о текущей сессии (активна примерно 2 часа)
auth.session.get().then(data => console.log('session', data));
```

```js
// Без запроса на Backend
auth.token.verify(idToken).then(data => console.log('verify', data));
// С заросом на Backend
auth.token.getUserInfo(accessToken, idToken).then(data => console.log('getUserInfo', data));

const user = auth.getUser().then(data => console.log(data));

// undefined
const accessToken = auth.getAccessToken();
console.log(accessToken);

const authState = auth.authStateManager.getAuthState();
console.log(authState);

// Вероятно, берет из getAuthState()
// Всегда возвращает false
const isAuthenticated = auth.isAuthenticated().then(data => console.log(data));
console.log(isAuthenticated);

const a = auth.token.isLoginRedirect();
console.log(a);
```

## Пример

### Config

src\.vuepress\oktaConfig.js

```js
const clientId = '***';
const domain = 'dev-***.okta.com';

export const oktaConfig = {
    issuer: `https://${domain}/oauth2/default`,
    clientId: clientId,
    // redirectUri: window.location.origin + '/login/callback',
    // redirectUri: 'http://localhost:8080/login/callback',
    scopes: ['openid', 'profile', 'email']
};
```

src\.vuepress\client.js

```js
import { defineClientConfig } from '@vuepress/client'

import { OktaAuth } from '@okta/okta-auth-js';
import OktaVue from '@okta/okta-vue';
import { oktaConfig } from './oktaConfig';

const oktaAuth = new OktaAuth(oktaConfig);

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.use(OktaVue, { oktaAuth });
    },
    setup() {},
    layouts: {},
    rootComponents: [],
})
```

### Components

src\.vuepress\components\auth\Auth.vue

```js
<template>
    <div>
        <button @click="login">Login</button><br>
        <button @click="logout">Logout</button>
    </div>
</template>

<script setup>
import { useAuth } from '@okta/okta-vue';

const auth = useAuth();

const login = async () => {
    auth.signInWithCredentials({
      username: '***@gmail.ru',
      password: '***'
    })
        .then(transaction => {
            if (transaction.status === 'SUCCESS') {
                return auth.token.getWithoutPrompt({
                    responseType: ['id_token', 'token'],
                    sessionToken: transaction.sessionToken,
                }).then(response => {
                    const accessToken = response.tokens.accessToken;
                    const idToken = response.tokens.idToken;

                    localStorage.accessToken = JSON.stringify(accessToken);
                    localStorage.idToken = JSON.stringify(idToken);

                    console.log('Login');
                })
            }
        })
        .catch(err => {
            console.error(err.message);
        })
}

const logout = async () => {
    await auth.signOut()
}
</script>
```

src\.vuepress\components\auth\AuthCheck.vue

```js
<template>
    <button v-on:click='checkLogin'>AuthCheck</button>
</template>

<script setup>
import { useAuth } from '@okta/okta-vue';

const auth = useAuth();

const checkLogin = async () => {
    const accessToken = JSON.parse(localStorage.accessToken);
    const idToken = JSON.parse(localStorage.idToken);

    // auth.session.get().then(data => console.log('session', data));
}
</script>
```

src\.vuepress\config.js

```js
import { defineUserConfig } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
	plugins: [
		registerComponentsPlugin({
			components: {

				['Auth']: path.resolve(__dirname, './components/auth/Auth.vue')
				['AuthCheck']: path.resolve(__dirname, './components/auth/AuthCheck.vue')

			},
		}),
	]
})
```

src\index.md

```html
<Auth />
<AuthCheck />
```
