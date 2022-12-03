import { HTMLAttributes } from 'react'

declare module 'react'{
	interface InputHTMLAttributes<T> extends HTMLAttributes<T>{
		directory?: string
		webkitdirectory?: string
	}
}