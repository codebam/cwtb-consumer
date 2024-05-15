import TelegramBot, { TelegramExecutionContext } from '@codebam/cf-workers-telegram-bot';

interface Environment {
	TOKEN: string;
}

export default {
	async fetch(request: Request, env: Environment, ctx: ExecutionContext): Promise<Response> {
		const bot = new TelegramBot(env.TOKEN);
		bot.on('start', async function (context: TelegramExecutionContext) {
			switch (context.update_type) {
				case 'message':
					await context.reply('Hello World');
					break;

				default:
					break;
			}
			return new Response('ok');
		});
		return new Response('Hello World!');
	},
};