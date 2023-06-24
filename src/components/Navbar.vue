<template v-slot:append>
	<v-app-bar>
		<v-row class="flex justify-between items-center bg-blue-400">
			<router-link to="/" class="m-5 mt-7 ml-8">
				<div class="font-bold text-xl">Not enough jobs</div>
				<div>Stop wasting time</div>
			</router-link>
			<div class="mt-5 gap-5 pb-5">
				<router-link
					v-if="isAuthenticated && user.is_company == true"
					to="/add-job"
					class="mx-3 font-bold"
				>
					Add job
				</router-link>
				<router-link v-if="isAuthenticated" to="/profile" class="mx-3 font-bold">
					Profile
				</router-link>
				<router-link to="/about" class="mx-3 font-bold"> About</router-link>
				<router-link to="/contact" class="mx-3 font-bold"> Contact </router-link>
				<router-link
					v-if="!isAuthenticated"
					to="/login"
					class="mx-3 mr-10 p-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-bold"
				>
					Login
				</router-link>
				<router-link
					v-else
					to="/login"
					@click="logout"
					class="mx-3 mr-10 p-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-bold"
				>
					Logout
				</router-link>
			</div>
		</v-row>
	</v-app-bar>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
	name: "Navbar",
	computed: {
		...mapState(["isAuthenticated", "user"]),
	},
	methods: {
		logout() {
			axios
				.post("/api/logout/", { withCredentials: true })
				.then((response) => {
					this.$store.commit("removeUser");
					this.$store.dispatch("setAuthenticated", false);
					this.$router.push("/login");
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
});
</script>
