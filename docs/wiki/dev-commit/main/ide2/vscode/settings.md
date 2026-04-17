# Настройки редактора

## Color Theme

- Color Theme: One Dark Pro
- File Icon Theme: Material Theme Icons Palenight / Material Icon Theme

## Settings

### Text Editor

- Tab Size: 2
- Word Wrap: on

### Tree: Ident

<!-- <img src="../@img/settings-indent.png" width="650px"/> -->

### Startup Editor

<!-- <img src="../@img/settings-startup-editor.png" width="500px"/> -->

### Explorer: Compact Folders

- По-умолчанию вложенные пустые директории отображаются в одну линию. Отключается флагом Compact Folders или настройкой "explorer.compactFolders": false

<!-- <img src="../@img/settings-compact-folder.png" width="500px"/> -->

### Смена CRLF на LF

- LF и CRLF - стандартные завершающие символы
- LF - символ перевода строки на платформах Linux
- CRLF - символы возврата каретки и перевода строки на платформах Windows

- В мир компьютеров эти управляющие коды пришли из мира печатных машинок
- «CR» сокращение от «Carriage Return» (возврат каретки)
- «LF» сокращение от «Line Feed» (подача бумаги на следующую строку)

- При создании нового файла он будет в формате LF

<!-- <img src="../@img/setting-eol.png" width="500px"/> -->

- Можно создать файл settings.json и там изменить настройки

```js
{
    "files.eol": "\n",
}
```

## Внешний вид

### View ➝ Appearance

- Minimap (убрать флаг)
- Breadcrumbs (убрать флаг)
- Render Whitespace (убрать флаг)
- Sticky Scroll (убрать флаг)
