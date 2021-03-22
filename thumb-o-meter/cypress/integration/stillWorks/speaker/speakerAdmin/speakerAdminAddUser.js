//add user
function speakerAdminAddUser(firstName, surname, email) {
  describe("Speaker add a user", () => {
    it("Get add a user form field, confirm has 'Add User Form' as text and open form", () => {
      cy.wait(1500);
      cy.get("div.chakra-accordion,admin_accordion__1C9yH,css-0")
        .find("div.chakra-accordion__item,css-17mg6aq")
        .eq(0)
        .find("button#accordion-button-5")
        .find("div.css-1eziwv")
        .contains("Add User Form");
      cy.get("div.chakra-accordion,admin_accordion__1C9yH,css-0")
        .find("div.chakra-accordion__item,css-17mg6aq")
        .eq(0)
        .find("button#accordion-button-5")
        .wait(1500)
        .click();
    });
    it("Confirm role heading has 'Role' as text, get dropdown and select 'Coach'", () => {
      //adding user form
      //role
      cy.wait(1500);
      cy.get("form.addUserForm_form__1Etim")
        .find("div.chakra-form-control,css-1kxonj9")
        .eq(0)
        .find("label#role-label")
        .contains("Role");
      cy.get("form.addUserForm_form__1Etim")
        .find("div.chakra-form-control,css-1kxonj9")
        .find("div.chakra-select__wrapper,css-42b2qy")
        .find("select#role")
        .select("Coach")
        .should("have.value", "coach");
      cy.wait(1500);
    });
    it("Confirm first name heading has 'First name' as text, find input field and type into", () => {
      // first name
      cy.get("form.addUserForm_form__1Etim")
        .find("div.chakra-form-control,css-1kxonj9")
        .eq(1)
        .find("label#firstName-label")
        .contains("First name");
      cy.get("form.addUserForm_form__1Etim")
        .find("div.chakra-form-control,css-1kxonj9")
        .eq(1)
        .find("input#firstName")
        .type(firstName);
      cy.wait(1500);
    });
    it("Confirm surname heading has 'Surname' as text, find input field and type into", () => {
      // surname
      cy.get("form.addUserForm_form__1Etim")
        .find("div.chakra-form-control,css-1kxonj9")
        .eq(2)
        .find("label#surname-label")
        .contains("Surname");
      cy.get("form.addUserForm_form__1Etim")
        .find("div.chakra-form-control,css-1kxonj9")
        .eq(2)
        .find("input#surname")
        .type(surname);
      cy.wait(1500);
    });
    it("Confirm email heading has 'Email address' as text, find input field and type into", () => {
      // email address
      cy.get("form.addUserForm_form__1Etim")
        .find("div.chakra-form-control,css-1kxonj9")
        .eq(3)
        .find("label#email-label")
        .contains("Email address");
      cy.get("form.addUserForm_form__1Etim")
        .find("div.chakra-form-control,css-1kxonj9")
        .eq(3)
        .find("input#email")
        .type(email);
      cy.wait(1500);
    });
    it("Get add user button, confirm has 'Add user' as text, get button to close add user form", () => {
      //add user button
      cy.get("form.addUserForm_form__1Etim")
        .find("button.chakra-button,css-o3kgci")
        .contains("Add user")
        .click();
      cy.wait(1500);
      //close add a user menu
      cy.get("div.chakra-accordion,admin_accordion__1C9yH,css-0")
        .find("div.chakra-accordion__item,css-17mg6aq")
        .eq(0)
        .find("button#accordion-button-5")
        .wait(1500)
        .click();
    });
  });
}
export default speakerAdminAddUser;
