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
