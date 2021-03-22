//back button pressed to get to feature menu

function backButton() {
  describe("Press back button to get to feature menu", () => {
    it("Get the back button", () => {
      cy.get("a").find("button").contains("Back").wait(1500).click();
    });
  });
}

export default backButton;
