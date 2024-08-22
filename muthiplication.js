function multiplicationTable(n) {
    let table = '';
    for (let i = 1; i <= n; i++) {
      table += `<h2>Multiplication table for ${i}:</h2>`;
      table += '<ul>';
      for (let j = 1; j <= 10; j++) {
        table += `<li>${i} x ${j} = ${i * j}</li>`;
      }
      table += '</ul>';
    }
    document.getElementById('table-container').innerHTML = table;
  }


  multiplicationTable(5); // Call the function