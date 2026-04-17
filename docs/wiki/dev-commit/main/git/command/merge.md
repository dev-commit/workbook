Слияние веток

```bash
git mergedevelop# слияние "develop" в текущую ветку
git mergefeaturedevelop# замёржить в "feature" из "develop"
git merge --abort           # отменить merge (при наличии конфликтов merge)
git merge --continue        # продолжить merge (при наличии конфликтов merge, после фикса)
git merge --squashfeature# засквошить коммиты при merge
```
- При merge --squash не сработает merge --abort и merge --continue, т.к. не создается .git/MERGE_HEAD с идентификатором коммита с которым происходит слияние

---
- Разрешение конфликтов разницы "develop" и "feature"

```bash
git checkoutdevelop# перейти в develop, если в ней есть обновления
git pull              # обновить ветку develop
git checkoutfeature# перейти в feature
git mergedevelop# merge из develop в свою ветку. ветка feature станет актуальной
```
- Если появятся конфликты в файлах - поправить их

## Описание

- При merge происходит создание нового merge-коммита в "feature" ветке
- merge-коммит будет включать изменения в "develop" с момента откалывания "feature"

## Плюсы и минусы

- Merge не меняет историю: поверх всех коммитов, которые были в ветке, добавляется еще 1 коммит с изменениями из "develop". Если над "feature" веткой работают другие разработчики, то проблем не возникнет - над веткой могут работать много разработчиков
- Сложно проследить за ветками, как они обновлялись и т.д.
- Добавляется merge-коммит
