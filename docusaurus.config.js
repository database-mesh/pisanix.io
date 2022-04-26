// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Pisanix",
	tagline: "A Database Mesh Solution powered by SphereEx",
	url: "https://www.pisanix.io",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "database-mesh", // Usually your GitHub org/user name.
	projectName: "pisanix", // Usually your repo name.
	i18n: {
		defaultLocale: "zh",
		locales: ["en", "zh"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// editUrl:
					// 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				// title: 'Pisanix',
				logo: {
					alt: "Pisanix Logo",
					// src: 'img/logo.svg',
					src: "img/logo.svg",
				},
				items: [
					//TODO: enable this when 1.1 released
					// {
					//   type: 'docsVersionDropdown',
					// },
					{
						type: "localeDropdown",
						position: "right",
					},
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "文档",
					},
					{ to: "/blog", label: "博客", position: "left" },
					{ to: "/doc", type: "doc", docId: "UseCases/cicd", label: "使用场景", position: "left" },
					{
						href: "https://github.com/database-mesh/pisanix",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "文档",
								to: "/docs/intro",
							},
							{
								label: "快速开始",
								to: "/docs/quickstart",
							},
						],
					},
					{
						title: "社区",
						items: [
							// {
							//   label: 'Stack Overflow',
							//   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
							// },
							// {
							//   label: 'Discord',
							//   href: 'https://discordapp.com/invite/docusaurus',
							// },
							{
								label: "Twitter",
								href: "https://twitter.com/maxwell9215",
							},
							{
								label: "Slack",
								href: "https://join.slack.com/t/databasemesh/shared_invite/zt-12hlythpe-C4rrS1WZ2ZkEd3zn84SqeQ",
							},
						],
					},
					{
						title: "更多",
						items: [
							{
								label: "博客",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/database-mesh/pisanix",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Pisanix Authors. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
