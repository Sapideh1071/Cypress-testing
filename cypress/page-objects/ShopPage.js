export default class ShopPage{
    shopPath = "/angularpractice/shop"
   phoneCard = ".container .card"
    titleOfCard =  ".card-title"
    linkToNavBar = ".nav-link"
    linkToAmount = ".container  .table h3"
    checkoutButton = ".container  .table button.btn-success"
    chooseCountry = "#country"
    countriesSuggested = ".suggestions ul li a"
    checkBoxTerms = "label[for=checkbox2]"
    purchaseButton = "input[value='Purchase']"
    positiveMessageInTheEnd = ".alert.alert-success.alert-dismissible"

     visitPhoneSHop(){
        cy.visit(this.shopPath)
    }

    pickFirstPhone(){
        cy.get(this.phoneCard).should("have.length", 4).as("mobileCards");

        cy.get("@mobileCards").each((element) => {
      cy.wrap(element)
        .find(this.titleOfCard)
        .invoke("text")
        .then((text) => {
          cy.log(text);

          if (text.includes("iphone X")) {
            cy.wrap(element).contains("Add").click();
          }
        });
    });


    }

    pickSecondPhone(){
        cy.get(this.phoneCard).should("have.length", 4).as("mobileCards");

        cy.get("@mobileCards").each((element) => {
      cy.wrap(element)
        .find(this.titleOfCard)
        .invoke("text")
        .then((text) => {
          cy.log(text);

          if (text.includes("Nokia Edge")) {
            cy.wrap(element).contains("Add").click();
          }
        });
    });


    }

    clickCheckOutButton(){
        cy.get(this.linkToNavBar).contains("Checkout").click();

    }

    verifyAmount(){
        cy.get(this.linkToAmount).should("contain.text", "165000");
    }

     clickCheckOutOfShop(){
       cy.get(this.checkoutButton).should("contain.text", "Checkout").click();
     }
      typeCountry(){
          cy.get("#country").type("Ireland");
          cy.get(this.countriesSuggested, {timeout: 10000}).should("contain.text", "Ireland").click().then(() => {
              this.acceptConditions();
          });
      }

      acceptConditions(){
          cy.get(this.checkBoxTerms,{timeout: 10000}).click({force: true})
      }

        purchaseThePhones(){
            cy.get(this.purchaseButton).click()
        }

        verifyMessage(){
            cy.get(this.positiveMessageInTheEnd).should("have.text", "\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        ")
        }

}