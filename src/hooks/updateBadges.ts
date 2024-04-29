import { renderAsync } from "@resvg/resvg-js";
import axios from "axios";
import * as fs from "fs";
import { JSDOM } from "jsdom";
import path = require("path");

const IMAGES_PATH = path.join(__dirname, "..", "..", "images");

// Dynamics
fetchModifySvg(
  "https://img.shields.io/github/release/Codemos-Inc/Codemos-Modern.svg?labelColor=373737&color=45AA41&label=&logo=github&logoColor=%23FFFFFFC7&style=for-the-badge",
  path.join(IMAGES_PATH, "badge-release.svg"),
  true,
  false,
);
fetchModifySvg(
  "https://img.shields.io/badge/-v1.87+-4B9ECD.svg?labelColor=373737&label=&logo=visualstudiocode&logoColor=%23FFFFFFC7&style=for-the-badge",
  path.join(IMAGES_PATH, "badge-vscode.svg"),
  true,
  false,
);
fetchModifySvg(
  "https://img.shields.io/visual-studio-marketplace/i/codemos.codemos-modern?labelColor=373737&color=9B87EA&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4XzE2KSI+CjxwYXRoIGQ9Ik0xMiAxOEw0LjUgMTAuNUw2LjYgOC4zMjVMMTAuNSAxMi4yMjVWMEgxMy41VjEyLjIyNUwxNy40IDguMzI1TDE5LjUgMTAuNUwxMiAxOFpNMyAyNEMyLjE3NSAyNCAxLjQ2ODc1IDIzLjcwNjMgMC44ODEyNSAyMy4xMTg4QzAuMjkzNzUgMjIuNTMxMiAwIDIxLjgyNSAwIDIxVjE2LjVIM1YyMUgyMVYxNi41SDI0VjIxQzI0IDIxLjgyNSAyMy43MDYzIDIyLjUzMTIgMjMuMTE4OCAyMy4xMTg4QzIyLjUzMTIgMjMuNzA2MyAyMS44MjUgMjQgMjEgMjRIM1oiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNzgwMzkyIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMThfMTYiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==&logoColor=%23FFFFFFC7&style=for-the-badge",
  path.join(IMAGES_PATH, "badge-downloads.svg"),
  true,
  false,
);
fetchModifySvg(
  "https://img.shields.io/github/sponsors/EmrecanKaracayir?labelColor=373737&color=ef6363&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2Ljk1IDFDMTguOTUgMSAyMC42MjUgMS43NCAyMS45NzUgMy4yMkMyMy4zMjUgNC43IDI0IDYuNDYgMjQgOC41QzI0IDguODYgMjMuOTggOS4yMTUgMjMuOTQgOS41NjVDMjMuOSA5LjkxNSAyMy44MyAxMC4yNiAyMy43MyAxMC42SDE2LjIzTDE0LjE5IDcuNTRDMTQuMDkgNy4zOCAxMy45NSA3LjI1IDEzLjc3IDcuMTVDMTMuNTkgNy4wNSAxMy40IDcgMTMuMiA3QzEyLjk0IDcgMTIuNzA1IDcuMDggMTIuNDk1IDcuMjRDMTIuMjg1IDcuNCAxMi4xNCA3LjYgMTIuMDYgNy44NEwxMC40NCAxMi43TDkuMzkgMTEuMTRDOS4yOSAxMC45OCA5LjE1IDEwLjg1IDguOTcgMTAuNzVDOC43OSAxMC42NSA4LjYgMTAuNiA4LjQgMTAuNkgwLjI3QzAuMTcgMTAuMjYgMC4xIDkuOTE1IDAuMDYgOS41NjVDMC4wMiA5LjIxNSAwIDguODcgMCA4LjUzQzAgNi40NyAwLjY3IDQuNyAyLjAxIDMuMjJDMy4zNSAxLjc0IDUuMDIgMSA3LjAyIDFDNy45OCAxIDguODg1IDEuMTkgOS43MzUgMS41N0MxMC41ODUgMS45NSAxMS4zNCAyLjQ4IDEyIDMuMTZDMTIuNjQgMi40OCAxMy4zODUgMS45NSAxNC4yMzUgMS41N0MxNS4wODUgMS4xOSAxNS45OSAxIDE2Ljk1IDFaTTEyIDIyLjZDMTEuNjQgMjIuNiAxMS4yOTUgMjIuNTM1IDEwLjk2NSAyMi40MDVDMTAuNjM1IDIyLjI3NSAxMC4zNCAyMi4wOCAxMC4wOCAyMS44MkwyLjA0IDEzLjc1QzEuOTIgMTMuNjMgMS44MSAxMy41MSAxLjcxIDEzLjM5QzEuNjEgMTMuMjcgMS41MSAxMy4xNCAxLjQxIDEzSDcuNzRMOS43OCAxNi4wNkM5Ljg4IDE2LjIyIDEwLjAyIDE2LjM1IDEwLjIgMTYuNDVDMTAuMzggMTYuNTUgMTAuNTcgMTYuNiAxMC43NyAxNi42QzExLjAzIDE2LjYgMTEuMjcgMTYuNTIgMTEuNDkgMTYuMzZDMTEuNzEgMTYuMiAxMS44NiAxNiAxMS45NCAxNS43NkwxMy41NiAxMC45TDE0LjU4IDEyLjQ2QzE0LjcgMTIuNjIgMTQuODUgMTIuNzUgMTUuMDMgMTIuODVDMTUuMjEgMTIuOTUgMTUuNCAxMyAxNS42IDEzSDIyLjU2TDIyLjI2IDEzLjM2TDIxLjk2IDEzLjcyTDEzLjg5IDIxLjgyQzEzLjYzIDIyLjA4IDEzLjM0IDIyLjI3NSAxMy4wMiAyMi40MDVDMTIuNyAyMi41MzUgMTIuMzYgMjIuNiAxMiAyMi42WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC43ODAzOTIiLz4KPC9zdmc+Cg==&logoColor=%23FFFFFFC7&style=for-the-badge",
  path.join(IMAGES_PATH, "badge-sponsors.svg"),
  true,
  false,
);
fetchModifySvg(
  "https://img.shields.io/visual-studio-marketplace/r/codemos.codemos-modern?style=for-the-badge&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIyXzI4KSI+CjxwYXRoIGQ9Ik0xMiA4LjI4VjE1LjM2TDE0Ljg4IDE3LjU4TDEzLjggMTMuOTJMMTYuNSAxMkgxMy4xNEwxMiA4LjI4Wk00LjU5IDI0TDcuMzggMTQuODhMMCA5LjZIOS4xMkwxMiAwTDE0Ljg4IDkuNkgyNEwxNi42MiAxNC44OEwxOS40MSAyNEwxMiAxOC4zNkw0LjU5IDI0WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC43ODAzOTIiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMl8yOCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K&logoColor=%23FFFFFFC7&labelColor=373737&color=BFAF40",
  path.join(IMAGES_PATH, "badge-rating.svg"),
  true,
  true,
);

// Locales
fetchModifySvg(
  "https://img.shields.io/badge/-ENGLISH-3C3B6E.svg?labelColor=373737&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjgzNzEgMjIuNzE5NUwxNi43NzgzIDkuNjg3NzhIMTkuMDU4OEwyNCAyMi43MTk1SDIxLjcxOTVMMjAuNTUyIDE5LjQwNzJIMTUuMjg1MUwxNC4xMTc2IDIyLjcxOTVIMTEuODM3MVpNMy4yNTc5MiAxOS40NjE1TDEuNzM3NTYgMTcuOTQxMkw3LjIyMTcyIDEyLjQ1N0M2LjU4ODI0IDExLjgyMzUgNi4wMTM1NyAxMS4wOTk1IDUuNDk3NzQgMTAuMjg1MUM0Ljk4MTkgOS40NzA1OSA0LjUwNjc5IDguNTQ3NTEgNC4wNzI0IDcuNTE1ODRINi4zNTI5NEM2LjcxNDkzIDguMjIxNzIgNy4wNzY5MiA4LjgzNzEgNy40Mzg5MSA5LjM2MTk5QzcuODAwOTEgOS44ODY4OCA4LjIzNTI5IDEwLjQxMTggOC43NDIwOCAxMC45MzY3QzkuMzM5MzcgMTAuMzM5NCA5Ljk1OTI4IDkuNTAyMjYgMTAuNjAxOCA4LjQyNTM0QzExLjI0NDMgNy4zNDg0MiAxMS43Mjg1IDYuMzIxMjcgMTIuMDU0MyA1LjM0Mzg5SDBWMy4xNzE5NUg3LjYwMTgxVjFIOS43NzM3NlYzLjE3MTk1SDE3LjM3NTZWNS4zNDM4OUgxNC4yMjYyQzEzLjg0NjIgNi42NDcwNiAxMy4yNzYgNy45ODY0MiAxMi41MTU4IDkuMzYxOTlDMTEuNzU1NyAxMC43Mzc2IDExLjAwNDUgMTEuNzg3MyAxMC4yNjI0IDEyLjUxMTNMMTIuODY4OCAxNS4xNzE5TDEyLjA1NDMgMTcuMzk4Mkw4Ljc0MjA4IDE0LjAwNDVMMy4yNTc5MiAxOS40NjE1Wk0xNS45NjM4IDE3LjUwNjhIMTkuODczM0wxNy45MTg2IDExLjk2ODNMMTUuOTYzOCAxNy41MDY4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==&logoColor=%23FFFFFFC7&style=for-the-badge",
  path.join(IMAGES_PATH, "badge-loc-en.svg"),
  false,
  false,
  "#FFFFFF",
);
fetchModifySvg(
  "https://img.shields.io/badge/-简体中文-EE1C25.svg?labelColor=373737&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjgzNzEgMjIuNzE5NUwxNi43NzgzIDkuNjg3NzhIMTkuMDU4OEwyNCAyMi43MTk1SDIxLjcxOTVMMjAuNTUyIDE5LjQwNzJIMTUuMjg1MUwxNC4xMTc2IDIyLjcxOTVIMTEuODM3MVpNMy4yNTc5MiAxOS40NjE1TDEuNzM3NTYgMTcuOTQxMkw3LjIyMTcyIDEyLjQ1N0M2LjU4ODI0IDExLjgyMzUgNi4wMTM1NyAxMS4wOTk1IDUuNDk3NzQgMTAuMjg1MUM0Ljk4MTkgOS40NzA1OSA0LjUwNjc5IDguNTQ3NTEgNC4wNzI0IDcuNTE1ODRINi4zNTI5NEM2LjcxNDkzIDguMjIxNzIgNy4wNzY5MiA4LjgzNzEgNy40Mzg5MSA5LjM2MTk5QzcuODAwOTEgOS44ODY4OCA4LjIzNTI5IDEwLjQxMTggOC43NDIwOCAxMC45MzY3QzkuMzM5MzcgMTAuMzM5NCA5Ljk1OTI4IDkuNTAyMjYgMTAuNjAxOCA4LjQyNTM0QzExLjI0NDMgNy4zNDg0MiAxMS43Mjg1IDYuMzIxMjcgMTIuMDU0MyA1LjM0Mzg5SDBWMy4xNzE5NUg3LjYwMTgxVjFIOS43NzM3NlYzLjE3MTk1SDE3LjM3NTZWNS4zNDM4OUgxNC4yMjYyQzEzLjg0NjIgNi42NDcwNiAxMy4yNzYgNy45ODY0MiAxMi41MTU4IDkuMzYxOTlDMTEuNzU1NyAxMC43Mzc2IDExLjAwNDUgMTEuNzg3MyAxMC4yNjI0IDEyLjUxMTNMMTIuODY4OCAxNS4xNzE5TDEyLjA1NDMgMTcuMzk4Mkw4Ljc0MjA4IDE0LjAwNDVMMy4yNTc5MiAxOS40NjE1Wk0xNS45NjM4IDE3LjUwNjhIMTkuODczM0wxNy45MTg2IDExLjk2ODNMMTUuOTYzOCAxNy41MDY4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==&logoColor=%23FFFFFFC7&style=for-the-badge",
  path.join(IMAGES_PATH, "badge-loc-zh-cn.svg"),
  false,
  false,
  "#FFFF00",
  { notoSansSC: true },
);

fetchModifySvg(
  "https://img.shields.io/badge/-ESPAÑOL-FABD00.svg?labelColor=373737&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjgzNzEgMjIuNzE5NUwxNi43NzgzIDkuNjg3NzhIMTkuMDU4OEwyNCAyMi43MTk1SDIxLjcxOTVMMjAuNTUyIDE5LjQwNzJIMTUuMjg1MUwxNC4xMTc2IDIyLjcxOTVIMTEuODM3MVpNMy4yNTc5MiAxOS40NjE1TDEuNzM3NTYgMTcuOTQxMkw3LjIyMTcyIDEyLjQ1N0M2LjU4ODI0IDExLjgyMzUgNi4wMTM1NyAxMS4wOTk1IDUuNDk3NzQgMTAuMjg1MUM0Ljk4MTkgOS40NzA1OSA0LjUwNjc5IDguNTQ3NTEgNC4wNzI0IDcuNTE1ODRINi4zNTI5NEM2LjcxNDkzIDguMjIxNzIgNy4wNzY5MiA4LjgzNzEgNy40Mzg5MSA5LjM2MTk5QzcuODAwOTEgOS44ODY4OCA4LjIzNTI5IDEwLjQxMTggOC43NDIwOCAxMC45MzY3QzkuMzM5MzcgMTAuMzM5NCA5Ljk1OTI4IDkuNTAyMjYgMTAuNjAxOCA4LjQyNTM0QzExLjI0NDMgNy4zNDg0MiAxMS43Mjg1IDYuMzIxMjcgMTIuMDU0MyA1LjM0Mzg5SDBWMy4xNzE5NUg3LjYwMTgxVjFIOS43NzM3NlYzLjE3MTk1SDE3LjM3NTZWNS4zNDM4OUgxNC4yMjYyQzEzLjg0NjIgNi42NDcwNiAxMy4yNzYgNy45ODY0MiAxMi41MTU4IDkuMzYxOTlDMTEuNzU1NyAxMC43Mzc2IDExLjAwNDUgMTEuNzg3MyAxMC4yNjI0IDEyLjUxMTNMMTIuODY4OCAxNS4xNzE5TDEyLjA1NDMgMTcuMzk4Mkw4Ljc0MjA4IDE0LjAwNDVMMy4yNTc5MiAxOS40NjE1Wk0xNS45NjM4IDE3LjUwNjhIMTkuODczM0wxNy45MTg2IDExLjk2ODNMMTUuOTYzOCAxNy41MDY4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==&logoColor=%23FFFFFFC7&style=for-the-badge",
  path.join(IMAGES_PATH, "badge-loc-es.svg"),
  true,
  false,
  "#AD1519",
);

fetchModifySvg(
  "https://img.shields.io/badge/-日本語-FFFFFF.svg?labelColor=373737&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjgzNzEgMjIuNzE5NUwxNi43NzgzIDkuNjg3NzhIMTkuMDU4OEwyNCAyMi43MTk1SDIxLjcxOTVMMjAuNTUyIDE5LjQwNzJIMTUuMjg1MUwxNC4xMTc2IDIyLjcxOTVIMTEuODM3MVpNMy4yNTc5MiAxOS40NjE1TDEuNzM3NTYgMTcuOTQxMkw3LjIyMTcyIDEyLjQ1N0M2LjU4ODI0IDExLjgyMzUgNi4wMTM1NyAxMS4wOTk1IDUuNDk3NzQgMTAuMjg1MUM0Ljk4MTkgOS40NzA1OSA0LjUwNjc5IDguNTQ3NTEgNC4wNzI0IDcuNTE1ODRINi4zNTI5NEM2LjcxNDkzIDguMjIxNzIgNy4wNzY5MiA4LjgzNzEgNy40Mzg5MSA5LjM2MTk5QzcuODAwOTEgOS44ODY4OCA4LjIzNTI5IDEwLjQxMTggOC43NDIwOCAxMC45MzY3QzkuMzM5MzcgMTAuMzM5NCA5Ljk1OTI4IDkuNTAyMjYgMTAuNjAxOCA4LjQyNTM0QzExLjI0NDMgNy4zNDg0MiAxMS43Mjg1IDYuMzIxMjcgMTIuMDU0MyA1LjM0Mzg5SDBWMy4xNzE5NUg3LjYwMTgxVjFIOS43NzM3NlYzLjE3MTk1SDE3LjM3NTZWNS4zNDM4OUgxNC4yMjYyQzEzLjg0NjIgNi42NDcwNiAxMy4yNzYgNy45ODY0MiAxMi41MTU4IDkuMzYxOTlDMTEuNzU1NyAxMC43Mzc2IDExLjAwNDUgMTEuNzg3MyAxMC4yNjI0IDEyLjUxMTNMMTIuODY4OCAxNS4xNzE5TDEyLjA1NDMgMTcuMzk4Mkw4Ljc0MjA4IDE0LjAwNDVMMy4yNTc5MiAxOS40NjE1Wk0xNS45NjM4IDE3LjUwNjhIMTkuODczM0wxNy45MTg2IDExLjk2ODNMMTUuOTYzOCAxNy41MDY4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==&logoColor=%23FFFFFFC7&style=for-the-badge",
  path.join(IMAGES_PATH, "badge-loc-ja.svg"),
  true,
  false,
  "#BC002D",
  { notoSansJP: true },
);

fetchModifySvg(
  "https://img.shields.io/badge/-русский-FFFFFF.svg?labelColor=373737&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjgzNzEgMjIuNzE5NUwxNi43NzgzIDkuNjg3NzhIMTkuMDU4OEwyNCAyMi43MTk1SDIxLjcxOTVMMjAuNTUyIDE5LjQwNzJIMTUuMjg1MUwxNC4xMTc2IDIyLjcxOTVIMTEuODM3MVpNMy4yNTc5MiAxOS40NjE1TDEuNzM3NTYgMTcuOTQxMkw3LjIyMTcyIDEyLjQ1N0M2LjU4ODI0IDExLjgyMzUgNi4wMTM1NyAxMS4wOTk1IDUuNDk3NzQgMTAuMjg1MUM0Ljk4MTkgOS40NzA1OSA0LjUwNjc5IDguNTQ3NTEgNC4wNzI0IDcuNTE1ODRINi4zNTI5NEM2LjcxNDkzIDguMjIxNzIgNy4wNzY5MiA4LjgzNzEgNy40Mzg5MSA5LjM2MTk5QzcuODAwOTEgOS44ODY4OCA4LjIzNTI5IDEwLjQxMTggOC43NDIwOCAxMC45MzY3QzkuMzM5MzcgMTAuMzM5NCA5Ljk1OTI4IDkuNTAyMjYgMTAuNjAxOCA4LjQyNTM0QzExLjI0NDMgNy4zNDg0MiAxMS43Mjg1IDYuMzIxMjcgMTIuMDU0MyA1LjM0Mzg5SDBWMy4xNzE5NUg3LjYwMTgxVjFIOS43NzM3NlYzLjE3MTk1SDE3LjM3NTZWNS4zNDM4OUgxNC4yMjYyQzEzLjg0NjIgNi42NDcwNiAxMy4yNzYgNy45ODY0MiAxMi41MTU4IDkuMzYxOTlDMTEuNzU1NyAxMC43Mzc2IDExLjAwNDUgMTEuNzg3MyAxMC4yNjI0IDEyLjUxMTNMMTIuODY4OCAxNS4xNzE5TDEyLjA1NDMgMTcuMzk4Mkw4Ljc0MjA4IDE0LjAwNDVMMy4yNTc5MiAxOS40NjE1Wk0xNS45NjM4IDE3LjUwNjhIMTkuODczM0wxNy45MTg2IDExLjk2ODNMMTUuOTYzOCAxNy41MDY4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==&logoColor=%23FFFFFFC7&style=for-the-badge",
  path.join(IMAGES_PATH, "badge-loc-ru.svg"),
  true,
  false,
  "#0036A7",
);

fetchModifySvg(
  "https://img.shields.io/badge/-PORTUGUÊS-006600.svg?labelColor=373737&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjgzNzEgMjIuNzE5NUwxNi43NzgzIDkuNjg3NzhIMTkuMDU4OEwyNCAyMi43MTk1SDIxLjcxOTVMMjAuNTUyIDE5LjQwNzJIMTUuMjg1MUwxNC4xMTc2IDIyLjcxOTVIMTEuODM3MVpNMy4yNTc5MiAxOS40NjE1TDEuNzM3NTYgMTcuOTQxMkw3LjIyMTcyIDEyLjQ1N0M2LjU4ODI0IDExLjgyMzUgNi4wMTM1NyAxMS4wOTk1IDUuNDk3NzQgMTAuMjg1MUM0Ljk4MTkgOS40NzA1OSA0LjUwNjc5IDguNTQ3NTEgNC4wNzI0IDcuNTE1ODRINi4zNTI5NEM2LjcxNDkzIDguMjIxNzIgNy4wNzY5MiA4LjgzNzEgNy40Mzg5MSA5LjM2MTk5QzcuODAwOTEgOS44ODY4OCA4LjIzNTI5IDEwLjQxMTggOC43NDIwOCAxMC45MzY3QzkuMzM5MzcgMTAuMzM5NCA5Ljk1OTI4IDkuNTAyMjYgMTAuNjAxOCA4LjQyNTM0QzExLjI0NDMgNy4zNDg0MiAxMS43Mjg1IDYuMzIxMjcgMTIuMDU0MyA1LjM0Mzg5SDBWMy4xNzE5NUg3LjYwMTgxVjFIOS43NzM3NlYzLjE3MTk1SDE3LjM3NTZWNS4zNDM4OUgxNC4yMjYyQzEzLjg0NjIgNi42NDcwNiAxMy4yNzYgNy45ODY0MiAxMi41MTU4IDkuMzYxOTlDMTEuNzU1NyAxMC43Mzc2IDExLjAwNDUgMTEuNzg3MyAxMC4yNjI0IDEyLjUxMTNMMTIuODY4OCAxNS4xNzE5TDEyLjA1NDMgMTcuMzk4Mkw4Ljc0MjA4IDE0LjAwNDVMMy4yNTc5MiAxOS40NjE1Wk0xNS45NjM4IDE3LjUwNjhIMTkuODczM0wxNy45MTg2IDExLjk2ODNMMTUuOTYzOCAxNy41MDY4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==&logoColor=%23FFFFFFC7&style=for-the-badge",
  path.join(IMAGES_PATH, "badge-loc-pt-br.svg"),
  false,
  false,
  "#FFFF00",
);

fetchModifySvg(
  "https://img.shields.io/badge/-TÜRKÇE-e30a17.svg?labelColor=373737&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjgzNzEgMjIuNzE5NUwxNi43NzgzIDkuNjg3NzhIMTkuMDU4OEwyNCAyMi43MTk1SDIxLjcxOTVMMjAuNTUyIDE5LjQwNzJIMTUuMjg1MUwxNC4xMTc2IDIyLjcxOTVIMTEuODM3MVpNMy4yNTc5MiAxOS40NjE1TDEuNzM3NTYgMTcuOTQxMkw3LjIyMTcyIDEyLjQ1N0M2LjU4ODI0IDExLjgyMzUgNi4wMTM1NyAxMS4wOTk1IDUuNDk3NzQgMTAuMjg1MUM0Ljk4MTkgOS40NzA1OSA0LjUwNjc5IDguNTQ3NTEgNC4wNzI0IDcuNTE1ODRINi4zNTI5NEM2LjcxNDkzIDguMjIxNzIgNy4wNzY5MiA4LjgzNzEgNy40Mzg5MSA5LjM2MTk5QzcuODAwOTEgOS44ODY4OCA4LjIzNTI5IDEwLjQxMTggOC43NDIwOCAxMC45MzY3QzkuMzM5MzcgMTAuMzM5NCA5Ljk1OTI4IDkuNTAyMjYgMTAuNjAxOCA4LjQyNTM0QzExLjI0NDMgNy4zNDg0MiAxMS43Mjg1IDYuMzIxMjcgMTIuMDU0MyA1LjM0Mzg5SDBWMy4xNzE5NUg3LjYwMTgxVjFIOS43NzM3NlYzLjE3MTk1SDE3LjM3NTZWNS4zNDM4OUgxNC4yMjYyQzEzLjg0NjIgNi42NDcwNiAxMy4yNzYgNy45ODY0MiAxMi41MTU4IDkuMzYxOTlDMTEuNzU1NyAxMC43Mzc2IDExLjAwNDUgMTEuNzg3MyAxMC4yNjI0IDEyLjUxMTNMMTIuODY4OCAxNS4xNzE5TDEyLjA1NDMgMTcuMzk4Mkw4Ljc0MjA4IDE0LjAwNDVMMy4yNTc5MiAxOS40NjE1Wk0xNS45NjM4IDE3LjUwNjhIMTkuODczM0wxNy45MTg2IDExLjk2ODNMMTUuOTYzOCAxNy41MDY4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==&logoColor=%23FFFFFFC7&style=for-the-badge",
  path.join(IMAGES_PATH, "badge-loc-tr.svg"),
  false,
  false,
  "#FFFFFF",
);

const SVG_NS = "http://www.w3.org/2000/svg";
const cPathName = "belma-karacayir";
const ZOOM = 10;

function fetchModifySvg(
  url: string,
  path: string,
  darkText: boolean,
  isRatingBadge: boolean,
  hexText?: string,
  customFont?: {
    notoSansSC?: boolean;
    notoSansJP?: boolean;
  },
): void {
  axios
    .get(url)
    .then(async function (response) {
      if (response.status === 200) {
        const dom = new JSDOM(response.data, { contentType: "image/svg+xml" });
        const doc = dom.window.document;

        // Take the original svg
        const originalSvg = doc.documentElement;

        // Dark/Light text
        if (hexText) {
          // Change right side text color to black
          const textElement = doc.querySelector("text");
          textElement!.setAttribute("fill", hexText);
        } else if (darkText) {
          // Change right side text color to black
          const textElement = doc.querySelector("text");
          textElement!.setAttribute("fill", "#000000E6");
        } else {
          // Change right side text color to white
          const textElement = doc.querySelector("text");
          textElement!.setAttribute("fill", "#FFFFFFC7");
        }

        // Noto Sans SC
        if (customFont?.notoSansSC) {
          doc
            .querySelector("[font-family]")!
            .setAttribute("font-family", "Noto Sans SC");
        }
        // Noto Sans JP
        if (customFont?.notoSansJP) {
          doc
            .querySelector("[font-family]")!
            .setAttribute("font-family", "Noto Sans JP");
        }

        // If the badge is the rating badge, strip how many people rated
        if (isRatingBadge) {
          const textElement = doc.querySelector("text");
          const text = textElement!.textContent;
          const modifiedText = text!.substring(0, text!.indexOf(" "));
          textElement!.textContent = modifiedText;
          textElement!.setAttribute("textLength", "380");
          textElement!.setAttribute("x", "440");
          const parent = textElement!.parentElement;
          parent!.setAttribute("text-anchor", "start");
          const grandparent = parent!.parentElement;
          grandparent!.setAttribute("width", "94");
        }

        // Calculate the new width and height
        const originalWidth = parseFloat(
          originalSvg.getAttribute("width") as string,
        );
        const originalHeight = parseFloat(
          originalSvg.getAttribute("height") as string,
        );
        const newWidth = originalWidth + 2;
        const newHeight = originalHeight + 2;

        // Create the new root svg and set its attributes
        const newRootSvg = doc.createElement("svg");
        newRootSvg.setAttribute(
          "xmlns",
          originalSvg.getAttribute("xmlns") as string,
        );
        newRootSvg.setAttribute(
          "xmlns:xlink",
          originalSvg.getAttribute("xmlns:xlink") as string,
        );
        newRootSvg.setAttribute("width", `${newWidth}`);
        newRootSvg.setAttribute("height", `${newHeight}`);

        // Create defs, clipPath, and rect children for new root svg
        const defs = doc.createElementNS(SVG_NS, "defs");
        const clipPath = doc.createElementNS(SVG_NS, "clipPath");
        clipPath.setAttribute("id", cPathName);
        const clipRectangle = doc.createElementNS(SVG_NS, "rect");
        clipRectangle.setAttribute("width", "100%");
        clipRectangle.setAttribute("height", "100%");
        clipRectangle.setAttribute("rx", "4");
        clipRectangle.setAttribute("ry", "4");
        const outerRect = doc.createElement("rect");
        outerRect.setAttribute("width", "100%");
        outerRect.setAttribute("height", "100%");
        outerRect.setAttribute("rx", "5");
        outerRect.setAttribute("ry", "5");
        outerRect.setAttribute("fill", "#75757566");

        // Add innerRect to clipPath, clipPath to defs
        clipPath.appendChild(clipRectangle);
        defs.appendChild(clipPath);

        // Create new group and set its attributes
        const newGroup = doc.createElementNS(SVG_NS, "g");
        newGroup.setAttribute("clip-path", `url(#${cPathName})`);

        // modify originalSVG childeren with g tag and append to newGroup
        const originalSvgChildren = originalSvg.children;
        for (let i = originalSvgChildren.length - 1; i > -1; i--) {
          const child = originalSvgChildren[i];
          if (child.tagName === "g") {
            newGroup.prepend(child);
          }
        }

        // Appending necessary elements to newRootSvg
        originalSvg.prepend(defs);
        originalSvg.appendChild(newGroup);
        newRootSvg.appendChild(outerRect);
        newRootSvg.appendChild(originalSvg);

        // Replace original svg with newRootSvg
        doc.appendChild(newRootSvg);

        // Modify original svg attributes
        originalSvg.setAttribute("x", "1");
        originalSvg.setAttribute("y", "1");

        const modifiedSvg = new dom.window.XMLSerializer().serializeToString(
          doc.documentElement,
        );

        fs.writeFile(path, modifiedSvg, "utf8", async function (error) {
          if (error) {
            console.log(error);
            process.exit(1);
          } else {
            const pathArray = path.split("/");
            const modifiedSvgCompat =
              new dom.window.XMLSerializer().serializeToString(
                doc.documentElement,
              );
            renderAsync(modifiedSvgCompat, {
              fitTo: { mode: "zoom", value: ZOOM },
            }).then((r) => {
              fs.writeFileSync(path.replace(".svg", ".png"), r.asPng());
              console.log(
                `SVG to PNG is done for: ${pathArray[pathArray.length - 1]}`,
              );
            });
          }
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      process.exit(1);
    });
}
