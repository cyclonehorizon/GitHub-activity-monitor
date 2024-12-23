const axios = require('axios');

const sendTelegramMessage = async (botToken, chatId, message) => {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    try {
        await axios.post(url, {
            chat_id: chatId,
            text: message
        });
        console.log("Message sent successfully!");
    } catch (error) {
        console.error("Error sending message:", error.response?.data || error.message);
    }
};

module.exports = { sendTelegramMessage };
