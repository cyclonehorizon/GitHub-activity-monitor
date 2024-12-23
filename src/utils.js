const { differenceInDays } = require('date-fns');

const checkInactivity = (commitDates) => {
    if (commitDates.length === 0) return Infinity;
    const lastCommitDate = new Date(commitDates[0]); // Most recent commit
    return differenceInDays(new Date(), lastCommitDate);
};

module.exports = { checkInactivity };
