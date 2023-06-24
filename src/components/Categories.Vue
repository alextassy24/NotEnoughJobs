<template>
	<div class="p-5 bg-slate-300 fixed rounded-xl">
		<router-link to="/categories" class="mb-5 font-bold text-xl"> Categories </router-link>
		<div class="mt-5" v-for="category in visibleCategories" :key="category.id">
			<Category :category="category" />
		</div>
		<div v-if="showViewMore" class="text-center mt-3">
			<router-link to="/categories" class="text-blue-400 font-bold">
				View More
				<i class="fas fa-arrow-right"></i>
			</router-link>
		</div>
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
	computed: {
		visibleCategories() {
			return this.categories.slice(0, 5);
		},
		showViewMore() {
			return this.categories.length >= 5;
		},
	},
};
</script>
