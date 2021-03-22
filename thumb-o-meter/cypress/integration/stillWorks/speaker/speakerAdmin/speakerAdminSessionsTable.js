//sessions table
function speakerAdminSessionTable() {
  describe("Speaker session table", () => {
    it("Get sessions button, confirm has 'Sessions' as text, click and check heading on sessions table has 'Previous Sessions' as text", () => {
      cy.get("button#tabs-9--tab-1").contains("Sessions").wait(1500).click();
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
          cy.get("th").eq(1).contains("Date");
          cy.get("th").eq(2).contains("Question");
          cy.get("th").eq(3).contains("Outcome");
          cy.get("th").eq(4).contains("Coach");
          cy.get("th").eq(5).contains("Participants");
          cy.get("th").eq(6).contains("Responses");
        });
      cy.wait(1500);
    });
  });
}

export default speakerAdminSessionTable;
