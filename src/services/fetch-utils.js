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

export const checkAuth = () => {
  const user = fetchUser();
  // !user &&  />
  return !user ? null : <Redirect to={'/auth'} />;
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

export const createReview = async (review) => {
  const response = await client.from('reviews').insert([review]);

  return checkError(response);
};

export const fetchReviews = async (id) => {
  const response = await client.from('reviews').select().match({ restaurant: id });

  return checkError(response);
};
