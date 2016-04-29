# browserify-conditionalify
Browserify conditional compilation

#### Note
This project is based on [skrat's jpp](https://www.npmjs.com/package/jpp)

## Installing

```bash
$ npm install browserify-conditionalify
```

## Usage

```js
browserify(
    transform: [[conditionalify, { definitions: { 'isEnabled': true } }]]
)
```

```js
#if isEnabled            
    console.log('product enabled');
#endif
```

or

```js
#if isEnabled            
    console.log('product enabled');
#else 
    console.log('product is disabled');
#endif
```

## License

MIT