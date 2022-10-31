import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './Slices/CounterSlice'
import cartReducer from './Slices/CartSlice'
export const store=configureStore({reducer :{counterReducer,cartReducer}})