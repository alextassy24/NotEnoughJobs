<template>
	<div class="container mx-auto py-8">
		<div class="bg-white rounded-lg shadow-md">
			<div class="p-8">
				<h1 class="text-3xl font-semibold mb-4">Edit Profile</h1>
				<form @submit.prevent="saveProfile">
					<v-row>
						<v-col cols="12" sm="6">
							<v-text-field
								v-model="editedProfile.email"
								label="Email"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12" sm="6">
							<v-text-field
								v-model="editedProfile.dateOfBirth"
								label="Date of Birth"
								name="dateOfBirth"
								outlined
								type="date"
								required
							></v-text-field>
						</v-col>
					</v-row>
					<v-textarea
						v-model="editedProfile.description"
						label="Description"
						rows="4"
					></v-textarea>
					<input
						type="file"
						ref="profilePhoto"
						style="display: none"
						accept="image/jpeg, image/png"
						@change="handleProfilePhotoChange"
					/>
					<div class="flex justify-between">
						<v-btn color="primary" @click="() => $refs.profilePhoto.click()">
							Change Profile Photo
						</v-btn>
						<v-btn type="submit" color="primary">Save</v-btn>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import axios from "axios";

export default defineComponent({
	name: "EditProfile",
	computed: {
		...mapState(["user"]),
		editedProfile: {
			get() {
				return {
					id: this.user.id,
					email: this.user.email,
					dateOfBirth: this.user.date_of_birth,
					description: this.user.description,
				};
			},
			set(newProfile) {
				this.$store.commit("updateUserProfile", newProfile);
			},
		},
	},
	data() {
		return {
			selectedProfilePhoto: null,
		};
	},
	methods: {
		saveProfile() {
			const payload = {
				email: this.editedProfile.email,
				dateOfBirth: this.editedProfile.date_of_birth,
				description: this.editedProfile.description,
				profile_photo: this.editedProfile.profile_photo,
			};
			axios
				.put(`/api/edit-profile/${this.user.id}/`, payload)
				.then((response) => {
					console.log(response.data);
					this.$router.push("/profile");
				})
				.catch((error) => {
					console.error(error);
				});
		},
		handleProfilePhotoChange(event) {
			const file = event.target.files[0];
			this.selectedProfilePhoto = file;
		},
	},
});
</script>

<style scoped>
.container {
	max-width: 600px;
}
</style>
