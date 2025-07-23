class LoginPage {
    constructor () {
        // Define the selectors for the login page elements
        this.usernameInput = "//input[@id='user-name']"
        this.passwordInput = "//input[@id='password']"
        this.loginButton = "//input[@id='login-button']"
    }

    // Method to visit the login page
    visit_LoginPage(){
        cy.visit('https://www.saucedemo.com')
    }

    /**
     * Method to perform login action
     * @param {string} username // The username for login
     * @param {string} password // The password for login
     */
    login(username, password){
        cy.xpath(this.usernameInput).type(username)
        cy.xpath(this.passwordInput).type(password)
        cy.xpath(this.loginButton).click()
    }
}
export default LoginPage