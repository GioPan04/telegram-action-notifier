process.env.NTBA_FIX_319 = 1;
const core = require('@actions/core');
const github = require('@actions/github');
const Bot = require('node-telegram-bot-api');

try {
    const token = core.getInput('bot-token');
    const chatId = core.getInput('bot-chat-id');
    const appName = core.getInput('app-name');
    const appleurl = core.getInput('apple-url');

    const bot = new Bot(token, {polling: false});
    const branchs = github.context.ref.split('/');
    let ghurl = github.context.payload.repository.url;
    let releaseUrl = `${ghurl}/releases/latest/download/app-release.apk`;
    let branchName = branchs[branchs.length - 1];
    let commit = github.context.sha;
    let author = github.context.payload.head_commit.author.name;
    let commitMessage = github.context.payload.head_commit.message;
    const message = `<b>🎉🎉🎉 Nuova versione di ${appName} compilata! 🎉🎉🎉</b>\n\n🌲 Branch: <code>${branchName}</code>\n🏷 Commit: <code>${commit}</code>\n📜 Messaggio: <code>${commitMessage}</code>\n👤 Avviato da: <code>${author}</code>\n\n📝 Nome versione: <code>versionname</code>\n🔢 Numero build: <code>versionnumber</code>\n\nCompilato per iOS, Android`;
    bot.sendMessage(chatId,message,{parse_mode : "html", reply_markup: {
        inline_keyboard: [
            [{
                text: '📲  SCARICA L\'APK',
                url: releaseUrl,
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
} catch (error) {
    core.setFailed(error.message);
}