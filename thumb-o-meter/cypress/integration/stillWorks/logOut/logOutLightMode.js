//logging out of the app in light mode

function logOutLightMode() {
  describe("Log out of app in light mode", () => {
    it("Get logout button through the nav bar confirm has 'Log Out' as text then click the 'Log Out' button", () => {
      cy.wait(1500);
      cy.get("button.chakra-button,logout_btn__3P-26,css-1pkkric")
        .contains("Log Out")
        .wait(1000)
        .click();
      cy.wait(1000);
    });
  });
}

export default logOutLightMode;
