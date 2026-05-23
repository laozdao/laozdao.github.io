# 老子道GitHub站

> 融合东方哲学与量化投资 | Fusing Eastern philosophy with quantitative investing

基于 **Astro + GitHub Pages** 构建的个人网站，展示 GitHub 账号中的所有开源项目、研究体系和投资哲学。

## 🏗️ 技术栈

- **[Astro](https://astro.build)** - 内容优先的静态站点生成器
- **GitHub Pages** - 免费静态网站托管
- **GitHub Actions** - 自动化构建与部署
- **GitHub API** - 动态获取仓库数据

## 📁 项目结构

```
laozdao-github-site/
├── .github/workflows/    # GitHub Actions 部署配置
│   └── deploy.yml
├── public/               # 静态资源
│   └── favicon.svg
├── src/
│   ├── components/       # 组件
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── GitHubStats.astro
│   │   └── ProjectGrid.astro
│   ├── layouts/          # 布局
│   │   ├── BaseLayout.astro
│   │   └── MainLayout.astro
│   ├── pages/            # 页面
│   │   ├── index.astro   # 首页
│   │   ├── projects.astro # 项目页
│   │   ├── research.astro # 研究页
│   │   └── about.astro    # 关于页
│   └── styles/
│       └── global.css    # 全局样式
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📄 页面说明

| 页面 | 路径 | 内容 |
|------|------|------|
| 首页 | `/` | 个人介绍、核心能力、GitHub统计、项目展示 |
| 项目 | `/projects` | 全部开源项目、技术栈 |
| 研究 | `/research` | 研究体系、道德经交易智慧 |
| 关于 | `/about` | 个人简介、投资哲学、联系方式 |

## 📜 License

MIT

---

*"道法自然，量化有道"* —— 老子道
