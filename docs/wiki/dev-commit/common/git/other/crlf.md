# "LF" и "CRLF"

## Информация

::: warning

- При клонировании или смене ветки Git меняет файлы с "LF" на "CRLF"

:::

## Сравнение значений

::: info

- https://habr.com/ru/articles/703072/

:::

| «core.autocrlf» | Команды `add`, `commit` | База данных Git | Команда `checkout` |
| --------------- | ----------------------- | --------------- | ------------------ |
| **«true»**      | CRLF ➝ LF               | LF              | LF ➝ CRLF          |
| **«false»**     | Без конвертации         | CRLF и/или LF   | Без конвертации    |
| **«input»**     | CRLF ➝ LF               | LF              | Без конвертации    |

## Решение

### 1. Проверить конфиг

```bash
git config core.autocrlf
```

- Если значение отлично от _false_, то поменять

```bash
git config --global core.autocrlf false # Глобально
git config --local core.autocrlf false  # Для проекта
```

### 2. В проекте есть файл _.gitattributes_

```bash
# Auto detect text files and perform EOL normalization
* text=auto
```

- Файл _.gitattributes_ имеет более высокий приоритет, чем _core.autocrlf_
- http://git-scm.com/docs/gitattributes
