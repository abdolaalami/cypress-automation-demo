import LoginPage from '../../support/pageObjects/LoginPage'
import ProductsPage from '../../support/pageObjects/ProductsPage'


describe('Login Tests - Saucedemo', () => {
    const loginPage = new LoginPage()
    const productsPage = new ProductsPage()

    it('Login with valid credentials', () => {
        loginPage.visit_LoginPage()
        loginPage.login('standard_user', 'secret_sauce')
        productsPage.validate_products_page_navigation()
    })
})