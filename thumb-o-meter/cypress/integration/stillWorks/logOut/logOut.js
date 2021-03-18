//logging out of the app

function logOut() {
  describe("Log out of app", () => {
    it("Get logout button through the nav bar confirm has 'Log Out' as text then click the 'Log Out' button", () => {
      cy.wait(1000);
      cy.get("button.chakra-button,logout_btn__3P-26,css-zgm9my")
        .contains("Log Out")
        .click();
      cy.wait(3000);
      cy.end();
    });
  });
}

export default logOut;

//code 25 lines
// refactor 19 lines
