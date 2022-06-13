import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Contact",
		Svg: require("@site/static/img/agreement-deal-friends-svgrepo-com.svg").default,
		description: <>Een gratis kennismakingsgesprek kan ten alle tijden.</>,
	},
	{
		title: "Een samenwerking op maat",
		Svg: require("@site/static/img/connection-people-share-svgrepo-com.svg").default,
		description: (
			<>
				De opdracht bepaald de aanpak en benadering, hier maken goede afspraken goede
				vrienden. Ik ondersteun graag elk team met een volledige aanpak.
			</>
		),
	},
	{
		title: "Eerlijkheid",
		Svg: require("@site/static/img/employee-for-looking-svgrepo-com.svg").default,
		description: (
			<>
				Liefst dat een project tot een goed eind kan gebracht worden, als ik iets niet kan
				zal ik mijn netwerk tot uw beschikking stellen.
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
