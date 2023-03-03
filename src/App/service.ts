import { AppConfig } from "./apiConfig";
import apiEndPoints from "./endpoint";

// common 
const keysToRemove = ['key1', 'key2', 'key3'];

for (let i = 0; i < keysToRemove.length; i++) {
  if (localStorage.getItem(keysToRemove[i])) {
    localStorage.removeItem(keysToRemove[i]);
  }
}

const AUTH_KEY = "isAuth";
export const setToken = (Name: any) => {
    localStorage.setItem(AUTH_KEY, Name);
  };
  export const getToken  = () => {
    return localStorage.getItem(AUTH_KEY);
  };
  export const clearStorage = (key = "") => {
    if (key == "") {
      localStorage.removeItem(AUTH_KEY);
    }
  };

//register api 
 export const RegisterUsers = async ({ username, password ,email}:any) => {
    try {
     const response = await fetch(AppConfig?.baseURL + apiEndPoints?.rgister, {
       method: apiEndPoints?.methodType?.POST,
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({ username, password,email })
     });
     if (response) {
      return response.json();
     } else {
      throw new Error('Login failed');
     }
   } catch (error) {
     return   console.error(error);
   }
 }