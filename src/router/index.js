import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import JobsView from "../views/JobsView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";

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
		path: "/about",
		name: "about",
		component: AboutView,
	},
	{
		path: "/jobs",
		name: "jobs",
		component: JobsView,
	},
	{
		path: "/forgot-password",
		name: "forgot-password",
		component: ForgotPasswordView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
