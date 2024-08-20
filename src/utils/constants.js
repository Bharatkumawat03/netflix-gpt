export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_OPTIONS}`
  }
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "spanish", name: "Spanish"},
  {identifier: "french", name: "French"},
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY ;