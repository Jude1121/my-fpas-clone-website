<!-- src/lib/components/Home.svelte -->
<script>
	import { resolve } from '$app/paths';
	import newStudentImg from '../assets/register/new-student.png';
	import crossBorderImg from '../assets/register/cross-border.png';
	import publicMemberImg from '../assets/register/public-member.png';

	const options = [
		{
			href: '/',
			image: newStudentImg,
			alt: 'Register as a New Student',
			label: 'Register as a New Student with one of our 5 Education Providers'
		},
		{
			href: '/register/cross-border',
			image: crossBorderImg,
			alt: 'Register as a Cross Border Member',
			label: 'Register as a Cross Border Member'
		},
		{
			href: '/register/public-member',
			image: publicMemberImg,
			alt: 'Register as a Public Member',
			label: 'Register as a Public Member'
		}
	];
</script>

<div class="bg-white">
	<!-- Thin top divider -->
	<div class="h-px w-full bg-gray-300"></div>

	<!-- Register options -->
	<div class="flex flex-wrap items-start justify-center gap-30 px-6 py-16">
		{#each options as option (option.href)}
			<a href={resolve(option.href)} class="group flex w-[280px] flex-col items-center text-center">
				<div class="relative h-[240px] w-[340px] overflow-hidden rounded-bl-[48px] rounded-tr-[48px] shadow-lg transition-transform duration-200 group-hover:scale-[1.02] border-1">
					<img src={option.image} alt={option.alt} class="h-full w-full object-cover" />
				</div>
				<p class="mt-4 text-lg font-medium leading-snug text-blue-900 group-hover:underline">
					{option.label}
				</p>
			</a>
		{/each}
	</div>
</div>