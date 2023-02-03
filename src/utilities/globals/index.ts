import { invariant, InvariantError } from "ts-invariant";

// Just in case the graphql package switches from process.env.NODE_ENV to
// __DEV__, make sure __DEV__ is polyfilled before importing graphql.
import DEV from "./DEV";
export { DEV };
export const __DEV__ = DEV;

// Import graphql/jsutils/instanceOf safely, working around its unchecked usage
// of process.env.NODE_ENV and https://github.com/graphql/graphql-js/pull/2894.
import { removeTemporaryGlobals } from "./fix-graphql";

// Synchronously undo the global process.env.NODE_ENV polyfill that we created
// temporarily while importing the offending graphql/jsutils/instanceOf module.
removeTemporaryGlobals();

export { maybe } from "./maybe";
export { default as global } from "./global";
export { invariant, InvariantError }
