<script lang="ts">
	import EditIcon from '$lib/components/EditIcon.svelte';
	import PhotoIcon from '$lib/components/PhotoIcon.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let photoFileInput = $state<HTMLInputElement>();
	//let photoFileInput: HTMLInputElement;
</script>

<main class="flex h-dvh flex-col">
	{#each data.recipes as recipe}
		<div
			class="m-0 flex grow bg-[url('{recipe.image_url}')] bg-cover bg-center bg-no-repeat text-center align-middle"
		>
			<div class="bg-gray/70 flex grow gap-2 p-2 backdrop-brightness-40">
				<div class="flex w-full grow items-center justify-center">
					<h2 class="text-2xl">{recipe.name}</h2>
				</div>
				<button onclick={() => photoFileInput?.click()} class="btn h-full"><PhotoIcon /></button>
				<input bind:this={photoFileInput} type="file" id="myfile" name="myfile" class="hidden" />
				<a href="/recipe/{recipe.id}/edit" class="btn h-full"><EditIcon /></a>
			</div>
		</div>
	{/each}
</main>
