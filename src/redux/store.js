import modules from "./reducers/modules";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: { modules },
});
