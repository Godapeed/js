var _someClassName_ = $(".someClassName[oid='newDoc']");

_someClassName_.each(function(index, element) {
  console.log($(element).text());
});