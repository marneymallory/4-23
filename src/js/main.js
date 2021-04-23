import "../styles/main.scss"
import $ from "jquery"
import Convert from "./core"

$(document).ready(() => {
  $("#search-submit-btn").click(event => {
    event.preventDefault()
    const currency = response => {
      const { result, hdurl } = response
      $("main").text(result)
      $("#bg").attr("src", hdurl)
    }
    $(() => {
      Convert.currencyConvert(currency, amount).then(response =>
        printContent(response)
      )
    })
  })
})
