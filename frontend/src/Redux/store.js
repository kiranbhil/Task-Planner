import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { sprintReducer } from "./Sprint/sprint.reducer";
import { taskReducer } from "./Task/task.reducer";
import { userReducer } from "./User/user.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    sprint: sprintReducer,
    task: taskReducer
});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
);
