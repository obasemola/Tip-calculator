const submitBill = document.querySelector('#billForm');
const display = document.querySelector('.display');
const container = document.querySelector('#container');
const heading = document.querySelector('.h1');

const displayBill = (billTotal) => {
  const text = `
  Your bill is $${billTotal}!
  `;
  display.textContent = text;


  submitBill.classList.add('none');
  heading.classList.add('none');
};

const calculateBill = () => {
  let billTotal;
  submitBill.addEventListener('submit', (e) => {
    e.preventDefault();
    const billValue = parseInt(submitBill.bill.value, 10);
    const peopleValue = parseInt(submitBill.people.value, 10);

    if( billValue && !peopleValue || peopleValue == 0

      ) {
      billTotal = billValue;
      // displayBill(billTotal)
    }

    if( billValue && peopleValue > 0) {
      billTotal = billValue/peopleValue;
        // displayBill(billTotal);
      }
      displayBill(billTotal);
  });
}

calculateBill();