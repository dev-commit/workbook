# VSCode default editor for Git

## Задача

- При выполнении команд `git rebase -i` и прочих, открываются файлы для редактирования
- По-умолчанию - это редактор Vim в Терминале, но можно изменить на то чтобы файлы открывались в VSCode

## Windows .gitconfig

> C:\Users\Anton\.gitconfig

```bash
[core]
	editor = \"C:\\Users\\Anton\\AppData\\Local\\Programs\\Microsoft VS Code\\bin\\code\" --wait
```

## WSL (Linux)

- Для Linux нельзя указать такой же пусть как для Windows
- Нужно получить путь для VSCode в WSL, для этого нужно открыть Терминал в WSL и выполнить команду
- https://qna.habr.com/q/654966

```bash
# Выдаст пусть к VSCode для WSL
which code
```

- После этого перейти в .gitconfig на WSL и добавить путь

## WSL (Linux) .gitconfig

> \\wsl.localhost\Ubuntu\home\anton\.gitconfig

```js
[core]
	editor = "/home/anton/.vscode-server/bin/863d2581ecda6849923a2118d93a088b0745d9d6/bin/remote-cli/code" --wait
```
