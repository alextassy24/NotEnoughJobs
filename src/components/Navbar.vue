<template v-slot:append>
	<v-app-bar>
		<v-row class="flex justify-between bg-blue-400">
			<router-link to="/">
				<v-btn class="m-5 font-bold" variant="text">Not enough jobs </v-btn>
			</router-link>
			<div>
				<router-link to="/about">
					<v-btn class="mt-5 font-bold"> About </v-btn>
				</router-link>
				<router-link to="/contact">
					<v-btn class="mt-5 font-bold"> Contact </v-btn>
				</router-link>

				<router-link to="/login">
					<v-btn class="mt-5 mr-5 bg-white font-bold"> Login </v-btn>
				</router-link>
			</div>
		</v-row>
	</v-app-bar>
</template>

<script>
export default {
	name: "Navbar",
};
</script>
