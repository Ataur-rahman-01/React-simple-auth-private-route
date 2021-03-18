import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../FireBase";
import { MyContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useContext(MyContext);
  const hendelGoogle = () => {
    firebase.initializeApp(firebaseConfig);
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        const log = result.user;
        // const login = { name: displayName, Email: email };
        setUser([log]);
        history.replace(from);
        console.log();
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <div>
      {user.map((m) => (
        <li>{m.displayName}</li>
      ))}
      <button onClick={hendelGoogle}>Google sign in</button>
    </div>
  );
};

export default Login;
