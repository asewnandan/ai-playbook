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
			title: 'AI Playbook',
			plugins: [
				lucode({
					navLinks: [
					{ label: 'Playbook', link: '/guides/planning-workflow/' },
					{ label: 'Over', link: '/over/' },
					],
				}),
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/asewnandan/ai-playbook' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
						{ label: 'Planning workflow', slug: 'guides/planning-workflow' },
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
