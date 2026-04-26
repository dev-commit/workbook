# Node Version Manager

::: tip NVM

- **Node Version Manager (NVM)** - скрипт bash, который упрощает управление несколькими версиями Node.js

:::

## Алгоритм

### 1. Выполнение скрипта

- https://github.com/nvm-sh/nvm

```bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh
```

### 2. Установка программы для Windows

- https://github.com/coreybutler/nvm-windows

### 3. Установка Node.js

```bash
nvm install node  # Установить текущую версию
nvm install --lts # Установить текущую стабильную версию
nvm install 10    # Установить конкретную версию
nvm use 10        # Переключиться на конкретную версию
```
