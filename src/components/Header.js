import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import lang from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute z-10 w-[100%] px-28 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img className='w-48' src = {LOGO} alt='logo' />

     {user && <div className='flex '>
        {showGptSearch && <select onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
        </select>}
        <button className='bg-purple-600 my-auto p-1 h-12 rounded-md' onClick={handleGptSearchClick}>
          {showGptSearch ? "Home Page" : "GptSearch"}
        </button>
        <img className='my-auto' alt='usericon' src = {user.photoUrl}/>
        <p className='my-auto'>{user.displayName}</p>
        <button className='bg-red-600 my-auto h-12 p-3 rounded-md' onClick={handleSignOut}>Sign out</button>
      </div>}
    </div>
  )
}

export default Header;
