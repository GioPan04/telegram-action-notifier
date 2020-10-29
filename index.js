process.env.NTBA_FIX_319 = 1;
const core = require('@actions/core');
const github = require('@actions/github');
const Bot = require('node-telegram-bot-api');

try {
   /*  const token = core.getInput('bot-token');
    const chatId = core.getInput('bot-chat-id');
    const appName = core.getInput('app-name');
    const appleurl = core.getInput('apple-url');
    const releaseurl = core.getInput('release-url');
    const bot = new Bot(token, {polling: false});
    const branchs = github.context.ref.split('/');
    let ghurl = github.context.payload.repository.url;
    let branchName = branchs[branchs.length - 1];
    let commit = github.context.sha;
    let author = github.context.payload.head_commit.author.name;
    const message = `<b>🎉🎉🎉 Nuova versione di ${appName} compilata! 🎉🎉🎉</b>\n\n🌲 Branch: <code>${branchName}</code>\n🏷 Commit: <code>${commit}</code>\n👤 Avviato da: <code>${author}</code>\n\n📝 Nome versione: <code>versionname</code>\n🔢 Numero build: <code>versionnumber</code>\n\nCompilato per iOS, Android`;
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
    console.log(`The event payload: ${payload}`); */
    const bot = new Bot("1343740492:AAGlkR7ke6W67aS8x_A5Tzyh4KEppHNfVE8", {polling: false});
    bot.sendMessage(235799750, 'ciao');
} catch (error) {
    core.setFailed(error.message);
}