"use client";

import { useCallback } from "react";

export function SkipToContent() {
	const moveFocusToMain = useCallback(() => {
		requestAnimationFrame(() => {
			document.getElementById("content")?.focus({ preventScroll: true });
		});
	}, []);

	return (
		<a
			href="#content"
			onClick={moveFocusToMain}
			className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:border focus:border-dotted focus:border-[lavender] focus:bg-[var(--background)] focus:px-3 focus:py-2 focus:font-mono focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[lavender]"
		>
			Skip to Content
		</a>
	);
}
