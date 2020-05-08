## OpenMotics types
#### This package includes the OpenMotics environment types

### Adding them to your project

#### 1. Install using npm

Execute the following command:
```
npm i openmotics-types
```

#### 2. Include them in your TypeScript compiler 

Add this line to the 'include' section of your tsconfig of your project:
`"node_modules/openmotics-types/**/*"`

Your `tsconfig.json` structure should look like this after adding the line:
```
{
  ...
  "include": [
    "node_modules/openmotics-types/**/*",
    ...
  ],
  ...
}
```