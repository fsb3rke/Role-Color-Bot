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
        if (msg.guild.roles.cache.find(role => role.name === msg.author.id)) {
            let splitted = message.replace(" ", "").split("c?")
            let hex_code = splitted[1].toUpperCase()
            let role = msg.guild.roles.cache.find(role => role.name === msg.author.id);
            role.edit({
                    color: hex_code
            })
        } else {
            msg.reply("Rolünüz Bulunmamaktadır, Lütfen Rol Oluşturunuz. (yardım için b?yardım)")
        }
    } else if (prefix(message, "r?yeni")) {
        if (!msg.guild.roles.cache.find(role => role.name === msg.author.id)) {
            msg.guild.roles.create({
                data: {
                name: msg.author.id,
                color: 'BLUE',
                },
                reason: `new role for ${msg.author.id}`,
            })
            .then(role => {
                msg.member.roles.add(role)
            })
        } else {
            msg.reply("Rolünüz Halihazırda Bulunmaktadır EFENDIM.")
        }
    } else if (prefix(message, "b?yardım")) {
        msg.reply("Renk İçin : c?hex_kodu\nRol Oluşturmak İçin : r?yeni\nYardım İçinde İşte : b?yardım\n\nRenk Hex kodları İçin https://htmlcolorcodes.com/ Sitesini Kullanabilirsiniz.")
    } else if (prefix(message, "tc?") && msg.author.id == "286563564595183616") {
        let splitted = message.replace(" ", "").split("tc?")
        let target = splitted[1].split(".")
        let target_hex = target[0]
        let target_id = target[1]
        if (msg.guild.roles.cache.find(role => role.name === target_id)) {
            let hex_code = splitted[1].toUpperCase()
            let role = msg.guild.roles.cache.find(role => role.name === target_id);
            role.edit({
                    color: target_hex
            })
        } else {
            msg.reply("Kişinin Rolü Bulunmamaktadır, Lütfen Rol Oluşturulmasını Talep Ediniz. (yardım için b?yardım)\nVeyahut siz BERKE değilgsiniz.")
        }
    }
})

client.login("discord_token")
