//users table
function speakerAdminUsersTable() {
  describe("Speaker users table", () => {
    it("Get users button, confirm has 'Users' as text, click and check heading on users table has 'Registered users' as text", () => {
      cy.get("button#tabs-9--tab-0").contains("Users");
      // .click()
      cy.get("div#tabs-9--tabpanel-0")
        .find("table.chakra-table,css-1ac7ejl")
        .find("caption.css-gdv02")
        .contains("Registered users");
    });

    it("Get user table headings and confirm has 'First name', 'Surname', 'Role', 'Bootcamper Id', 'CoHort no', 'Email' as text", () => {
      cy.get("div#tabs-9--tabpanel-0")
        .find("table.chakra-table,css-1ac7ejl")
        .find("thead.css-0")
        .find("tr.css-0")
        .within(() => {
          cy.get("th").eq(1).contains("First name");
          cy.get("th").eq(2).contains("Surname");
          cy.get("th").eq(3).contains("Role");
          cy.get("th").eq(4).contains("Bootcamper Id");
          cy.get("th").eq(5).contains("Cohort no");
          cy.get("th").eq(6).contains("Email");
        });
    });

    it("Get a user from table (the Speaker)", () => {
      cy.get("div#tabs-9--tabpanel-0")
        .find("table.chakra-table,css-1ac7ejl")
        .find("tbody.css-0")
        .find("tr.css-0")
        .eq(52)
        .within(() => {
          cy.get("td").eq(1).contains("Speaker");
          cy.get("td").eq(2).contains("View");
          cy.get("td").eq(3).contains("coach");
          cy.get("td").eq(4).contains(1287);
          cy.get("td").eq(5).contains(4);
          cy.get("td").eq(6).contains("speakerview@gmail.com");
        });
    });
  });
}

export default speakerAdminUsersTable;
