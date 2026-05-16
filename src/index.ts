import TelegramBot from '@codebam/cf-workers-telegram-bot';

interface Environment {
	SECRET_TELEGRAM_API_TOKEN: string;
}

export default {
	async fetch(request: Request, env: Environment): Promise<Response> {
		const bot = new TelegramBot(env.SECRET_TELEGRAM_API_TOKEN);
		await bot
			.command('start', async (ctx) => {
				await ctx.reply('Hello World');
			})
			.handle(request);
		return new Response('Hello World!');
	},
};
