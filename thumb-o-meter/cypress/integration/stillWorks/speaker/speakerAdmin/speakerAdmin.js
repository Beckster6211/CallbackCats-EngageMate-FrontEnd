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
    it("Checking the add a user feature", () => {
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(0)
        .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
        .find("div")
        .should("have.class", "chakra-accordion__item css-17mg6aq")
        .eq(0)
        .find("button")
        .should("have.id", "accordion-button-5")
        .find("div")
        .should("have.class", "css-1eziwv")
        .contains("Add User Form");
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(0)
        .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
        .find("div")
        .should("have.class", "chakra-accordion__item css-17mg6aq")
        .eq(0)
        .find("button")
        .should("have.id", "accordion-button-5")
        .eq(0)
        .click();
      //adding user form
      //role
      cy.wait(1000);
      cy.get("form")
        .should("have.class", "addUserForm_form__1Etim")
        .find("div")
        .eq(0)
        .should("have.class", "chakra-form-control css-1kxonj9")
        .find("label")
        .should("have.id", "role-label")
        .contains("Role");
      cy.get("form")
        .should("have.class", "addUserForm_form__1Etim")
        .find("div")
        .should("have.class", "chakra-form-control css-1kxonj9")
        .find("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .find("select")
        .should("have.id", "role")
        .select("Coach")
        .should("have.value", "coach");
      // first name
      cy.get("form")
        .should("have.class", "addUserForm_form__1Etim")
        .find("div")
        .eq(3)
        .should("have.class", "chakra-form-control css-1kxonj9")
        .find("label")
        .should("have.id", "firstName-label")
        .contains("First name");
      cy.get("form")
        .should("have.class", "addUserForm_form__1Etim")
        .find("div")
        .eq(3)
        .should("have.class", "chakra-form-control css-1kxonj9")
        .find("input")
        .should("have.id", "firstName")
        .type("Cypress");
      // surname
      cy.get("form")
        .should("have.class", "addUserForm_form__1Etim")
        .find("div")
        .eq(4)
        .should("have.class", "chakra-form-control css-1kxonj9")
        .find("label")
        .should("have.id", "surname-label")
        .contains("Surname");
      cy.get("form")
        .should("have.class", "addUserForm_form__1Etim")
        .find("div")
        .eq(4)
        .should("have.class", "chakra-form-control css-1kxonj9")
        .find("input")
        .should("have.id", "surname")
        .type("Testing");
      // email address
      cy.get("form")
        .should("have.class", "addUserForm_form__1Etim")
        .find("div")
        .eq(5)
        .should("have.class", "chakra-form-control css-1kxonj9")
        .find("label")
        .should("have.id", "email-label")
        .contains("Email address");
      cy.get("form")
        .should("have.class", "addUserForm_form__1Etim")
        .find("div")
        .eq(5)
        .should("have.class", "chakra-form-control css-1kxonj9")
        .find("input")
        .should("have.id", "email")
        .type("cypressTesting@email.com");
      //add user button
      cy.get("form")
        .should("have.class", "addUserForm_form__1Etim")
        .find("button")
        .should("have.class", "chakra-button css-o3kgci")
        .contains("Add user");
      //close add a user menu
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(0)
        .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
        .find("div")
        .should("have.class", "chakra-accordion__item css-17mg6aq")
        .eq(0)
        .find("button")
        .should("have.id", "accordion-button-5")
        .eq(0)
        .click();
    });
    it("Check the send app message feature", () => {
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(0)
        .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
        .find("div")
        .should("have.class", "chakra-accordion__item css-17mg6aq")
        .eq(10)
        .find("button")
        .should("have.id", "accordion-button-7")
        .find("div")
        .should("have.class", "css-1eziwv")
        .contains("Send App Message");
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(0)
        .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
        .find("div")
        .should("have.class", "chakra-accordion__item css-17mg6aq")
        .eq(10)
        .find("button")
        .should("have.id", "accordion-button-7")
        .eq(0)
        .click();
      //typeing message
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(0)
        .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
        .find("div")
        .should("have.class", "chakra-accordion__item css-17mg6aq")
        .eq(10)
        .find("div")
        .should("have.class", "chakra-collapse")
        .find("div")
        .should("have.id", "accordion-panel-7")
        .find("form")
        .find("div")
        .should("have.class", "chakra-form-control css-1kxonj9")
        .find("label")
        .should("have.id", "message-label")
        .contains("Enter message:");
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(0)
        .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
        .find("div")
        .should("have.class", "chakra-accordion__item css-17mg6aq")
        .eq(10)
        .find("div")
        .should("have.class", "chakra-collapse")
        .find("div")
        .should("have.id", "accordion-panel-7")
        .find("form")
        .find("div")
        .should("have.class", "chakra-form-control css-1kxonj9")
        .find("input")
        .should("have.id", "message")
        .type("Cypress message");
      cy.get("main")
        .should("have.class", "admin_main__2iRjR")
        .find("div")
        .eq(0)
        .should("have.class", "chakra-accordion admin_accordion__1C9yH css-0")
        .find("div")
        .should("have.class", "chakra-accordion__item css-17mg6aq")
        .eq(10)
        .find("div")
        .should("have.class", "chakra-collapse")
        .find("div")
        .should("have.id", "accordion-panel-7")
        .find("form")
        .find("button")
        .should("have.class", "chakra-button css-o3kgci")
        .contains("Send")
        .click();
      cy.wait(2000);
    });
  });
}

export default speakerAdmin;

/*

*/
