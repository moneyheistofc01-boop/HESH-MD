const aliveCommand = async (m, sock) => {
  try {
    const prefixMatch = m.body.match(/^[/!#.]/);
    const prefix = prefixMatch ? prefixMatch[0] : '/';
    const command = m.body.startsWith(prefix) 
      ? m.body.slice(prefix.length).trim().toLowerCase() 
      : '';

    if (command === 'menu') {
      const imageUrl = 'https://i.ibb.co/8LmTywjv/64f34a5bb2ad4fc8.jpg';
      const captionText = `*🤖 HESHAN-MD BOT IS ONLINE*
_________________________________________

*╭─❭ 📥DOWNLOAD-CMD📥 ❭* 
*├◈ .ғʙ*
*├◈ .ᴠɪᴅᴇᴏ*
*├◈ .sᴏɴɢ*
*├◈ .ᴛɪᴋᴛᴏᴋ*
*╰──────────────────❭*
*╭──❭ 🔎 SEARCH-CMD 🔎 ❭* 
*├◈ .ꜱʀᴇᴘᴏ*
*├◈ .ɴᴘᴍ*
*├◈ .ɪᴍɢɢ*
*╰──────────────────❭*
*╭──❭ 👨‍💻 USER-CMD 👨‍💻 ❭* 
*├◈ .ᴏᴡɴᴇʀ*
*├◈ .ᴘɪɴɢ*
*├◈ .ꜱʏꜱᴛᴇᴍ*
*├◈ .ᴀʟɪᴠᴇ*
*├◈ .*ʀᴇᴘᴏʀᴛ*
*├◈ .ʙᴏᴏᴍ*
*├◈ .ᴏᴡɴᴇʀ*
*├◈ .ᴀʟɪᴠᴇ*
*╰──────────────────❭*
*╭──❭ 🔔 ADMIN CMD 🔔 ❭* 
*├◈ .ᴍᴏᴅᴇ*
*├◈ .ꜱᴛᴀᴛᴜꜱ*
*├◈ .ꜱᴀᴠᴇ*
*├◈ .ʙʟᴏᴄᴋ*
*├◈ .*ʀᴇᴘᴏʀᴛ*
*├◈ .ʙᴏᴏᴍ*
*├◈ .ʀᴇꜱᴛᴀʀᴛ*
*├◈ .ᴀɴᴛɪᴄᴀʟʟ*
*├◈ .ꜱᴇᴍᴅ-ꜱᴛ*
*╰──────────────────❭*

*⫷⫷⫷ \`HESHAN MD BEST BOT\` ⫸⫸⫸*`;

      await sock.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: captionText,
        contextInfo: {
          quotedMessage: m.message,
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '',
            newsletterName: 'HESHAN MD FORWARD',
            serverMessageId: 143
          }
        }
      }, { quoted: m });
    }
  } catch (error) {
    console.error(error);
  }
};

export default aliveCommand;

