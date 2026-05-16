import { defineConfig } from 'vitest/config';
import { cloudflareTest } from '@cloudflare/vitest-pool-workers';

export default defineConfig({
	plugins: [
		cloudflareTest({
			wrangler: { configPath: './wrangler.toml' },
		}),
	] as any,
	poolOptions: {
		workers: {
			wrangler: { configPath: './wrangler.toml' },
		},
	} as any,
});
