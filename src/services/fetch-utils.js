import { Redirect } from 'react-router-dom';
import { client, checkError } from './client';

export const signUpUser = async (email, password) => {
  const response = await client.auth.signUp({ email, password });
  return response.user;
};
export const signInUser = async (email, password) => {
  const response = await client.auth.signIn({ email, password });
  return response.user;
};
export const logout = async () => {
  const response = await client.auth.signOut();
  return response;
};

export const fetchUser = () => {
  const user = client.auth.user();
  return user;
};

export const redirectIfLoggedIn = () => {
  const user = fetchUser();

  return user ? <Redirect to={'/'} /> : <Redirect to={'/auth'} />;
};

export const checkAuth = () => {
  const user = fetchUser();

  return !user && <Redirect to={'/auth'} />;
};

export const createRestaurant = async (restaurant) => {
  const response = await client.from('restaurants').insert([restaurant]);

  return checkError(response);
};

export const fetchAllRestaurants = async () => {
  const response = await client.from('restaurants').select();

  return checkError(response);
};

export const fetchRestaurantById = async (id) => {
  const response = await client.from('restaurants').select().match({ id }).single();

  return checkError(response);
};
