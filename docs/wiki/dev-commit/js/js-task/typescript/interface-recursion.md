# Рекурсия в интерфейсе

### Постановка задачи

- Напишите интерфейс для функции и интерфейс для CameraGroup
- Что из себя представляет структура данных CameraGroup?
- Напишите реализацию интерфейса CameraGroup

### Решение

```js
interface CameraGroup {
    id: number
    camera_groups: CameraGroup[]
}

const cameraGroupsReducer = (acc: number[], group: CameraGroup): number[] => {
    acc.push(group.id);

    if (group.camera_groups.length) {
        group.camera_groups.reduce(cameraGroupsReducer, acc);
    }

    return acc;
};
```
