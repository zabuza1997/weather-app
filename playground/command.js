const prefix = ['!']
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();