# 豆瓣FM

个人项目，用于学习 React 全家桶

## 划分页面结构

1. 播放区域-首页
    - 上方
        - logo
        - 下载链接
        - 反馈
        - 登录|注册
    - 左侧
        - 二维码
    - 中心
        - 精选
        - 音乐名称和歌手名称
        - 进度条
        - 播放控制按钮组
        - 登陆提示（未登录情况下）
    - 右侧
        - 专辑封面
    - 右下角
        - 缩放按钮
    - 下方
        - 菜单项
2. 内容区
    1. 公共区域
        1. 顶部播放条-固定
            - logo
            - 歌曲名
            - 进度条
            - 豆瓣精选
            - 控制按钮组
            - 登录|注册
            - 缩放按钮
        2. 菜单项
        3. 实际内容区
        4. 底部版权信息
    2. 实际内容区
        1. 兆赫
            - 上方
                - 私人
                - 精选
            - 中部
                - 艺术家
            - 底部
                - 类别
        2. 歌单
            - 类别
            - 歌单卡片列表
        3. 个人中心
            - 未登录
                - 类别
                - 登录|注册按钮
            - 已登录

        4. 搜索
            - 搜索框
            - 搜索结果
                - 列表
                - 结果
            - 搜索历史

## 选用技术

    1. 前端 react 全家桶，不使用任何 ui 框架
    2. 使用 es6 语法（后期可以考虑使用 ts 重构）
    3. 后端使用 express web 应用框架
    4. 数据库使用 mysql（前期先使用 mock.js 模拟接口）
    5. 使用服务端渲染技术，优化用户体验

## 时间规划

1. 优先完成页面功能，mock 接口

## 记录进度

1. 2019.04.17 技术选型

## tricks

1. 解决跨域问题：create-my-app 创建的 package.json 文件中添加 `"proxy": "http://localhost:3030/"` 即可将 api 请求代理到 end 上，详见[官方指南](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development)
2. 鼠标滚动时间，使用 `onWheel` 事件， `event.deltaY < 0` 表示鼠标滚轮向前滚动
3. 使用 antd 官方指南引入到项目中，按需加载样式
    - 按需加载的样式会覆盖在 `index.css` 中对 `html, body` 等 html 元素的设置
    - 完全不使用 antd 组件则不会引入任何样式
4. 使用 antd 则修改启动方式
    - `react-app-rewired start`
5. 使用 npx 命令调用 `create-react-app` 创建 react 应用
    - npx 命令是对 npm 命令的封装，可以直接调用当前应用下 `node_modules` 下 `./bin` 下的命令
    - npx 调用的命令模块不存在，会立即下载到临时目录，使用完会被删除；不会安装到全局依赖中
6. 使用 CSS_Module 技术进行 css 处理，参考 `create-react-app` 官方文档，可以避免多个文件中的相同类名冲突；也可以引入 scss 文件，不过需要安装 `node-sass` 依赖
7. more