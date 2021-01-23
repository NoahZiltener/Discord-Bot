module.exports = {
    name: 'ping',
    description: 'Ping command',
    execute(client, message, args) {
        return message.reply("pong!");
    }
}