# React + Vite

npm i -D jest
npm i -D @babel/preset-env
npm i -D @babel/preset-react

we create 1 component babel.config.json

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

We need to teach our jest to handle jsx that will happen with babel but 2 new problems come out there vite does not have webpack and we cant handle svg files

we build folder test inside we make fileMock.js

````js
export default {
    __esModule: true,
    default: 'test-file-stub'
}
```



so we build another **jest.config.json** and we point all those mock files to the real ones
we can expand file conventions with our project needs.
```json
{
    "moduleNameMapper":{
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/test/fileMock.js",
        "\\.(css|less)$": "<rootDir>/src/test/fileMock.js"
    }
}
````

better way to handle our css files is when we install **npm i -D identity-obj-proxy** and we change our jest.config.json

```json
{
  "moduleNameMapper": {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/test/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  }
}
```

to test react components jest cant understand dom elements so we need to install **npm i -D @testing-library/react**!

after this if we try to use this package we import render and we render component we will get fail test because jest wont know what is react so we want to config our babel file to understand react to expand it we make the string array of presets

```json
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

and we get another test fail because jest don't know document object we need to add new library **npm i -D jest-environment-jsdom** so we have to change now our jest config:

```json
{
  "testEnvironment": "jest-environment-jsdom",
  "moduleNameMapper": {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/test/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  }
}
```

we need another library to handle our react components and thats **npm i -D @testing-library/jest-dom**
to use it we have to import **import '@testing-library/jest-dom'** in every file which mean we can configure our jest config to import it
first we make in our test structure folder **setupTests.js** and we add **import '@testing-library/jest-dom'** there we can also expand it depends on our needs
and in our jest config file we add **setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.js']**
```json
{
    "setupFilesAfterEnv": [
        "<rootDir>/src/test/setupTests.js"
    ],
    "testEnvironment": "jest-environment-jsdom",
    "moduleNameMapper":{
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/test/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy" 
    }
}
```

## info:

testing-library: [link][`https://testing-library.com/docs/`]
jest for react: [link][`https://jestjs.io/docs/tutorial-react`]