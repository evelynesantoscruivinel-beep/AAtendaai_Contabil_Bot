const TelegramBot = require('node-telegram-bot-api');

// Pega o token direto da variável de ambiente do Railway
const token = process.env.TELEGRAM_CONTABIL_BOT_TOKEN;

if (!token) {
  console.error("Erro: a variável TELEGRAM_CONTABIL_BOT_TOKEN não está definida!");
  process.exit(1);
}

// Cria o bot
const bot = new TelegramBot(token, { polling: true });

console.log("Bot Contábil AtendaAI iniciado!");

// Comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const name = msg.from.first_name || "Cliente";

  bot.sendMessage(chatId, `Olá ${name} 👋\n\nBem-vindo(a) ao Bot Contábil do AtendaAI! 📊\nAqui você receberá comparativos financeiros, previsões e relatórios contábeis automatizados.\n\nSe tiver dúvidas, pode nos chamar aqui mesmo!`);
});

// Responder qualquer outra mensagem
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Ignora comando /start
  if (msg.text.toLowerCase() === "/start") return;

  bot.sendMessage(chatId, `Recebi sua mensagem: "${msg.text}".\nEm breve você terá insights contábeis detalhados.`);
});
