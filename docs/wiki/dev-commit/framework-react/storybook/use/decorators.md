# Декораторы

## Информация

- https://storybook.js.org/docs/writing-stories/decorators
- Для Storybook нужно подключить стили из приложения

## Пример

> stories/UiButton.stories.tsx

```tsx
import "app/globals.css";

const meta: Meta<typeof UiButton> = {
  title: "Ui-Kit/UiButton",
  component: UiButton,
  args: {},
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiButton>;
```
