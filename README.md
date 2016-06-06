# Demonstration of React Hot Loader problem

```
npm install
npm start
```

If you run this and then change something in `Page.js`, it will not reload. Rather, it will give a 

```
[HMR] The following modules couldn't be hot updated: (Full reload needed)
This is usually because the modules which have changed (and their parents) do not know how
to hot reload themselves.
See http://webpack.github.io/docs/hot-module-replacement-with-webpack.html for more details.
```

error in the console.