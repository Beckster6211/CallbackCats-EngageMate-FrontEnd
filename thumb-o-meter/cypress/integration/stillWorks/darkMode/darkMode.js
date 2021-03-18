function darkMode() {
  describe("Demonstrating changing to dark mode", () => {
    it("Get button controls dark mode and clicks it", () => {
      //changing to dark mode
      // cy.wait(1000);
      cy.get("button.css-j47tpi").click();
      cy.wait(1000);
      // cy.wait(1000);
    });
  });
}

export default darkMode;
