import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const email = useRef(null);
  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  


  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const Msg = checkValidData(email.current.value, password.current.value);
    setErrMsg(Msg);
    if (Msg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value, photoURL: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          }).then(() => {
            const {uid, email, displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate("/browser");
          }).catch((error) => {
            setErrMsg(error.Msg);
          });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>

      <div className="">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-[30%] rounded-md  bg-black my-28 mx-auto left-0 right-0 bg-opacity-85 p-16"
        >
          <p className="text-white text-3xl my-4 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          {!isSignInForm ? (
            <input
              ref={username}
              type="text"
              placeholder="username"
              className="bg-gray-700 p-3 my-3 rounded-md w-full"
            ></input>
          ) : (
            ""
          )}
          <input
            ref={email}
            type="text"
            placeholder="email"
            className="bg-gray-700 p-3 my-3 rounded-md w-full"
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="bg-gray-700 p-3 my-3 rounded-md w-full"
          ></input>
          <p className="text-red-700 font-bold text-lg">{errMsg}</p>
          <button
            className="bg-red-700 text-white py-3 rounded-md my-3 w-full"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between my-3">
            <form>
              <input type="checkbox" id="remember" />
              <label for="remember" className="text-gray-500">
                Remember me
              </label>
            </form>
            <p className="text-gray-500">need help?</p>
          </div>
          <p className="my-3 text-gray-500">
            {isSignInForm ? "New to Netflix ?" : "Already have a account?"}
            <span
              onClick={toggleIsSignInForm}
              className="text-white cursor-pointer"
            >
              {isSignInForm ? " Sign up now." : " Sign In Now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
