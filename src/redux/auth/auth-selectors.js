const getAuthenticated = state => state.auth.token;
const getUserName = state => state.auth.user.name

const authSelectors = {
    getAuthenticated,
    getUserName
};

export default authSelectors;