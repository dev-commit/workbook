# Установка и настройка

::: info
https://reactnative.dev/docs/environment-setup
:::
1. Expo Go Quickstart - это набор инструментов и сервисов, построенных на основе React Native (не нужно настраивать)
2. React Native CLI Quickstart - работает с Xcode или Android Studio (нужно настраивать)

## 1. Expo Go Quickstart

#### 1. Установить приложениеExpo Goна телефон

::: info
https://expo.dev/client
https://docs.expo.dev/
:::
- **Expo** - фреймворк над React Native (набор инструментов и сервисов, построенных на основе React Native)

- Установить приложение Expo Go на телефон https://expo.dev/client
- Подключиться к той же беспроводной сети, что и компьютер
- На Android используйте приложение Expo Go, чтобы отсканировать QR-код с вашего терминала, чтобы открыть свой проект. В iOS используйте встроенный сканер QR-кода стандартного приложения iOS Camera

#### 2. Установить Expo CLI

npm i -g expo-cli
npx expo install

#### 3. Установить проект черезcreate-expo-app

npx create-expo-app AwesomeProject

#### 4. Запустить проект в приложенииExpo Go

cd AwesomeProject
npm start

- После старта проекта появится QR-код, который нужно отсканировать в приложении Expo Go (Android) / Camera app (iOS)
- После этого, проект запустится в приложении на телефоне
