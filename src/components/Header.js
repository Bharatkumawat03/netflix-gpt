import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName,photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browser");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  },[]);
  return (
    <div className='absolute z-10 w-[100%] px-28 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img className='w-48' src = {LOGO} alt='logo' />

     {user && <div>
        <img alt='usericon' src = {user.photoUrl}/>
        <p>{user.displayName}</p>
        <button onClick={handleSignOut}>Sign out</button>
      </div>}
    </div>
  )
}

export default Header;
