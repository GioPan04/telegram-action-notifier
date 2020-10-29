process.env.NTBA_FIX_319 = 1;
const core = require('@actions/core');
const github = require('@actions/github');
const Bot = require('node-telegram-bot-api');

try {
    const token = core.getInput('bot-token');
    const chatId = core.getInput('bot-chat-id');
    const appName = core.getInput('app-name');
    const bot = new Bot(token, {polling: true});
    const message = `<b>🎉🎉🎉 Nuova versione di ${appName} compilata! 🎉🎉🎉</b>\n\n🌲 Branch: <code>ghref</code>\n🏷 Commit: <code>sha</code>\n👤 Avviato da: <code>ghactor</code>\n\n📝 Nome versione: <code>versionname</code>\n🔢 Numero build: <code>versionnumber</code>\n\nCompilato per iOS, Android`;
    bot.sendMessage(chatId,message,{parse_mode : "html", reply_markup: {
        inline_keyboard: [
            [{
                text: '📲  SCARICA L\'APK',
                url: releaseurl,
            },
            {
                text: '🖥  GITHUB',
                url: ghurl
            }],
            [{
                text: '🍎 PUBBLICA SU APP STORE',
                url: appleurl,
            }]
        ]
    }})
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
    bot.on("polling_error", (err) => core.setFailed(err));
} catch (error) {
    core.setFailed(error.message);
}