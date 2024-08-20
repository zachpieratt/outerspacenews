document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'http://api.open-notify.org/astros.json'
  const peopleInSpace = document.getElementById('peopleInSpace')

  axios.get(apiUrl)
    .then((response) => {
      console.log(response.data.number);
      let number = response.data.number;
      peopleInSpace.innerHTML = `People Currently in Space: ${number}`
    });
});