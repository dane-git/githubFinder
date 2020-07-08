# this Commit

## Hooks

Functions that hook into react state and lifecycle features from a function component  
To bring in a hook, just import them  
`Import { useState, useEffect } from 'react'`

1. useState
2. useEffect -> mimic lifecycle
3. useContext - easy to bring in context
4. useReducer - create redux like reducer -> function that can dispatch actions to to maniplulate app level state and then it sends that state down to the components that need it
5. useRef - easier to deal with form submission.

### Implementing context

`const githubContext = useContext(GithubContext);`  
`githubContext.users`


## REFACTORING 

### Search
