var gameData = {
    nuts: 0,
    nutsPerClick: 1,
    nutsPerClickCost: 10,
    lastTick: Date.now()
}
function gobbleNuts() {
    gameData.nuts += gameData.nutsPerClick
    document.getElementById("nutsGobbled").innerHTML = gameData.nuts + " Nuts Gobbled"
}
function buyNutsPerClick() {
    if (gameData.nuts >= gameData.nutsPerClickCost) {
        gameData.nuts -= gameData.nutsPerClickCost
        gameData.nutsPerClick += 1
        gameData.nutsPerClickCost *= 2
        document.getElementById("nutsGobbled").innerHTML = gameData.nuts + "Nuts Gobbled"
        document.getElementById("perClickUpgrade").innerHTML = "Sloppier Tongue (Currently Level " + gameData.nutsPerClick +") Cost: " + gameData.nutsPerClickCost + " Nuts"
    } 
}
var mainGameLoop = window.setInterval(function() {
    gobbleNuts()
}, 1000)
var mainGameLoop = window.setInterval(function() {
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now() 
    gameData.nuts += gameData.nutsPerClick * (diff / 1000)
    document.getElementById("goldMined").innerHTML = gameData.nuts + " Nuts Gobbled"
}, 1000)
var saveGameLoop = window.setInterval(function() {
    localStorage.setitem("goblinDeezSave", JSON.stringify(gameData))
}, 15000)
var savegame = JSON.parse(localStorage,getItem("goblinDeezSave"))
if (savegame != null) {
    gameData= savegame
}
function format(number, type) {
    return number.toExponential(2)
    let exponent = Math.floor(Math.log10(number))
    let mantissa = amount / Math.pow(10, exponent)
    return mantissa.toFixed(2) + "e" + exponent
    if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
    if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa.toFixed(2) + "e" + (Math.floor(exponent / 3) * 3))
}