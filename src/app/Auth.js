
import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  const token = Cookies.get('token');
  return !!token;
};

export const login = () => {
  const token = 'tokenAleatorioMocado';
  Cookies.set('token', token);
};

export const logout = () => {
  Cookies.remove('token');
};
  
  
