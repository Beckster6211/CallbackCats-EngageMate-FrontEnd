function participantThumbSession() {
  describe("Paricipant thumbometer session", () => {
    describe("Checks for slider", () => {
      it("Checks for a slider", () => {
        //get pt slider
        cy.wait(1000);
        cy.get("div.chakra-slider__thumb,css-1qjoqa1");
      });
    });

    describe("Moves slider", () => {
      it("Moves slider", () => {
        //move slider
        cy.wait(1000);
        cy.get("div")
          .should("have.class", "css-gmuwbf")
          .get("div")
          .should("have.class", "ptThumb_container__3mOVg")
          .get("div")
          .should("have.class", "chakra-slider css-1e3e5yf")
          .eq(0)
          .wait(1000)
          .click(400, 550)
          .click(450, 550)
          .click(500, 550)
          .click(550, 550)
          .click(600, 550)
          .wait(1000);
      });
    });
  });
}

export default participantThumbSession;
