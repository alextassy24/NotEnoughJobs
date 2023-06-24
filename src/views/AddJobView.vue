<template>
	<div class="w-25 mx-auto py-8">
		<div class="bg-white rounded-lg shadow-md">
			<div class="p-8">
				<h1 class="text-3xl font-semibold mb-10 text-center">Add a job</h1>
				<v-form @submit.prevent="saveJob" v-model="valid" class="max-w-md mx-auto">
					<v-row>
						<v-text-field v-model="name" label="Name" required></v-text-field>
					</v-row>
					<v-row>
						<v-textarea v-model="description" label="Description" rows="4"></v-textarea>
					</v-row>
					<v-row>
						<v-text-field v-model="location" label="Location" required></v-text-field>
					</v-row>
					<v-row>
						<v-select
							clearable
							label="Category"
							v-model="category"
							:items="categories"
						></v-select>
					</v-row>
					<v-row>
						<v-btn type="submit" class="w-100" color="primary">Save</v-btn>
					</v-row>
				</v-form>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import axios from "axios";

export default defineComponent({
	computed: {
		...mapState(["isAuthenticated", "user"]),

		userProfile: {
			get() {
				return {
					user: this.user,
				};
			},
		},
	},
	data() {
		return {
			valid: false,
			category: "",
			categories: [],
			name: "",
			description: "",
			category: null,
			location: "",
		};
	},
	mounted() {
		axios
			.get("/api/categories/")
			.then((response) => {
				this.categories = response.data.map((category) => category.name);
			})
			.catch((error) => {
				console.error(error);
			});
	},
	methods: {
		async saveJob() {
			const selectedCategoryKey = Object.keys(this.categories).find(
				(key) => this.categories[key] === this.category
			);
			const payload = {
				name: this.name,
				category: selectedCategoryKey,
				description: this.description,
				location: this.location,
				company: this.userProfile.user.id,
			};

			console.log(payload);
			axios
				.post(`/api/jobs/`, payload)
				.then((response) => {
					console.log(response.data.category);

					const categoryPayload = {
						jobs_number: response.data.category.jobs_number + 1,
					};

					axios
						.put(`/api/categories/${response.data.category}/`, categoryPayload)
						.then(() => {
							this.$router.push("/");
						})
						.catch((error) => {
							console.error(error);
						});
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
});
</script>
