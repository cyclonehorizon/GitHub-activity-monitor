require('dotenv').config();
const { getCommitHistory } = require('./github');
const { sendTelegramMessage } = require('./telegram');
const { checkInactivity } = require('./utils');

const main = async () => {
    const username = 'your_username';
    const repo = 'your_repo';
    const token = process.env.GITHUB_TOKEN;

    const commits = await getCommitHistory(username, repo, token);
    const daysSinceLastCommit = checkInactivity(commits);

    if (daysSinceLastCommit > 3) { // Inactivity threshold
        await sendTelegramMessage(
            process.env.TELEGRAM_BOT_TOKEN,
            process.env.TELEGRAM_CHAT_ID,
            `You have been inactive for ${daysSinceLastCommit} days. Time to commit!`
        );
    } else {
        console.log(`You are active! Last commit was ${daysSinceLastCommit} days ago.`);
    }
};

main();
