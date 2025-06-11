<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import EditIcon from '$lib/components/EditIcon.svelte';
	import PhotoIcon from '$lib/components/PhotoIcon.svelte';
	import RecipeRow from '$lib/components/RecipeRow.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let photoForm = $state<HTMLFormElement[]>(new Array(data.recipes.length).fill(null));
	let photoFileInput = $state<HTMLInputElement[]>(new Array(data.recipes.length).fill(null));
</script>

<main class="flex h-dvh flex-col">
	{#each data.recipes as recipe, index (recipe.id)}
		<div
			class="m-0 flex grow bg-cover bg-center bg-no-repeat text-center align-middle"
			style="background-image: url('{recipe.image_url}');"
		>
			<div class="bg-gray/70 flex grow gap-2 p-2 backdrop-brightness-40">
				<div class="flex w-full grow items-center justify-center">
					<h2 class="text-2xl">{recipe.name}</h2>
				</div>
				<button onclick={() => photoFileInput[index]?.click()} class="btn h-full"
					><PhotoIcon /></button
				>
				<form
					enctype="multipart/form-data"
					use:enhance={() => {
						console.log('invalidating...');
						invalidate('/week/latest');
					}}
					method="POST"
					bind:this={photoForm[index]}
					action="?/uploadpicture"
				>
					<input type="hidden" name="recipe_id" value={recipe.id} />
					<input
						onchange={() => photoForm[index]?.requestSubmit()}
						bind:this={photoFileInput[index]}
						type="file"
						id="image"
						name="image"
						class="hidden"
					/>
				</form>
				<a href="/recipe/{recipe.id}/edit" class="btn h-full"><EditIcon /></a>
			</div>
		</div>
	{/each}
</main>
