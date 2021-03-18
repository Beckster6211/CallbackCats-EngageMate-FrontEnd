//check quiz feature on feature menu

function checkingForQuizFeature() {
  describe("Checking feature menu of app for Live Quiz and navigating to page", () => {
    it("Check for live quiz feature heading and confirm has 'Live Quiz' as text", () => {
      cy.wait(1500);
      cy.get("section").eq(2).find("p#theQuiz").contains("Live Quiz");
    });

    it("Get Live Quiz link and click", () => {
      cy.wait(1500);
      cy.get("section").eq(2).find("a[href='/quiz']").click();
    });

    it("On Live Quiz page get heading and confirm has 'Live Quiz' as text", () => {
      cy.wait(1000);
      cy.get("h2.chakra-heading,heading_container__12Hqb css-zey6tx").contains(
        "Live Quiz"
      );
    });
  });
}

export default checkingForQuizFeature;
