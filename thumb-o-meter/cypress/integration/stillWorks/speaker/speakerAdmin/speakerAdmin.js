import speakerAdminAddUser from "./speakerAdminAddUser";
import speakerAdminSendAppMessage from "./speakerAdminSendAppMessage";
import speakerAdminUsersTable from "./speakerAdminUserTable";
import speakerAdminSessionTable from "./speakerAdminSessionsTable";
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
      // speakerAdminUsersTable();
      speakerAdminSessionTable();
    });
  });
}

export default speakerAdmin;

/*
//chris eq(44)
*/
