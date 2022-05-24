import data from "@/data";

export const getItemById = (id) => new Promise((res, rej) => {
	const item = data.items.find(item => item.id === id);
	if (item) {
		res(item)
	} else {
		rej()
	}
})
