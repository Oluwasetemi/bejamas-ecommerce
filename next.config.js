/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	compress: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};
