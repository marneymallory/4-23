// import "../styles/main.scss"
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

//   if (response["error-type"] === "unsupported-code") {
//     responseHTML = `The currency in question does not exist. Please try again.`;
//     return $("#currency-type-error").html(responseHTML);
//   } else if (response["conversion_result"]) {
//     responseHTML = `<p>${currency} ${response["base_code"]} converted to ${response["target_code"]} is ${response["conversion_result"]}</p>`;
//   } else {
//     responseHTML = `There was an error: ${response["error-type"]}`;
//   }
//   return $("#output").html(responseHTML);
// }
