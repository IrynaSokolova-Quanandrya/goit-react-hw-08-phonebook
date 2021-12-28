const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;

const selectors = {
  getIsLoggedIn,
  getUserName,
};
export default selectors;
