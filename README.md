#

欢迎使用 Markdown 的 Visual Studio Code 扩展。

MarkdownExample 包含 markdown 的所有语法。与其他可视化扩展（Markdown Preview Enhanced）一起，您再也不用担心忘记语法了！

## 开发笔记

1. 创建项目
	 安装 Yeoman 工具集

> Yeoman 是通用型项目脚手架工具，可以根据一套模板，生成一个对应的项目结构

```shell
npm install -g yo
```

2. 安装 generator-code 模块

> generator-code 模块是 VS Code 扩展生成器，与 yo 配合能构建 VsCode 插件项目

```shell
npm install -g generator-code
```

3. 运行yo code创建项目

- 选择 New Extension(JavaScript)
- 输入项目名称 MarkdownExample
- 输入项目ID MarkdownExample
- 输入项目描述 Full Markdown Example