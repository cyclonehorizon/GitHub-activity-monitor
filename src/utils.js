const { differenceInDays } = require('date-fns');

function detectInactivity(commitDates, thresholdDays = 3) {
  const today = new Date();
  const lastCommitDate = new Date(commitDates[0]); // Assuming commits are sorted by date
  const daysSinceLastCommit = differenceInDays(today, lastCommitDate);

  return daysSinceLastCommit >= thresholdDays;
}

module.exports = { detectInactivity };
