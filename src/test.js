const axios = require('axios').default
axios.get('http://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json')
.then((response) => {
    console.log(response.data.number);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });