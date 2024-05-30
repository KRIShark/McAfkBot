const mineflayer = require('mineflayer');
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');
const fs = require('fs');

// Load settings from JSON file
const settings = JSON.parse(fs.readFileSync('settings.json', 'utf8')).settings;

console.log(settings.ip);

// Create the bot
const bot = mineflayer.createBot({
    host: settings.ip,
    username: settings.username,
    auth: settings.auth,
    port: settings.port,
    // version: settings.version,
    // password: settings.password
});

// Load the pathfinder plugin
bot.loadPlugin(pathfinder);

// Say hello when new player joining the server
bot.on('playerJoined', () => {
    bot.chat('Hello! ');
});

// Log errors and kick reasons:
bot.on('kicked', console.log);
bot.on('error', console.log);

// Function to move the bot randomly
function moveBotRandomly() {
    const pos = bot.entity.position;

    // Calculate a new random position within 5 blocks
    const newX = pos.x + (Math.random() * 10 - 5); // Random between -5 and +5
    const newY = pos.y; // Keep the same Y level for simplicity
    const newZ = pos.z + (Math.random() * 10 - 5); // Random between -5 and +5

    console.log(`Moving to (${newX.toFixed(2)}, ${newY.toFixed(2)}, ${newZ.toFixed(2)})`);

    // Set up movements and goals for pathfinding
    const defaultMove = new Movements(bot, bot.registry);
    bot.pathfinder.setMovements(defaultMove);
    const goal = new goals.GoalBlock(newX, newY, newZ);
    bot.pathfinder.setGoal(goal);
}

// Function to set a random interval between 30 seconds and 1 minute
function setRandomInterval(func, min, max) {
    const time = Math.random() * (max - min) + min;
    setTimeout(() => {
        func();
        setRandomInterval(func, min, max); // Schedule the next call
    }, time);
}

// Move the bot 3 blocks at random intervals between 30 seconds and 1 minute
setRandomInterval(moveBotRandomly, 30000, 60000); // 30 seconds = 30000 ms, 1 minute = 60000 ms