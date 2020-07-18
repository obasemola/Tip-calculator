const submitBill = document.querySelector('#billForm');
const typedBillValue = document.querySelector('.billAmount')


submitBill.addEventListener('submit', (e) => {
  e.preventDefault();
  const billValue = submitBill.bill.value;
  const peopleValue = submitBill.people.value;

  if( billValue && peopleValue !== 0 ) {
    const billTotal = billValue / peopleValue;
    console.log(billTotal);
  } else if( peopleValue === 0 || !peopleValue ) {
    const billTotal = billValue;
      console.log(billTotal)
    }   
})


