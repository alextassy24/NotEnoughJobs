<template>
	<v-footer class="flex flex-col">
		<div class="bg-blue-400 flex w-100 align-center px-4">
			<strong>Get connected with us on social networks!</strong>

			<v-spacer></v-spacer>

			<a href="https://www.facebook.com">
				<v-btn class="mx-2" icon flat>
					<i class="fab fa-facebook"></i>
				</v-btn>
			</a>

			<a href="https://www.instagram.com">
				<v-btn class="mx-2" icon flat>
					<i class="fab fa-instagram"></i>
				</v-btn>
			</a>

			<a href="https://www.tiktok.com">
				<v-btn class="mx-2" icon flat>
					<i class="fab fa-tiktok"></i>
				</v-btn>
			</a>

			<a href="https://www.snapchat.com">
				<v-btn class="mx-2" icon flat>
					<i class="fab fa-snapchat"></i>
				</v-btn>
			</a>
		</div>

		<div class="px-4 py-2 bg-black text-center w-100">
			{{ new Date().getFullYear() }} — <strong>Not Enough Jobs</strong>
		</div>
	</v-footer>
</template>

<script>
export default {
	name: "Footer",
};
</script>
