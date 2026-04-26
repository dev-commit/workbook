# Команды

## Сокращения

**NPM**

- `i` - `install`
- `r` - `uninstall`
- `up` - `update`
- `S` - `--save`
- `D` - `--save-dev`

**Terminal**

- `c` - `config`
- `ls` - `list`

## Команды

### Инициализация

```bash
npm init    # Инициализация проекта (создание package.json)
npm init -y # Инициализация проекта с параметрами по умолчанию
```

### Установка пакетов

```bash
npm i                        # Установить все пакеты из package.json
npm i PackageName            # Установить package (не должен добавляться в package.json)
npm i --save PackageName     # Установить package и добавить запись в секцию dependencies package.json
npm i --save-dev PackageName # Установить package и добавить запись в секцию devDependencies package.json
npm i --g PackageName        # Установить package глобально
```

### Обновление пакетов

```bash
npm up                     # Обновить все пакеты из package.json
npm up PackageName         # Обновить конктерный пакет package
npm i -g npm-check-updates # Проверка обновлений всех пакетов в package.json
```

### Удаление пакетов

```bash
npm r PackageName # Удалить package
```

### Проверка версий зависимостей

```bash
npm view PackageName          # Вывод списка версий пакета
npm view PackageName versions # Вывод текущей версии пакета
npm outdated                  # Вывод текущей и новой версии всех пакетов
```

### .npmrc

```bash
npm set registry http://myrepositiryurl # Установить registry в .npmrc
npm get registry                        # Получить registry из .npmrc
npm config ls -l                        # Содержимое файла .npmrc
```

### Очистка кэша

- `clean` - удаляет все данные из папки кеша

```bash
npm cache clean --force # Очистить кэш в npm
npm cache verify        # Проверить кэш
```

### `npm ci`

- Игнорирует _package.json_ пакета и устанавливает модули руководствуясь файлом _package-lock.json_
- Способ быстрый - в некоторых случаях, в два раза быстрее `npm i`. Он предоставляет значительное увеличение производительности для всех разработчиков, использующих CI

```bash
npm ci
```

### Прочее

```bash
npm i npm           # Обновление npm
npm -v              # Проверить версию npm
npm run PackageName # Запустить package
ncu                 # Проверить какие пакеты устарели
ncu -u              # Обновить версию в package.json
```
