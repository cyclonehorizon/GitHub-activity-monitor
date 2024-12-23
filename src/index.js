const { getCommitHistory } = require('./github');
const { detectInactivity } = require('./utils');
const { sendTelegramReminder } = require('./telegram');
require('dotenv').config();

(async () => {
  const repo = 'your-repo'; // Replace with your repository name
  const thresholdDays = 3;

  const commitDates = await getCommitHistory(repo);

  if (commitDates.length && detectInactivity(commitDates, thresholdDays)) {
    await sendTelegramReminder('You have been inactive on GitHub. Time to commit!');
  } else {
    console.log('No inactivity detected.');
  }
})();
