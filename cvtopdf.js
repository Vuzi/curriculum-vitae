"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address, output, size;

if (system.args.length != 3) {
    console.log('Usage: cvtopdf.js URL filename.pdf');
    phantom.exit(1);
}

address = system.args[1];
output = system.args[2];

console.log('Generating file ' + output + '...');

page.viewportSize = { width: 1920, height: 1080 };
page.paperSize = { format: 'A4', orientation: 'portrait', margin: '0' };

page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address (' + status +')');
        phantom.exit(1);
    } else {
        console.log('URL ' + address + ' opened, rendering...');

        window.setTimeout(function () {
            page.render(output);

            console.log('Done !');
            phantom.exit();
        }, 500);
    }
});
