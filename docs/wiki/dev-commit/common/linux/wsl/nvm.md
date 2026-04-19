# Установка NVM

## Установка NVM

::: info
https://github.com/nvm-sh/nvm
:::

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh
```
- Скопировать последние 3 строчки после установки и выполнить

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## Команды

```bash
nvm -v               # Проверить версию NVM
nvm ls               # Проверка (?)
nvm --help           # Справка
nvm ls-remote        # Список версий Node.js
nvm install v14.17.1 # Установить последнюю версию из списка
node -v              # Проверить версию Node.js
npm -v               # Проверить версию NPM
npm run lint         # Запустить линтер
```
