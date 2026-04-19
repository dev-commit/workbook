# Настройка порядка импортов

- Информация не проверенная
- На проекте использовали только настройку для Prettier и этого было достаточно

- https://eslint.org/docs/rules/sort-imports
- https://github.com/import-js/eslint-plugin-import
- https://github.com/Tibfib/eslint-plugin-import-helpers/blob/master/docs/rules/order-imports.md
- Enforce a convention in module import order (order)
- eslint-plugin-import - плагин добавит в ваш проект проверки для всех ваших импортов и будет следить за тем, чтобы все импортируемые зависимости присутствовали в проекте, подключались в удобном для последующей работы порядке, и так далее

npm i --save-dev @typescript-eslint/eslint-plugin-tslint

```json
module.exports = {
    rules: {
        'import-helpers/order-imports': [
            2,
            {
                newlinesBetween: 'always',
                groups: ['/^react/', 'module'],
                alphabetize: {
                    order: 'asc',
                    ignoreCase: true,
                },
            },
        ],
    },
};
```
