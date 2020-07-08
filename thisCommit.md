# THIS COMMIT
## CONTEXT API
Using  context api as a alternative to Redux in order to manage state and context in med to large applications.

   1. in project src folder :
   * create folder context:
     * in context folder:
       * create folder github:
       * in folder github:
         1. githubContext.js - initialize a new context
         2. GithubState.js - where all actions will go, like an action to fetch data.
         3. githubReducer.js - reducer -> a function that basically decides what is going to happent o your state based on an action.
     * in  context folder:
       * types.js - variables of strings to call to change the state within thne reducer.