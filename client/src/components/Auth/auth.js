class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(callback) {
        this.authenticated = true;
        setTimeout(callback, 300);
    }

    logout(callback) {
        this.authenticated = false;
        setTimeout(callback, 300);
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();