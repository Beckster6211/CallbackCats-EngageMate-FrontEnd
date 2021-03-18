/*
get to admin through nav bar
check add user
check add user form drop down 
click drop down
check for role heading
check for role drop down
click drop down select coach
check first name
check input field type speaker
check surname
check input field type view
check email
check input field type speakerview@gmail.com
check send app message 
check send app message drop down 
click drop down
check enter message
check input field type testing
check send button 
click send button

check users 
check users heading 
check registered users text?
check first name heading 
check surname heading 
check role heading 
check bootcamperID 
check CoHort No 
check for a bootcamper (Amelia?)

check session
check sessions heading 
click sessions heading 
check previous sessions heading 
check date heading 
check question heading 
check outcome heading 
check coach heading 
check participants heading
check a session text correct? 

*/

function speakerAdmin() {
  describe("Speaker using admin page", () => {
    it("Navigate to the admin page through nav bar", () => {
      cy.get("nav")
        .should("have.class", "navBar_container__3TR1W css-135tgfi")
        .find("div")
        .should("have.class", "navBar_box__3EZrK css-ozv6cb")
        .find("div")
        .should("have.class", "navBar_navigation__2tOIC css-k008qs")
        .find("p")
        .should("have.class", "chakra-text navBar_menu__1-72O css-0")
        .eq(5)
        .find("a")
        .contains("Admin")
        .click();
    });
    // it("Checking the add a user feature", () => {
    //   cy.get("main")
    //     .should("have.class", "admin_main__2iRjR")
    //     .find("div")
    //     .eq(0)
    //     .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
    //     .find("div")
    //     .should("have.class", "chakra-accordion__item css-17mg6aq")
    //     .eq(0)
    //     .find("button")
    //     .should("have.id", "accordion-button-5")
    //     .find("div")
    //     .should("have.class", "css-1eziwv")
    //     .contains("Add User Form");
    //   cy.get("main")
    //     .should("have.class", "admin_main__2iRjR")
    //     .find("div")
    //     .eq(0)
    //     .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
    //     .find("div")
    //     .should("have.class", "chakra-accordion__item css-17mg6aq")
    //     .eq(0)
    //     .find("button")
    //     .should("have.id", "accordion-button-5")
    //     .eq(0)
    //     .click();
    //   //adding user form
    //   //role
    //   cy.wait(1000);
    //   cy.get("form")
    //     .should("have.class", "addUserForm_form__1Etim")
    //     .find("div")
    //     .eq(0)
    //     .should("have.class", "chakra-form-control css-1kxonj9")
    //     .find("label")
    //     .should("have.id", "role-label")
    //     .contains("Role");
    //   cy.get("form")
    //     .should("have.class", "addUserForm_form__1Etim")
    //     .find("div")
    //     .should("have.class", "chakra-form-control css-1kxonj9")
    //     .find("div")
    //     .should("have.class", "chakra-select__wrapper css-42b2qy")
    //     .find("select")
    //     .should("have.id", "role")
    //     .select("Coach")
    //     .should("have.value", "coach");
    //   // first name
    //   cy.get("form")
    //     .should("have.class", "addUserForm_form__1Etim")
    //     .find("div")
    //     .eq(3)
    //     .should("have.class", "chakra-form-control css-1kxonj9")
    //     .find("label")
    //     .should("have.id", "firstName-label")
    //     .contains("First name");
    //   cy.get("form")
    //     .should("have.class", "addUserForm_form__1Etim")
    //     .find("div")
    //     .eq(3)
    //     .should("have.class", "chakra-form-control css-1kxonj9")
    //     .find("input")
    //     .should("have.id", "firstName")
    //     .type("Cypress");
    //   // surname
    //   cy.get("form")
    //     .should("have.class", "addUserForm_form__1Etim")
    //     .find("div")
    //     .eq(4)
    //     .should("have.class", "chakra-form-control css-1kxonj9")
    //     .find("label")
    //     .should("have.id", "surname-label")
    //     .contains("Surname");
    //   cy.get("form")
    //     .should("have.class", "addUserForm_form__1Etim")
    //     .find("div")
    //     .eq(4)
    //     .should("have.class", "chakra-form-control css-1kxonj9")
    //     .find("input")
    //     .should("have.id", "surname")
    //     .type("Testing");
    //   // email address
    //   cy.get("form")
    //     .should("have.class", "addUserForm_form__1Etim")
    //     .find("div")
    //     .eq(5)
    //     .should("have.class", "chakra-form-control css-1kxonj9")
    //     .find("label")
    //     .should("have.id", "email-label")
    //     .contains("Email address");
    //   cy.get("form")
    //     .should("have.class", "addUserForm_form__1Etim")
    //     .find("div")
    //     .eq(5)
    //     .should("have.class", "chakra-form-control css-1kxonj9")
    //     .find("input")
    //     .should("have.id", "email")
    //     .type("cypressTesting@email.com");
    //   //add user button
    //   cy.get("form")
    //     .should("have.class", "addUserForm_form__1Etim")
    //     .find("button")
    //     .should("have.class", "chakra-button css-o3kgci")
    //     .contains("Add user");
    //   //close add a user menu
    //   cy.get("main")
    //     .should("have.class", "admin_main__2iRjR")
    //     .find("div")
    //     .eq(0)
    //     .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
    //     .find("div")
    //     .should("have.class", "chakra-accordion__item css-17mg6aq")
    //     .eq(0)
    //     .find("button")
    //     .should("have.id", "accordion-button-5")
    //     .eq(0)
    //     .click();
    // });
    // //send message feature
    // it("Check the send app message feature", () => {
    //   cy.get("main")
    //     .should("have.class", "admin_main__2iRjR")
    //     .find("div")
    //     .eq(0)
    //     .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
    //     .find("div")
    //     .should("have.class", "chakra-accordion__item css-17mg6aq")
    //     .eq(10)
    //     .find("button")
    //     .should("have.id", "accordion-button-7")
    //     .find("div")
    //     .should("have.class", "css-1eziwv")
    //     .contains("Send App Message");
    //   cy.get("main")
    //     .should("have.class", "admin_main__2iRjR")
    //     .find("div")
    //     .eq(0)
    //     .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
    //     .find("div")
    //     .should("have.class", "chakra-accordion__item css-17mg6aq")
    //     .eq(10)
    //     .find("button")
    //     .should("have.id", "accordion-button-7")
    //     .eq(0)
    //     .click();
    //   //typeing message
    //   cy.get("main")
    //     .should("have.class", "admin_main__2iRjR")
    //     .find("div")
    //     .eq(0)
    //     .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
    //     .find("div")
    //     .should("have.class", "chakra-accordion__item css-17mg6aq")
    //     .eq(10)
    //     .find("div")
    //     .should("have.class", "chakra-collapse")
    //     .find("div")
    //     .should("have.id", "accordion-panel-7")
    //     .find("form")
    //     .find("div")
    //     .should("have.class", "chakra-form-control css-1kxonj9")
    //     .find("label")
    //     .should("have.id", "message-label")
    //     .contains("Enter message:");
    //   cy.get("main")
    //     .should("have.class", "admin_main__2iRjR")
    //     .find("div")
    //     .eq(0)
    //     .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
    //     .find("div")
    //     .should("have.class", "chakra-accordion__item css-17mg6aq")
    //     .eq(10)
    //     .find("div")
    //     .should("have.class", "chakra-collapse")
    //     .find("div")
    //     .should("have.id", "accordion-panel-7")
    //     .find("form")
    //     .find("div")
    //     .should("have.class", "chakra-form-control css-1kxonj9")
    //     .find("input")
    //     .should("have.id", "message")
    //     .type("Cypress message");
    //   cy.get("main")
    //     .should("have.class", "admin_main__2iRjR")
    //     .find("div")
    //     .eq(0)
    //     .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
    //     .find("div")
    //     .should("have.class", "chakra-accordion__item css-17mg6aq")
    //     .eq(10)
    //     .find("div")
    //     .should("have.class", "chakra-collapse")
    //     .find("div")
    //     .should("have.id", "accordion-panel-7")
    //     .find("form")
    //     .find("button")
    //     .should("have.class", "chakra-button css-o3kgci")
    //     .contains("Send")
    //     .click();
    // });
    it("Check looking for users in table", () => {
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(16)
        .should("have.class", "chakra-tabs admin_tab__2ytNg css-13o7eu2")
        .find("div")
        .should("have.class", "chakra-tabs__tablist css-1xhq01z")
        .find("button")
        .should("have.id", "tabs-9--tab-0")
        .contains("Users");
      // .click();
      // cy.get("main")
      //   .should("have.class", "admin_main__2iRjR")
      //   .find("div")
      //   .eq(16)
      //   .should("have.class", "chakra-tabs admin_tab__2ytNg css-13o7eu2")
      //   .find("div")
      //   .should("have.class", "chakra-tabs__tab-panels css-8atqhb")
      //   .find("div")
      //   .should("have.id", "tabs-9--tabpanel-0")
      //   .find("div")
      //   .should("have.class", "admin_userTable__2uCq4")
      //   .find("table")
      //   .should("have.class", "chakra-table css-1ac7ejl")
      //   .find("caption")
      //   .should("have.class", "css-gdv02")
      //   .contains("Registered users");
      // //check table headings
      // cy.get("main")
      //   .should("have.class", "admin_main__2iRjR")
      //   .find("div")
      //   .eq(16)
      //   .should("have.class", "chakra-tabs admin_tab__2ytNg css-13o7eu2")
      //   .find("div")
      //   .should("have.class", "chakra-tabs__tab-panels css-8atqhb")
      //   .find("div")
      //   .should("have.id", "tabs-9--tabpanel-0")
      //   .find("div")
      //   .should("have.class", "admin_userTable__2uCq4")
      //   .find("table")
      //   .should("have.class", "chakra-table css-1ac7ejl")
      //   .find("thead")
      //   .should("have.class", "css-0")
      //   .find("tr")
      //   .should("have.class", "css-0")
      //   .eq(0)
      //   .within(() => {
      //     cy.get("th").eq(1).contains("First name");
      //     cy.get("th").eq(2).contains("Surname");
      //     cy.get("th").eq(3).contains("Role");
      //     cy.get("th").eq(4).contains("Bootcamper Id");
      //     cy.get("th").eq(5).contains("Cohort no");
      //     cy.get("th").eq(6).contains("Email");
      //   });
      // //check a user in the table
      // cy.get("main")
      //   .should("have.class", "admin_main__2iRjR")
      //   .find("div")
      //   .eq(16)
      //   .should("have.class", "chakra-tabs admin_tab__2ytNg css-13o7eu2")
      //   .find("div")
      //   .should("have.class", "chakra-tabs__tab-panels css-8atqhb")
      //   .find("div")
      //   .should("have.id", "tabs-9--tabpanel-0")
      //   .find("div")
      //   .should("have.class", "admin_userTable__2uCq4")
      //   .find("table")
      //   .should("have.class", "chakra-table css-1ac7ejl")
      //   .find("tbody")
      //   .children("tr")
      //   .eq(2);
      // .within(() => {
      //   cy.get("td").eq(1).contains("Amelia");
      //   cy.get("td").eq(2).contains("Collins-Patel");
      //   cy.get("td").eq(3).contains("bootcamper");
      //   cy.get("td").eq(4).contains("1236");
      //   cy.get("td").eq(5).contains("4");
      //   cy.get("td").eq(6).contains("ameliacollinspatel@gmail.com");
      // });
    });
    it("Check sessions table", () => {
      //get to sessions table
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(16)
        .should("have.class", "chakra-tabs admin_tab__2ytNg css-13o7eu2")
        .find("div")
        .should("have.class", "chakra-tabs__tablist css-1xhq01z")
        .find("button")
        .eq(1)
        .should("have.id", "tabs-9--tab-1")
        .contains("Sessions")
        .click();
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(16)
        .should("have.class", "chakra-tabs admin_tab__2ytNg css-13o7eu2")
        .find("div")
        .should("have.class", "chakra-tabs__tab-panels css-8atqhb")
        .find("div")
        .eq(2)
        .should("have.id", "tabs-9--tabpanel-1")
        .find("div")
        .eq(0)
        .should("have.class", "admin_sessionTable__2Ulq3")
        .find("table")
        .should("have.class", "chakra-table css-1ac7ejl")
        .find("caption")
        .should("have.class", "css-gdv02")
        .contains("Previous Sessions");
      //session table heading
      // //check table headings
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(16)
        .should("have.class", "chakra-tabs admin_tab__2ytNg css-13o7eu2")
        .find("div")
        .should("have.class", "chakra-tabs__tab-panels css-8atqhb")
        .find("div")
        .eq(2)
        .should("have.id", "tabs-9--tabpanel-1")
        .find("div")
        .eq(0)
        .should("have.class", "admin_sessionTable__2Ulq3")
        .find("table")
        .should("have.class", "chakra-table css-1ac7ejl")
        .find("thead")
        .should("have.class", "css-0")
        .find("tr")
        .should("have.class", "css-0")
        .eq(0)
        .within(() => {
          cy.get("th").eq(1).contains("Date");
          cy.get("th").eq(2).contains("Question");
          cy.get("th").eq(3).contains("Outcome");
          cy.get("th").eq(4).contains("Coach");
          cy.get("th").eq(5).contains("Participants");
          cy.get("th").eq(6).contains("Responses");
          cy.get("th").eq(7).contains("Throwaway");
        });

      //   .find("div")
      //   .should("have.class", "admin_userTable__2uCq4")
      //   .find("table")
      //   .should("have.class", "chakra-table css-1ac7ejl")
      //   .find("thead")
      //   .should("have.class", "css-0")
      //   .find("tr")
      //   .should("have.class", "css-0")
      //   .eq(0)
      //   .within(() => {
      //     cy.get("th").eq(1).contains("First name");
      //     cy.get("th").eq(2).contains("Surname");
      //     cy.get("th").eq(3).contains("Role");
      //     cy.get("th").eq(4).contains("Bootcamper Id");
      //     cy.get("th").eq(5).contains("Cohort no");
      //     cy.get("th").eq(6).contains("Email");
      //   });
    });
  });
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
