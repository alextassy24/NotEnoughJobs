<template v-slot:append>
	<v-app-bar scroll-behavior="collapse">
		<v-row class="justify-between bg-blue-200">
			<v-btn class="m-5 bg-blue-500">Not enough jobs</v-btn>

			<v-btn icon class="m-5">
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-row>
	</v-app-bar>
</template>

<script>
export default {
	name: "Navbar",
};
</script>
