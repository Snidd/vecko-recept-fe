<script lang="ts">
	import { enhance } from '$app/forms';
	import EditIcon from '$lib/components/EditIcon.svelte';
	import PhotoIcon from '$lib/components/PhotoIcon.svelte';
	import RecipeRow from '$lib/components/RecipeRow.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<main class="flex h-dvh flex-col">
	{#each data.recipes as recipe (recipe.id)}
		<RecipeRow {recipe} />
	{/each}
</main>
