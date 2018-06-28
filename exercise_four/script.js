var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setTime);

function setTime() {
  var choice = select.value;

  if (choice === 'morning') {
    para.textContent = 'Since it is morning, you should be eating breakfast. We suggest eggs and toast.';
  } else if (choice === 'noon') {
    para.textContent = 'Since it is noon, you should be eating lunch. We suggest eating a salad.';
  } else if (choice === 'evening') {
    para.textContent = 'Since it is evening, you should be eating dinner. We suggest chicken and rice.';
  } else {
    para.textContent = '';
  }
}
