/// <reference types="Cypress" />

import HomePage from "../page-objects/HomePage"
const firstHomePage = new HomePage()

import ShopPage from "../page-objects/ShopPage"
const secondHomePage = new ShopPage()

describe("Framework test", function(){

    it("HomePage Test Case", function(){
        
        firstHomePage.visitRahulShettyAutomationWebsite()
        firstHomePage.enterName()
        firstHomePage.selectGenderAsFemale()
        
        firstHomePage.verifyDataBindingTextBox()
        firstHomePage.verifyMinLengthAsTwo()
        firstHomePage.verifyIfRadioButtonEnterpreneurIsDisabled()

        firstHomePage.actionGoToShop()
    })

    it("ShopPage Test Case", function(){
        secondHomePage.visitPhoneSHop()
        secondHomePage.pickFirstPhone()
        secondHomePage.pickSecondPhone()
        secondHomePage.clickCheckOutButton()
        secondHomePage.verifyAmount()
        secondHomePage.clickCheckOutOfShop()
        secondHomePage.typeCountry()
        secondHomePage.purchaseThePhones()
        secondHomePage.verifyMessage()
    })
    
})

/*

Step 1 = Visit homepage
Step 2 = Set Name
Step 3 = Set Gender

Step 4 = Verification Of Data Binding Example
Step 5 = Verify Minimum Lenght of Name
Step 6 = Verify if the Entrepreneur button is  disabled

Website : https://rahulshettyacademy.com/angularpractice/

Step 1 : Click on Shop
Step 2 : Add iPhoneX and Nokia Edge to Cart
Step 3 : Click on Checkout Button
Step 4 : Verify if the total amount is Rs 165000
Step 5 : Click on Checkout
Step 6 : Add Country name as “Ireland” and Select Ireland
Step 7 : Click on Purchase
Step 8 : Verify if the message appeared on this page is : “Success! Thank you! Your order will be delivered in next few weeks :-).”


*/