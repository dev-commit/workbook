import { getSidebar } from "../../.vitepress/utils/sidebar";
import { getNav } from "../../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../../types";

import wikiUiKit from "./system/ui-kit/build-ui-kit";
import wikiMenu from "./system/menu/build-menu";
import wikiHtml from "./layout/html/build-html";
import wikiSvelte from "./framework-svelte/svelte/build-svelte";
import wikiHttp from "./network/http/build-http";
import wikiCss from "./layout/css/build-css";
import wikiVue from "./framework-vue/vue/build-vue";
import wikiVueRouter from "./framework-vue/vue-router/build-vue-router";
import wikiVuex from "./framework-vue/vuex/build-vuex";
import wikiLayout from "./layout/layout/build-layout";
import wikiIde from "./common/ide/build-ide";
import wikiSass from "./layout/sass/build-sass";
import wikiBooks from "./system/books/build-books";
import wikiLinks from "./system/links/build-links";
import wikiSvg from "./layout/svg/build-svg";
import wikiCssFlexbox from "./layout/css-flexbox/build-css-flexbox";
import wikiCssGrid from "./layout/css-grid/build-css-grid";
import wikiAi from "./common/ai/build-ai";
import wikiDataStructures from "./theory/data-structures/build-data-structures";
import wikiMethodologyDev from "./theory/methodology-dev/build-methodology-dev";
import wikiReact from "./framework-react/react/build-react";
import wikiApproaches from "./theory/approaches/build-approaches";
import wikiArchitecture from "./theory/architecture/build-architecture";
import wikiAgile from "./theory/agile/build-agile";
import wikiProgramming from "./theory/programming/build-programming";
import wikiAlgoritms from "./theory/algoritms/build-algoritms";
import wikiDesignPatterns from "./theory/design-patterns/build-design-patterns";
import wikiSolid from "./theory/solid/build-solid";
import wikiRefactoring from "./theory/refactoring/build-refactoring";
import wikiNetwork from "./network/network/build-network";
import wikiAuth from "./network/auth/build-auth";
import wikiMysql from "./backend/mysql/build-mysql";
import wikiPhp from "./backend/php/build-php";
import wikiPython from "./backend/python/build-python";
import wikiNodeJs from "./node-js/node-js/build-node-js";
import wikiExpress from "./node-js/express/build-express";
import wikiNestJs from "./node-js/nest-js/build-nest-js";
import wikiMongodb from "./node-js/mongodb/build-mongodb";
import wikiBlockchain from "./common2/blockchain/build-blockchain";
import wikiCiCd from "./common2/ci-cd/build-ci-cd";
import wikiCmd from "./common2/cmd/build-cmd";
import wikiCompilation from "./common2/compilation/build-compilation";
import wikiEnglish from "./common2/english/build-english";
import wikiHeroku from "./common2/heroku/build-heroku";
import wikiLinux from "./common2/linux/build-linux";
import wikiMacos from "./common2/macos/build-macos";
import wikiNpm from "./common2/npm/build-npm";
import wikiWebpack from "./common2/webpack/build-webpack";
import wikiWindows from "./common2/windows/build-windows";
import wikiGit from "./main/git/build-git";
import wikiGitRepo from "./main/git-repo/build-git-repo";
import wikiLinters from "./main/linters/build-linters";
import wikiTypeScript from "./main/typescript/build-typescript";
import wikiVite from "./main/vite/build-vite";
import wikiCanvas from "./js/canvas/build-canvas";
import wikiDayjs from "./js/dayjs/build-dayjs";
import wikiEventLoop from "./js/event-loop/build-event-loop";
import wikiFormik from "./framework-react/formik/build-formik";
import wikiJavaScript from "./js/js/build-js";
import wikiAjax from "./js/js-ajax/build-js-ajax";
import wikiAxios from "./network/axios/build-axios";
import wikiSwr from "./network/swr/build-swr";
import wikiTanStackQuery from "./network/tan-stack-query/build-tan-stack-query";
import wikiCypress from "./testing/cypress/build-cypress";
import wikiEnzyme from "./testing/enzyme/build-enzyme";
import wikiJest from "./testing/jest/build-jest";
import wikiReactTesting from "./testing/react-testing/build-react-testing";
import wikiTesting from "./testing/testing/build-testing";
import wikiVitest from "./testing/vitest/build-vitest";
import wikiMaterialUi from "./framework-react/material-ui/build-material-ui";
import wikiNextJs from "./framework-react/next-js/build-next-js";
import wikiReactApi from "./framework-react/react-api/build-react-api";
import wikiReactApp from "./framework-react/react-app/build-react-app";
import wikiReactFinalForm from "./framework-react/react-final-form/build-react-final-form";
import wikiReactFlow from "./framework-react/react-flow/build-react-flow";
import wikiReactHookForm from "./framework-react/react-hook-form/build-react-hook-form";
import wikiReactHooks from "./framework-react/react-hooks/build-react-hooks";
import wikiReactNative from "./framework-react/react-native/build-react-native";
import wikiReactRedux from "./framework-react/react-redux/build-react-redux";
import wikiReactRouter from "./framework-react/react-router/build-react-router";
import wikiReactUse from "./framework-react/react-use/build-react-use";
import wikiRedux from "./framework-react/redux/build-redux";
import wikiReduxSaga from "./framework-react/redux-saga/build-redux-saga";
import wikiReduxToolkit from "./framework-react/redux-toolkit/build-redux-toolkit";
import wikiReselect from "./framework-react/reselect/build-reselect";
import wikiYup from "./framework-react/yup/build-yup";
import wikiZustand from "./framework-react/zustand/build-zustand";
import wikiArray from "./js/js-array/build-js-array";
import wikiAsync from "./js/js-async/build-js-async";
import wikiClass from "./js/js-class/build-js-class";
import wikiFunction from "./js/js-function/build-js-function";
import wikiObject from "./js/js-object/build-js-object";
import wikiPromise from "./js/js-promise/build-js-promise";
import wikiRegExp from "./js/js-regexp/build-js-regexp";
import wikiString from "./js/js-string/build-js-string";
import wikiTask from "./js/js-task/build-js-task";
import wikiWebApi from "./js/js-web-api/build-js-web-api";
import wikiLodash from "./js/lodash/build-lodash";
import wikiRamda from "./js/ramda/build-ramda";
import wikiV8 from "./js/v8/build-v8";
import wikiWebComponents from "./js/web-components/build-web-components";

export const NAV: IHeaderMenuNav[] = [
  {
    text: "Теория",
    children: getNav([
      wikiAlgoritms,
      wikiDataStructures,
      wikiProgramming,
      wikiArchitecture,
      wikiApproaches,
      null,
      wikiDesignPatterns,
      wikiSolid,
      wikiRefactoring,
      null,
      wikiMethodologyDev,
      wikiAgile,
    ]),
  },
  {
    text: "Network",
    children: getNav([
      wikiHttp,
      wikiNetwork,
      wikiAuth,
      wikiAxios,
      wikiSwr,
      wikiTanStackQuery,
    ]),
  },
  {
    text: "JavaScript",
    children: getNav([
      wikiEventLoop,
      wikiV8,
      wikiTask,
      null,
      wikiJavaScript,
      wikiObject,
      wikiArray,
      wikiString,
      wikiFunction,
      wikiClass,
      null,
      wikiAsync,
      wikiPromise,
      wikiAjax,
      null,
      wikiRegExp,
      wikiWebApi,
      null,
      wikiCanvas,
      wikiWebComponents,
      wikiDayjs,
      wikiLodash,
      wikiRamda,
    ]),
  },
  {
    text: "React",
    children: getNav([
      wikiReact,
      wikiReactApp,
      wikiReactHooks,
      wikiReactApi,
      wikiReactRouter,
      null,
      wikiNextJs,
      wikiReactNative,
      wikiMaterialUi,
      wikiReactFlow,
      wikiReactUse,
      null,
      wikiReactHookForm,
      wikiFormik,
      wikiYup,
      wikiReactFinalForm,
      null,
      wikiRedux,
      wikiReactRedux,
      wikiReduxToolkit,
      wikiReduxSaga,
      wikiReselect,
      wikiZustand,
    ]),
  },
  {
    text: "Vue.js",
    children: getNav([wikiVue, wikiVuex, wikiVueRouter]),
  },
  {
    text: "Svelte",
    children: getNav([wikiSvelte]),
  },
  {
    text: "Utils",
    children: getNav([wikiIde, wikiAi]),
  },
  {
    text: "Вёрстка",
    children: getNav([
      wikiHtml,
      wikiCss,
      wikiLayout,
      wikiCssFlexbox,
      wikiCssGrid,
      wikiSvg,
      wikiSass,
    ]),
  },
  {
    text: "Node.js",
    children: getNav([wikiNodeJs, wikiExpress, wikiNestJs, wikiMongodb]),
  },
  {
    text: "Backend",
    children: getNav([wikiPython, wikiPhp, wikiMysql]),
  },
  {
    text: "Testing",
    children: getNav([
      wikiTesting,
      wikiJest,
      wikiEnzyme,
      wikiVitest,
      wikiCypress,
      wikiReactTesting,
    ]),
  },
  {
    text: "System",
    children: getNav([wikiUiKit, wikiMenu, wikiLinks, wikiBooks]),
  },

  {
    text: "Main",
    children: getNav([
      wikiGit,
      wikiGitRepo,
      wikiTypeScript,
      wikiLinters,
      wikiVite,
    ]),
  },

  {
    text: "Common",
    children: getNav([
      wikiCiCd,
      wikiWebpack,
      wikiNpm,
      wikiCmd,
      wikiCompilation,
      wikiBlockchain,
      null,
      wikiMacos,
      wikiWindows,
      wikiLinux,
      null,
      wikiHeroku,
      wikiEnglish,
    ]),
  },
];

export const SIDEBAR = getSidebar([
  wikiUiKit,
  wikiHtml,
  wikiMenu,
  wikiSvelte,
  wikiHttp,
  wikiNetwork,
  wikiAuth,
  wikiMysql,
  wikiPhp,
  wikiPython,
  wikiNodeJs,
  wikiExpress,
  wikiNestJs,
  wikiMongodb,
  wikiGit,
  wikiGitRepo,
  wikiLinters,
  wikiTypeScript,
  wikiVite,
  wikiCmd,
  wikiNpm,
  wikiWebpack,
  wikiCiCd,
  wikiHeroku,
  wikiLinux,
  wikiMacos,
  wikiWindows,
  wikiEnglish,
  wikiCompilation,
  wikiBlockchain,
  wikiTesting,
  wikiJest,
  wikiVitest,
  wikiCypress,
  wikiEnzyme,
  wikiReactTesting,
  wikiMaterialUi,
  wikiNextJs,
  wikiReactApi,
  wikiReactApp,
  wikiReactFinalForm,
  wikiReactFlow,
  wikiReactHookForm,
  wikiReactHooks,
  wikiReactNative,
  wikiReactRedux,
  wikiReactRouter,
  wikiReactUse,
  wikiRedux,
  wikiReduxSaga,
  wikiReduxToolkit,
  wikiReselect,
  wikiYup,
  wikiZustand,
  wikiCanvas,
  wikiDayjs,
  wikiEventLoop,
  wikiAsync,
  wikiFormik,
  wikiJavaScript,
  wikiAjax,
  wikiAxios,
  wikiSwr,
  wikiTanStackQuery,
  wikiArray,
  wikiClass,
  wikiFunction,
  wikiObject,
  wikiPromise,
  wikiRegExp,
  wikiString,
  wikiTask,
  wikiWebApi,
  wikiLodash,
  wikiRamda,
  wikiV8,
  wikiWebComponents,
  wikiCss,
  wikiVue,
  wikiVueRouter,
  wikiVuex,
  wikiLayout,
  wikiIde,
  wikiSass,
  wikiBooks,
  wikiLinks,
  wikiSvg,
  wikiCssFlexbox,
  wikiCssGrid,
  wikiAi,
  wikiDataStructures,
  wikiAlgoritms,
  wikiDesignPatterns,
  wikiSolid,
  wikiMethodologyDev,
  wikiReact,
  wikiRefactoring,
  wikiArchitecture,
  wikiApproaches,
  wikiProgramming,
  wikiAgile,
]);
