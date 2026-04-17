Создание слепка (snapshot) директории и зафиксировать изменения файлов. Сохранение изменений в локальном репозитории. Берёт все данные, добавленные в индекс с помощью git add, и сохраняет их слепок во внутренней базе данных, а затем сдвигает указатель текущей ветки на этот слепок

```bash
git commit                      #
git commit -a                   # добавление всех изменений в индекс без использования git add
git commit -m 'Message'         # передача сообщения коммита без запуска полноценного редактора
git commit -a -m 'Message'      # git add + git commit
git commit --amend              # откроется редактор для правки последнего коммита
git commit --amend -m 'Message' # перезапишется последний коммит
```

## Опции

- -m &lt;msg&gt; --message=&lt;msg&gt; - Use the given &lt;msg&gt; as the commit message. If multiple -m options are given, their values are concatenated as separate paragraphs. The -m option is mutually exclusive with -c, -C, and -F
