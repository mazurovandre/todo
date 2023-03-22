import { ITodo } from "../types/types"

export const loadState = () => {
    try {
        const savedState = localStorage.getItem('state')
        if (savedState === null) return undefined

        return JSON.parse(savedState)
    } catch (error) {
        console.error(error)
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state))
    } catch (error) {
        console.error(error)
    }
}