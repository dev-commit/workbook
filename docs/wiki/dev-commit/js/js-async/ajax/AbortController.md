# AbortController

### Использование AbortController для отмены запроса

```jsx
const controller = new AbortController();

try {
  const response = await fetch("/api/users", { signal: controller.signal });
  const users = await response.json();
} catch (error) {
  if (error.name === "AbortError") return; // Запрос отменён — это не ошибка
  throw error;
}

// Отменяем, когда результат больше не нужен (unmount, новый запрос, таймаут)
controller.abort();
```
