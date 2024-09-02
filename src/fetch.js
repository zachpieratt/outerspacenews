document.addEventListener('DOMContentLoaded', function () {
  const peopleApiUrl = 'https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json'
  const peopleInSpace = document.getElementById('peopleInSpace')

  axios.get(peopleApiUrl)
    .then((response) => {
      let number = response.data.number;
      peopleInSpace.innerHTML = `People Currently in Space: ${number}`
    });

  const upcomingLaunchApiUrl = 'https://fdo.rocketlaunch.live/json/launches/next/5';

  axios.get(upcomingLaunchApiUrl)
    .then((response) => {
      const output = response.data.result;
      let formattedTable = `<table border="1">
        <thead>
          <tr style="border:1px solid black">
            <th>Name</th>
            <th>Launch Date</th>
            <th>Launch Description</th>
            <th>Pad Location</th>
            <th>Stream Link</th>
          </tr>
        </thead>
        <tbody>
          ${output
          .map(
            (item) => `
       <tr style="border:1px solid black">
         <td>${item.name}</td> 
         <td>${item.date_str}</td>
         <td>${item.launch_description}</td>
         <td>${item.pad.name} <br> ${item.pad.location.name || ''} <br> ${item.pad.location.statename || ''}</td>
         <td><a href="${item.quicktext.replace(' for info/stream', '').split("- ").pop()}">${item.quicktext.replace(' for info/stream', '').split("- ").pop()}</a></td>
        </tr>`
          )
          .join("")}
        </tbody>
      </table>`;
      document.getElementById('upcomingLaunches').innerHTML = formattedTable;
    });
});
