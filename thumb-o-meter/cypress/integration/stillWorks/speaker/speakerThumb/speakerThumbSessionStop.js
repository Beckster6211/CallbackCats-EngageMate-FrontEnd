function speakerStopThumbSession() {
  describe("Speaker stopping thumbometer session", () => {
    describe("Check for stop timer button", () => {
      // stop button
      it("Get stop timer button and click", () => {
        cy.wait(1500);
        cy.get("button.chakra-button,skThumb_button__2Hiz-,css-mdlog5")
          .contains("Stop Timer")
          .wait(1500)
          .click();
        cy.wait(1500);
      });
    });
  });
}

export default speakerStopThumbSession;
