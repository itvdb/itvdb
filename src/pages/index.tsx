import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Introduction from "../components/Introdcution";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					width="102px"
					height="132px"
					viewBox="-0.5 -0.5 205 265"
				>
					<defs />
					<g>
						<rect
							x="82"
							y="62"
							width="40"
							height="80"
							rx="20"
							ry="20"
							fill="none"
							stroke="rgb(0, 0, 0)"
							stroke-width="5"
							pointer-events="all"
						/>
						<path
							d="M 2 62 Q 62 42 102 2"
							fill="none"
							stroke="rgb(0, 0, 0)"
							stroke-width="5"
							stroke-linejoin="round"
							stroke-linecap="round"
							stroke-miterlimit="10"
							pointer-events="stroke"
						/>
						<path
							d="M 102 2 Q 142 42 202 62"
							fill="none"
							stroke="rgb(0, 0, 0)"
							stroke-width="5"
							stroke-linejoin="round"
							stroke-linecap="round"
							stroke-miterlimit="10"
							pointer-events="stroke"
						/>
						<path
							d="M 102 262 Q 2 262 2 62"
							fill="none"
							stroke="rgb(0, 0, 0)"
							stroke-width="5"
							stroke-linejoin="round"
							stroke-linecap="round"
							stroke-miterlimit="10"
							pointer-events="stroke"
						/>
						<path
							d="M 102 262 Q 202 262 202 62"
							fill="none"
							stroke="rgb(0, 0, 0)"
							stroke-width="5"
							stroke-linejoin="round"
							stroke-linecap="round"
							stroke-miterlimit="10"
							pointer-events="stroke"
						/>
					</g>
				</svg>
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Deel je visie met ons - ${siteConfig.title}`}
			description="From vision to reality - ITVDB"
		>
			<HomepageHeader />
			<main>
				<Introduction />
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
