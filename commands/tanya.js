module.exports = {
    name: 'tanya',
    description: 'Tanya command return random words to answer a question',
    execute(message, args, client, Discord) {
        if (!args.join(' ')) return message.channel.send('k!tanya <pertanyaan>');
        message.reply(require('../include/tanya-replay')[Math.floor(Math.random() * require('../include/tanya-replay').length)])
    }
}