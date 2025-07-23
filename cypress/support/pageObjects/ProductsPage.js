class ProductsPage {
    constructor () {
        // Define the selectors for the login page elements
        this.productTitle = "//span[@class='title']"
        this.productList = "//div[@class='inventory_list']"
        this.cartIcon = "//a[@class='shopping_cart_link']"  
       
    }

    // Method to visit the login page
    validate_products_page_navigation(){
        cy.url().should('include', '/inventory.html')
        cy.xpath("//span[@class='title']").should('contain', 'Products')
    }
}
export default ProductsPage