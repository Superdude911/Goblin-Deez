var saveGame = localStorage.getItem('goblinDeezSave')
var gameData = {
    nuts: 0,
    nutsPerClick: 1,
    nutsPerClickCost: 10,
    lastTick: Date.now()
}
function update(id, content){
    document.getElementById(id).innerHTML = content;
}
function gobbleNuts() {
    gameData.nuts += gameData.nutsPerClick
    update("nutsGobbled", gameData.nuts.toFixed(1) + " Nuts Gobbled")
}
function buyNutsPerClick() {
    if (gameData.nuts >= gameData.nutsPerClickCost) {
        gameData.nuts -= gameData.nutsPerClickCost
        gameData.nutsPerClick += 1
        gameData.nutsPerClickCost *= 2
        update("nutsGobbled", gameData.nuts.toFixed() + "Nuts Gobbled")
        update("perClickUpgrade", "Sloppier Tongue (Currently Level " + gameData.nutsPerClick + ") Cost: " + gameData.nutsPerClickCost + " Nuts")
    } 
}
var mainGameLoop = window.setInterval(function() {
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now() 
    gameData.nuts += gameData.nutsPerClick * (diff / 1000)
    update("nutsGobbled", gameData.nuts.toFixed(1) + " Nuts Gobbled")
}, 1000)
var saveGameLoop = window.setInterval(function() {
    window.localStorage.setitem("goblinDeezSave", JSON.stringify(gameData))
}, 15000)
var savegame = JSON.parse(localStorage.getItem("goblinDeezSave"))
if (savegame != null) {
    gameData= savegame
}
function format(number, type) {
    return number.toExponential(2)
    let exponent = Math.floor(Math.log10(number))
    let mantissa = amount / Math.pow(10, exponent)
    if (exponent < 3) return numnber.toFixed(1)
    if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
    if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa.toFixed(2) + "e" + (Math.floor(exponent / 3) * 3))
}
if (typeof saveGame.nuts !== "undefined") gameData.nuts = saveGame.nuts;
if (typeof saveGame.nutsPerClick !== "undefined") gameData.nutsPerClick = saveGame.nutsPerClick;
if (typeof saveGame.nutsPerClickCost !== "undefined") gameData.nutsPerClickCost = saveGame.nutsPerClickCost;
if (typeof saveGame.lastTick !== "undefined") gameData.lastTick = saveGame.lastTick;
update("perClickUpgrade", "Sloppier Tongue (Currently Level " + format(gameData.nutsPerClick, "scientific") + ") Cost: " + format(gameData.nutsPerClickCost, "scientific") + "  Nuts")
function tab(tab){
    document.getElementById("gobbleNutsMenu").style.display = "None"
    document.getElementById("shopMenu").style.display - "None"  
    document.getElementById(tab).style.display = "inline-block"
}