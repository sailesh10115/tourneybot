const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL
    let memberserverembed = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true, size: 2048 }))
        .addField("Total Members", message.guild.memberCount)
        .setColor("#1FCEE3")
        .setThumbnail(sicon)

    message.channel.send(memberserverembed);
}
//name this whatever the command name is.
module.exports.help = {
  name: "members"
}