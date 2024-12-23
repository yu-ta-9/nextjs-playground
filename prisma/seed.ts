import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.user.upsert({
		where: { id: 1 },
		update: {},
		create: {
			id: 1,
			email: "",
			lastName: "テスト",
			firstName: "太郎",
		},
	});
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
