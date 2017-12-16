var myVar;
function myFunction(){
  document.getElementById("loader").style.display = "block";
  document.getElementById("tablo").style.visibility = "hidden";
  myFunc();
}

function myFunc() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("tablo").style.visibility = "visible";
}

function Bitfinex()
{document.getElementById("tablo").src="https://cryptowat.ch/bitfinex/btcusd";
  myFunction();
}
function Bitstamp()
{
   document.getElementById("tablo").src="https://cryptowat.ch/bitstamp/btcusd";
   myFunction();
}

function Kraken()
{
  document.getElementById("tablo").src="https://cryptowat.ch/kraken/btcusd";
  myFunction();
}
