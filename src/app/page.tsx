import { SkipToContent } from "@/components/SkipToContent";

export default function Home() {
	return (
		<div id="top" className="font-mono min-h-screen px-6 py-8 max-w-screen-md lg:mx-auto">
			<SkipToContent />
			<header className="pb-24">
				<h1 className="text-5xl font-[400] mb-2 sm:mb-3">Pamela Gilmour</h1>
				<h2 className="text-3xl font-[300] mb-3 sm:mb-4">Software Engineer</h2>
				<p className="font-[200] mb-6 sm:mb-8">Full-stack development • AI/MCP integration • System design</p>
				{/* Add hidden nav */}
				<ul className="flex gap-4 list-none p-0 m-0" aria-label="Social links">
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
					<li className="border-[1] border-dotted px-2 py-1 hover:border-gray-500 hover:bg-black transition-all">
   						<a href="/PamelaGilmourEngResumebc.pdf" target="_blank" rel="noreferrer noopener" aria-label="View resume PDF">
     						Resume
   						</a>
 					</li>
				</ul>
			</header>
			<main
				id="content"
				tabIndex={-1}
				className="outline-none focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[lavender]"
			>
				<section id="about" className="mb-16 sm:mb-16 md:mb-20">
					<h2 className="text-2xl font-[500] mb-4 sm:mb-6">About</h2>
					<p className="font-[300] mb-3">I'm a software engineer with 4 years of professional experience building accessible, scalable web applications.</p>
					<p className="font-[300] mb-3">
						I've led frontend architecture for high-traffic civic platforms at{" "}
						<a target="_blank" rel="noreferrer noopener" href="https://www.kqed.org/">
							KQED
						</a>
						, an{" "}
						<a target="_blank" rel="noreferrer noopener" href="https://www.npr.org/">
							NPR
						</a>{" "}
						member station in Northern California. I modernized legacy systems and shipped products that reach millions of users.
					</p>
					<p className="font-[300] mb-3">
						Currently building AI-powered applications with Next.js, Python, FastAPI, and custom MCP servers.
					</p>
					<p className="font-[300] mb-3">
						I focus on clean architecture, system design, and code that stays maintainable and fast.
					</p>
					<p className="font-[300] mb-3">
						I care about code quality and about making things easier for teammates—through documentation, reviews, or being someone people can ask.
					</p>
				</section>
				<section id="experience" className="mb-12 sm:mb-16 md:mb-20">
					<h2 className="text-2xl font-[500] mb-4 sm:mb-6">Experience</h2>
					<div id="list-of-jobs">
						<ul>
							<li id="codeword" className="mb-16">
								<div>
									<h3 className="text-lg font-[400] mb-3">
										Senior Creative Developer @ <a target="_blank" rel="noreferrer noopener" href="https://www.codewordagency.com/">Codeword Agency</a>
									</h3>
									<p className="text-lg font-[200] mb-3">Sep 2025 - Present</p>
									<p className="text-lg font-[300] mb-3">
										Build web applications and digital experiences for enterprise clients, including{" "}
										<a target="_blank" rel="noreferrer noopener" href="https://techcrunch.com/">
											TechCrunch
										</a>{" "}
										and{" "}
										<a target="_blank" rel="noreferrer noopener" href="https://www.manageengine.com/">
											ManageEngine
										</a>
										.
									</p>
									<p className="text-lg font-[300] mb-3">
										Develop and maintain sites across stacks including Vercel, WordPress, and Brightspot CMS—for clients such as{" "}
										<a target="_blank" rel="noreferrer noopener" href="https://www.demandbase.com/">
											Demandbase
										</a>
										.
									</p>
									<p className="text-lg font-[300] mb-3">
										Build and maintain pages for Google Data Centers and internal properties with design and communications teams.
									</p>
									<p className="text-lg font-[300] mb-3">
										Own CMS infrastructure and ongoing site maintenance for agency properties.
									</p>
									<p className="text-lg font-[300] mb-3">
										Consult on SEO strategy and performance optimization.
									</p>
									<p>
										<strong>Tech:</strong> WordPress, PHP, React, TypeScript, Next.js, Vercel, Supabase
									</p>
								</div>
							</li>
							<li id="kqed" className="mb-16">
								<div>
									<h3 className="text-lg font-[400] mb-3">
										Full Stack Software Engineer @ <a target="_blank" rel="noreferrer noopener" href="https://www.kqed.org/">KQED Inc.</a>
									</h3>
									<p className="text-lg font-[200] mb-3">May 2022 - Oct 2025</p>
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
										Web Developer Intern @ <a target="_blank" rel="noreferrer noopener" href="https://www.postman.com/">Postman</a>
									</h3>
									<p className="text-lg font-[200] mb-3">Jul - Dec 2021</p>
									<p className="text-lg font-[300] mb-3">
										Worked on REST API workflows and frontend testing strategies.
									</p>
									<p className="text-lg font-[300] mb-3">
										Gained hands-on experience with API testing, documentation, and developer-first tooling.
									</p>
									<p>
										<strong>Tech:</strong> React, GraphQL, Postman
									</p>
								</div>
							</li>
						</ul>
						<div className="mt-8">
							<a href="/PamelaGilmourEngResume-6-26.pdf" target="_blank" rel="noreferrer noopener" aria-label="View resume PDF" className=" border-[1] border-dotted px-2 py-1 hover:border-gray-500 hover:bg-black transition-all">
     							Resume
   							</a>
     					</div>
					</div>
				</section>
				<section id="projects" className="mb-12 sm:mb-16 md:mb-20">
					<h2 className="text-2xl font-[300] mb-4 sm:mb-6">Projects</h2>
					<div className="mb-14">
						<h4 className="text-lg font-[400] mb-3">
							Dev Notes AI, an AI-powered developer knowledge base
						</h4>
						<p className="text-lg font-[300] mb-3">
							Full-stack application with custom MCP server integration, AI agent, Redis caching, and background job processing.
						</p>
						<p className="text-lg font-[300] mb-3">
							<strong>Tech:</strong> Next.js, TypeScript, FastAPI, PostgreSQL, Redis, Claude API
						</p>
						<ul className="flex gap-4 list-none p-0 m-0" aria-label="Dev Notes AI links">
							<li
								className="border-[1] border-dotted px-2 py-1 hover:border-gray-500 hover:bg-black transition-all"
							>
								<a
									href="https://github.com/pamelagilmour/dev-notes-ai"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="View Dev Notes AI source code on GitHub"
								>
									Source code ↗ 
								</a>
							</li>
							<li
								className="border-[1] border-dotted px-2 py-1 hover:border-gray-500 hover:bg-black transition-all"
							>
								<a
									href="https://p-11-one.vercel.app/"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="View Dev Notes AI live demo"
								>
									Live Demo ↗ 
								</a>
							</li>
						</ul>
					</div>
					<div className="mb-14">
						<h4 className="text-lg font-[400] mb-3">
							MCP Server prototype for KQED
						</h4>
						<p className="text-lg font-[300] mb-3">
							Custom MCP server that exposes KQED's public APIs for content discovery and media retrieval.
						</p>
						<p className="text-lg font-[300] mb-3">
							<strong>Tech:</strong> TypeScript, MCP Protocol, Claude API
						</p>
						<ul className="flex gap-4 list-none p-0 m-0" aria-label="KQED MCP prototype links">
							<li
								className="border-[1] border-dotted px-2 py-1 hover:border-gray-500 hover:bg-black transition-all"
							>
								<a
									href="https://github.com/pamelagilmour/kqed-mcp-prototype"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="View KQED MCP prototype source code on GitHub"
								>
									Source code ↗ 
								</a>
							</li>
						</ul>
					</div>
				</section>
			</main>
			<footer className="">
				<p className="font-[100] text-sm sm:text-base pb-8">
					Inspired by{" "}
					<a className="font-semibold" target="_blank" rel="noreferrer noopener" href="https://brittanychiang.com/">
						Brittany Chiang's portfolio
					</a>
					. Coded in <a className="font-semibold" target="_blank" rel="noreferrer noopener" href="https://cursor.com/">Cursor</a>, built with <a className="font-semibold" target="_blank" rel="noreferrer noopener" href="https://nextjs.org/">Next.js</a> and <a className="font-semibold" target="_blank" rel="noreferrer noopener" href="https://tailwindcss.com/">Tailwind CSS</a>, deployed with <a className="font-semibold" target="_blank" rel="noreferrer noopener" href="https://www.cloudflare.com/">Cloudflare</a>.
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
