//sign in and getting to feature menu

function logIn(email, password) {
  describe("Log in app page", () => {
    it("Get EngageMate logo image tag, tagline confirming text and get button by class name and confirm has 'Log In' and then clicks the 'Log In' button", () => {
      cy.get("img.login_myImg__1RN5U");
      cy.get("div.login_logoBox__5cPn4").within(() => {
        cy.get("p").contains("EngageMate");
        cy.get("h2").contains("Your real time remote learning companion");
      });
      cy.get("div.css-d9swal")
        .children("button.loginButton_loginButton__muE4-")
        .contains("Log In")
        .click();
    });
  });

  describe("Auth0 log in page", () => {
    it("Get input field for users email address and type in email address, get input field for password and type password in, get log in button confirm has text 'Log In' then click the 'Log In' button", () => {
      // cy.wait(1000);
      cy.get("div.auth0-lock-input-block,auth0-lock-input-email")
        .get("div.auth0-lock-input-wrap,auth0-lock-input-wrap-with-icon")
        .get("input.auth0-lock-input")
        .first()
        .type(email);
      // works with just this line cy.get("input.auth0-lock-input").first().type(email);
      // cy.wait(1000);
      cy.get("div.auth0-lock-input-block,auth0-lock-input-show-password")
        .get("div.auth0-lock-input-block,auth0-lock-input-password")
        .get("div.auth0-lock-input-wrap,auth0-lock-input-wrap-with-icon")
        .get("input.auth0-lock-input")
        .last()
        .type(password);
      // works with just this line cy.get("input.auth0-lock-input").last().type(password);
      // cy.wait(1000);
      cy.get("button.auth0-lock-submit").click();
    });
  });
}

export default logIn;
