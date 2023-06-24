<template>
	<div :key="job.id" v-for="job in paginatedJobs">
		<Job :job="job" />
	</div>
	<div class="flex justify-center gap-3 items-center w-50 ml-10 mt-4 mb-5">
		<button
			@click="goToFirstPage"
			:disabled="currentPage === 1"
			class="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700"
		>
			First
		</button>
		<button
			@click="previousPage"
			:disabled="currentPage === 1"
			class="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-md hover:bg-blue-600"
		>
			<i class="fas fa-chevron-left"></i>
		</button>
		<div class="mr-2 font-bold">
			Page
			<input
				type="number"
				v-model.number="pageInput"
				min="1"
				:max="totalPages"
				class="w-10 text-center"
				@input="goToPage"
			/>
			of {{ totalPages }}
		</div>
		<button
			@click="nextPage"
			:disabled="currentPage === totalPages"
			class="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-md hover:bg-blue-600"
		>
			<i class="fas fa-chevron-right"></i>
		</button>
		<button
			@click="goToLastPage"
			:disabled="currentPage === totalPages"
			class="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700"
		>
			Last
		</button>
	</div>
</template>

<script>
import Job from "./Job";
import axios from "axios";
export default {
	name: "jobs",
	data() {
		return {
			currentPage: 1,
			pageInput: 1,
			itemsPerPage: 5,
			totalItems: 0,
			jobs: [],
			totalPages: 0,
			filteredJobs: [],
		};
	},
	components: {
		Job,
	},
	computed: {
		paginatedJobs() {
			const startIndex = (this.currentPage - 1) * this.itemsPerPage;
			const endIndex = startIndex + this.itemsPerPage;
			return this.jobs.slice(startIndex, endIndex);
		},
	},
	mounted() {
		axios
			.get("/api/jobs/")
			.then((response) => {
				this.jobs = response.data;
				this.totalPages = Math.ceil(response.data.length / this.itemsPerPage);
				this.$emit("totalJobs", response.data.length);
			})
			.catch((error) => {
				console.error(error);
			});
	},
	methods: {
		previousPage() {
			if (this.currentPage > 1) {
				this.currentPage--;
				this.pageInput = this.currentPage;
			}
		},
		nextPage() {
			if (this.currentPage < this.totalPages) {
				this.currentPage++;
				this.pageInput = this.currentPage;
			}
		},
		goToPage() {
			if (this.pageInput >= 1 && this.pageInput <= this.totalPages) {
				this.currentPage = this.pageInput;
			}
		},
		goToFirstPage() {
			this.currentPage = 1;
			this.pageInput = this.currentPage;
		},
		goToLastPage() {
			this.currentPage = this.totalPages;
			this.pageInput = this.currentPage;
		},
	},
};
</script>

<style>
button[disabled] {
	opacity: 0.5;
	cursor: not-allowed;
}
</style>
