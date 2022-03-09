let task = '';
export const addTask = () => {
    return {
        type: "ADD_TASK",
        id: Date.now()
    }
}