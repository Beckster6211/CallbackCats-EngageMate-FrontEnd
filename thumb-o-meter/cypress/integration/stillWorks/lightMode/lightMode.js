function lightMode() {
  describe("Demonstrating changing to light mode", () => {
    it("Get button controls light mode and clicks it", () => {
      //changes to light mode
      cy.get("button.css-14g9kwn").click();
      cy.wait(1500);
    });
  });
}

export default lightMode;
