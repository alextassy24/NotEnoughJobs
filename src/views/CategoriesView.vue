<template>
	<div class="p-5 bg-slate-300 rounded-xl mx-auto mt-10 w-50">
		<h1 class="text-center m-5 font-bold text-3xl">Job Categories</h1>

		<div class="mt-5" v-for="category in categories" :key="category.id">
			<Category :category="category" />
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Category from "../components/Category.vue";

export default {
	name: "Categories",
	props: {
		categories: Array,
	},
	components: {
		Category,
	},
	data() {
		return {
			categories: [],
		};
	},
	mounted() {
		axios
			.get("/api/categories/")
			.then((response) => {
				this.categories = response.data;
			})
			.catch((error) => {
				console.error(error);
			});
	},
};
</script>
