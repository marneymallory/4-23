import $ from "jquery";
import Convert from "./core";

$(document).ready(() => {
  $("#currencyForm").submit((event) => {
    event.preventDefault();
    console.log($("#dollarAmount").val());
    const dollarAmount = $("#dollarAmount").val();
    const currency = $("#currency").val();

    Convert.currencyConvert(currency, dollarAmount).then((response) => {
      console.log(response);
      if (response.result === "error") {
        return $("#currencyOutput").text("This currency does not exist");
      }
      return $("#currencyOutput").text(response.conversion_result);
    });
  });
});
