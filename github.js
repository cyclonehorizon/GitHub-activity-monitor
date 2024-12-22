const axios = require('axios');
require('dotenv').config();

const GITHUB_API = 'https://api.github.com';

async function getCommitHistory(repo) {
  const url = `${GITHUB_API}/repos/${process.env.GITHUB_USERNAME}/${repo}/commits`;
  const headers = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data.map(commit => commit.commit.author.date);
  } catch (error) {
    console.error('Error fetching commit history:', error.response?.data || error.message);
    return [];
  }
}

module.exports = { getCommitHistory };
