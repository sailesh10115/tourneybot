const Discord = require('discord.js')
const beautify = require("beautify");


module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "644989163543724033") {
        return message.reply("you're not the bot owner haha")

    }

if (!args[0]) {
    message.reply("you need to eval something please :)")
        .then(m => m.delete(5000));
}

try {
    if (args.join(" ").includes("token")) {
        return;
    }

    const toEval = args.join(" ");
    const evaluated = eval(toEval);

    let embed = new MessageEmbed()
        .setColor("#7289DA")
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL)
        .setTitle("Eval")
        .addField("to evaluate:", `\`\`\`js\n${beautify(srg.join(" "), { format: "js" })}\n\`\`\`\``)
        .addField("Evaluated:", evaluated)
        .addField("Type of:", typeof (evaluated));

    message.author.send(embed);
} catch (e) {
    let embed = new MessageEmbed()
        .setColor("#99AAB5")
        .setTitle("\:x: Error!")
        .setDescription(e)
        .setFooter(bot.user.username, bot.user.displayAvatarURL);

    message.author.send(embed);

}
}
//name this whatever the command name is.
module.exports.help = {
  name: "eval"
}