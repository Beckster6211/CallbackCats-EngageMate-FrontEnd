//check hand feature on feature menu

function checkingForHandFeature() {
  describe("Checking feature menu of app for Raise A Hand and navigating to page", () => {
    it("Check for raise a hand feature heading and confirm has 'Raise A Hand' as text", () => {
      cy.get("section").eq(1).find("p#theHand").contains("Raise a Hand");
      cy.wait(1500);
    });

    it("Get Raise A Hand link and click", () => {
      cy.get("section").eq(1).find("a[href='/raisehand']").wait(1500).click();
    });

    it("On Raise Hand page get heading and confirm has 'Raise Hand' as text", () => {
      cy.get("h2.chakra-heading,heading_container__12Hqb css-zey6tx").contains(
        "Raise Hand"
      );
      cy.wait(1500);
    });
  });
}

export default checkingForHandFeature;
