/*

*/

const { Telegraf } = require('telegraf');
const axios = require('axios');
const fs = require('fs');

const bot = new Telegraf(TOKEN)

bot.on('photo', (ctx) => {
    ctx.telegram.getFileLink(ctx.update.message.photo[1].file_id).then(url => {
        axios({url: url.href, responseType: 'stream'}).then(response => {
            return new Promise((resolve, reject) => {
                response.data.pipe(fs.createWriteStream(`images/${ctx.update.message.message_id}.jpg`))
                    .on('finish', () => console.log('Done'))
                    .on('error', e => console.log(':-('))
            });
        })
    })
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))