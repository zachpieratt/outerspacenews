document.addEventListener('DOMContentLoaded', function() {

  const apiUrl = 'http://api.open-notify.org/astros.json'
  const peopleInSpace = document.getElementById('peopleInSpace')
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const { number, people } = data;
      peopleInSpace.innerHTML = `People Currently in Space: ${number}`
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });