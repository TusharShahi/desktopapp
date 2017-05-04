const electron = require('electron');
const app = electron.app;

const path = require('path');
const url = require('url');

const BrowserWindow = electron.BrowserWindow;

var mainWindow;
app.on('ready',function(){
 	mainWindow = new BrowserWindow({ width : 1024, height: 768,backgroundColor: '#eee',icon: __dirname + '/favicon2.png',show: false/*,frame: false*/});
    //mainWindow.loadURL('https://github.com');

    mainWindow.loadURL(url.format({
    	pathname: path.join(__dirname, 'new.html'),
    	protocol: 'file:',
    	slashes: true
    }));


  // mainWindow.setMenu(null); 
	mainWindow.on('ready-to-show', function() {
      mainWindow.show();
      mainWindow.focus();
  });
});