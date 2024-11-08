const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_57_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICA0OSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDM0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjExLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDYzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5LFxuICAgICAgICAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMWRPZzY5dWpUaVZGS1N2QUhYWDlFK2NiUG9WK3pDRGY2RVV6WmQ3MTMvVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMTE3NTc0NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEwMzVCQjAxODY5MDk1NUEzQkVDNUNGQ0Y4Qjg2MjRGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTAzNDY0NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIxMTc1NzQ2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjJEOEFERkI2MURBQjFENkYzQ0E3RTFBMzRBNURBRjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMDM0NjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjExNzU3NDY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMTg0Nzg5NUQyNDlGNjU2RUJGNzc2NjU4NzRBNTVCQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEwMzQ2NDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMTE3NTc0NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE1QTQ4M0ZBOEIwNkREREZBQ0I1NkNEQ0E1QjA4QkRCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTAzNDY0N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRNEgwUEg4MVJQNnBzcEktSGxIUlNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM1MzQzNGMwLTYzYjgtNGMzYS05MzJlLTUxZjI3YjhmYmIwZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICAxNSxcbiAgICAgIDE5NyxcbiAgICAgIDIwNixcbiAgICAgIDc0LFxuICAgICAgMTUwLFxuICAgICAgMTM0LFxuICAgICAgMjIxLFxuICAgICAgMzUsXG4gICAgICA3NyxcbiAgICAgIDE2LFxuICAgICAgMjIxLFxuICAgICAgNjIsXG4gICAgICAyOSxcbiAgICAgIDQwLFxuICAgICAgNDQsXG4gICAgICAxMzEsXG4gICAgICAxODgsXG4gICAgICAxNTUsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgNzIsXG4gICAgICA2MSxcbiAgICAgIDEyMSxcbiAgICAgIDE1NSxcbiAgICAgIDY4LFxuICAgICAgMTUsXG4gICAgICA2NixcbiAgICAgIDMzLFxuICAgICAgNTUsXG4gICAgICAxNTMsXG4gICAgICAxMyxcbiAgICAgIDE3OSxcbiAgICAgIDE4MixcbiAgICAgIDk4LFxuICAgICAgMTEzLFxuICAgICAgNjQsXG4gICAgICA1MixcbiAgICAgIDE3OSxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdON1EzTkQzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyMTE3NTc0NjU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcwMDg1NTM2NzY4MTEyOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiS2luZ1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BtV2hNd0dFSS84dGJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiczYxbDZHMG5XOG9IR05QRnVYSzNudGJGdkVRWUk4ZlpsL2lXTHJPSTYyaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLbURyaTVyN1N4VnFCZjIzSHF2bGxSaGJSL1NxdUhQWmt5QUhsb2VQam5BMlBENGVGZ2YzczFpYWx3VjFkaHlmQnp0VWFSb3ZKSWh3ZklKRnRCN3dEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKVVVmRDRVek5RL1AzNVRKM1RWRlhvaExhT3ZFKzRuaXBKQnpxTVZncjkwb1JzTTcyczRnNG0xL3VaS1hBUldTWnVBQTZHbTVFMHh5OUpmUVVvYnRDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMTE3NTc0NjU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTAzNDY0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtmaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2ZpLmpzb24iOiAie1wia2V5RGF0YVwiOlwieEt4VGp6enZwYzVVRytTaGtzbUhMZUtCWk14SDZBTEpuY0VGdzBYTzhjWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzcwMDY0NzYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEwMzQ2NDMyMDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
