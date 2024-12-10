const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.status(201).send('Hello, AWS CodePipeline!');
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; // Export for testing
// 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