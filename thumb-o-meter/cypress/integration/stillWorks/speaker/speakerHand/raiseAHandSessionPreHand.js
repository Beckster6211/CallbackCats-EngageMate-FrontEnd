function speakerRaiseHandPreHand() {
  describe("Checking feature menu of app for Raise A Hand", () => {
    it("Get the raise a hand feature by going through the elements and class names", () => {
      cy.wait(1500);
      cy.get("section")
        .eq(1)
        .find("p")
        .should("have.id", "theHand")
        .contains("Raise a Hand");
    });
  });

  describe("Checking feature menu of app for notification on Raise A Hand", () => {
    it("Check for notification on raise a hand", () => {
      cy.wait(1500);
      cy.get("div")
        .should("have.class", "menu_container__9rw4K")
        .find("div")
        .should("have.class", "menu_players__3lOjS")
        .find("div")
        .should("have.class", "menu_notify__2TNsh css-0")
        .find("p")
        .contains(0);
    });
  });
}

export default speakerRaiseHandPreHand;
