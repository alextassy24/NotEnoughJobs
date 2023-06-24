<template>
	<div class="mt-5 flex justify-between items-center gap-5">
		<router-link :to="'/categories/' + category.id"
			><h3>{{ category.name }}</h3></router-link
		>
		<v-chip> {{ category.jobs_number }} </v-chip>
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
