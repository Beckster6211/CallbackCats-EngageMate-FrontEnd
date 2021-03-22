//ending test
function endTest() {
  describe("Ending test", () => {
    it("End test", () => {
      cy.wait(1500);
      cy.end();
    });
  });
}
export default endTest;
