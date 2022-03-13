# React Elements

JS objects that describe
[elements](https://developer.mozilla.org/en-US/docs/Glossary/Element)
on the
[DOM tree](https://developer.mozilla.org/en-US/docs/Glossary/DOM).

React reads them to construct the DOM and keep it up to date.

## Example

```js
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
}
```

This object represents the following DOM node:

```html
<h1 class='greeting'>
  Hello, world!
</h1>
```

<br /><br />

---

[Prev - Home](../../README.md)
|
[Next - JSX](./jsx.md)
