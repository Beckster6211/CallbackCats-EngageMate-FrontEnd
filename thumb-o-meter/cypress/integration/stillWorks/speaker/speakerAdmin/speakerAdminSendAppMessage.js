//send app message
function speakerAdminSendAppMessage(message) {
  describe("Speaker send app message", () => {
    //send message feature
    it("Get send app message field, confirm has 'Send App Message' as text and open", () => {
      cy.get("div.chakra-accordion,admin_accordion__1C9yH,css-0")
        .find("div.chakra-accordion__item,css-17mg6aq")
        .eq(1)
        .find("button#accordion-button-7")
        .find("div.css-1eziwv")
        .contains("Send App Message");
      cy.get("div.chakra-accordion,admin_accordion__1C9yH,css-0")
        .find("div.chakra-accordion__item,css-17mg6aq")
        .eq(1)
        .find("button#accordion-button-7")
        .click();
    });

    //typeing message
    it("Confirm message heading has 'Enter message' as text", () => {
      cy.get("div#accordion-panel-7")
        .find("form")
        .find("label#message-label")
        .contains("Enter message:");
    });

    it("Get message input field and type message into", () => {
      cy.get("div#accordion-panel-7")
        .find("form")
        .find("input#message")
        .type(message);
    });

    it("Get send message button, confirm has 'Send' as text and click", () => {
      cy.get("div#accordion-panel-7")
        .find("form")
        .find("button.chakra-button,css-o3kgci")
        .contains("Send")
        .click();
    });
  });
}
export default speakerAdminSendAppMessage;
