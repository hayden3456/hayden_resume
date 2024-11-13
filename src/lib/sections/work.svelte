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
	import { onMount } from 'svelte';
	import { activateOnScroll } from '$lib/util';

	const work = [
    {
        from: 'Fall 2024',
        to: 'Present',
        title: 'Undergraduate Researcher',
        workPlace: '@The Lab of Catalysis & Applied Technology in Surface Science',
        body: [
            'Ran catalytic reactions with mass spectrometry analysis for the dry reforming of methane and the reverse water gas shift to assess the efficiency of various catalytic designs.',
            'Developed synthesis procedures for catalysts and silica deposition on porous catalytic supports. Heavy literature research conducted.',
            'Developed fully automated model in Excel for all analysis required in lab.'
        ],
        keywords: [
            'Catalysis',
            'Mass Spectrometry',
            'Chemical Engineering',
            'Laboratory Techniques',
            'Excel',
            'VBA',
            'Data Analysis'
        ],
        icons: [MicrosoftOffice, Aspen, Matlab, Polymath, Comsol]
    },
    {
        from: 'Summer 2024',
        to: 'Summer 2024',
        title: 'Chemical Engineer',
        workPlace: '@Field Session',
        body: [
            'Completed nine labs within a six-week timeframe with 24-hour turnaround presentations and weekly reports combined with regular coursework and attendance.',
            'Completed HAZOPs, oral briefings, computer simulations (Aspen Plus), and statistical analysis.'
        ],
        keywords: [
            'HAZOP',
            'Aspen Plus',
            'Statistical Analysis',
            'Chemical Engineering',
            'Laboratory',
            'Time Management',
            'Presentation Skills'
        ],
        icons: [Aspen, Matlab]
    },
    {
        from: 'Summer 2022',
        to: 'Summer 2023',
        title: 'Chemical Engineering Intern',
        workPlace: '@DCP Midstream, Denver, CO',
        body: [
            'Collaborated with diverse engineering teams to enhance operational efficiency using software control systems for chemical plants.',
            'Led the development of training simulators in Excel VBA to train new employees, simulating real-time plant control systems.',
            'Contributed to process optimization projects and safety compliance initiatives, ensuring adherence to industry best practices.',
            'Navigated Wonderware, DeltaV, and FoxView software for advanced operator displays.',
            'Analyzed company P&IDs to generate thermodynamic/process simulations with VMG Symmetry Simulation Software.',
            'Compiled large amounts of PI data, manipulated in Seeq, to create a simple visual format for easy identification of future mechanical failures (for heat exchangers).'
        ],
        keywords: [
            'Process Optimization',
            'Excel VBA',
            'Chemical Engineering',
            'Process Simulation',
            'VMG Symmetry',
            'Wonderware',
            'DeltaV',
            'FoxView',
            'PI Data',
            'Seeq',
            'Heat Exchangers',
            'Safety Compliance',
            'P&IDs'
        ],
        icons: [MicrosoftOffice,  Seeq, Wonderware, Vmg, Emerson]
    },
    {
        from: 'Jan 2022',
        to: 'Mar 2022',
        title: 'Math Tutor',
        workPlace: '@Learning League, Arvada, CO',
        body: [
            'Prepared educational material, assessing student progress and adapting methods to improve performance, overcoming educational challenges due to the COVID-19 pandemic.'
        ],
        keywords: [
            'Teaching',
            'Mathematics',
            'Tutoring',
            'Education',
            'Adaptability',
            'COVID-19'
        ],
        icons: []
    }
];


	onMount(() => {
		activateOnScroll('.milestone');
	});
</script>

<div
	class="left-0 -mt-2 w-full overflow-hidden border-t-8 border-slate-700 bg-slate-800 pb-12 pt-24 md:py-24"
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
				WORK
			</h2>
		</a>

		<p
			class="relative z-20 mb-64 text-pretty pr-24 text-2xl font-medium leading-tight tracking-tight text-slate-300 drop-shadow-lg md:text-3xl lg:w-1/2"
		>
			The places I have worked at and what I got to build.
		</p>
		<div
			class="relative mx-auto space-y-12 overflow-hidden via-90% pb-4 sm:pt-8 sm:before:absolute sm:before:inset-0 sm:before:left-[1px] sm:before:h-full sm:before:w-[1px] sm:before:-translate-x-px sm:before:bg-gradient-to-b sm:before:from-white/25 sm:before:via-white/25 sm:before:to-transparent"
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
