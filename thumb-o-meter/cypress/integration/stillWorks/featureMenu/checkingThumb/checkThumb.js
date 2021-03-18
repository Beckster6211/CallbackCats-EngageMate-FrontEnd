//check thumb feature on feature menu

function checkingForThumbOMeterFeature() {
  describe("Checking feature menu of app for Thumbometer and navigating to page", () => {
    it("Check for Thumbometer heading and confirm has 'Thumbometer' as text", () => {
      cy.wait(1000);
      cy.get("section").eq(0).find("p#theThumb").contains("Thumbometer");
    });

    it("Get ThumbOMeter link and click", () => {
      cy.wait(1000);
      cy.get("section").eq(0).find("a[href='/thumb']").click();
    });

    it("On Thumbometer page get the heading and confirm has 'Thumbometer' as text", () => {
      cy.wait(1000);
      cy.get("h2.chakra-heading,heading_container__12Hqb,css-zey6tx").contains(
        "Thumbometer"
      );
    });
  });
}

export default checkingForThumbOMeterFeature;
