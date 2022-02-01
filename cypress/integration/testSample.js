/// <reference types= "cypress" />

describe("GreenKart Website", function () {
  it("Add Cashews to Cart Test", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get(".search-keyword").type("Ca");

    cy.get(".products .product").should("have.length", 4).as("vegProducts");

    cy.get("@vegProducts").each((element) => {
      cy.wrap(element)
        .find(".product-name")
        .invoke("text")
        .then((text) => {
          cy.log(text);

          if (text.includes("Cashews")) {
            cy.wrap(element).contains("ADD TO CART").click();
          }
        });
    });
    cy.get("@vegProducts").each((element) => {
      cy.wrap(element)
        .find(".product-name")
        .invoke("text")
        .then((text) => {
          cy.log(text);

          if (text.includes("Carrot")) {
            cy.wrap(element)
              .contains("+")
              .click()
              .then((text) => {
                cy.log(text);
                cy.wrap(element).contains("ADD TO CART").click();
              });
          }
        });
    });
  });
});
