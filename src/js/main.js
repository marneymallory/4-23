import "../styles/main.scss"
import $ from "jquery"
import Currency from "./core"

$(document).ready(function() {
  $('#search-submit-btn').click(function(event) {
    event.preventDefault();
const printContent = response => {
  const { explanation, hdurl } = response
  $("main").text(explanation)
  $("#bg").attr("src", hdurl)
}
  
$(() => {
  Currency.dollars().then(response => printContent(response))
  }
)};
