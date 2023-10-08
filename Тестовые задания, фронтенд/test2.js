var rootElement = $("#rootID");
var childElements = rootElement.children(".someClassName");

childElements.each(function(index, element) {
  console.log($(element).text());
});
