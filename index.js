const submitBill = document.querySelector('#billForm');
const display = document.querySelector('.display');
const container = document.querySelector('#container');
const heading = document.querySelector('.h1');
const getServiceQual = document.querySelector('#options');

// console.log(getServiceQual[2].value);

const displayBill = (tipTotal, total) => {
  const text = `
  Your tip is $${tipTotal} and your total bill is $${total}!
  `;
  display.textContent = text;


  submitBill.classList.add('none');
  heading.classList.add('none');
};

const calculateBill = () => {
  let tipTotal;
  let total;
  submitBill.addEventListener('submit', (e) => {
    e.preventDefault();
    const billValue = parseFloat(submitBill.bill.value, 10);
    const peopleValue = parseFloat(submitBill.people.value, 10);
    const selectedServiceQual = getServiceQual.selectedIndex;
    const serviceQualOptions = getServiceQual.options;
    const serviceQualIndex = serviceQualOptions[selectedServiceQual].index;
    const serviceQual = parseFloat(getServiceQual[serviceQualIndex].value);

    if (!billValue) {
      alert('Please type in your bill total');
    }

    if( billValue && !peopleValue || peopleValue == 0 || !serviceQual

      ) {
      total = billValue;
    }

    if ( billValue && serviceQual && !peopleValue) {
      billTotal = billValue;
      tipTotal = parseFloat(billTotal * serviceQual);
      total = billTotal + tipTotal;
    }

    if( billValue && peopleValue > 0 && serviceQual) {
      billTotal = billValue / peopleValue;
      tipTotal = parseFloat(billTotal * serviceQual);
      total = billTotal + tipTotal;
      }

      tipTotal = Math.round(tipTotal * 100) / 100;
      tipTotal = tipTotal.toFixed(2);
      total = Math.round(total * 100) / 100;
      total = total.toFixed(2);

      displayBill(tipTotal, total);
  });
}

calculateBill();