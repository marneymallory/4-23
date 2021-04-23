import "../styles/main.scss"
import $ from "jquery"
import Currency from "./core"

$(document).ready(function() {
  $('#search-submit-btn').click(function(event) {
    event.preventDefault();
const printContent = response => {
  // const { result, hdurl } = response
  // $("main").text(result)
  // $("#bg").attr("src", hdurl)
}
  
$(() => {
  Currency.convert().then(response => printContent(response))
  }
)}
  )}