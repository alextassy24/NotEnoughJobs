<template>
	<v-form v-model="valid" class="max-w-md mx-auto">
		<v-container>
			<h1 class="text-center m-5 font-bold text-lg">Register</h1>
			<v-row>
				<v-col cols="12">
					<v-text-field
						v-model="email"
						label="Email"
						outlined
						type="email"
						required
					></v-text-field>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-text-field
						v-model="firstName"
						label="First Name"
						outlined
						type="text"
						required
					></v-text-field>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-text-field
						v-model="lastName"
						label="Last Name"
						outlined
						type="text"
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
						required
					></v-text-field>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-text-field
						v-model="confirmPassword"
						label="Confirm password"
						outlined
						type="password"
						required
					></v-text-field>
				</v-col>
			</v-row>

			<p class="m-2">
				Already have an account?
				<span class="text-blue-400">
					<router-link to="/login">Log in here!</router-link>
				</span>
			</p>

			<v-row align="center">
				<v-col cols="12">
					<v-checkbox
						v-model="agreeTerms"
						label="I have read and agree to the terms of service"
					></v-checkbox>
				</v-col>
			</v-row>

			<v-row justify="center">
				<v-col cols="12" sm="6">
					<v-btn class="bg-blue-400 font-bold" block @click="submitForm"> Submit </v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>
export default {
	data() {
		return {
			valid: false,
			fistName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			agreeTerms: "",
		};
	},
	methods: {
		submitForm() {
			// Submit form logic
		},
	},
};
</script>
