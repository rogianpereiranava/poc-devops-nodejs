const fs = require("fs");


function listCommands (msg) {
    if(msg.content.startsWith('!commands') || msg.content.startsWith('!help')){
        fs.readFile("./commands.txt", "utf-8", function(err, data){
            console.log(data.toString())
            return msg.channel.send(data.toString())
        })
    }else {
        return;
    }
}

module.exports = {
    listCommands
}