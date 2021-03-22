//back button pressed to get to feature menu

function backButton() {
  describe("Press back button to get to feature menu", () => {
    it("Get the back button", () => {
      cy.wait(1000);
      cy.get("a").find("button").contains("Back").click();
    });
  });
}

export default backButton;
