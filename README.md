# tee-console
It is a wrapper of the Javascript console: with `tee-console.js` it is possible to add an additional function to **handle console messages**. It prints the message via the default console function and **it does something more** with the it.

## How to use
A complete and useful example is available in the [`index.html`](https://github.com/ncounter/tee-console/blob/master/index.html) page.

The following is the minimal code needed to see `tee-console.js` in action.
```html
<script type="text/javascript" src="tee-console.js"></script>

<script type="text/javascript">
  console.setMyConsoleAction((message) => { alert(message) });
  console.info('this is an info message');
</script>
```

The expected output of the `script` above is:
* a default `console.info` printed message in the browser console
* an `alert` message showing the same text of the console

## How it works
`tee-console.js` wraps default methods [`log`, `info`, `warn`, `debug`] of the Javascript console and re-triggers them transparentrly, but then, right after the original function call, it triggers a custom function.

The goal is to leave unchanged the original behavior in order to have events triggering the console as expected by default. The additional value is to be able to handle the console message as well, to have for instance the possibility to do a server logging via an Ajax POST.