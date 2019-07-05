import dva from 'dva';
import './index.css';
import mytodo from './models/mytodo'
import createHistory from 'history/createBrowserHistory'
import router from './router'

// 1. Initialize
const app = dva({
    initialState: {
        todoList: {listArray: [], value: ''}
    },
    history: createHistory()
})

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/mytodo').default);
app.model(mytodo)

// 4. Router
app.router(router)
// app.router(require('./router').default);

// 5. Start
app.start('#root');
