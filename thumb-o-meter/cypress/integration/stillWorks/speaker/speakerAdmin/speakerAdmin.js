import speakerAdminAddUser from "./speakerAdminAddUser";
import speakerAdminSendAppMessage from "./speakerAdminSendAppMessage";
import speakerAdminUsersTable from "./speakerAdminUserTable";
function speakerAdmin() {
  describe("Speaker Admin test", () => {
    describe("Speaker navigate to admin page, check add user form, send app message, user and session tables", () => {
      it("Navigate to admin page through nav bar", () => {
        cy.wait(5000);
        cy.get("div.navBar_navigation__2tOIC,css-k008qs")
          .find("p.chakra-text,navBar_menu__1-72O css-0")
          .eq(4)
          .find("a")
          .contains("Admin")
          .click();
      });
      // speakerAdminAddUser("Cypress", "Testing", "cypressTesting.gmail.com");
      // speakerAdminSendAppMessage("Cypress message");
      speakerAdminUsersTable();
    });
  });
  // it("Check sessions table", () => {
  //   //get to sessions table
  //   cy.get("main")
  //     .should("have.class", "admin_main__2iRjR")
  //     .find("div")
  //     .eq(16)
  //     .should("have.class", "chakra-tabs admin_tab__2ytNg css-13o7eu2")
  //     .find("div")
  //     .should("have.class", "chakra-tabs__tablist css-1xhq01z")
  //     .find("button")
  //     .eq(1)
  //     .should("have.id", "tabs-9--tab-1")
  //     .contains("Sessions")
  //     .click();
  //   cy.get("main")
  //     .should("have.class", "admin_main__2iRjR")
  //     .find("div")
  //     .eq(16)
  //     .should("have.class", "chakra-tabs admin_tab__2ytNg css-13o7eu2")
  //     .find("div")
  //     .should("have.class", "chakra-tabs__tab-panels css-8atqhb")
  //     .find("div")
  //     .eq(2)
  //     .should("have.id", "tabs-9--tabpanel-1")
  //     .find("div")
  //     .eq(0)
  //     .should("have.class", "admin_sessionTable__2Ulq3")
  //     .find("table")
  //     .should("have.class", "chakra-table css-1ac7ejl")
  //     .find("caption")
  //     .should("have.class", "css-gdv02")
  //     .contains("Previous Sessions");
  //   //session table heading
  //   cy.get("main")
  //     .should("have.class", "admin_main__2iRjR")
  //     .find("div")
  //     .eq(16)
  //     .should("have.class", "chakra-tabs admin_tab__2ytNg css-13o7eu2")
  //     .find("div")
  //     .should("have.class", "chakra-tabs__tab-panels css-8atqhb")
  //     .find("div")
  //     .eq(2)
  //     .should("have.id", "tabs-9--tabpanel-1")
  //     .find("div")
  //     .eq(0)
  //     .should("have.class", "admin_sessionTable__2Ulq3")
  //     .find("table")
  //     .should("have.class", "chakra-table css-1ac7ejl")
  //     .find("thead")
  //     .should("have.class", "css-0")
  //     .find("tr")
  //     .should("have.class", "css-0")
  //     .eq(0)
  //     .within(() => {
  //       cy.get("th").eq(1).contains("Date");
  //       cy.get("th").eq(2).contains("Question");
  //       cy.get("th").eq(3).contains("Outcome");
  //       cy.get("th").eq(4).contains("Coach");
  //       cy.get("th").eq(5).contains("Participants");
  //       cy.get("th").eq(6).contains("Responses");
  //       cy.get("th").eq(7).contains("Throwaway");
  //     });
  // });
  //   });
  // });
}

export default speakerAdmin;

/*
<table>
  <tr>
    <td>My first client</td>
    <td>My first project</td>
    <td>0</td>
    <td>Active</td>
    <td><button>Edit</button></td>
  </tr>
</table>


cy.contains('My first client').parent('tr').within(() => {
  // all searches are automatically rooted to the found tr element
  cy.get('td').eq(1).contains('My first project')
  cy.get('td').eq(2).contains('0')
  cy.get('td').eq(3).contains('Active')
  cy.get('td').eq(4).contains('button', 'Edit').click()
})
//chris eq(44)

*/
