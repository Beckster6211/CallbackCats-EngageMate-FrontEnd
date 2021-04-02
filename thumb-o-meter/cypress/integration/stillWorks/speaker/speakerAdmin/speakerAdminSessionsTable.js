//sessions table
function speakerAdminSessionTable() {
  describe("Speaker session table", () => {
    it("Get sessions button, confirm has 'Sessions' as text, click and check heading on sessions table has 'Previous Sessions' as text", () => {
      cy.wait(1500);
      cy.get("button#tabs-9--tab-1").contains("Sessions").wait(1000).click();
      cy.get("div#tabs-9--tabpanel-1")
        .find("table.chakra-table,css-1ac7ejl")
        .find("caption.css-gdv02")
        .contains("Previous Sessions");
    });
    it("Get sessions table headings and confirm has 'Date', 'Question', 'Outcome', 'Coach', 'Participants', 'Responses' as text", () => {
      cy.get("div#tabs-9--tabpanel-1")
        .find("table.chakra-table,css-1ac7ejl")
        .find("thead.css-0")
        .find("tr.css-0")
        .within(() => {
          cy.get("th").eq(1).contains("Date").wait(750);
          cy.get("th").eq(2).contains("Question").wait(750);
          cy.get("th").eq(3).contains("Outcome").wait(750);
          cy.get("th").eq(4).contains("Coach").wait(750);
          cy.get("th").eq(5).contains("Participants").wait(750);
          cy.get("th").eq(6).contains("Responses").wait(750);
        });
      cy.wait(1500);
    });
  });
}

export default speakerAdminSessionTable;
