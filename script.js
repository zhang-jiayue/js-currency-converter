// include api for currency change
const api =
  'https://v6.exchangerate-api.com/v6/3e1ecb4f49ea8cf62c65e81e/latest/USD';
var inputSelect = document.querySelector('.from');
var inputValue = document.querySelector('#inputValue');
var outputSelect = document.querySelector('.to');
var curIn;
var curOut;
var curVal;
var resu;
$(document).ready(() => {
  // listen to input
  $('#from').change((event) => {
    curIn = `${event.target.value}`;
  });

  $('#to').change((event) => {
    curOut = `${event.target.value}`;
  });

  $('#inputValue').change((event) => {
    curVal = `${event.target.value}`;
  });

  $('#submit').click(() => {
    $.ajax({
      type: 'GET',
      url: api,
      dataType: 'json',
      success: function (data, status, xhr) {
        let from = data.conversion_rates[curIn];
        let to = data.conversion_rates[curOut];
        resu = ((to / from) * curVal).toFixed(3);
        $('#outputValue').val(`${resu}`);
      },
    });
  });
});
