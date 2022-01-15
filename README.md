# React Fast Refresh Example
### works for either webpack-dev-server or express.js (using webpack-dev-middletier)

### To start project using webpack-dev-server
```bash
npm run dev
```

### To start project using express.js server
```bash
npm start
```

## Issue

I couldn't get the react-refresh to work with class component.

Such component will reload but not 'hot' reload.

## More info

[react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)

[react/issues/16604](https://github.com/facebook/react/issues/16604#issuecomment-528663101)

[Using extended classes for props doesn't get picked up by react-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/258)