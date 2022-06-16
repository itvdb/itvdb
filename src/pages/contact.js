import React from "react";
import Layout from "@theme/Layout";
import Calendly from "https://assets.calendly.com/assets/external/widget.js";

export default function Contact() {
	Calendly.initInlineWidget({
		url: "https://calendly.com/itvb?primary_color=2e8555",
		parentElement: document.getElementById("SAMPLEdivID"),
		prefill: {},
		utm: {},
	});
	return (
		<>
			<Layout title="Contact" description="Neem contact met me op">
				<div className="SAMPLEdivID"></div>
			</Layout>
		</>
	);
}
