import type { store } from "../../Hooks/Redux_Toolkit/Store/Store"


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
