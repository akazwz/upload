const BASE_API = 'http://localhost:8080'

export const UploadFileApi = async(body: ArrayBuffer, key: string) => {
	return fetch(`${BASE_API}/files/upload?key=${key}`, {
		body,
		method: 'PUT'
	})
}

