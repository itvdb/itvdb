import React from "react";

type ServiceItem = {
	title: string;
	features: Array<string>;
};

const ServiceList: ServiceItem[] = [
	{
		title: "Website",
		features: [
			"E-mails",
			"Websites",
			"Webshops",
			"Nieuwsbrieven",
			"SEO optimalisatie",
			"24/7 support",
		],
	},
	{
		title: "Software",
		features: ["Development", "Testing", "SaaS", "Analyses", "24/7 support"],
	},
	{
		title: "Consultancy",
		features: ["Projecten", "Advies", "(meer) Jaarcontracten", "24/7 support"],
	},
	{
		title: "IT Infrastructuur",
		features: [
			"Computers",
			"Monitors",
			"randapparatuur",
			"Netwerk",
			"Antivirus",
			"Remote access",
			"24/7 support",
		],
	},
];

function Service(service: ServiceItem) {
	return (
		<div
			className="card margin-top--md"
			style={{
				width: "inherit",
			}}
		>
			<div className="card__header">
				<h2>{service.title}</h2>
			</div>
			<div className="card__body">
				<ul>
					{service.features.map((feat) => (
						<li>{feat}</li>
					))}
				</ul>
			</div>
			<div className="card__footer">
				<a className="button button--secondary button--block" href="/contact">
					Neem contact op
				</a>
			</div>
		</div>
	);
}

export default function ServiceFeatures() {
	return (
		<div className="container">
			<div className="row">
				{ServiceList.map((service, idx) => (
					<div
						className="col col--6"
						style={{
							display: "flex",
							justifySelf: "stretch",
						}}
					>
						<Service key={idx} {...service} />
					</div>
				))}
			</div>
		</div>
	);
}
