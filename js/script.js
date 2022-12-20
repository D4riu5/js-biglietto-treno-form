const KmBasePrice = 0.21;
const userFullName = document.getElementById("name-input");
const userKm = document.getElementById("km-input");
const generate = document.querySelector('.generate-ticket');
const age = document.getElementById("age-range")
let ticketPrice

generate.addEventListener('click',
  function calcTicket() {

    // price check
    if (userFullName.value == '') {
      alert("Non hai inserito il nome")
      return;
    }
    if (userKm.value == '') {
      alert("Non hai inserito i chilometri da percorrere")
      return;
    }
    if (isNaN(userKm.value)) {
      alert("Km da percorrere accetta solo numeri!")
      return;
    }

    ticketPrice = KmBasePrice * userKm.value;
    console.log('Il bliglietto di base di ' + userFullName.value + ' costa ' + ticketPrice.toFixed(2) + ' €')

    // discount check
    if (age.value == 'age-not-selected') {
      alert("Non hai selezionato una fascia d'eta")
      return;
    }
    if (age.value == 'under-18') {
      ticketPrice = ticketPrice * 0.8
      console.log('Il bliglietto scontato di ' + userFullName.value + ' costa ' + ticketPrice.toFixed(2) + ' €')
    }
    if (age.value == '18') {
      ticketPrice = ticketPrice
      console.log('Il bliglietto scontato di ' + userFullName.value + ' costa ' + ticketPrice.toFixed(2) + ' €')
    }
    if (age.value == 'over-65') {
      ticketPrice = ticketPrice * 0.6
      console.log('Il bliglietto scontato di ' + userFullName.value + ' costa ' + ticketPrice.toFixed(2) + ' €')
    }
  }
)





