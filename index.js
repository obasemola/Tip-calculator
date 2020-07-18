const billForm = document.querySelector('.billForm');
const peopleForm = document.querySelector('.peopleForm');


const calculateBill = () => {
  
}

billForm.addEventListener('submit',(e) => {
  e.preventDefault();
  const amountOfBill = billForm.bill.value;
});


peopleForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const numberOfPeople = peopleForm.people.value;
});

const displayBill = () => {
  const html = `
  Your bill is $${billTotal}!

  `
}