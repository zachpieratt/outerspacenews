document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json'
  const peopleInSpace = document.getElementById('peopleInSpace')

  axios.get(apiUrl)
    .then((response) => {
      console.log(response.data.number);
      let number = response.data.number;
      peopleInSpace.innerHTML = `People Currently in Space: ${number}`
    });
});