<template>
	<div class="mt-5" :key="category.id" v-for="category in categories">
		<Category :category="category" />
	</div>
</template>

<script>
import Category from "./Category.vue";

export default {
	name: "Categories",
	props: {
		categories: Array,
	},
	components: {
		Category,
	},
};
</script>
