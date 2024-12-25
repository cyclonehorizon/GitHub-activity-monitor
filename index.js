// index.js
const path = require('path');
const { spawn } = require('child_process');

const runApp = () => {
    const appPath = path.resolve(__dirname, 'src', 'app.js');
    const appProcess = spawn('node', [appPath], { stdio: 'inherit' });

    appProcess.on('error', (error) => {
        console.error('Error executing app.js:', error.message);
    });

    appProcess.on('exit', (code) => {
        if (code === 0) {
            console.log('app.js executed successfully.');
        } else {
            console.error(`app.js exited with code ${code}`);
        }
    });
};

runApp();
