const submitBill = document.querySelector('#billForm');
const display = document.querySelector('.display');
const container = document.querySelector('#container');
const heading = document.querySelector('.h1');
const getServiceQual = document.querySelector('#options');

// console.log(getServiceQual[2].value);

const displayBill = (billTotal) => {
  const text = `
  Your bill is $${billTotal}!
  `;
  display.textContent = text;


  submitBill.classList.add('none');
  heading.classList.add('none');
};

const calculateBill = () => {
  let tipTotal;
  submitBill.addEventListener('submit', (e) => {
    e.preventDefault();
    const billValue = parseInt(submitBill.bill.value, 10);
    const peopleValue = parseInt(submitBill.people.value, 10);
    const selectedServiceQual = getServiceQual.selectedIndex;
    const serviceQualOptions = getServiceQual.options;
    const serviceQualIndex = serviceQualOptions[selectedServiceQual].index;
    const serviceQual = parseFloat(getServiceQual[serviceQualIndex].value);

    if( billValue && !peopleValue || peopleValue == 0

      ) {
      billTotal = billValue;
      tipTotal = parseFloat(billTotal * serviceQual);
      total = billTotal + tipTotal;
    }

    if( billValue && peopleValue > 0) {
      billTotal = billValue / peopleValue;
      tipTotal = parseFloat(billTotal * serviceQual);
      total = billTotal + tipTotal;
      }

      tipTotal = Math.round(billValue * serviceQual);
      tipTotal = tipTotal.toFixed(2);

      console.log(serviceQual);
      console.log(tipTotal);
      console.log(total);
      // displayBill(total);
  });
}

calculateBill();