function darkMode() {
  describe("Demonstrating changing to dark mode", () => {
    it("Get button controls dark mode and clicks it", () => {
      //changing to dark mode
      cy.get("button.css-j47tpi").click();
      cy.wait(1500);
    });
  });
}

export default darkMode;
