# Apple 首页

一个精美的 Apple 官网首页复刻版，使用现代化技术栈构建。

## 项目概述
- **名称**: Apple 首页
- **目标**: 复刻 Apple 官网的经典设计，展现简洁优雅的产品展示
- **特色**: 
  - 🎨 高度还原的 Apple 设计语言
  - 📱 完全响应式设计，支持多设备访问
  - ✨ 丰富的交互动画和悬停效果
  - 🚀 基于 Cloudflare Pages 的边缘部署
  - 🌐 中文本地化内容

## 在线访问
- **开发环境**: https://3000-i6s1mza4t5hasd5ap59z9-6532622b.e2b.dev
- **GitHub仓库**: https://github.com/wwwppp0801/apple-homepage
- **产品展示**: iPhone 15 Pro、MacBook Air、iPad Pro、Apple Watch、AirPods Pro、Apple TV 4K、HomePod

## 数据架构
- **数据模型**: 
  - 产品信息（名称、描述、颜色、价格）
  - 导航菜单结构
  - 页脚链接分类
- **存储服务**: 静态文件存储（CSS、JS、SVG图标）
- **数据流**: 客户端渲染 → 交互响应 → 动态内容更新

## 用户指南

### 主要功能
1. **产品浏览**: 浏览各类 Apple 产品的精美展示
2. **交互体验**: 
   - 点击"购买"按钮体验购物车功能
   - 搜索功能（点击搜索图标）
   - 响应式导航菜单
3. **视觉效果**:
   - 产品卡片悬停动画
   - 滚动视差效果
   - iPhone 模型微动画
   - 时间问候语动态切换

### 技术体验
- 在不同设备上访问查看响应式效果
- 观察滚动时导航栏的透明度变化
- 体验产品购买的模拟交互流程

## 技术栈
- **框架**: Hono (轻量级 Web 框架)
- **运行时**: Cloudflare Workers
- **构建工具**: Vite
- **样式**: 纯 CSS3 + Apple 设计系统
- **交互**: 原生 JavaScript
- **部署**: Cloudflare Pages

## 部署状态
- **平台**: Cloudflare Pages
- **状态**: ✅ 开发环境运行中
- **最后更新**: 2025-01-25

## 开发说明

### 本地开发
```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 启动开发服务器（使用 PM2）
pm2 start ecosystem.config.cjs

# 访问测试
curl http://localhost:3000
```

### 项目结构
```
apple_homepage/
├── src/index.tsx          # Hono 应用入口，包含完整页面结构
├── public/static/         # 静态资源目录
│   ├── style.css         # Apple 设计风格样式
│   └── app.js            # 交互功能和动画
├── ecosystem.config.cjs   # PM2 配置
└── README.md             # 项目文档
```

### 设计亮点
- **色彩系统**: 使用 Apple 官方色彩规范
- **字体系统**: SF Pro Display 字体家族
- **布局网格**: 响应式网格系统
- **动画系统**: 60fps 流畅动画过渡
- **交互反馈**: 即时的视觉和触觉反馈
