# `git restore`

## Информация

::: danger

**`git restore`** - откатить изменения

:::

## Использование

```bash
# Откатить изменения в файле на момент последнего коммита (или последнего добавления в Индекс)
git restore FileName
# Аналогично с checkout
git checkout FileName

# Убрать файл из Индекса после добавления (отменить git add), изменения в файле сохранятся
git restore --staged FileName
```
