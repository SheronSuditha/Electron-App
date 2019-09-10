const request = require('request');
function loginRequest() {
    if (document.getElementById('password').value == 'admin') {
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('newWindow', 'profile.html');
    }
}


const body = { a : 1 };

function doFetch() {
    var url =  "https://data.melbourne.vic.gov.au/resource/vh2v-4nfs.json";
    fetch(url, {
        method: 'GET',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(json => console.log());
}
