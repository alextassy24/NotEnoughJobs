<template>
	<v-card variant="tonal" class="ml-10 my-10 w-50 bg-gray-200">
		<div class="flex justify-between">
			<v-card-title class="text-blue-500">{{ job.title }}</v-card-title>
			<v-chip class="m-3 bg-green-500"> {{ job.candidates }} candidates </v-chip>
		</div>
		<div class="flex items-center">
			<v-avatar class="ml-3" color="surface-variant" image="" size="60"></v-avatar>
			<v-card-subtitle class="text-base">{{ job.subtitle }}</v-card-subtitle>
		</div>
		<v-card-text class="text-base text-justify">{{ job.text }}</v-card-text>
		<v-card-actions class="justify-between">
			<div class="ml-2">
				<p>
					Posted at <span class="text-cyan-500">{{ job.date }}</span>
				</p>
				<p>
					{{ job.location }}
				</p>
			</div>
			<router-link to="/jobs/{{ job.id }}">
				<v-btn class="m-3 bg-blue-400">View more</v-btn>
			</router-link>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "Job",
	props: {
		job: Object,
	},
};
</script>
