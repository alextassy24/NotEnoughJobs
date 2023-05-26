<template>
	<form action="">
		<v-autocomplete
			prepend-icon="mdi-magnify"
			label="Search"
			:items="['Software Developer', 'DevOps Engineer', 'QA Engineer', 'Manual Tester']"
		></v-autocomplete>
	</form>
</template>

<script>
export default {
	name: "SearchBar",
};
</script>
