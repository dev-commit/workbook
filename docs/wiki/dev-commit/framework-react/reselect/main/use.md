# Использование

**Код**

```js
import { createSelector } from "reselect";

const getUsers = (state) => {
  return state.users;
};

// getUsers - селектор, чтобы получить значения
// users - придут полученнные значения из getUsers

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => true);
});
```

```js
const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
  };
};
```

**Псевдокод**

```js
const mySelector = createSelector(
  первыйСелектор,
  второйСелектор,
  (значениеПервогоСелектора, значениеВторогоСелектора) => {
    //
  },
);
```
