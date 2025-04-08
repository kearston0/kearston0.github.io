const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "frontend" folder
app.use(express.static(path.join(__dirname, 'frontend')));

// For Single-Page Applications: 
// Route all unmatched requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'src', 'assets', 'components', 'Login.js'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});