// Require necessary discord.js classes and dotenv
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // This loads the .env file

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

// The user ID of the person you want the bot to reply to
const TARGET_USER_ID = '1011078183069687888'; // Replace with the target user's ID

// When the client is ready, run this code
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for messages
client.on('messageCreate', message => {
  if (message.author.id === TARGET_USER_ID && !message.author.bot) {
    message.reply('The king has spoken. Listen or you shall despair.');
  }
});

// Log in to Discord using the token from the .env file
client.login(process.env.TOKEN); // This reads the token from .env
