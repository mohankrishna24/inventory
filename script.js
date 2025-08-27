document.getElementById('inventory-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('item-name').value;
  const qty = document.getElementById('item-qty').value;
  const price = document.getElementById('item-price').value;

  const tableBody = document.querySelector('#inventory-table tbody');
  const row = document.createElement('tr');

  row.innerHTML = `<td>${name}</td><td>${qty}</td><td>₹${parseFloat(price).toFixed(2)}</td>`;
  tableBody.appendChild(row);

  this.reset();
});
