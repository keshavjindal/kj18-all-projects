const apiUrl = 'https://api.github.com/users/keshavjindal/repos'; 
const baseUrl = 'https://keshavjindal.github.io/'; 

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    let arr = []
    for(let i=0; i<data.length; i++){
        if(data[i]['has_pages'] === true){
            arr.push(baseUrl + data[i]['name'] + "/")
        }
    }

    const dataContainer = document.getElementById('data-container');
    
    for(let i=0; i<arr.length; i++){
        dataContainer.innerHTML += `<a href="${arr[i]}" target="_blank" rel="noopener noreferrer">${arr[i]}</a>`;
        dataContainer.innerHTML += `<br>`;
        dataContainer.innerHTML += `<br>`;
    }
  })
  .catch(error => console.error(error));
