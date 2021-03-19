function speakerRaiseHandPreHand() {
  describe("Speaker raise a hand test before hand raised", () => {
    describe("Check feature menu of app for notification on Raise A Hand", () => {
      it("Check for notification on raise a hand and contents '0'", () => {
        cy.wait(1500);
        cy.get("div.menu_notify__2TNsh,css-0").children().get("p").contains(0);
      });
    });
  });
}

export default speakerRaiseHandPreHand;
