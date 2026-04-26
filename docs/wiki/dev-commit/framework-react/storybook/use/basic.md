# Базовый пример

## Пример

> stories/UiButton.tsx

```tsx
import MUIButton from "@mui/material/Button";

interface IProps {
  children: React.ReactNode;
  variant: "text" | "outlined" | "contained";
  disabled?: boolean;
  onClick: (event: React.SyntheticEvent) => void | null;
}

const UiButton: React.FC<IProps> = (props) => {
  const { children, variant, onClick, disabled = false } = props;
  return (
    <MUIButton onClick={onClick} variant={variant} disabled={disabled}>
      {children}
    </MUIButton>
  );
};
```

> stories/UiButton.stories.tsx

```tsx
import type { Meta, StoryObj } from "@storybook/react"; // Проверить импорт
import { fn } from "storybook/test";

import UiButton from "./UiButton";

const meta: Meta<typeof UiButton> = {
  // Название категории и раздела
  title: "Ui-Kit/UiButton",

  // Компонент
  component: UiButton,

  // Конфигурация Controls (настраивает, как props отображаются в панели Controls Storybook)
  argTypes: {
    variant: {
      options: ["text", "outlined", "contained"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },

  // Задание значений для props
  args: {
    onClick: fn(),
    children: "Button",
    disabled: false,
  },

  // Добавление раздела "Docs"
  tags: ["autodocs"],

  // Параметры: выравнивает по центру (в данном случае)
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UiButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// Название будет соответствовать названию категории
export const Basic: Story = {
  args: {
    variant: "contained",
  },
};
```
