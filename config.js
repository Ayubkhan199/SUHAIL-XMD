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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_45_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU0LFxuICAgICAgICA4NixcbiAgICAgICAgODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk3LFxuICAgICAgICA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU5LFxuICAgICAgICA3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICA3NixcbiAgICAgICAgODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDk4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICA4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICA1LFxuICAgICAgICA0NixcbiAgICAgICAgMTYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk4LFxuICAgICAgICA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDgsXG4gICAgICAgIDg3LFxuICAgICAgICA2MixcbiAgICAgICAgMjI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRzdkFrdVhmbW9vMlUyOERuMUZ6dTBEazRNM2EvZGtBSkpWaTA1RTZPYWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzc2NDg2ODM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENjAyNzU3Q0VENjQ1MkM5RERBQzM3Nzk1NTZFRjRGNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEwMzM5MzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY2I1MjJYZ0JRN1NTMXp3Ymlib3hzZ1wiLFxuICBcInBob25lSWRcIjogXCIxMDdlZjZhZS0xZWY2LTQwNzItYjljMy1mMzQzYmFjNTUzZGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMTg5LFxuICAgICAgMTg5LFxuICAgICAgMzAsXG4gICAgICAxODAsXG4gICAgICAxNjksXG4gICAgICAyMzgsXG4gICAgICAyMDEsXG4gICAgICA2MyxcbiAgICAgIDQ2LFxuICAgICAgMTI1LFxuICAgICAgMjA1LFxuICAgICAgMzMsXG4gICAgICAyMTMsXG4gICAgICAyMDIsXG4gICAgICAxNzksXG4gICAgICAzLFxuICAgICAgMTg4LFxuICAgICAgMTEsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDYzLFxuICAgICAgMjEzLFxuICAgICAgNjQsXG4gICAgICAzLFxuICAgICAgMTc1LFxuICAgICAgNDcsXG4gICAgICA3LFxuICAgICAgMTk1LFxuICAgICAgMTY2LFxuICAgICAgMTc3LFxuICAgICAgMTk2LFxuICAgICAgMjIyLFxuICAgICAgNjYsXG4gICAgICA2LFxuICAgICAgMTcsXG4gICAgICA1NixcbiAgICAgIDE3MSxcbiAgICAgIDE0MCxcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5RTFQN1QxRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzc2NDg2ODM3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0Nzg0MTY0OTUwODM5MzoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcItiv2YjbjNin2LHavtin2KfYp9in2KfYp9in2KfYp9in2KfYp9in2KfYp9in2KfYp9inXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTJXazV3RUVNSDJ0YmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYbDdLYy9rYTJJS2s3ODFoT0ZDN0dUWWw5djYybUF3azd1aG16QWhQWFZ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRxcktabXdhb3hWTWFsMldxa3Zocmd4WmRjU2ZWZEtGdW1DS2E3dmJIdStuZkU4cVBVWkczTnFGS2o3eittOElPWUk3bG5zSjhoMVJaaG5acUNMeUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlsS05pM2o2SUpHYlBpVTQxYU55RzUzVks0Q2xLMUYvWk9ZR2lCOE9RSzBYaWRRVE5NaWhiZWhDMXJmcnV0M3QyOUFIUnAxaFZMZkRTM2oyTXBTL2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzM3NjQ4NjgzNzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEwMzM5MjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHUjFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdSMS5qc29uIjogIntcImtleURhdGFcIjpcIkNlaytaZTdNZGRxVkFESFEzS0ZRY2xhd0QxdUE0cWxSTnMvWnNtMDMyd1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEzMjc3NjIwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxMDMzOTI3OTg1XCJ9Igp9"  // PUT your SESSION_ID 


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
