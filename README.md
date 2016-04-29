# conditionalify
browserify-conditionalify
#### Note
This project is based on [skrat's jpp](https://www.npmjs.com/package/jpp)

## Installing

```bash
$ npm install browserify-conditionalify
```

## Usage

```js
var conditionalify = require('browserify-conditionalify');
```

```js
browserify(
    transform: [[conditionalify, { definitions: { 'isEnabled': true } }]]
)
```

## Example

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