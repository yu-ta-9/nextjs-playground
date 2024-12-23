export async function POST(request: Request) {
	console.log("Hello webhook!");

	try {
		const text = await request.text();
		const body = JSON.parse(text);
		console.log({ body });
	} catch (error) {
		return new Response(
			`Webhook error: ${
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				(error as any).message
			}`,
			{
				status: 400,
			},
		);
	}

	return new Response("Success!", {
		status: 200,
	});
}
