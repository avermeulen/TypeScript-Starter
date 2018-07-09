# TypeScript Starter

A TypeScript starter project for NodeJS.

Created like this:

```

mkdir TypeScript-Starter
cd TypeScript-Starter/
tsc --init
ls
atom .
tsc --watch
clear
npm init --y
clear
npm install --save @types/node
touch .gitignore

```

# Setup mocha with TypeScript

To create mocha unit tests with TypeScript we use `ts-mocha`

You will need to install `mocha, ts-mocha and @types/mocha`

Do it in this order.


```
npm install --save-dev ts-mocha
npm install --save-dev mocha
npm install --save-dev @types/mocha
```

Add a `test` entry to the `package.json` with a value like this - replace the existing entry: 

`test : ./node_modules/.bin/ts-mocha test/*.ts`

Create a new test file in the `test` folder called `first-test.ts`

Copy and paste this code into it:

```typescript

import * as assert from 'assert';

describe('The first test', function(){
  
  it('should pass one test', function(){
    assert.equal('one', 'one');
  });
  
  it('should fail another', function(){
    assert.equal('one', 'two');
  });
  
});
```

Save the file.

Now run the test like this: `npm test` - one test should pass and one should fail.


## Set node version using nvm

You should use version 8.x - set it using `nvm`: `nvm alias default v8`
