//users table
function speakerAdminUsersTable() {
  describe("Speaker users table", () => {
    it("Get users button, confirm has 'Users' as text, click and check heading on users table has 'Registered users' as text", () => {
      cy.wait(1500);
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
          cy.get("th").eq(1).contains("First name").wait(750);
          cy.get("th").eq(2).contains("Surname").wait(750);
          cy.get("th").eq(3).contains("Role").wait(750);
          cy.get("th").eq(4).contains("Bootcamper Id").wait(750);
          cy.get("th").eq(5).contains("Cohort no").wait(750);
          cy.get("th").eq(6).contains("Email").wait(750);
        });
    });

    it("Get a user from table (the Speaker)", () => {
      cy.wait(1500);
      cy.get("div#tabs-9--tabpanel-0")
        .get("table.chakra-table,css-1ac7ejl")
        .get("tbody.css-0")
        .get("tr.css-0")
        .eq(52)
        .within(() => {
          cy.get("td").eq(1).contains("Speaker").wait(750);
          cy.get("td").eq(2).contains("View").wait(750);
          cy.get("td").eq(3).contains("coach").wait(750);
          cy.get("td").eq(4).contains(1287).wait(750);
          cy.get("td").eq(5).contains(4).wait(750);
          cy.get("td").eq(6).contains("speakerview@gmail.com");
        });
    });

    it("Get a user from table (Cypress Test user) and remove from table", () => {
      cy.wait(1500);
      cy.get("div#tabs-9--tabpanel-0")
        .get("table.chakra-table,css-1ac7ejl")
        .get("tbody.css-0")
        .get("tr.css-0")
        .eq(58)
        .within(() => {
          cy.get("td").eq(1).contains("Cypress").wait(750);
          cy.get("td").eq(2).contains("Testing").wait(750);
          cy.get("td").eq(3).contains("coach").wait(750);
          cy.get("td").eq(6).contains("cypressTesting@gmail.com").wait(750);
        });
      cy.get("div#tabs-9--tabpanel-0")
        .get("table.chakra-table,css-1ac7ejl")
        .get("tbody.css-0")
        .get("tr.css-0")
        .eq(53)
        .find("td")
        .eq(0)
        .click();
      // cy.wait(2000);
    });
  });
}

export default speakerAdminUsersTable;
