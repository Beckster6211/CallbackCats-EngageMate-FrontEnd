//issues as leaves speaker page doesn't resume
function speakerStopQuizSession() {
  describe("Speaker stop quiz session", () => {
    it("Find stop session button and click it", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "skPoll_container__3gJaD")
        .find("div")
        .should("have.class", "skPollResults_resultsDiv__1udH7")
        .find("button")
        .should("have.class", "chakra-button css-mdlog5")
        .contains("Stop Session")
        .click();
    });
  });
}

export default speakerStopQuizSession;
