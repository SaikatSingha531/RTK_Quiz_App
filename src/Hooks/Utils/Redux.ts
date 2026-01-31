// import {
//   useDispatch,
//   useSelector,
//   type TypedUseSelectorHook,
// } from "react-redux";
// import type { Rootstate } from "../../Typescript/Types/Redux.type";

// export const useAppseletor: TypedUseSelectorHook<Rootstate> = useSelector;
// export const useAppdispatch = () => useDispatch();




import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { RootState, AppDispatch } from "../../Typescript/Types/Redux.type"

// ✅ Typed selector
export const useAppseletor: TypedUseSelectorHook<RootState> = useSelector;

// ✅ Typed dispatch (supports async thunk)
export const useAppdispatch = () => useDispatch<AppDispatch>();

