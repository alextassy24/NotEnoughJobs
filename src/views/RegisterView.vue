<template>
	<v-form v-model="valid" class="max-w-md mx-auto" @submit.prevent="submitForm">
		<v-container>
			<h1 class="text-center m-5 font-bold text-3xl">Register</h1>

			<v-row align="center">
				<v-col cols="12">
					<p class="m-2">Are you an employee or an employer?</p>
					<v-radio-group v-model="selectedRole" inline class="flex justify-evenly">
						<v-radio color="info" label="Employee" value="Employee"></v-radio>
						<v-radio color="info" label="Employer" value="Employer"></v-radio>
					</v-radio-group>
				</v-col>
			</v-row>

			<v-row v-if="selectedRole === 'Employee'">
				<v-col cols="12">
					<v-text-field
						v-model="firstName"
						label="First Name"
						name="firstName"
						outlined
						type="text"
						required
					></v-text-field>
				</v-col>
			</v-row>

			<v-row v-if="selectedRole === 'Employee'">
				<v-col cols="12">
					<v-text-field
						v-model="lastName"
						label="Last Name"
						name="lastName"
						outlined
						type="text"
						required
					></v-text-field>
				</v-col>
			</v-row>

			<v-row v-if="selectedRole === 'Employee'">
				<v-col cols="12">
					<v-text-field
						v-model="dateOfBirth"
						label="Date of Birth"
						name="dateOfBirth"
						outlined
						type="date"
						required
					></v-text-field>
				</v-col>
			</v-row>

			<v-row v-if="selectedRole === 'Employer'">
				<v-col cols="12">
					<v-text-field
						v-model="companyName"
						label="Company Name"
						name="companyName"
						outlined
						type="text"
						required
					></v-text-field>
				</v-col>
			</v-row>

			<v-row v-if="selectedRole === 'Employer'">
				<v-col cols="12">
					<v-text-field
						v-model="foundedDate"
						label="Founded Date"
						name="foundedDate"
						outlined
						type="date"
						required
					></v-text-field>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-text-field
						v-model="email"
						label="Email"
						name="email"
						outlined
						type="email"
						required
					></v-text-field>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-text-field
						v-model="password"
						label="Password"
						name="password"
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
						name="confirmPassword"
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
import axios from "axios";
import moment from "moment";

export default {
	data() {
		return {
			valid: false,
			selectedRole: "Employee",
			firstName: "",
			lastName: "",
			companyName: "",
			email: "",
			foundedDate: "",
			dateOfBirth: "",
			password: "",
			confirmPassword: "",
			agreeTerms: "",
		};
	},
	methods: {
		async submitForm() {
			let formattedDateOfBirth =
				this.dateOfBirth != "" && this.foundedDate == ""
					? this.dateOfBirth
					: this.foundedDate;
			let form_first_name =
				this.firstName != "" && this.companyName == "" ? this.firstName : this.companyName;
			if (this.dateOfBirth) {
				formattedDateOfBirth = moment(this.dateOfBirth).format("YYYY-MM-DD");
			}
			const formData = {
				first_name: form_first_name,
				last_name: this.lastName,
				email: this.email,
				date_of_birth: formattedDateOfBirth,
				password: this.password,
				is_company: this.selectedRole == "Employer" ? 1 : 0,
			};
			console.log(formData);
			axios
				.post("/api/register/", formData)
				.then((response) => {
					this.$router.push("/login");
					console.log(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
};
</script>
