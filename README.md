# gulp-relative-replace [![NPM version][npm-image]][npm-url] 
> Replace build placeholder to relative path.
 

### Table of Contents

- [Usage](#usage)
- [Example](#example)


## Usage
Install:
```shell
npm install --save-dev gulp-relative-replace
```


## API
### relativeReplace(options)


#### options
Type: `object`


- {String} **placeholder** - The placeholder you want to replace. Default: `@___RELATIVE_REPLACE_HOLDER__@`
- {String} **from** - The path relative from.
- {String} **to** - The path relative to.


###### Options example:
```javascript
relativeReplace({
  form : './build/'
})
```

## Example
index.html:

```html
<!DOCTYPE html>
<html>
    <head>
  
    <link rel="stylesheet" href="@___RELATIVE_REPLACE_HOLDER__@normalize.css">
    </head>
    <body>

    <img src="@___RELATIVE_REPLACE_HOLDER_2__@bg.jpg">

```

gulpfile.js:

```javascript
var gulp = require('gulp');
var relativeReplace = require('gulp-relative-replace');

gulp.task('default', function() {
  gulp.src('index.html')
    .pipe(relativeReplace({
      to './build/html/css' //build/html -> /build/html/css
    }))
    .pipe(relativeReplace({
      placeholder : '@___RELATIVE_REPLACE_HOLDER_2__@',
      from './build/imgs' // build/imgs -> build/html
    }))
    .pipe(gulp.dest('build/html'));
});
```



Result:

```html
<!DOCTYPE html>
<html>
    <head>

    <link rel="stylesheet" href="css/styles.min.css">

    </head>
    <body>
  
    <img src="../imgs/bg.jpg">
```

[npm-url]: https://npmjs.org/package/gulp-relative-replace
[npm-image]: http://img.shields.io/npm/v/gulp-relative-replace.svg
