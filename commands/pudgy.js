const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'pudgy',
    description: 'OWA OWA!',
    async execute(client, message, args) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissions!');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissions!');

        const connection = await voiceChannel.join();

        connection.play(path.join(__dirname, '../sounds/pudgy/pudgy1.mp3'))
            .on("error", error => console.error(error))
            .on("finish", () => {
                voiceChannel.leave();
            })
    }
}