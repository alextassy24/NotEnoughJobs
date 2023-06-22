<template>
	<div
		v-if="isAuthenticated"
		class="bg-red-300 text-red-600 text-center mx-auto mt-10 p-5 w-25 rounded-xl"
	>
		Welcome {{ welcomeMessage }}
	</div>
	<div class="grid grid-cols-7 gap-4">
		<div class="col-span-1 ml-10 mt-10">
			<div class="p-5 bg-slate-300 fixed rounded-xl">
				<h3 class="mb-5 font-bold text-xl">Categories</h3>
				<Categories :categories="categories" />
			</div>
		</div>
		<div class="col-span-5">
			<div class="mt-7 flex justify-between items-center w-75">
				<h1 class="ml-10 font-bold text-3xl">Available Jobs</h1>
				<div class="w-1/4">
					<SearchBar />
				</div>
			</div>
			<Jobs :jobs="jobs" />
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
		welcomeMessage() {
			console.log("isAuthenticated:", this.isAuthenticated);
			console.log("user:", this.user);

			if (this.isAuthenticated && this.user) {
				if (this.user.first_name && this.user.last_name) {
					return `${this.user.first_name} ${this.user.last_name}`;
				} else if (this.user.username) {
					return this.user.username;
				} else {
					console.log("No appropriate field found, using fallback");
					return "User";
				}
			} else {
				console.log("Not authenticated, using Guest");
				return "Guest";
			}
		},
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
			jobs: [
				// {
				// 	id: "1",
				// 	title: "Software Developer Intern",
				// 	subtitle: "Urzisoft SRL",
				// 	text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
				// 	date: "12:30 PM 30-05-2023 ",
				// 	candidates: "5",
				// 	location: "Bucharest",
				// },
				// {
				// 	id: "2",
				// 	title: "DevOps Engineer Intern",
				// 	subtitle: "Urzisoft SRL",
				// 	text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
				// 	date: "12:30 PM 30-05-2023 ",
				// 	candidates: "5",
				// 	location: "Bucharest",
				// },
				// {
				// 	id: "3",
				// 	title: "QA Engineer Intern",
				// 	subtitle: "Urzisoft SRL",
				// 	text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
				// 	date: "12:30 PM 30-05-2023 ",
				// 	candidates: "5",
				// 	location: "Bucharest",
				// },
				// {
				// 	id: "4",
				// 	title: "Manual Tester Intern",
				// 	subtitle: "Urzisoft SRL",
				// 	text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
				// 	date: "12:30 PM 30-05-2023 ",
				// 	candidates: "5",
				// 	location: "Bucharest",
				// },
			],
			categories: [
				// {
				// 	id: "1",
				// 	name: "Software Engineer",
				// 	jobs: "10",
				// },
				// {
				// 	id: "2",
				// 	name: "DevOps Engineer",
				// 	jobs: "9",
				// },
				// {
				// 	id: "3",
				// 	name: "QA Engineer",
				// 	jobs: "5",
				// },
				// {
				// 	id: "4",
				// 	name: "Manual Tester",
				// 	jobs: "2",
				// },
			],
		};
	},
});
</script>
