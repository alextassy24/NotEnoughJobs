<template>
	<div class="py-5 flex justify-between items-center w-50">
		<h1 class="m-10 font-bold text-3xl">Available Jobs</h1>
		<div class="w-1/4">
			<!-- Set width to 25% -->
			<SearchBar />
		</div>
	</div>

	<Jobs :jobs="jobs" />
</template>

<script>
import Jobs from "../components/Jobs";
import SearchBar from "../components/SearchBar";

export default {
	name: "Home",
	components: {
		Jobs,
		SearchBar,
	},
	data() {
		return {
			jobs: [
				{
					id: "1",
					title: "Software Developer Intern",
					subtitle: "Urzisoft SRL",
					text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
					date: "12:30 PM 30-05-2023 ",
					candidates: "5",
					location: "Bucharest",
				},
				{
					id: "2",
					title: "DevOps Engineer Intern",
					subtitle: "Urzisoft SRL",
					text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
					date: "12:30 PM 30-05-2023 ",
					candidates: "5",
					location: "Bucharest",
				},
				{
					id: "3",
					title: "QA Engineer Intern",
					subtitle: "Urzisoft SRL",
					text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
					date: "12:30 PM 30-05-2023 ",
					candidates: "5",
					location: "Bucharest",
				},
				{
					id: "4",
					title: "Manual Tester Intern",
					subtitle: "Urzisoft SRL",
					text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
					date: "12:30 PM 30-05-2023 ",
					candidates: "5",
					location: "Bucharest",
				},
			],
			categories: [
				{
					id: "1",
					type: "Software Engineer",
					count: "10",
				},
				{
					id: "2",
					type: "DevOps Engineer",
					count: "9",
				},
				{
					id: "3",
					type: "QA Engineer",
					count: "5",
				},
				{
					id: "3",
					type: "Manual Tester",
					count: "2",
				},
			],
		};
	},
};
</script>
