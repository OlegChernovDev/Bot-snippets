const { Telegraf } = require('telegraf');

const bot = new Telegraf(TOKEN)

const goupId = '-1000000000000';

bot.command('post', (ctx) => {
    let command = ctx.update.message.text.split(' ') // ['/post parm1  parm2']
    
    ctx.telegram.sendMessage(data.test1, `Parm 1: ${command[1]} \nParm 2: ${command[2]}`)
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))