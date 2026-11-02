const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        application: 'Node.js',
        message: 'Successfully deployed using Jenkins and Ansible!'
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Node.js application running on port ${PORT}`);
});
