import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import JobsView from "../views/JobsView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";
import ProfileView from "../views/ProfileView.vue";
import AddJobView from "../views/AddJobView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/login",
		name: "login",
		component: LoginView,
	},
	{
		path: "/register",
		name: "register",
		component: RegisterView,
	},
	{
		path: "/contact",
		name: "contact",
		component: ContactView,
	},
	{
		path: "/categories",
		name: "categories",
		component: CategoriesView,
	},
	{
		path: "/jobs",
		name: "jobs",
		component: JobsView,
	},
	{
		path: "/about",
		name: "about",
		component: AboutView,
	},
	{
		path: "/forgot-password",
		name: "forgot-password",
		component: ForgotPasswordView,
	},
	{
		path: "/profile",
		name: "profile",
		component: ProfileView,
	},
	{
		path: "/add-job",
		name: "add-job",
		component: AddJobView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
