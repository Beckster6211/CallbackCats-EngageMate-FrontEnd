//logging out of the app

function logOut() {
  describe("Log out of app", () => {
    it("Get logout button through the nav bar confirm has 'Log Out' as text then click the 'Log Out' button", () => {
      cy.wait(1500);
      cy.get("button.chakra-button,logout_btn__3P-26,css-zgm9my")
        .contains("Log Out")
        .wait(1000)
        .click();
      cy.wait(1000);
    });
  });
}

export default logOut;
