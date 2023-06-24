<template>
	<form action="" @submit.prevent="searchJobs">
		<v-autocomplete
			clearable
			prepend-icon="mdi-magnify"
			label="Search"
			v-model="searchQuery"
			:items="jobs"
		></v-autocomplete>
	</form>
</template>

<script>
import axios from "axios";

export default {
	name: "SearchBar",
	data() {
		return {
			jobs: [],
			searchQuery: null,
		};
	},
	mounted() {
		axios
			.get("/api/jobs/")
			.then((response) => {
				this.jobs = response.data.map((job) => job.name);
				console.log(this.jobs);
			})
			.catch((error) => {
				console.error(error);
			});
	},
	methods: {},
};
</script>
