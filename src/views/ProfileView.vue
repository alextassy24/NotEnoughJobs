<template>
	<div
		v-if="!isAuthenticated"
		class="bg-red-300 text-red-600 text-center mx-auto mt-10 p-5 w-25 rounded-xl"
	>
		You are not logged in!
	</div>
	<div v-else class="container mx-auto py-8">
		<div class="bg-white rounded-lg shadow-md">
			<div class="p-8">
				<div class="flex justify-between mb-5">
					<h1 class="text-3xl font-semibold mb-4">
						{{ user.first_name }} {{ user.last_name }}
					</h1>
					<v-btn class="bg-blue-400" @click="showEditForm = true" v-if="!showEditForm"
						>Edit profile</v-btn
					>
				</div>
				<div class="flex justify-start items-center mb-5">
					<img
						:src="getProfilePhotoUrl(user.profile_photo)"
						alt="Profile Picture"
						class="rounded-full h-16 w-16 mr-10"
					/>
					<table>
						<tr class="mb-3">
							<td v-if="user.is_company == true" class="font-bold text-start">
								Founded at
							</td>
							<td v-else class="font-bold text-start">Age</td>
							<td v-if="user.is_company == true" class="text-end">
								{{ user.date_of_birth }}
							</td>
							<td v-else class="text-end">
								{{ calculateAge(user.date_of_birth) }} years
							</td>
						</tr>
						<tr>
							<td class="font-bold text-start">Email</td>
							<td class="text-end">{{ user.email }}</td>
						</tr>
					</table>
				</div>
				<div class="mt-6">
					<h2 class="text-xl font-semibold mb-4">About</h2>
					<p>{{ user.description }}</p>
				</div>
			</div>
		</div>
		<EditProfile v-if="showEditForm" @profile-updated="handleProfileUpdated" />
	</div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import EditProfile from "../components/EditProfile.vue";

export default defineComponent({
	components: { EditProfile },
	computed: {
		...mapState(["isAuthenticated", "user"]),
	},

	data() {
		return {
			showEditForm: false,
		};
	},
	methods: {
		getProfilePhotoUrl(photoData) {
			if (photoData) {
				return `data:image/jpeg;base64,${photoData}`;
			}
			return "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
		},
		calculateAge(dateOfBirth) {
			const birthDate = new Date(dateOfBirth);
			const today = new Date();
			let age = today.getFullYear() - birthDate.getFullYear();
			const monthDifference = today.getMonth() - birthDate.getMonth();
			if (
				monthDifference < 0 ||
				(monthDifference === 0 && today.getDate() < birthDate.getDate())
			) {
				age--;
			}
			return age;
		},

		handleProfileUpdated() {
			this.showEditForm = false;
		},
	},
});
</script>

<style scoped>
.container {
	max-width: 600px;
}
</style>
