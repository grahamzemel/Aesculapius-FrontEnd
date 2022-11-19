const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const path = require('path');
app.use(cors());

// Serve files from the Svelte app
app.use(express.static('public'));
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});

