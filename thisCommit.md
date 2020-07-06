# this Commit

## register github OAuth App

[go here](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)  
or.. click profile pic -> Settings -> Developer Settings ->  
--> OAuth Apps -> New OAuth App

This give you a **client Id** and a **client secret** which we will pult .env.local file at root of project.

Now we will user these api access secrets to make the api call

```jsx
const res = await axios.get(
	`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client)secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
);
```
