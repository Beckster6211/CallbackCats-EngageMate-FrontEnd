function participantQuizSession(question, option1, option2, option3, option4) {
  describe("Participant Live Quiz test", () => {
    describe("Participant selecting answer, submitting it and checking if correct", () => {
      it("Check question heading and has correct text", () => {
        cy.get("div.ptPoll_sessionBox__3dks4")
          .children()
          .get("p")
          .contains(question);
      });

      it("Check for options and contains correct text", () => {
        cy.get("ul.ptPoll_optionsList__2smgN").within(() => {
          cy.get("li").eq(0).contains(option1);
          cy.get("li").eq(1).contains(option2);
          cy.get("li").eq(2).contains(option3);
          // cy.get("li").eq(3).contains(option4);
        });
      });

      it("Select option 1 as the answer", () => {
        cy.get("ul.ptPoll_optionsList__2smgN")
          .get("li.ptPoll_option__2ly3B")
          .eq(0)
          .find("button")
          .click();
      });

      it("Submit participant answer", () => {
        cy.get("button.chakra-button,css-1is8iqt").contains("Submit").click();
      });

      it("Check participant answer correct", () => {
        cy.get("div.skPollResults_progressDiv__370jh")
          .find("div.css-qe4vho")
          .find("div.css-tez3s")
          .should("have.css", "background-color", "rgb(56, 161, 105)");
      });
    });
  });
}

export default participantQuizSession;
