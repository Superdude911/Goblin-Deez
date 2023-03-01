var gameData = {
    nuts: 0,
    nutsPerClick: 1,
    nutsPerClickCost: 10
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
var saveGameLoop = window.setInterval(function() {
    localStorage.setitem("goblinDeezSave", JSON.stringify(gameData))
}, 15000)
var savegame = JSON.parse(localStorage,getItem("goblinDeezSave"))
if (savegame != null) {
    gameData= savegame
}