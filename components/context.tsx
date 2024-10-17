import { createContext, RefObject } from 'react'

export const Context = createContext<RefObject<HTMLDivElement>>({ current: null })