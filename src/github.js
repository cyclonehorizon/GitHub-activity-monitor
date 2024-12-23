const axios = require('axios');

const getCommitHistory = async (username, repo, token) => {
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.map(commit => commit.commit.author.date);
    } catch (error) {
        console.error("Error fetching commits:", error.response?.data || error.message);
        return [];
    }
};

module.exports = { getCommitHistory };

