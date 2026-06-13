// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://asewnandan.github.io',
	base: '/ai-playbook',
	integrations: [
		starlight({
			title: 'My Docs',
			plugins: [
				lucode({
					navLinks: [
						{ label: 'Docs', link: '/guides/getting-started/' },
						{ label: 'API', link: '/reference/plugin-api/' },
					],
				}),
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://asewnandan.github.io' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
