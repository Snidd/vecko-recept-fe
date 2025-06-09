<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<main class="flex h-screen flex-col">
	{#each data.recipes as recipe}
		<div class="m-0 flex grow border border-b-0 p-3 text-center align-middle">
			<h2 class="grow bg-blue-500 align-middle">{recipe.name}</h2>
			<button class="border">Picture</button>
		</div>
	{/each}
</main>
