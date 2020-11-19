//Install express server
const express = require('express');
const path = require('path');

const app = express();

const projectPath = __dirname + '/dist/frontend'

// Serve only the static files form the dist directory
app.use(express.static(projectPath));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(projectPath+'/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4400);