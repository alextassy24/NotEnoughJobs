<template>
	<v-form v-model="valid" @submit.prevent="submitForm" class="max-w-md mx-auto">
		<v-container>
			<h1 class="text-center m-5 font-bold text-3xl">Login</h1>
			<v-row>
				<v-col cols="12">
					<v-text-field
						v-model="email"
						label="Email"
						outlined
						type="email"
						:rules="emailRules"
						required
					></v-text-field>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-text-field
						v-model="password"
						label="Password"
						outlined
						type="password"
						:rules="passwordRules"
						required
					></v-text-field>
				</v-col>
			</v-row>

			<p class="m-2">
				Don't have an account yet?
				<span class="text-blue-400">
					<router-link to="/register">Create one here!</router-link>
				</span>
			</p>

			<p class="m-2">
				Forgot password?
				<span class="text-blue-400">
					<router-link to="/forgot-password">Click here!</router-link>
				</span>
			</p>
			<v-row align="center">
				<v-col cols="12">
					<v-checkbox v-model="rememberMe" label="Remember me"></v-checkbox>
				</v-col>
			</v-row>

			<v-row justify="center">
				<v-col cols="12" sm="6">
					<v-btn class="bg-blue-400 font-bold" block @click="submitForm"> Login </v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			valid: false,
			email: "",
			password: "",
			rememberMe: false,
			emailRules: [
				(value) => {
					if (value) return true;

					return "Email is requred.";
				},
			],
			passwordRules: [
				(value) => {
					if (value) return true;

					return "Password is requred.";
				},
			],
		};
	},
	methods: {
		async submitForm() {
			const formData = {
				email: this.email,
				password: this.password,
			};
			axios
				.post("/api/login/", formData, { withCredentials: true })
				.then((response) => {
					axios
						.get("/api/user/", { withCredentials: true })
						.then((response) => {
							const user = response.data;
							this.$store.commit("setUser", user);
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
};
</script>
