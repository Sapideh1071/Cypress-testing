export default class HomePage{
    nameInputBoxSelector = "input[name='name']:nth-child(2)"
    websitePath = '/angularpractice'
    genderDropdown = "#exampleFormControlSelect1"
    dataBindingTextBox = "input[name='name']:nth-child(1)"
    shopButton  = "div.container:nth-child(1) "
    phoneCard = ".container .card"
    titleOfCard =  ".card-title"
    linkToNavBar = ".nav-link"
    linkToAmount = ".container  .table h3"
    checkoutButton = ".container  .table button.btn-success"
    chooseCountry = "#country"
    countriesSuggested = ".suggestions ul li a"


    visitRahulShettyAutomationWebsite(){
        cy.visit(this.websitePath)
    }

    enterName(){
        cy.get(this.nameInputBoxSelector).type("Palash")
    }

    selectGenderAsFemale(){
        cy.get(this.genderDropdown).select("Female")
    }

    ///ASSERTIONS
    verifyDataBindingTextBox(){
        cy.get(this.dataBindingTextBox).should("have.value","Palash")
    }

    verifyMinLengthAsTwo(){
        cy.get(this.nameInputBoxSelector).should("have.attr",'minLength',2)
    }

    verifyIfRadioButtonEnterpreneurIsDisabled(){
        cy.get('#inlineRadio3').should("be.disabled")
    }

    actionGoToShop(){
        cy.get(this.shopButton).contains('Shop').click()
    }

    

}