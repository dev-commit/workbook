# Команды

## Команды

### Инициализация

```bash
npm init     # инициализация проекта (создание package.json)
npm init -y  # инициализация проекта с параметрами по умолчанию
```

### Установка пакетов

```bash
npm i                          # установить все пакеты из package.json
npm iPackageName# установить package (не должен добавляться в package.json)
npm i --savePackageName# установить package и добавить запись в секцию dependencies package.json
npm i --save-devPackageName# установить package и добавить запись в секцию devDependencies package.json
npm i --gPackageName# установить package глобально
```

### Обновление пакетов

```bash
npm up                      # обновить все пакеты из package.json
npm upPackageName# обновить конктерный пакет package
npm i -g npm-check-updates  # проверка обновлений всех пакетов в package.json
```

### Удаление пакетов

```bash
npm rPackageName# удалить package
```

### Проверка версий зависимостей

```bash
npm viewPackageName# вывод списка версий пакета
npm viewPackageNameversions  # вывод текущей версии пакета
npm outdated                   # вывод текущей и новой версии всех пакетов
```

### .npmrc

```bash
npm set registry http://myrepositiryurl   # установить registry в .npmrc
npm get registry                          # получить registry из .npmrc
npm config ls -l                          # содержимое файла .npmrc
```

### Очистка кэша

- clean - удаляет все данные из папки кеша

```bash
npm cache clean --force # очистить кэш в npm
npm cache verify        # проверить кэш
```

### Прочее

```bash
npm i npm            # обновление npm
npm -v               # проверить версию npm
npm runPackageName# запустить package
ncu                  # проверить какие пакеты устарели
ncu -u               # обновить версию в package.json
```

## Сокращения

```bash
install     |  i
uninstall   |  r
update      |  up
--save      |  S
--save-dev  |  D
```

```bash
config      | c
list        | ls
```
