var remoteHub = 'http://hub.crossbrowsertesting.com:80/wd/hub';

var username = 'jclark@oomphinc.com'; //replace with your email address
var authkey = 'u10b97e5cd1e45b4'; //replace with your authkey

var wd = require('wd'),
    desiredCaps = {
        name : 'Basic Example',
        build :  '1.0',
        browser_api_name : 'MblSafari10.0',
        os_api_name : 'iPhone7Plus-iOS10sim',
        screen_resolution : '1080x1920',
        record_video : 'true',
        record_network : 'true',
        browserName : 'safari', // <---- this needs to be the browser type in lower case: firefox, internet explorer, chrome, opera, or safari
        username : username,
        password : authkey
    },
    driver = wd.remote('http://'+username+':'+authkey+'@hub.crossbrowsertesting.com:80/wd/hub');

driver.init(desiredCaps, function(error) {
    if (error) {
        throw new Error('Session did not start properly. Please make sure your cbt credentials are correct');
    }
    driver.quit();
});
