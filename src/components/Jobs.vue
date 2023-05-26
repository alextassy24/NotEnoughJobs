<template>
	<div :key="job.id" v-for="job in jobs">
		<Job :job="job" />
	</div>
</template>

<script>
import Job from "./Job";

export default {
	name: "jobs",
	props: {
		jobs: Array,
	},
	components: {
		Job,
	},
};
</script>
