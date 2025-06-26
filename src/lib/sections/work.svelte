<script lang="ts">
	import AzureAiStudio from '$lib/icons/azure-ai-studio.svelte';
	import AzureDevops from '$lib/icons/azure-devops.svelte';
	import AzureFunctions from '$lib/icons/azure-functions.svelte';
	import AzureSql from '$lib/icons/azure-sql.svelte';
	import Azure from '$lib/icons/azure.svelte';
	import Cosmos from '$lib/icons/cosmos.svelte';
	import DotNet from '$lib/icons/dot-net.svelte';
	import OpenAi from '$lib/icons/open-ai.svelte';
	import Milestone from '$lib/milestone.svelte';
	import Javascript from '$lib/icons/javascript.svelte';
	import Typescript from '$lib/icons/typescript.svelte';
	import React from '$lib/icons/react.svelte';
	import Docker from '$lib/icons/docker.svelte';
	import Redis from '$lib/icons/redis.svelte';
	import Angular from '$lib/icons/angular.svelte';
	import SqlServer from '$lib/icons/sql-server.svelte';
	import Powershell from '$lib/icons/powershell.svelte';
	import Jquery from '$lib/icons/jquery.svelte';
	import C from '$lib/icons/c.svelte';
	import MicrosoftOffice from '$lib/icons/microsoft-office.svelte';
	import Aspen from '$lib/icons/aspen.svelte';
	import Matlab from '$lib/icons/matlab.svelte';
	import Polymath from '$lib/icons/polymath.svelte';
	import Wonderware from '$lib/icons/wonderware.svelte';
	import Comsol from '$lib/icons/comsol.svelte';
	import Emerson from '$lib/icons/emerson.svelte';
	import Vmg from '$lib/icons/vmg.svelte';
	import Seeq from '$lib/icons/seeq.svelte';
    import Svelte from '$lib/icons/svelte.svelte';
    import Aws from '$lib/icons/aws.svelte';
	import { onMount } from 'svelte';
	import { activateOnScroll } from '$lib/util';

	const work = [
    {
        from: 'May 2024',
        to: 'June 2024',
        title: 'Software Development Intern',
        workPlace: '@CACI, CO',
        body: [
            'Worked on the SAFFIRE which provides satellite GIS insights for DoD partners.',
            'Collaborated with a team to improve satellite data utility.'
        ],
        keywords: [
            'Software Development',
            'GIS',
            'Satellite Systems',
            'DoD',
            'Team Collaboration'
        ],
        icons: [Svelte,Docker,Javascript,Powershell,Aws]
    },
    {
        from: 'June 2023',
        to: 'Jan 2024',
        title: 'Co-Founder',
        workPlace: '@Protogenesis, CO',
        body: [
            'Co-founded an engineering firm focusing on developing MVPs for small businesses.',
            'Created automated tools to streamline operations and gained full-stack web development experience.',
            'Mentored engineering students employed at the firm.'
        ],
        keywords: [
            'Entrepreneurship',
            'Product Development',
            'Automation',
            'Web Development',
            'Leadership'
        ],
        icons: [MicrosoftOffice,C,OpenAi,Javascript,Svelte,Aws]
    },
    {
        from: 'Oct 2022',
        to: 'July 2023',
        title: 'Co-Proprietor',
        workPlace: '@Upstream Vee, CO',
        body: [
            'Developed affordable solutions for monitoring oil and gas pipelines.',
            'Collaborated with Chevron and leading to securing $200k in seed funding.',
            'Led design iteration and testing of MVP for field applications.'
        ],
        keywords: [
            'Pipeline Monitoring',
            'Innovation',
            'Entrepreneurship',
            'Funding',
            'Collaboration'
        ],
        icons: []
    },
    {
        from: 'June 2018',
        to: 'Feb 2023',
        title: 'Freelance Certified Drone Operator',
        workPlace: '@Self-Employed, IL - CO',
        body: [
            'Filmed marketing videos for real estate, construction, and other industries.',
            'Built and maintained a fleet of drones for commercial projects.',
            'Provided tailored drone solutions to meet diverse client needs.'
        ],
        keywords: [
            'Drone Operations',
            'FAA Licensed',
            'Video Production',
            'Client Relations',
            'Fleet Management'
        ],
        icons: []
    }
];



	onMount(() => {
		activateOnScroll('.milestone');
	});
</script>

<div
	class="left-0 -mt-2 w-full overflow-hidden border-t-8 border-slate-700 bg-slate-800 pb- pt-24 md:py-24"
>
	<div class="relative mx-auto max-w-7xl px-4 md:px-6">
		<div
			class="parallax absolute
			-top-24 right-48 z-0 -mx-96 h-full w-full bg-[url('/images/coffee.webp')] bg-contain bg-no-repeat opacity-50 bg-blend-normal drop-shadow [--parallax-speed:5] sm:right-24 sm:bg-auto md:-right-[10vw] lg:opacity-100"
		></div>
		<a id="work">
            <h2
            class="relative z-10 mx-auto font-['Roboto_Mono'] text-xl leading-none tracking-wide text-[#fce4b8]"
          >
            <span class="text-white/50"></span>Resume
            <span class="cursor -ml-2 mb-20 font-['Roboto_Mono'] text-lg text-white/50">
              &#x2590;
            </span>
          </h2>
        <p 
        class="mb-16 pr-24 text-2xl font-medium leading-tight tracking-tight text-slate-300 md:text-3xl lg:w-1/2"
    >
        My name is <span class="font-bold">Hayden Constas</span>. I'm an electrical engineer with a background in entrepreneurship. I've learned a lot the hard way, and am always looking forward to the next challege. Here's the journey I've been on so far. 
    </p>
    
		</a>

		<div
			class="relative mx-auto space-y-12 overflow-hidden via-90% pb-4 sm:pt-8 sm:before:absolute sm:before:inset-0 sm:before:left-[1px] sm:before:h-full sm:before:w-[1px] sm:before:-translate-x-px sm:before:bg-gradient-to-b sm:before:from-white/25 sm:before:via-white/25 sm:before:to-transparent mt-36"
		>
			{#each work as w, i}
				<Milestone
					from={w.from}
					to={w.to}
					heading={w.title}
					subheading={w.workPlace}
					body={w.body}
					keywords={w.keywords}
					icons={w.icons}
					active={i === 0}
				></Milestone>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	@media screen(lg) {
		:global(.milestone.active) {
			transform: translateX(50px);
			transition:
				transform 0.2s ease-out,
				filter 0.2s ease-in,
				opacity 0.2s ease-in;
			opacity: 1;
		}

		:global(.milestone:not(.active)) {
			transform: translateX(0);
			transition:
				transform 0.5s ease-out,
				filter 0.5s ease-in,
				opacity 0.5s ease-in;
			filter: saturate(0%);
			opacity: 0.35;
		}
	}
</style>
