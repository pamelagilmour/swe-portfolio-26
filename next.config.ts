import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Build optimization for memory-constrained environments
	// webpack: (config, { isServer }) => {
	// 	// Reduce memory overhead during build
	// 	config.optimization = {
	// 		...config.optimization,
	// 		minimize: true,
	// 	};
	// 	return config;
	// },

	// Image optimization settings for Cloudflare
	images: {
		unoptimized: false, // Use Cloudflare image optimization
	},
};

export default nextConfig;

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();