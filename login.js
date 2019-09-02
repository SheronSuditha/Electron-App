
function loginRequest() {
    if (document.getElementById('password').value == 'admin') {
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('newWindow', 'profile.html');
    }
}