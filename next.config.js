/** @type {import('next').NextConfig} */

const { redirect } = require('next/dist/server/api-utils')

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
})

module.exports = withPWA({
	reactStrictMode: true,
	// redirects: async () => {
	// 	return [
	// 		{
	// 			source: '/',
	// 			destination: '/waitlist',
	// 			permanent: true,
	// 		},
	// 	]
	// }
})
