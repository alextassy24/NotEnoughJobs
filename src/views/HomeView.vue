<template>
	<div class="grid grid-cols-5 gap-10">
		<div class="col-span-1 ml-10 mt-10 mr-5">
			<Categories :categories="categories" />
		</div>
		<div class="col-span-3">
			<div class="mt-7 flex justify-between items-center w-75">
				<h1 class="ml-10 font-bold text-3xl">{{ totalJobs }} Available Jobs</h1>
				<div class="w-80">
					<SearchBar />
				</div>
			</div>
			<Jobs @totalJobs="updateTotalJobs" />
		</div>
		<div class="col-span-1"></div>
	</div>
</template>

<script>
import Jobs from "../components/Jobs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories.vue";
import axios from "axios";
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
	computed: {
		...mapState(["isAuthenticated", "user"]),
	},
	name: "Home",
	components: {
		Jobs,
		SearchBar,
		Categories,
	},
	data() {
		return {
			message: "You are not logged in!",
			jobs: [],
			filteredJobs: [],
			categories: [],
			companies: [],
			totalPages: 0,
			totalJobs: 0,
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

	methods: {
		updateTotalJobs(totalJobs) {
			this.totalJobs = totalJobs;
		},
	},
});
</script>
