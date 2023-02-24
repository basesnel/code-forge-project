export const save = (key, data) => {
	try {
		localStorage.setItem(key, JSON.stringify(data));
	} catch (error) {
		console.log('Error: ', error.message);
	}
}


export const load = (key) => {
	try {
		const data = localStorage.getItem(key);
		if (data === null || []) {
			return undefined;
		} else {
			return JSON.parse(data);
		}
	} catch (error) {
		console.log('Error: ', error.message);
	}
}