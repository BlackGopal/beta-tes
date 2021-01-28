let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Xl [087850698887]
│ • Telkomsel [085230853358]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
