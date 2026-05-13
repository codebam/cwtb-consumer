# CF Workers Telegram Bot Consumer Template

This is a template for creating a Telegram Bot using `@codebam/cf-workers-telegram-bot` on Cloudflare Workers.

## Getting Started

1. **Install dependencies**:
   ```sh
   npm install
   ```

2. **Configure wrangler**:
   Edit `wrangler.toml` and change the `name` to your bot's name.

3. **Set your Telegram Token**:
   ```sh
   npx wrangler secret put SECRET_TELEGRAM_API_TOKEN
   ```

4. **Develop**:
   ```sh
   npm run dev
   ```

5. **Deploy**:
   ```sh
   npm run deploy
   ```

6. **Set Webhook**:
   `https://<your-worker>.<your-subdomain>.workers.dev/<SECRET_TELEGRAM_API_TOKEN>?command=set`

## Project Structure

- `src/index.ts`: The main entry point where you define your bot and handlers.
- `test/index.spec.ts`: Unit tests for your bot.
- `wrangler.toml`: Cloudflare Workers configuration.
