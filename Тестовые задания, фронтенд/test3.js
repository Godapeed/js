var rootElement = $("#rootID");
var childElements = rootElement.find(".someClassName");

childElements.each(function(index, element) {
  console.log($(element).text());
});