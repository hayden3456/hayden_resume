<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { Chart, ChartConfiguration } from 'chart.js';

	let { alt }: { alt: string } = $props();

	let rootEl = $state<HTMLDivElement | undefined>(undefined);
	let canvasEl = $state<HTMLCanvasElement | undefined>(undefined);
	let entered = $state(false);
	let reducedMotion = $state(false);

	let chart: Chart | null = null;

	function buildConfig(canvas: HTMLCanvasElement, animate: boolean): ChartConfiguration {
		const tenorLabels = ['1M', '3M', '6M', '1Y', '18M', '2Y', '3Y'];
		const riskFree = [3.8, 4.1, 4.3, 4.5, 4.55, 4.5, 4.4];
		const borrow = [0.8, 1.0, 1.3, 1.85, 2.1, 2.3, 2.6];
		const divYields = [1.8, 2.1, 2.2, 2.3, 2.35, 2.4, 2.45];

		return {
			type: 'line',
			data: {
				labels: tenorLabels,
				datasets: [
					{
						label: 'Risk-free (r)',
						data: riskFree,
						borderColor: '#378ADD',
						backgroundColor: 'rgba(55,138,221,0.08)',
						borderWidth: 2,
						pointRadius: 4,
						tension: 0.4,
						fill: true
					},
					{
						label: 'Borrow (b)',
						data: borrow,
						borderColor: '#D4537E',
						backgroundColor: 'rgba(212,83,126,0.07)',
						borderWidth: 2,
						pointRadius: 4,
						tension: 0.4,
						fill: true
					},
					{
						label: 'Div yield (q)',
						data: divYields,
						borderColor: '#1D9E75',
						backgroundColor: 'rgba(29,158,117,0.07)',
						borderWidth: 2,
						pointRadius: 4,
						tension: 0.4,
						fill: true
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				animation: animate
					? { duration: 1400, easing: 'easeOutQuart' as const }
					: false,
				plugins: { legend: { display: false } },
				scales: {
					y: {
						ticks: {
							callback: (v) => (typeof v === 'number' ? v.toFixed(1) : String(v)) + '%',
							font: { size: 11 }
						},
						grid: { color: 'rgba(128,128,128,0.12)' }
					},
					x: {
						ticks: { font: { size: 11 } },
						grid: { color: 'rgba(128,128,128,0.08)' }
					}
				}
			}
		};
	}

	onMount(() => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const root = rootEl;
		if (!root || !canvasEl) return;

		let cancelled = false;

		const obs = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (!e.isIntersecting) continue;
					entered = true;
					obs.disconnect();
					queueMicrotask(async () => {
						if (cancelled) return;
						const { default: ChartJS } = await import('chart.js/auto');
						if (cancelled || !canvasEl) return;
						chart?.destroy();
						chart = new ChartJS(canvasEl, buildConfig(canvasEl, !reducedMotion));
					});
					break;
				}
			},
			{ rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
		);
		obs.observe(root);

		return () => {
			cancelled = true;
			obs.disconnect();
		};
	});

	onDestroy(() => {
		chart?.destroy();
		chart = null;
	});
</script>

<div
	class="yield-curve-root"
	class:yield-curve-root--entered={entered}
	class:yield-curve-root--motion={!reducedMotion}
	bind:this={rootEl}
>
	<p class="yield-curve-sr">{alt}</p>
	<div class="yield-curve-inner">
		<h3 class="yield-curve-h">Yield &amp; borrow curves</h3>
		<p class="yield-curve-sub">
			Risk-free rate (r), borrow cost (b), and dividend yield (q) across the tenor structure
		</p>
		<div class="yield-curve-chart">
			<canvas bind:this={canvasEl} aria-hidden="true"></canvas>
		</div>
		<div class="yield-curve-legend">
			<span
				><span class="yield-curve-dot" style="background:#378ADD"></span>Risk-free rate (r)</span
			>
			<span><span class="yield-curve-dot" style="background:#D4537E"></span>Borrow cost (b)</span>
			<span><span class="yield-curve-dot" style="background:#1D9E75"></span>Dividend yield (q)</span>
		</div>
	</div>
</div>

<style>
	.yield-curve-root {
		display: flex;
		flex: 1 1 auto;
		align-self: stretch;
		width: 100%;
		min-width: 0;
		min-height: min(320px, 52vw);
		padding: 1rem 1rem 0.875rem;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.92);
		opacity: 0;
		transform: translateY(14px);
	}

	.yield-curve-root--motion.yield-curve-root--entered {
		opacity: 1;
		transform: translateY(0);
		transition:
			opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.yield-curve-root--entered:not(.yield-curve-root--motion) {
		opacity: 1;
		transform: none;
	}

	.yield-curve-sr {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.yield-curve-inner {
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 0;
		flex: 1;
	}

	.yield-curve-h {
		margin: 0 0 0.25rem;
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--body, #1a1a2e);
		letter-spacing: -0.02em;
	}

	.yield-curve-sub {
		margin: 0 0 0.75rem;
		font-size: 0.72rem;
		line-height: 1.45;
		color: rgba(36, 72, 191, 0.55);
		max-width: 36rem;
	}

	.yield-curve-chart {
		position: relative;
		flex: 1;
		min-height: 200px;
		width: 100%;
	}

	.yield-curve-chart :global(canvas) {
		display: block;
		width: 100% !important;
		height: 100% !important;
	}

	.yield-curve-legend {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem 1rem;
		margin-top: 0.5rem;
		padding-top: 0.25rem;
		font-size: 0.68rem;
		color: rgba(36, 72, 191, 0.65);
	}

	.yield-curve-legend span {
		display: inline-flex;
		align-items: center;
		gap: 0.28rem;
	}

	.yield-curve-dot {
		width: 9px;
		height: 9px;
		border-radius: 2px;
		flex-shrink: 0;
	}

	@media (max-width: 800px) {
		.yield-curve-root {
			min-height: 240px;
		}

		.yield-curve-chart {
			min-height: 180px;
		}
	}
</style>
