<script lang="ts">
	import type { Recipe } from '$lib/types/Recipe';
	import { enhance } from '$app/forms';
	import PhotoIcon from './PhotoIcon.svelte';
	import EditIcon from './EditIcon.svelte';
	import { invalidate } from '$app/navigation';
	let props = $props<{ recipe: Recipe }>();

	const { recipe } = props;

	let photoFileInput = $state<HTMLInputElement>();

	let photoForm = $state<HTMLFormElement>();
</script>

<div
	class="m-0 flex grow bg-cover bg-center bg-no-repeat text-center align-middle"
	style="background-image: url('{recipe.image_url}');"
>
	<div class="bg-gray/70 flex grow gap-2 p-2 backdrop-brightness-40">
		<div class="flex w-full grow items-center justify-center">
			<h2 class="text-2xl">{recipe.name}</h2>
		</div>
		<button onclick={() => photoFileInput?.click()} class="btn h-full"><PhotoIcon /></button>
		<form
			enctype="multipart/form-data"
			use:enhance={() => {
				console.log('invalidating...');
				invalidate('/week/latest');
			}}
			method="POST"
			bind:this={photoForm}
			action="?/uploadpicture"
		>
			<input type="hidden" name="recipe_id" value={recipe.id} />
			<input
				onchange={() => photoForm?.requestSubmit()}
				bind:this={photoFileInput}
				type="file"
				id="image"
				name="image"
				class="hidden"
			/>
		</form>
		<a href="/recipe/{recipe.id}/edit" class="btn h-full"><EditIcon /></a>
	</div>
</div>
