//speaker setting a seesion on thumbometer page

function speakerThumbSession(question, timer) {
  describe("Speaker starting thumbometer session", () => {
    describe("Check for question dropdown", () => {
      it("Get question drop down, check contents, select preset then change to custom and add a question", () => {
        cy.wait(1000);
        //get question dropdown
        cy.get("select.chakra-select,skThumb_select__1BCKK,css-ts6fv")
          .eq(0)
          .within(() => {
            cy.get("option").eq(0).contains("Select Question");
            cy.get("option").eq(1).contains("How are you feeling?");
            cy.get("option").eq(2).contains("Did you understand that?");
            cy.get("option")
              .eq(3)
              .contains("Are you comfortable with moving on?");
            cy.get("option").eq(4).contains("Set a custom question.");
          });
        //select a preset question
        cy.wait(1000);
        cy.get("select.chakra-select,skThumb_select__1BCKK,css-ts6fv")
          .eq(0)
          .select("Did you understand that?")
          .should("have.value", "Did you understand that?");
        cy.wait(1500);
        //set custom question
        cy.get("select.chakra-select,skThumb_select__1BCKK,css-ts6fv")
          .eq(0)
          .select("Set a custom question.")
          .should("have.value", "custom");
        cy.wait(1000);
        // Type custom question
        cy.get("input.chakra-input,css-1kzfnz9").eq(0).type(question);
        cy.wait(1000);
      });
    });

    describe("Check for timer dropdown", () => {
      it("Get timer drop down, check contents, select preset then change to custom and add time", () => {
        cy.wait(1000);
        //get timer drop down
        cy.get("select.chakra-select,skThumb_select__1BCKK,css-ts6fv")
          .eq(1)
          .within(() => {
            cy.get("option").eq(0).contains("Timer Amount");
            cy.get("option").eq(1).contains("10 Seconds");
            cy.get("option").eq(2).contains("15 Seconds");
            cy.get("option").eq(3).contains("20 Seconds");
            cy.get("option").eq(4).contains("25 Seconds");
            cy.get("option").eq(5).contains("30 Seconds");
            cy.get("option").eq(6).contains("Set a custom time.");
          });
        //select preset timer
        cy.wait(1000);
        cy.get("select.chakra-select,skThumb_select__1BCKK,css-ts6fv")
          .eq(1)
          .select("20 Seconds")
          .should("have.value", 20);
        cy.wait(1500);
        // select custom timer
        cy.get("select.chakra-select,skThumb_select__1BCKK,css-ts6fv")
          .eq(1)
          .select("Set a custom time.")
          .should("have.value", "custom");
        cy.wait(1000);
        // type custom timer
        cy.get("input.chakra-input,css-1kzfnz9").eq(1).type(timer);
        cy.wait(1500);
      });
    });

    describe("Check for start timer button", () => {
      it("Get start timer button and click", () => {
        //get start timer button
        cy.get("button.chakra-button,skThumb_button__2Hiz-,css-ywjnlx")
          .contains("Start Timer")
          .wait(1000)
          .click();
        cy.wait(1500);
      });
    });
  });
}

export default speakerThumbSession;
