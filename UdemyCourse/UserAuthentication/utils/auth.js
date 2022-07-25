import axios from "axios";

// const API_KEY = AIzaSyC82v - FHCCaYul1_e_XM8sfYC4EUhqUKU4;

async function aunthenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=AIzaSyC82v-FHCCaYul1_e_XM8sfYC4EUhqUKU4`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  //   console.log(response.data);
  const token = response.data.idToken;
  return token;
}

export  function createUser(email, password) {
  return  aunthenticate("signUp", email, password);
}

export  function login(email, password) {
  return  aunthenticate("signInWithPassword", email, password);
}
