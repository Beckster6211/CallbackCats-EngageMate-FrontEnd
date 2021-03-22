//check thumb feature on feature menu

function checkingForThumbOMeterFeature() {
  describe("Checking feature menu of app for Thumbometer and navigating to page", () => {
    it("Check for Thumbometer heading and confirm has 'Thumbometer' as text", () => {
      cy.get("section").eq(0).find("p#theThumb").contains("Thumbometer");
      cy.wait(1500);
    });

    it("Get ThumbOMeter link and click", () => {
      cy.get("section").eq(0).find("a[href='/thumb']").wait(1500).click();
    });

    it("On Thumbometer page get the heading and confirm has 'Thumbometer' as text", () => {
      cy.get("h2.chakra-heading,heading_container__12Hqb,css-zey6tx").contains(
        "Thumbometer"
      );
      cy.wait(1500);
    });
  });
}

export default checkingForThumbOMeterFeature;
