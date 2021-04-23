import "../styles/main.scss"
import $ from "jquery"
import Convert from "./core"

$(document).ready(() => {
  $("#convertButton").click(event => {
    event.preventDefault()
    Convert.currencyConvert("EUR", 20).then(response => console.log(response))
  })
})
