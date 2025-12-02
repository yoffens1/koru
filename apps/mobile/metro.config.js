const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Укажи где искать node_modules
config.watchFolders = [monorepoRoot];

// КРИТИЧНО: исключи папки Tauri и Rust из наблюдения
config.resolver.blockList = [
  // Исключаем все папки Tauri
  /apps\/desktop\/src-tauri\/.*/,
  
  // Исключаем build артефакты
  /\.turbo\/.*/,
  /dist\/.*/,
  /build\/.*/,
  
  // Исключаем node_modules в корне (используем workspace)
  new RegExp(`${path.resolve(monorepoRoot, 'node_modules').replace(/\\/g, '/')}\/.*`),
];

// Настрой работу с packages из монорепо
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

module.exports = config;
