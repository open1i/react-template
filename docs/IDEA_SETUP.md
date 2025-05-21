# IntelliJ IDEA 配置指南

本指南帮助使用 IntelliJ IDEA 的团队成员配置开发环境，确保与项目代码规范保持一致。

## 必要插件安装

1. Prettier

   - 用于代码格式化
   - 确保使用项目配置的格式化规则

2. ESLint

   - 用于代码质量检查
   - 自动修复代码问题

3. EditorConfig (内置)
   - IDEA 已内置支持
   - 用于基础编辑器行为统一

## 详细配置步骤

### 1. 基础设置

基础设置会被项目中的格式化规则覆盖
打开设置（File -> Settings）：

1. 编辑器通用设置

   - Editor -> Code Style -> General
   - 设置 "Line separator (for new files)" 为 "Unix and macOS (\n)"
   - 设置 "Right margin (columns)" 为 100

2. TypeScript/JavaScript 缩进设置

   - Editor -> Code Style -> TypeScript
   - 取消勾选 "Use tab character"
   - 设置 "Tab size" 为 2
   - 设置 "Indent" 为 2
   - 设置 "Continuation indent" 为 2

   对 JavaScript 进行相同设置。

### 2. EditorConfig 支持

1. 转到 Editor -> Code Style
2. 确保勾选

### 3. ESLint 配置

1. 转到 Languages & Frameworks -> JavaScript -> Code Quality Tools -> ESLint
2. 进行以下设置：
   - 勾选 "Automatic ESLint configuration"
   - 勾选 "Run eslint --fix on save"

### 4. Prettier 配置

1. 转到 Languages & Frameworks -> JavaScript -> Prettier
2. 进行以下设置：
   - 勾选 "Run On save"

### 5. TypeScript 配置

1. 转到 Languages & Frameworks -> TypeScript
2. 设置 TypeScript package 为项目目录下的 node_modules/typescript

## 验证配置

完成配置后：

1. 重启 IDEA 使所有设置生效
2. 打开一个 TypeScript 文件进行编辑
3. 保存时应该会自动格式化并修复 ESLint 问题
4. 确认缩进是否为 2 个空格
5. 确认行尾是否为 LF (\n)

## 常见问题

1. 格式化不生效

   - 检查 Prettier 插件是否正确安装
   - 确认项目根目录下是否有 .prettierrc 文件
   - 验证 Prettier package 路径是否正确

2. ESLint 报错

   - 确保所有依赖已正确安装
   - 检查 ESLint 配置文件是否存在
   - 验证 node_modules 是否完整

3. 行尾符号不一致
   - 检查 EditorConfig 设置是否生效
   - 确认 "Line separator" 设置是否正确

## 注意事项

- 所有设置应该在项目级别进行配置，而不是全局配置
- 建议定期更新插件以获取最新功能和修复
- 如遇到配置问题，可以尝试重新导入项目或重启 IDE
