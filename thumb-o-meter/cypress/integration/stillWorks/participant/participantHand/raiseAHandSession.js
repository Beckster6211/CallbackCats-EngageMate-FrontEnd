function participantRaiseHandSession(topic) {
  describe("Participant Raise a hand test", () => {
    describe("Participant raising a hand", () => {
      it("Get input field and type topic into", () => {
        cy.get("input.chakra-input,css-1m7lgs4").type(topic);
        cy.wait(1500);
      });

      it("Get image and click to raise hand", () => {
        cy.get("img.hand_hand__2CwSx").click();
        cy.wait(1000);
      });
    });
  });
}

export default participantRaiseHandSession;
