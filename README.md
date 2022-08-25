# Hello chat

1. Единственный источник истины
2. Состояние только для чтения

store.age = 12

store.age

3. Изменения делаются чистыми функциями (store) reducer

Flux

Dispatch (Диспетчер)
Stores (Глобальное хранилище)
Views (React компоненты)
Action (Действие)

1. Action (Действие) - ОБЬЕКТ с типом и полезной нагрузкой

const action = { type: "INCREMENT" }
const action2 = { type: "DECREMENT", payload: "test" }

2. action creator (генератор действий)

const increment = () => {
return { type: "INCREMENT" }
}
const decrement = (p) => {
return { type: "DECREMENT", payload: p }
}

3. reducer (чистая функция) - место, где происходит обновление состояния

const reducer = (state = { count: 1 }, action) => {
switch(ç) {
case "INCREMENT":
return {...state, count: state.count + 1}
case "DECREMENT":
return {...state, count: state.count - action.payload}
default:
return state
}
}

Dispatch - функция, которая вызывает рдюсер

dispatch(increment({}))
increment()
dispatch(decrement(10))
