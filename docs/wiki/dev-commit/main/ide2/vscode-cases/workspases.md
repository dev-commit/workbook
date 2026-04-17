# Несколько Workspaces

## VSCode Extensions

::: info
https://marketplace.visualstudio.com/items?itemName=tomsaunders-code.workspace-explorer
https://marketplace.visualstudio.com/search?term=workspace⌖=VSCode&category=All%20categories&sortBy=Relevance
:::

## VSCode расширение Workspace Sidebar

### 1. Сохранить Workspase

- Открыть рабочее Workspase в VSCode
- Сохранить Workspases в отдельный файл: File -> Save Workspace as.... У меня путь D:\Workspaces

#### Структура файла

```js
{
	"folders": [
		{
			"name": "Name Workspace 1",
			"path": "C:/Users/UserName/Desktop/Repo/repo1"
		},
		{
			"name": "Name Workspace 2",
			"path": "C:/Users/UserName/Desktop/Repo/repo2"
		},
	]
}
```

::: details Настройка colorCustomizations

```js
{
  "folders": [
    //
  ],
  "settings": {
    "workbench.colorCustomizations": {
      // Activity Bar
      "activityBar.activeBackground": "#65c89b",
      "activityBar.background": "#65c89b",
      "activityBar.foreground": "#15202b",
      "activityBar.inactiveForeground": "#15202b99",

      // Activity Bar Badge
      "activityBarBadge.background": "#945bc4",
      "activityBarBadge.foreground": "#e7e7e7",

      // Status Bar
      "statusBar.background": "#42b883",
      "statusBar.foreground": "#15202b",
      "statusBarItem.hoverBackground": "#359268",
      "statusBarItem.remoteBackground": "#42b883",
      "statusBarItem.remoteForeground": "#15202b",

      // Title Bar
      "titleBar.activeBackground": "#42b883",
      "titleBar.activeForeground": "#15202b",
      "titleBar.inactiveBackground": "#42b88399",
      "titleBar.inactiveForeground": "#15202b99"

      // Common
      "commandCenter.border": "#15202b99",
      "sash.hoverBorder": "#65c89b",
    },
    "peacock.color": "#42b883"
  }
}
```

:::

### 2. Установить расширение Workspace Sidebar

- Workspace Sidebar

### 3. Конфиг

- Отукрыть файл конфига и указать путь к сохраненным Workspaces

C:\Users\UserName\AppData\Roaming\Code\User\settings.json

```json
{
  "workspaceSidebar.rootFolders": [
    {
      "path": "D:\\Workspaces",
      "excludeHiddenFolders": true
    }
  ]
}
```

### 4. Настройка иконок

::: info
https://github.com/sketchbuch/vsc-workspace-sidebar
https://github.com/sketchbuch/vsc-workspace-sidebar/blob/master/docs/File%20Icon%20Themes.md
:::

#### Значения

- dart
- java
- javascript
- md
- typescript
- tsx
- jsx
- yaml

#### Пример названия

- Name.yaml.code-workspace
- Name.vue.code-workspace

### 5. Интерфейс

- В VSCode появится вкладка "Workspaces"

<!-- <img src="../@img/workspace-sidebar.png" width="400px"/> -->
