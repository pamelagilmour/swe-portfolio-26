export default function Home() {
	return (
		<div id="top" className="font-mono min-h-screen px-6 py-8 max-w-screen-md lg:mx-auto">
			<header className="pb-24">
				{/* Add a11y menu */}
				<h1 className="text-5xl font-[400] mb-2 sm:mb-3">Pamela Gilmour</h1>
				<h2 className="text-3xl font-[300] mb-3 sm:mb-4">Software Engineer</h2>
				<p className="font-[200] mb-6 sm:mb-8">Full-stack development • AI/MCP integration • System design</p>
				{/* Add hidden nav */}
				<ul className="flex gap-4 list-none p-0 m-0" aria-label="Social links">
					{/* Add hover states */}
					<li className="border-[1] border-dotted px-2 py-1 hover:border-gray-500 hover:bg-black transition-all">
						<a target="_blank" rel="noreferrer noopener" href="https://github.com/pamelagilmour">
							GitHub
						</a>
					</li>
					<li className="border-[1] border-dotted px-2 py-1 hover:border-gray-500 hover:bg-black transition-all">
						<a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/pamela-gilmour/">
							LinkedIn
						</a>
					</li>
				</ul>
			</header>
			<main>
				<section id="about" className="mb-16 sm:mb-16 md:mb-20">
					<h2 className="text-2xl font-[500] mb-4 sm:mb-6">About</h2>
					<p className="font-[300] mb-3">I'm a software engineer with 4 years of experience building accessible, scalable web applications.</p>
					<p className="font-[300] mb-3">
						I've led frontend architecture for high-traffic civic platforms at KQED, modernized legacy systems, and shipped products serving millions of users.
					</p>
					<p className="font-[300] mb-3">Currently building AI-powered applications with Next.js, Python, FastAPI, and custom MCP servers.</p>
					<p className="font-[300] mb-3"> I focus on clean architecture, system design, and writing code that's maintainable and performant.</p>
					<p className="font-[300] mb-3">I care about code quality and making life easier for the people I work with, whether that's through documentation, code reviews, or just being someone people can ask questions.</p>
				</section>
				<section id="experience" className="mb-12 sm:mb-16 md:mb-20">
					<h2 className="text-2xl font-[500] mb-4 sm:mb-6">Experience</h2>
					<div id="list-of-jobs">
						<ul>
							<li id="codeword" className="mb-16">
								<div>
									<h3 className="text-lg font-[400] mb-3">
										Senior Creative Developer @ Codeword Agency
									</h3>
									<p className="text-lg font-[200] mb-3">2025 - Present</p>
									<p className="text-lg font-[300] mb-3">
										Develop and maintain web applications across multiple technology stacks including Vercel, WordPress, and BrightSpot CMS.
									</p>
									<p className="text-lg font-[300] mb-3">
										Manage site infrastructure and deployments for client-facing applications.
									</p>
									<p className="text-lg font-[300] mb-3">
										Implement features within enterprise CMS platforms for major client accounts.
									</p>
								</div>
							</li>
							<li id="kqed" className="mb-16">
								<div>
									<h3 className="text-lg font-[400] mb-3">
										Full Stack Software Engineer @ KQED Inc.
									</h3>
									<p className="text-lg font-[200] mb-3">2025 - 2022</p>
									<p className="text-lg font-[300] mb-3">
										Led frontend development for high-traffic civic engagement platforms including the California Voter Guide (serving millions of voters) and Support site redesign (drove measurable donation increases).
									</p>
									<p className="text-lg font-[300] mb-3">
										Built and maintained custom Gutenberg blocks modernizing KQED's WordPress multisite infrastructure.
									</p>
									<p className="text-lg font-[300] mb-3">
										Architected reusable React components across multiple properties, improving development velocity and reducing technical debt.
									</p>
									<p className="text-lg font-[300] mb-3">
										Facilitated accessibility best practices (WCAG 2.1), test-driven development, and code quality.
									</p>
									<p className="text-lg font-[300] mb-3">
										Mentored interns and junior engineers through pair programming and documentation.
									</p>
									<p>
										<strong>Tech:</strong> React, TypeScript, Redux, WordPress, PHP, Sass, REST APIs</p>
								</div>
							</li>
							<li id="postman" className="mb-12">
								<div>
									<h3 className="text-lg font-[400] mb-3">
										Web Developer Intern @ Postman
									</h3>
									<p className="text-lg font-[200] mb-3">Jul - Dec 2021</p>
									<p className="text-lg font-[300] mb-3">
										Worked on REST API workflows and frontend testing strategies.
									</p>
									<p>
										Gained practical experience in API testing, documentation, and developer-first tools.
									</p>
								</div>
							</li>
						</ul>
					</div>
					{/* <p>Link to resume</p> */}

				</section>
				<section id="projects" className="mb-12 sm:mb-16 md:mb-20">
					<h2 className="text-2xl font-[300] mb-4 sm:mb-6">Projects</h2>
					<div className="mb-14">
						<h4 className="text-lg font-[400] mb-3">
							<strong>AI-Powered Developer Knowledge Base</strong> <span className="font-[300]">(~ In Progress)</span>
						</h4>
						<p className="text-lg font-[300] mb-3">
							Full-stack application with custom MCP server integration, AI agent, Redis caching, and background job processing.
						</p>
						<p className="text-lg font-[300] mb-3">
							<strong>Tech:</strong> Next.js, TypeScript, FastAPI, PostgreSQL, Redis, Claude API
						</p>
						<p className="text-lg font-[300] mb-3">
							↗ <a
								href="https://github.com/pamelagilmour/p-1"
								target="_blank"
								rel="noreferrer noopener"
								className="underline hover:no-underline transition-all">
								View on GitHub
							</a>
						</p>
					</div>
					<div className="mb-14">
						<h4 className="text-lg font-[400] mb-3">
							<strong>Real-Time Analytics Platform</strong> <span className="font-[300]">(○ Planned)</span>
						</h4>
						<p className="text-lg font-[300] mb-3">
							Demonstrating advanced data structures, algorithms, and high-throughput system design.
						</p>
						<p className="text-lg font-[300] mb-3">
							<strong>Tech:</strong> Next.js, Python, WebSocket, PostgreSQL
						</p>
						<p className="text-lg font-[300] mb-3">
							↗ <a
								href="https://github.com/pamelagilmour/p-2"
								target="_blank"
								rel="noreferrer noopener"
								className="underline hover:no-underline transition-all">
								View on GitHub
							</a>
						</p>
					</div>
					<div className="mb-14">
						<h4 className="text-lg font-[400] mb-3">
							<strong>Autonomous Research Agent</strong> <span className="font-[300]">(○ Planned)</span>
						</h4>
						<p className="text-lg font-[300] mb-3">
							AI agent system with multi-step reasoning, tool orchestration, and production-grade error handling.
						</p>
						<p className="text-lg font-[300] mb-3">
							<strong>Tech:</strong> Python, FastAPI, MCP Protocol, Claude API
						</p>
						<p className="text-lg font-[300] mb-3">
							↗ <a
								href="https://github.com/pamelagilmour/p-3"
								target="_blank"
								rel="noreferrer noopener"
								className="underline hover:no-underline transition-all">
								View on GitHub
							</a>
						</p>
					</div>
				</section>
			</main>
			<footer className="">
				<p className="font-[100] text-sm sm:text-base pb-8">
					Inspired by <a className="font-semibold" target="_blank" rel="noreferrer noopener" href="https://brittanychiang.com/">Brittany Chang's Portfolio</a>. Coded in <a className="font-semibold" target="_blank" rel="noreferrer noopener" href="https://cursor.com/">Cursor</a>, built with <a className="font-semibold" target="_blank" rel="noreferrer noopener" href="https://nextjs.org/">Next.js</a> and <a className="font-semibold" target="_blank" rel="noreferrer noopener" href="https://tailwindcss.com/">Tailwind CSS</a>, deployed with <a className="font-semibold" target="_blank" rel="noreferrer noopener" href="https://www.cloudflare.com/">Cloudflare</a>.
					All text is in <a className="font-semibold" target="_blank" rel="noreferrer noopener" href="https://www.ibm.com/plex/">IBM Plex Mono</a> typeface.
				</p>
				<nav>
					<ul>
						<li><a href="#top" className="hover:underline">↑ Back to top</a></li>
						<li><a href="#about" className="hover:underline">About</a></li>
						<li><a href="#experience" className="hover:underline">Experience</a></li>
						<li><a href="#projects" className="hover:underline">Projects</a></li>
					</ul>
				</nav>
			</footer>
		</div>
	);
}
