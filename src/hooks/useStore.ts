import { useContext } from "react";

import { AppContext, type TContext } from "~/store";

const useStore = (): TContext => useContext(AppContext);

export { useStore };
