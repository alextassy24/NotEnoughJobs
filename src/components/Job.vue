<template>
	<v-card variant="tonal" class="ml-10 my-10 w-50 p-3 bg-gray-200 rounded-xl">
		<div class="flex justify-between">
			<v-card-title class="text-blue-500 font-bold">{{ job.name }}</v-card-title>
			<v-chip v-if="job.applications == 1" class="m-3 bg-zinc-950 text-white">
				{{ job.applications }} candidate
			</v-chip>
			<v-chip v-else class="m-3 bg-zinc-950 text-white">
				{{ job.applications }} candidates
			</v-chip>
		</div>
		<div class="flex items-center">
			<v-avatar class="ml-3 shadow-md" image="" size="60">
				<v-img :src="getProfilePhotoUrl(user?.profile_photo)"></v-img>
			</v-avatar>
			<p class="ml-5 text-base text-blue-500">{{ name }}</p>
		</div>
		<v-card-text class="text-base text-justify">
			<p class="mb-3 font-bold">Brief Description</p>
			{{ truncateDescription(job.description) }}
			<router-link class="text-blue-400" :to="`/jobs/${job.id}`">...View more</router-link>
		</v-card-text>
		<v-card-actions class="justify-between">
			<div class="ml-2">
				<p class="font-bold">
					<i class="fas fa-calendar-days"></i>

					Posted at
					<span class="text-blue-500">{{ calculateDate(job.date_posted) }},</span>
				</p>
				<p class="font-bold text-red-500">
					<i class="fas fa-map-location-dot"></i>
					{{ job.location }}
				</p>
			</div>
			<v-btn v-if="user && user.is_company !== true" class="bg-blue-400"> Apply </v-btn>
			<v-btn v-else-if="!user" class="bg-blue-400"
				><router-link to="/login"> Log in to apply</router-link></v-btn
			>
		</v-card-actions>
	</v-card>
</template>

<script>
import moment from "moment";
import { defineComponent } from "vue";
import { mapState } from "vuex";
import axios from "axios";
export default defineComponent({
	computed: {
		...mapState(["isAuthenticated", "user"]),
	},
	name: "Job",
	props: {
		job: Object,
	},
	data() {
		return {
			name: "",
		};
	},
	mounted() {
		axios
			.get(`/api/companies/${this.job.company}`)
			.then((response) => {
				this.companies = response.data;
				this.name = response.data.first_name;
			})
			.catch((error) => {
				console.error(error);
			});
	},
	methods: {
		calculateDate(date) {
			return moment(date).format("YYYY-MM-DD");
		},
		truncateDescription(description) {
			if (description.length > 175) {
				return description.substring(0, 175);
			}
			return description;
		},
		displayLink(description) {
			return description.length > 175;
		},
		getProfilePhotoUrl(photoData) {
			if (photoData) {
				return `data:image/jpeg;base64,${photoData}`;
			}
			return "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
		},
	},
});
</script>
