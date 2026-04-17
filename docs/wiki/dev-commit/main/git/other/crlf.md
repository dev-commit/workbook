# "LF" и "CRLF"

При клонировании или смене ветки, Git меняет файлы с "LF" на "CRLF"

## Сравнение значений

::: info
https://habr.com/ru/articles/703072/
:::

| «core.autocrlf» | Команды add commit | База данных Git | Команда checkout |
| --- | --- | --- | --- |
| «true» | CRLF ➝ LF | LF | LF ➝ CRLF |
| «false» | Без конвертации | CRLF и/или LF | Без конвертации |
| «input» | CRLF ➝ LF | LF | Без конвертации |

## Решение

### 1. Проверить конфиг

```bash
git config core.autocrlf
```
- Если значение отличное от false, то поменять

```bash
git config --global core.autocrlf false # глобально
git config --local core.autocrlf true   # для проекта
```

### 2. В проекте есть файл.gitattributes

```bash
# Auto detect text files and perform EOL normalization
* text=auto
```
- Файл .gitattributes имеет более высокий приоритет, чем core.autocrlf
- http://git-scm.com/docs/gitattributes
