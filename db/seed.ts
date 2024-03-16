import { db, User, Category, Todo } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
	{
		id: 1,
		email: 'jeremias@gmail.com',
		username: 'jeremias'
	},
	{
		id: 2,
		email: 'johnw@gmail.com',
		username: 'johnw'
	}
	])

	await db.insert(Category).values([
	{
		id: 1,
		label: 'Software',
	},
	{
		id: 2,
		label: 'Hardware',
	}
	])

	await db.insert(Todo).values([
	{
		id: 1,
		title: 'Install VS Code',
		description: 'Download VS Code & install',
		user_id: 1,
		category_id: 1
	},
	{
		id: 2,
		title: 'Install Graphic Card',
		description: 'Buy Graphic & Install',
		user_id: 1,
		category_id: 2
	}
	,
	{
		id: 3,
		title: 'Install Astro',
		description: 'Download Astro after that install it',
		user_id: 2,
		category_id: 1
	}
	])
}
