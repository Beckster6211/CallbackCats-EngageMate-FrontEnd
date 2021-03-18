function speakerStopThumbSession() {
  describe("Speaker stopping thumbometer session", () => {
    describe("Check for stop timer button", () => {
      it("Get stop timer button and click", () => {
        cy.wait(1000);
        cy.get(
          "button.chakra-button,skThumb_button__2Hiz-,css-mdlog5"
        ).contains("Stop Timer");
        // .click();
        cy.wait(1000);
      });
    });
  });
}

export default speakerStopThumbSession;
// code 20 lines
// after refactoring 17 lines
