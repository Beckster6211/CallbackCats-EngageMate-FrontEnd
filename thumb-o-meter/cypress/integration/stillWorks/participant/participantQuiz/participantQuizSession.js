function participantQuizSession(question, option1) {
  describe("Participant Live Quiz session", () => {
    it("Check for the question heading and has correct text", () => {
      cy.get("div")
        .should("have.class", "ptPoll_sessionBox__3dks4")
        .get("p")
        .contains(question);
    });

    it("Check for option 1 and contains correct text", () => {
      cy.get("ul")
        .should("have.class", "ptPoll_optionsList__2smgN")
        .get("li")
        .should("have.class", "ptPoll_option__2ly3B")
        .eq(0)
        .contains(option1);
    });

    it("Select option 1 as the answer", () => {
      cy.get("ul")
        .should("have.class", "ptPoll_optionsList__2smgN")
        .get("li")
        .should("have.class", "ptPoll_option__2ly3B")
        .eq(0)
        .contains("Option 1")
        .find("button")
        .click();
    });
    it("Submit participant answer", () => {
      cy.get("div")
        .should("have.class", "ptPoll_sessionBox__3dks4")
        .get("button")
        .should("have.class", "chakra-button css-1is8iqt")
        .contains("Submit")
        .click();
    });
    it("Check participant answer correct", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "ptPoll_container__2lIJL")
        .find("div")
        .should("have.class", "skPollResults_resultsDiv__1udH7")
        .find("div")
        .should("have.class", "chakra-stack css-1ovnguh")
        .find("div")
        .should("have.class", "skPollResults_progressDiv__370jh")
        .find("div")
        .should("have.class", "css-qe4vho")
        .find("div")
        .should("have.class", "css-tez3s")
        .eq(0)
        .find("div")
        .should("have.class", "css-tez3s")
        .eq(1)
        .should("have.css", "background-color", "rgb(56, 161, 105)");
    });
  });
}

export default participantQuizSession;
