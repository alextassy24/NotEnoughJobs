<template>
	<div class="mt-5 flex justify-between items-center gap-5">
		<h3>{{ category.id }}. {{ category.name }}</h3>
		<v-chip> {{ category.jobs }} </v-chip>
	</div>
</template>

<script>
export default {
	name: "Category",
	props: {
		category: Object,
	},
};
</script>
