# electron-quick

Quickly load a script in an [electron](https://electron.atom.io/) window!

```bash
$ npm install -g electron-quick
$ echo "document.body.innerHTML = 'Hello from Electron!'" > script.js
$ electron-quick script.js
```

The argument can also be an html file, like so:

```bash
$ electron-quick index.html
```

![screenshot](screenshot.png)

## Arguments

- `--dev` Open devtools

## License

MIT
