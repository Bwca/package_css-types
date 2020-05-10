# Css Types

## What is this package for

The package provides a convenient way to create a typescript enum for css classes in `*.css` and `*.scss` files for later use in typescript or javascript files. It does not require a bundler and can be used on directories or separate files.

## Usage

Install it from npm using your preferred package manager, i.e.:

```
npm install css-types --save-dev
```

Create a custom script in your package.json file:

```
"scripts": {
    "css-types": "css-types"
}
```

Then run it:

```
npm run css-types
```

By default `css-types` looks for the `src` directory and walks it, creating typescript enums for every `*.css` and `*.scss` file it finds. To set a different directory for crawling simply pass its relative path:

```
npm run css-types -- src/css
```

## What does it do

It creates a typescript a `*.style.ts` file containing enum with all style classes found in the stylesheet file as enum values `*.css` and `*.scss` file will receive.

For example, provided you have a stylesheet `main.scss` with the following contents:

```
// Hypothetical main.css file.
.content {
  color: pink;
  .ads {
    background: red;
  }
}
```

Performing `css-types` command will create `main.style.ts` file with the following enum:

```
export enum Main {
  Content = 'content',
  Ads = 'ads',
}
```

Now it can be used in `ts`:

```
import { Main } from './css/main.style';

document.getElementById('some-element-id').classList.add(Main.Content);
```

No need to worry about accidental renaming of css class that is used somewhere - as soon as types are updated and enum keys change, it will trigger an error if non-existant css classes are in use somewhere.

## Plans for future

- add --watch flag for auto-updates of typings;
- add enumeration for IDs;
- add support for LESS.
