import { AUTH_GET_PERMISSIONS, AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import { createBrowserHistory } from 'history';


interface LoginParams {
  username: string;
  password: string;
}


type AuthType = typeof AUTH_LOGIN | typeof AUTH_LOGOUT | typeof AUTH_ERROR | typeof AUTH_CHECK | typeof AUTH_GET_PERMISSIONS;

const history = createBrowserHistory();

export default (type: AuthType, params?: LoginParams, props?: any): Promise<any> => {
  if (type === AUTH_LOGIN && params) {
    const { username, password } = params;
    if (username === 'admin' && password === 'password') {
      localStorage.setItem("role", "admin");
      localStorage.removeItem("not_authenticated");
      return Promise.resolve();
    }
    localStorage.setItem('not_authenticated', '1');
    return Promise.reject();
  }

  return Promise.reject();
};
