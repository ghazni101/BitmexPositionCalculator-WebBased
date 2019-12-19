function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();

oReq.open("GET", "https://cors-anywhere.herokuapp.com/https://www.bitmex.com/api/v1/trade?symbol=XBT&count=1&reverse=true");
oReq.send();

const capital = document.getElementById("BTC Capital");
const entry = document.getElementById("Entry Price");
const sl = document.getElementById("Stop Loss");
const exit = document.getElementById("Exit Price");
const risk = document.getElementById("Risk in %");