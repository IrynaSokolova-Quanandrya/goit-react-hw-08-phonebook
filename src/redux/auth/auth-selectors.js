const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserEmail = (state) => state.auth.user.email;

const selectors = {
  getIsLoggedIn,
  getUserEmail,
};
export default selectors;
