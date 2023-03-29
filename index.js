const apiUrl = 'https://api.github.com/users/keshavjindal/repos'; // Replace with your API URL

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const dataContainer = document.getElementById('data-container');
    
    
    // Display data on the webpage
    dataContainer.innerHTML = `<p>${"vfdvdfv"}</p>`; // Replace with your data formatting
  })
  .catch(error => console.error(error));
