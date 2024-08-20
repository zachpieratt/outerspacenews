document.addEventListener('DOMContentLoaded', function() {

  const apiUrl = 'https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json'
  const peopleInSpace = document.getElementById('peopleInSpace')
  
  fetch(apiUrl, {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
      const { number, people } = data;
      peopleInSpace.innerHTML = `People Currently in Space: ${number}`
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });