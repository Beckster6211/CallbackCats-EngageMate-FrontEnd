function speakerDjDeck() {
  describe("Speaker DJ Deck test", () => {
    describe("Speaker using the dj deck and playing tunes", () => {
      it("Get hackathon tune play for 5 seconds then stop", () => {
        //checking that is hackathon by label
        cy.wait(1500);
        cy.get("section")
          .find("div.deck_player__2UZgF")
          .eq(7)
          .find("p")
          .contains("Hackathon");
        //playing hackathon tune for 5 seconds
        cy.get("section")
          .find("div.deck_player__2UZgF")
          .eq(7)
          .find("button")
          .eq(0)
          .wait(1000)
          .click();
        cy.wait(5000);
        //stops playing hackathon
        cy.get("section")
          .find("div.deck_player__2UZgF")
          .eq(7)
          .find("button")
          .eq(2)
          .click();
        cy.wait(500);
      });
      it("Get Chris 'Engaged 1' tune and play", () => {
        //checking that is Engaged 1 by label
        cy.get("section")
          .find("div.deck_player__2UZgF")
          .eq(0)
          .find("p")
          .contains("Engaged 1");
        //playing Chris Engaged 1 tune
        cy.get("section")
          .find("div.deck_player__2UZgF")
          .eq(0)
          .find("button")
          .eq(0)
          .wait(1000)
          .click();
        cy.wait(2500);
        //stops playing Chris Engaged 1 tune
        // cy.get("section")
        //   .find("div.deck_player__2UZgF")
        //   .eq(7)
        //   .find("button")
        //   .eq(2)
        //   .click();
        ////////
      });
    });
  });
}

export default speakerDjDeck;
