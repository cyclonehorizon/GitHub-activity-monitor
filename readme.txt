GITHUB ACTIVITY MONITOR

Making a telegram bot to monitor my github commits.

Setup

Clone the repository:
git clone <repository-url>
cd github-reminder-backend
Install dependencies:
npm install
Create a .env file in the root directory with the following variables:
GITHUB_TOKEN=<your_github_personal_access_token>
TELEGRAM_BOT_TOKEN=<your_telegram_bot_token>
TELEGRAM_CHAT_ID=<your_telegram_chat_id>
Update the src/config.json file (if applicable) to include repository details and inactivity settings:
{
  "repositories": [
    {
      "owner": "username",
      "repo": "repository-name"
    }
  ],
  "inactivityDays": 7
}
Running the Application

To start the backend:

node index.js
Testing Functionality

Ensure the .env file and config.json are correctly set up.
Run the application. It will fetch the commit history for the repositories defined in config.json.
Check your Telegram chat for reminders if inactivity is detected.


FUTURE UPDATES:
1. Add a cron job to run the app every day at a specific time.
2. Add a feature to send a notification to my phone when I commit.

Major updates:
1. Make a react frontend for the app.
2. MAke a product page for the app.
