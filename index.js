const submitBill = document.querySelector('#billForm');

const calculateBill = () => {
  let billTotal;
submitBill.addEventListener('submit', (e) => {
  e.preventDefault();
  const billValue = parseInt(submitBill.bill.value, 10);
  const peopleValue = parseInt(submitBill.people.value, 10);

  if( billValue && !peopleValue || peopleValue == 0

    ) {
    billTotal = billValue;
    console.log(billTotal);
  }

  if( billValue && peopleValue > 0) {
    billTotal = billValue/peopleValue;
      console.log(billTotal)
    }   
});

}
calculateBill();



