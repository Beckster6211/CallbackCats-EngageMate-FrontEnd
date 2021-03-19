//checking DJ Deck
//check functionality?????

function checkingForDjDeck() {
  describe("Checking feature menu of app for DJDeck and navigating to page", () => {
    it("Check for dj deck feature and confirm has 'Dj Deck' as text", () => {
      cy.wait(2000);
      cy.get("section").eq(3).find("p#theDeck").contains("DJ Deck");
    });

    it("Get Dj Deck link and click ", () => {
      cy.wait(1500);
      cy.get("section").eq(3).find("a[href='/deck']").click();
    });

    it("On Dj Deck page get heading and confirm has 'Dj Deck' as text", () => {
      cy.wait(1000);
      cy.get("h2.chakra-heading,heading_container__12Hqb css-zey6tx").contains(
        "DJ Deck"
      );
    });
  });
}

export default checkingForDjDeck;
