import { createStore } from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReduser } from './reduser';


const enhancer = devToolsEnhancer();
export const store = createStore(rootReduser,enhancer);