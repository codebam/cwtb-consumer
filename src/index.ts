import TelegramBot, { TelegramExecutionContext } from '@codebam/cf-workers-telegram-bot';

interface Environment {
	SECRET_TELEGRAM_API_TOKEN: string;
}

export default {
	async fetch(request: Request, env: Environment, ctx: ExecutionContext): Promise<Response> {
		const bot = new TelegramBot(env.SECRET_TELEGRAM_API_TOKEN);
		await bot
			.on('start', async function(context: TelegramExecutionContext) {
				switch (context.update_type) {
					case 'message':
						await context.reply('Hello World');
						break;

					default:
						break;
				}
				return new Response('ok');
			})
			.handle(request.clone());
		return new Response('Hello World!');
	},
};
