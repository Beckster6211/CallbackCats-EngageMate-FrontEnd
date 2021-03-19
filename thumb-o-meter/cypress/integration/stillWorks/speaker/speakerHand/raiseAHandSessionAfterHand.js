function speakerRaiseHandAfterHand(topic) {
  describe("Speaker raise a hand test after hand raised", () => {
    // describe("Check for hand raise notification on feature menu", () => {
    // it("Check for hand raise notification on raise a hand and contents '1'", () => {
    //   cy.wait(1500);
    //   cy.get("div.menu_notify__2TNsh,css-0").children().get("p").contains(1);
    // });
    // });
    describe("Check hand raised, contents and removing hand", () => {
      it("Get ul and check for list item with same as participant input", () => {
        cy.get("section.skHand_handsList__191W5")
          .children()
          .get("ul")
          .within(() => {
            cy.get("li.skHand_handRaise__2FjAN").eq(0).contains(topic);
          });
      });

      it("Get X to lower hand", () => {
        cy.get("section.skHand_handsList__191W5")
          .children()
          .get("ul")
          .get("li.skHand_handRaise__2FjAN")
          .children()
          .get("button.skHand_myBtn__Rncnt")
          .click();
      });
    });
  });
}

export default speakerRaiseHandAfterHand;
