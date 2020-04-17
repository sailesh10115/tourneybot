const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete()
    let prefix = '!'
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const word = args.slice(1).join(' ')
    if (!word) return;
    const embed = new Discord.MessageEmbed()
        .setDescription(`${word}`)
        .setColor(`#1FCEE3`)
    message.channel.send(embed)
}
//name this whatever the command name is.
module.exports.help = {
  name: "embed"
}