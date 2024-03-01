const axios = require('axios');
const url = "http://teles-jokes.azurewebsites.net/api/GetJoke?code=7skvGJHPnh6jOiZhwNKV0dL0awj9qTorLElJq596sKVHmrmgFJ6u4w=="

let piada;

async function joke(msg) {
    if (msg.content.startsWith('!joke')) {
        try {
            await randomPiada()
            return await msg.channel.send(piada)
        } catch (e) {
            console.log(e)
            return msg.channel.send("Não estou no pique de piadas parça, foi mal")
        }

    } else {
        return;
    }
}

async function randomPiada() {
    await axios.get(url).then(function (resp) {
        if (resp.status === 200) {
            piada = resp.data.joke.replace(/\|\|/g, '\n')
            piada = piada.replace("- ", "")
            piada = piada.replace(" -", "")
            piada = piada.replace("-", "");
        }else{
            return "Sem tempo irmão"
        }
    }).catch(function (e) {
        console.log(e)
        return "Estou triste cara não consigo contar uma piada"
    })
}

module.exports = {
    joke
}