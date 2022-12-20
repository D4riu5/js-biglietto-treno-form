const KmBasePrice = 0.21;
const userFullName = document.getElementById("name-input");
const userKm = document.getElementById("km-input");
const generate = document.querySelector('.generate-ticket');
const age = document.getElementById("age-range")
let ticketPrice

generate.addEventListener ('click',
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
      document.getElementById('offer').innerHTML = "Biglietto gold";
      document.getElementById('ticket-cost').innerHTML = ticketPrice.toFixed(2) + ' €';
    }
    if (age.value == '18') {
      ticketPrice = ticketPrice

      console.log('Il bliglietto scontato di ' + userFullName.value + ' costa ' + ticketPrice.toFixed(2) + ' €')
      document.getElementById('offer').innerHTML = "Biglietto standard";
      document.getElementById('ticket-cost').innerHTML = ticketPrice.toFixed(2) + ' €';
    }
    if (age.value == 'over-65') {
      ticketPrice = ticketPrice * 0.6

      console.log('Il bliglietto scontato di ' + userFullName.value + ' costa ' + ticketPrice.toFixed(2) + ' €')
      document.getElementById('offer').innerHTML = "Biglietto silver";
      document.getElementById('ticket-cost').innerHTML = ticketPrice.toFixed(2) + ' €';
    }

    // Carriage random number from 1 to 9
    let randomCarriage = Math.floor(Math.random() * 9) + 1;
    document.getElementById('carriage').innerHTML = randomCarriage;

    //CP-code random number from 90000 to 99999
    let randomCP = Math.floor(Math.random() * 9999) + 90000;
    document.getElementById('CP-code').innerHTML = randomCP;

    // Reveal Your ticket
    document.getElementById('your-ticket').style.display = "block";
    document.getElementById('passenger').innerHTML = userFullName.value;
  }
)

// Reset button
document.querySelector('.reset').addEventListener ('click',
  function() {
    console.log("Resetted")
    document.getElementById("name-input").value = '';
    document.getElementById("km-input").value = '';
    document.getElementById("age-range").value = 'age-not-selected'
    document.getElementById('your-ticket').style.display = "none";
  }
  )



