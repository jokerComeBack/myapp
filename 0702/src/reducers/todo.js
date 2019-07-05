const todo = (state = {listArray: [], value: ''}, action) => {
    switch (action.type) {
        case 'ADDTODO':
            const text = action.text
            if (text.trim() === '') return state
            return {
                listArray: [...state.listArray, {text, checked: false, index: action.index}],
                value: ''
            }
        case 'CHANGEVALUE':
            const value = action.value
            return {...state, value}
        case 'DODELETE':
            let newlistArray = state.listArray.slice()
            newlistArray.splice(action.index, 1)
            return {listArray: newlistArray}
        case 'CHANGECHECKED':
            let listArray = state.listArray.slice()
            let index = action.index
            listArray[index].checked = !listArray[index].checked
            listArray.push(listArray[index])
            listArray.splice(index, 1)
            return {listArray}
        default:
            return state
    }
}

export default todo
