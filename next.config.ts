import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Image optimization settings for Cloudflare
	images: {
		unoptimized: false, // Use Cloudflare image optimization
	},
	// Security headers, prevents the site from being embedded as an iframe on other sites. .
	async headers() {
		return [
			{
				// Apply to all routes
				source: '/:path*',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=(), accelerometer=(), gyroscope=(), magnetometer=()',
					},
					{
						key: 'Content-Security-Policy',
						value: [
							"default-src 'self'", // Fallback rule - By default, only allow resources from your own domain. This is the baseline.
							"script-src 'self' 'unsafe-inline' 'unsafe-eval'", // these values weaken CSP, but Next.js requires them. For production optimization, you can use nonces, but that's advanced - let's keep it simple for now.
							"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", // CSS sources, including Google Fonts
							"font-src 'self' https://fonts.gstatic.com", // Font file sources
							"img-src 'self' data: https:", // Image sources
							"connect-src 'self'", // Fetch/XHR/WebSocket sources, only your domain (haven't made any external API calls yet
							"frame-ancestors 'none'", // Iframe embedding, Same as X-Frame-Options DENY (CSP version)
						].join('; '),
					},
				],
			},
		];
	},
};

export default nextConfig;

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();