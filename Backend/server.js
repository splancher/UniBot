const express = require('express');
const app = express();
const PORT = 3000;

// Define routes and middleware here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
