const axios = require('axios');

const getGames = async (req, res) => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/gamelist`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${process.env.CASINO_API_KEY}`
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

module.exports = {
    getGames
}