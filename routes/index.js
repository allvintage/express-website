const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.render("index.hbs", {
        content: "I am the content"
    });
});

router.get('*', (req, res) => {
    return res.end("404 - Page not found");
});

module.exports = router;