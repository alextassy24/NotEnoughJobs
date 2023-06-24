<template>
	<v-container class="mt-5 bg-gray-200 mx-auto">
		<h1 class="text-center text-3xl font-bold mb-5">Contact Us</h1>
		<div class="flex flex-row items-start justify-evenly">
			<div class="w-50 mt-5 p-3 rounded-xl">
				<v-form @submit="submitForm" class="mx-auto w-75">
					<v-text-field v-model="name" label="Name" required></v-text-field>
					<v-text-field
						v-model="email"
						label="Email"
						type="email"
						required
					></v-text-field>
					<v-textarea v-model="message" label="Message" required></v-textarea>
					<v-btn type="submit" class="mx-auto mt-5 bg-blue-500 text-white w-50 block">
						Submit
					</v-btn>
				</v-form>
			</div>
			<div class="w-25 mt-5 p-3 rounded-xl">
				<div class="">
					<h2 class="text-center font-bold text-lg mb-4">Contact Information</h2>
					<p><strong>Phone:</strong> +1 (123) 456-7890</p>
					<p><strong>Email:</strong> info@example.com</p>
					<p><strong>Address:</strong> 123 Main St, City, Country</p>
				</div>
			</div>
		</div>
	</v-container>
</template>

<script>
export default {
	name: "ContactPage",
	data() {
		return {
			name: "",
			email: "",
			message: "",
		};
	},
	methods: {
		submitForm(event) {
			event.preventDefault();
			console.log("Form submitted!");
			console.log("Name:", this.name);
			console.log("Email:", this.email);
			console.log("Message:", this.message);
		},
	},
};
</script>
