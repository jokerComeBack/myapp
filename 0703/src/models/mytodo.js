function GetRequest() {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = {};
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

const params = GetRequest()
const name = params && params.name

export default {
    namespace: 'todoList',
    state: {listArray: [], value: ''},
    reducers: { //传递state与actions
        doAdd(state, action) {
            const text = action.text
            if (text.trim() === '') return state
            return {
                listArray: [...state.listArray, {text, checked: false, index: action.index}],
                value: ''
            }
        },
        changeValue(state, action) {
            const value = action.value
            return {...state, value}
        },
        doDelete(state, action) {
            let newlistArray = state.listArray.slice()
            newlistArray.splice(action.index, 1)
            return {listArray: newlistArray}
        },
        changeChecked(state, action) {
            let listArray = state.listArray.slice()
            let index = action.index
            listArray[index].checked = !listArray[index].checked
            listArray.push(listArray[index])
            listArray.splice(index, 1)
            return {listArray}
        },
        getLocalData(state, action) {
            const listArray = action.listArray
            return {listArray}
        }
    },
    effects: {
        * getData({name}, {put}) {
            const listArray = name && JSON.parse(localStorage.getItem(name)) || ''
            yield listArray && put({type: 'getLocalData', listArray})
        },
        * saveData({listArray}) {
            listArray = JSON.stringify(listArray)
            if (name) {
                yield localStorage.setItem(name, listArray)
                yield alert('保存成功')
            } else {
                alert('跳转去登录')
            }
        }
    },
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({pathname}) => {
                if (pathname === '/products') {
                    dispatch({type: 'getData', name});
                }
            });
        },
    }
}

