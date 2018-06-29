
class Auth {
    isAuthIn = true;
    isLoggedIn() {
        return this.isAuthIn;
    }
}

export default new Auth();//using new in order to provide a singleton object