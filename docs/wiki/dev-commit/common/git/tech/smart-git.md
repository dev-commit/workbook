# SmartGit

## Откат изменений кода

- delete - удаляет файл из локального репозитория, если не было commit
- discard - отказаться от последнего изменения файла, если не было commit
- log -> ветка commit -> пкм -> revert -> Revert & Commit - Откатить существующий commit
- log -> ветка commit -> пкм -> reset (у последнего запушенного файла) -> set the index... - Откат всех последних изменений и загрузка из удаленного git-репозиторя

## Работа с ветками

- Branches -> Local Branches -> пкм -> Add Branch -> Feature -> Add Branch
- Branches -> Feature -> двойной клик - Переход на ветку
- Branches -> Local Branches -> Feature (Выделить ветку в которую делаем слияние) -> Двойной клик
- Branches -> Local Branches -> Master -> пкм -> Merge -> Create Merge-Commit - Слияние веток Feature и Master
- Branches -> Local Branches -> пкм по ветке -> Delete - Удалить ветку
