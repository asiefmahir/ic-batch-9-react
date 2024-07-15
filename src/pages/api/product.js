export default async function handler(req, res) {
	try {
		// await res.revalidate("/path-to-revalidate");
		await res.revalidate("/");
		return res.json({ revalidated: true, message: "We are experimenting" });
	} catch (err) {
		return res.status(500).send("Error revalidating");
	}
}
