// Function to fetch data using .then
function fetchDataWithThen() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => {
        renderTable(data); // Call the function to render the table with the fetched data
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Function to fetch data using async/await
  async function fetchDataWithAsyncAwait() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const data = await response.json();
      renderTable(data); // Call the function to render the table with the fetched data
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Function to render the table with the fetched data
  function renderTable(data) {
    const table = document.getElementById('table');
    table.innerHTML = '';
  
    // Create table headers
    const headers = ['Name', 'ID', 'Image', 'Symbol', 'Current Price', 'Total Volume'];
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
  
    // Create table rows with data
    data.forEach(item => {
      const row = document.createElement('tr');
  
      const nameCell = document.createElement('td');
      nameCell.textContent = item.name;
      row.appendChild(nameCell);
  
      const idCell = document.createElement('td');
      idCell.textContent = item.id;
      row.appendChild(idCell);
  
      const imageCell = document.createElement('td');
      const image = document.createElement('img');
      image.src = item.image;
      imageCell.appendChild(image);
      row.appendChild(imageCell);
  
      const symbolCell = document.createElement('td');
      symbolCell.textContent = item.symbol;
      row.appendChild(symbolCell);
  
      const priceCell = document.createElement('td');
      priceCell.textContent = item.current_price;
      row.appendChild(priceCell);
  
      const volumeCell = document.createElement('td');
      volumeCell.textContent = item.total_volume;
      row.appendChild(volumeCell);
  
      table.appendChild(row);
    });
  }
  
  // Call the fetch functions when the page loads
  fetchDataWithThen();
  fetchDataWithAsyncAwait();
  