import { Line } from "@/components/pages/Line";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Line",
};

const LinePage = async () => {
	return <Line />;
};

export default LinePage;
