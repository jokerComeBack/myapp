export const addTodo = (text, value = '') => ({
    type: 'ADDTODO',
    text
})

export const changeChecked = (index) => ({
    type: 'CHANGECHECKED',
    index
})

export const doDelete = (index) => ({
    type: 'DODELETE',
    index
})

export const changeValue = (value) => ({
    type: 'CHANGEVALUE',
    value
})
