
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { RootState, AppDispatch } from "../../Typescript/Types/Redux.type"

export const useAppseletor: TypedUseSelectorHook<RootState> = useSelector;

export const useAppdispatch = () => useDispatch<AppDispatch>();

