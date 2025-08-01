function apiKeyAuth(req, res, next) {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).json({ message: 'API Key is missing!' });
    }

    if (apiKey !== 'my-anime-api') {
        return res.status(403).json({ message: 'Invalid API Key!' });
    }

    next();
}

module.exports = apiKeyAuth;