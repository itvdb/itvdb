import React from "react";

type ServiceItem = {
	title: string;
	features: Array<string>;
	price: string;
};

const ServiceList: ServiceItem[] = [
	{
		title: "je eerste website",
		features: [
			"een wordpress website",
			"jouw domein",
			"je eigen email",
			"hulp met het opstarten",
		],
		price: "€ 20/maand",
	},
	{
		title: "Je bedrijf",
		features: ["een website", "3 domeinen", "5 emails", "3 redirects", "3 subdomeinen"],
		price: "€ 50/maand",
	},
	{
		title: "Online entrepreneur",
		features: [
			"een website",
			"5 domeinen",
			"10 emails",
			"5 redirects",
			"3 subdomeinen",
			"maandelijkse SEO meetings",
		],
		price: "€ 150/maand",
	},
];

function Service(service: ServiceItem) {
	return (
		<div
			style={{
				textAlign: "center",
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
				padding: 20,
				width: 300,
				borderRadius: 8,
				margin: 20,
			}}
		>
			<h2>{service.title}</h2>
			<div
				style={{
					flexGrow: 1,
				}}
			>
				{service.features.map((feat) => (
					<p>{feat}</p>
				))}
			</div>
			<p>{service.price}</p>
		</div>
	);
}

export default function ServiceFeatures() {
	return (
		<section
			style={{
				display: "flex",
			}}
		>
			{ServiceList.map((service, idx) => (
				<Service key={idx} {...service} />
			))}
		</section>
	);
}
