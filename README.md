#

欢迎使用 Markdown 的 Visual Studio Code 扩展。

MarkdownExample 包含 markdown 的所有语法。与其他可视化扩展（Markdown Preview Enhanced）一起，您再也不用担心忘记语法了！

## 开发笔记

### 1. 创建项目
    1. 安装 Yeoman 工具集

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

### 2. 代码
    - example.md 样例文件复制到项目根目录, 文件内容来源戳这里
    - extension.js 代码入口,激活插件
    - example.js 注册 example 命令，打开文件 example.md文件
    - 配置 package.json
        - main 字段修改入口
          ```text
           "main": "./extension.js",
          ```
        - contributes 字段设置命令 MarkdownExample
          ```text
           "commands": [{
               "command": "markdown.example",
               "title": "MarkdownExample"
          }]
          ```
            - contributes 字段添加菜单MarkdownExample
           ```json
           { 
            "menus": {
              "editor/context": [{
               "when": "resourceExtname == .md",
               "command": "markdown.example",
               "group": "navigation"
            }]
           }
          }
           ```
        - vscode 启动后激活事件

        ```json
         {
           "activationEvents": [
              "onStartupFinished"
            ]
         }
        ```

### 3. 测试项目
    1. 安装全部依赖 pnpm install

    2. 运行 vscode 菜单栏 run -> Start Debugging 会弹出的 vscode 窗口，在新窗口中测试。

    - 测试菜单栏: 新建任意一个文件，文件后缀 .md，鼠标右键 -> MarkdownExample
    - 测试命令行: 命令行输入 >MarkdownExample
    - 配合 Markdown Preview Enhanced 预览插件使用

### 4\. 打包

[](#4-打包)

[publishing-extension  发布扩展](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

1.  准备工作

-   `package.json`，设置项目发行者和图标

    ```
    "publisher": "CrazyLuke",
    "icon": "markdown.png"
    ```

-   安装 vsce `npm install -g vsce`

    ```
    vsce 是 "Visual Studio Code Extensions "的缩写，是用于打包、发布和管理 VS Code 插件的命令行工具。
    ```


2.  打包
    -   执行命令 `vsce package`
    -   项目根目录出现插件安装文件 `MarkdownExample-0.0.1.vsix`

```
  注：
    1. 必需修改 README.md 文件后才允许打包
    2. xxx.vsix文件直接拖到extensions tab下可以完成本地安装
```

### 5\. 发布

[](#5-发布)

1.  创建 publisher

-   登录 [Extensions for Visual Studio](https://marketplace.visualstudio.com/) -> Publish extensions -> Create publiser

-   输入Name和ID，Logo, 点击Create按钮

    ```
      Name：markdownexample
      ID：CrazyLuke
    ```


2.  手动发布方式：管理平台手动发布

-   [Extensions for Visual Studio](https://marketplace.visualstudio.com/) -> Publish extensions -> +New ezxtension -> Visual Studio Code -> 上传 `MarkdownExample-0.0.1.vsix` 文件

    [Visual Studio 的扩展](https://marketplace.visualstudio.com/) \-> 发布扩展 -> +New ezxtension -> Visual Studio Code -> 上传 `MarkdownExample-0.0.1.vsix` 文件

3.  自动发布方式：vsce 命令直接发布

-   创建 Token [azure DevOps](https://dev.azure.com/) -> User settings -> Personal Access Tokens

    创建 Token [azure DevOps](https://dev.azure.com/) -> 用户设置 -> 个人访问令牌

    ```
    Name: markdownexample
    Organization: CrazyLuke
    Expiration: 30 days
    Scopes: Full access
    ```

-   终端 vsce 登录验证

    ```
    vsce login CrazyLuke
    输入前面创建的 Personal Access Tokens
    ```

-   执行发布 `vsce publish`