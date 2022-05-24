import data from "@/data";

const getItemById = (id) => new Promise((res, rej) => {
	const item = data.items.find(item => item.id == id);
	if (item) {
		res(item)
	} else {
		rej()
	}
})

export default {
	async loadQuizTable({ commit }) {
		const items = [];
		commit('updateItems', items)
		try {
			commit('updateItems', true)
			const data = await getItemById()
			commit('updateItems', data)
		} catch (e) {
			items.error = e;
		} finally {
			commit('updateItems', items)
		}
	}
}
