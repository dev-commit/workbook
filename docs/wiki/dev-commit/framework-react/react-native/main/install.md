# Установка и настройка

::: info

- https://reactnative.dev/docs/environment-setup
  :::

## Варианты установки

1. **Expo Go Quickstart** - это набор инструментов и сервисов, построенных на основе React Native (не нужно настраивать)
2. **React Native CLI Quickstart** - работает с Xcode или Android Studio (нужно настраивать)

### 1. Expo Go Quickstart

**1. Установить приложение Expo Go на телефон**

::: info

- https://expo.dev/client - Установка
- https://docs.expo.dev/
  :::

::: tip Expo

- **Expo** - фреймворк над React Native (набор инструментов и сервисов, построенных на основе React Native)
  :::

- Установить приложение Expo Go на телефон https://expo.dev/client
- Подключиться к той же беспроводной сети, что и компьютер
- На Android используйте приложение Expo Go, чтобы отсканировать QR-код с вашего терминала, чтобы открыть свой проект. В iOS используйте встроенный сканер QR-кода стандартного приложения iOS Camera

**2. Установить Expo CLI**

```bash
npm i -g expo-cli
npx expo install
```

**3. Установить проект через create-expo-app**

```bash
npx create-expo-app AwesomeProject
```

**4. Запустить проект в приложении Expo Go**

```bash
cd AwesomeProject
npm start
```

- После старта проекта появится QR-код, который нужно отсканировать в приложении Expo Go (Android) / Camera app (iOS)
- После этого, проект запустится в приложении на телефоне
