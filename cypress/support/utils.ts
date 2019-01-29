import { settings } from './settings';

export function openAndLogin() {
    cy.visit(settings.urlLogIn);

    cy.get('#page_email').type('127_scrubbed@trademe.co.nz');

    cy.get('#page_password').type('password');

    cy.get('#LoginPageButton').click();
}

export function listingDetails() {
    cy.visit(settings.urlCreate);

    cy.get('[name="listingType1"] tg-radio-item .o-radio__label').click();

    cy.get('input[name="askingPrice"]').type('1000');

    cy.get('.o-button2--primary').click();

    cy.url().should('contain', 'Sell/Motors/Car/car-details');
}

export function carDetails() {
    cy.get('[name="carDescription"]').should('not.exist');

    cy.get('input[name="plateOrVin"]').type('yoda');

    cy.get('.mt-nzta-search__submit').click();

    cy.get('[name="carDescription"]').should('exist');

    cy.get('[name="roadCosts"] tg-radio-item:first-of-type .o-radio__label').click();

    cy.get('[name="carDetailsForm"] .o-button2--primary').click();

    cy.url().should('contain', 'Sell/Motors/Car/confirm');
}

export function topup() {
    cy.get('.top-up-button button').click();

    cy.get('body').then(($body) => {
        if ($body.find('input[name=useSavedCreditCard]').length) {
            cy.get('input[name=useSavedCreditCard]').uncheck();
        }
    });

    cy.get('input[name=cardNumber]').type('4111111111111111');
    cy.get('input[name=cardholderName]').type('foo bar');
    cy.get('input[name=expiryMonth]').type('02');
    cy.get('input[name=expiryYear]').type('2025');
    cy.get('input[name=securityCode]').type('239');

    cy.get('.o-modal__dialog button[type="submit"]').click();
}

export function confirmation() {
    topup();

    cy.get('#track__save-listing').click();

    cy.url().should('match', /\d+$/);

    cy.get('button[name="cmdEdit"]').should('exist');
}

export function startEdit() {
    cy.get('[name="cmdEdit"]').click();

    cy.url().should('match', /Sell\/Motors\/Car\/\d+\/listing-details$/i);
}
