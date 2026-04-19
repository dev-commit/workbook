# Виды зависимостей

- **devDependencies** - пакеты, которые нужны для разработки
- **dependencies** - пакеты, от которых проект зависит непосредственно (библиотеки)
- devDependencies и dependencies - устанавливаются в node_modules
- При вызове npm install, npm установит пакеты указанные в dependencies, но не в devDependencies
- Если сделать npm install внутри папки, в которой есть package.json, то установятся и те, и другие
