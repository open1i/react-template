# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

## 编辑器配置

### VS Code

为了获得最佳的开发体验，请安装以下 VS Code 插件：

- ESLint: JavaScript/TypeScript 代码检查
- Prettier: 代码格式化
- EditorConfig for VS Code: 编辑器基础行为统一

项目已包含以下配置文件：

- `.vscode/settings.json`: 编辑器和插件配置
- `.vscode/extensions.json`: 推荐的插件
- `.editorconfig`: 跨编辑器的基础配置
- `.prettierrc`: 代码格式化规则
- `eslint.config.js`: 代码质量检查规则

VS Code 会自动读取这些配置，确保团队代码风格的一致性。

### IntelliJ IDEA

如果你使用 IntelliJ IDEA 进行开发，请参考 [IDEA 配置指南](docs/IDEA_SETUP.md) 进行环境配置。

.idea文件夹

1. .gitignore

- 作用：指定 IDEA 工作目录中哪些文件不需要被版本控制
- 通常包含一些 IDEA 生成的临时文件和本地配置

2. inspectionProfiles/Project_Default.xml

- 作用：存储项目的代码检查配置
- 包含代码质量检查规则
- 定义警告和错误级别
- 自定义检查规则

3. misc.xml

- 作用：存储项目的杂项设置
- 项目的 SDK 配置
- JavaScript 版本设置
- 其他通用项目设置

4. modules.xml

- 作用：定义项目的模块结构
- 管理项目中的模块
- 指定模块文件的路径
- 配置模块间的依赖关系

5. prettier.xml

- 作用：Prettier 代码格式化工具的配置
- 定义代码格式化规则
- 配置格式化选项
- 设置文件类型的格式化行为

6. vcs.xml

- 作用：版本控制系统的配置
- Git 相关设置
- 版本控制根目录映射
- 版本控制系统集成配置

7. vite-react-ts.iml

- 作用：项目模块定义文件
- 定义模块类型（如 WEB_MODULE）
- 配置源代码目录
- 设置排除目录
- 管理模块依赖

8. workspace.xml

- 作用：工作空间配置文件
- 定义工作空间的名称和描述
- 管理工作空间中的项目
