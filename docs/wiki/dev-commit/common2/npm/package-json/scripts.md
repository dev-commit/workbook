# Скрипты

```bash
{
	"scripts": {
		"hello": "echo \"hi\"",                                      # вывод в консоль
		"start": "node index.js",                                    # вызов js
		"server": "node ./node_modules/http-server/bin/http-server", # вызов npm-модуля http-server
		"server": "http-server",                                     # аналогично
		"webpack": "webpack -w"                                     # watcher
	}
}
```

```bash
node           # выполнение кода в консоли
node index.js  # выполнение файла index.js
npm start      # выполнение скрипта из package.json
npm server     # выполнение скрипта из package.json (аналогично)
npm run server # выполнение скрипта из package.json (аналогично)
```
