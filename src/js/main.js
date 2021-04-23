import "../styles/main.scss"
import $ from "jquery"
import Convert from "./core"

$(document).ready(() => {
  $("#search-submit-btn").click(event => {
    event.preventDefault()
    const printContent = response => {
      // const { result, hdurl } = response
      // $("main").text(result)
      // $("#bg").attr("src", hdurl)
    }
    console.log(response.json)
    $(() => {
      Convert.currencyConvert().then(response => printContent(response))
    })
  })
})
