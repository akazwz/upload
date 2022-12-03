import { ChangeEvent, useRef } from 'react'

import { UploadFileApi } from './api'

const App = () => {
	const fileInputRef = useRef<HTMLInputElement>(null)
	const folderInputRef = useRef<HTMLInputElement>(null)

	const handleFileChange = async(event: ChangeEvent<HTMLInputElement>) => {
		const files = event.currentTarget!.files
		if (!files) return
		for (let i = 0; i < files.length; i++) {
			const file = files.item(i)
			if (!file) continue
			console.log(file.name)
			try {
				await UploadFileApi(await file.arrayBuffer(), file.name)
			} catch (e: any) {
				alert(`upload ${file.name} error, ${e.message}`)
			} finally {
				alert(`upload ${file.name} success`)
			}
		}
	}

	const handleFolderChange = async(event: ChangeEvent<HTMLInputElement>) => {
		const files = event.currentTarget!.files
		if (!files) return
		for (let i = 0; i < files.length; i++) {
			const file = files.item(i)
			if (!file) continue
			console.log(file.name, file.size, file.webkitRelativePath)
			try {
				await UploadFileApi(await file.arrayBuffer(), file.webkitRelativePath)
			} catch (e: any) {
				alert(`upload ${file.webkitRelativePath} error, ${e.message}`)
			} finally {
				alert(`upload ${file.webkitRelativePath} success`)
			}
		}
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				padding: '50px',
				gap: '30px'
			}}
		>
			<p>Home</p>
			<button
				style={{
					height: '50px'
				}}
				onClick={() => fileInputRef.current!.click()}
			>
				Upload File
			</button>

			<button
				style={{
					height: '50px'
				}}
				onClick={() => folderInputRef.current!.click()}
			>
				Upload Folder
			</button>
			<input
				type="file"
				multiple
				hidden
				ref={fileInputRef}
				onChange={handleFileChange}
			/>
			<input
				type="file"
				multiple
				directory=""
				webkitdirectory=""
				hidden
				ref={folderInputRef}
				onChange={handleFolderChange}
			/>
		</div>
	)
}

export default App
