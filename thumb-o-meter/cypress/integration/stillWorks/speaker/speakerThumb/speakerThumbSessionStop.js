function speakerStopThumbSession() {
  describe("Check for stop timer button", () => {
    it("get stop timer button", () => {
      cy.wait(1000);
      // cy.get("div").should("have.class", "skView_container__8oHCA");
      // cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "skThumb_container__1X4wz");
      cy.get("div").should("have.class", "skThumb_buttons__1yQkM");

      cy.get("button")
        .should("have.class", "chakra-button skThumb_button__2Hiz- css-mdlog5")
        .contains("Stop Timer")
        .click();
      cy.wait(1000);
    });
  });
}

export default speakerStopThumbSession;
