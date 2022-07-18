// AUTHOR : Berke (discord id : 286563564595183616)

const discord = require("discord.js")
const client = new discord.Client()

client.on("ready", () => {
    console.log("client ready")
})

function prefix(str, m_prefix) {
    return str.startsWith(m_prefix)
}

client.on("message", (msg) => {
    let message = msg.content
    if (prefix(message, "c?")) {
        if (msg.guild.roles.cache.find(role => role.name === msg.author.username)) {
            let splitted = message.replace(" ", "").split("c?")
            let hex_code = splitted[1].toUpperCase()
            let role = msg.guild.roles.cache.find(role => role.name === msg.author.username);
            role.edit({
                    color: hex_code
            })
        } else {
            msg.reply("Rolünüz Bulunmamaktadır, Lütfen Rol Oluşturunuz. (yardım için b?yardım)")
        }
    } else if (prefix(message, "r?yeni")) {
        if (!msg.guild.roles.cache.find(role => role.name === msg.author.username)) {
            msg.guild.roles.create({
                data: {
                name: msg.author.username,
                color: 'BLUE',
                },
                reason: `new role for ${msg.author.username}`,
            })
        } else {
            if (msg.author.id != "971850453031747654") {
                msg.reply("Rolünüz Halihazırda Bulunmaktadır EFENDIM.")
            } else {
                msg.reply("Rolünüz Halihazırda Bulunmaktadır. (canımsın jindacık)")
            }
        }
        let role = msg.guild.roles.cache.find(role => role.name === msg.author.username);
        msg.member.roles.add(role)
    } else if (prefix(message, "b?yardım")) {
        msg.reply("Renk İçin : c?hex_kodu\nRol Oluşturmak İçin : r?yeni\nYardım İçinde İşte : b?yardım\n\nRenk Hex kodları İçin https://htmlcolorcodes.com/ Sitesini Kullanabilirsiniz.")
    }
})

client.login("discord_token")
