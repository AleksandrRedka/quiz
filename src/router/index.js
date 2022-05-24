import Vue from "vue";
import VueRouter from "vue-router";
import TablePage from "@/views/QuizTable";
import Quiz from "@/views/Quiz";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		redirect: '/quiz-table',
	},
	{
		path:'/quiz-table',
		name: "Table",
		component: TablePage,
	},
	{
		path: '/quiz/:id',
		name: 'EditQuiz',
		component: Quiz,
	},
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;
