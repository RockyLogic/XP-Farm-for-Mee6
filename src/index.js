const Discord = require('discord.js-selfbot')
require('dotenv').config()

const client = new Discord.Client();
const token = process.env.TOKEN
const messageChannel = process.env.CHANNEL_TO_SEND

//Function Send Time Stamps Logs
const sendToLogs = (msg) => {
    let time = new Date()
    console.log(`[${time.toLocaleString('en-US', { timeZone: 'America/New_York' })}] ${msg}`)
}

client.on("ready", () => {
    sendToLogs(`Logged in as ${client.user.tag}!`)
})

client.on('error', err => {
    sendToLogs("Error")
    console.error(err)
    process.exit(1);
});


setInterval(function () {
    channel = client.channels.cache.get(messageChannel)
    
    channel.send('.')
    .then(
        msg => {
            sendToLogs("Message Sent")
            msg.delete({timeout: 0})
            sendToLogs("Message Deleted")
        }
    )
}, 1000 * 60);

//login
client.login(token);
