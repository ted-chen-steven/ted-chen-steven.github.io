# 内容修改指南

## 📝 如何修改网页内容

所有网页中的文字和图片内容都在配置文件中集中管理，修改非常简单！

---

## 🎯 快速导航

- [文字内容修改](#文字内容修改)
- [图片配置修改](#图片配置修改)
- [超链接配置](#超链接配置)

---

## 📝 文字内容修改

### 🚀 快速开始

1. 打开文件：`src/lib/content.ts`
2. 修改你想要的文字内容
3. 保存文件 - 页面会自动更新！

### 📋 可修改的内容清单

#### 1️⃣ 第一部分：关于我
- `aboutMe` - 标题
- `name` - 你的名字
- `role` - 职位/角色
- `contact` - 联系方式标签
- `email` - 邮箱地址
- `phone` - 电话号码
- `location` - 所在城市
- `bio` - 个人简介

#### 2️⃣ 第二部分：实践项目
- `myProjects` - 部分标题
- `zhihu` - 知乎账号标题
- `zhihuDesc` - 知乎描述
- `productManager` - 人人都是产品经理标题
- `productManagerDesc` - 人人都是产品经理描述
- `xiaohongshu` - 小红书账号标题
- `xiaohongshuDesc` - 小红书描述

#### 3️⃣ 第三部分：产品展示
- `products` - 部分标题
- `webApp1` - 第一个产品标题
- `webApp1Desc` - 第一个产品描述
- `webApp2` - 第二个产品标题
- `webApp2Desc` - 第二个产品描述

#### 4️⃣ 第四部分：作品集展示
- `portfolio` - 部分标题
- `portfolio1` - 第一个作品集标题
- `portfolio1Desc` - 第一个作品集描述
- `portfolio2` - 第二个作品集标题
- `portfolio2Desc` - 第二个作品集描述
- `portfolio3` - 第三个作品集标题
- `portfolio3Desc` - 第三个作品集描述

#### 5️⃣ 页脚
- `footer` - 页脚文本（支持 `{name}` 占位符）

### ✨ 示例：修改个人名字

```typescript
// src/lib/content.ts
zh: {
  name: '小明同学',  // 改成你的中文名
  // ...
},
en: {
  name: 'Xiao Ming',  // 改成你的英文名
  // ...
}
```

---

## 🖼️ 图片配置修改

### 🚀 快速开始

1. 打开文件：`src/lib/images.ts`
2. 修改图片的 `url`（图片地址）和 `link`（超链接）
3. 保存文件 - 页面会自动更新！

### 📋 可配置的图片

每个图片配置包含两个字段：
- `url`: 图片的显示地址
- `link`: 点击图片跳转的超链接

#### 可配置项目：

1. **avatar** - 头像
   ```typescript
   avatar: {
     url: '你的头像图片地址',
     link: '点击头像跳转的链接',
   }
   ```

2. **zhihu** - 知乎账号
   ```typescript
   zhihu: {
     url: '知乎封面图片地址',
     link: 'https://www.zhihu.com/people/your-id',
   }
   ```

3. **productManager** - 人人都是产品经理
   ```typescript
   productManager: {
     url: '人人都是产品经理封面图片地址',
     link: 'https://www.woshipm.com/u/your-id',
   }
   ```

4. **xiaohongshu** - 小红书账号
   ```typescript
   xiaohongshu: {
     url: '小红书封面图片地址',
     link: 'https://www.xiaohongshu.com/user/profile/your-id',
   }
   ```

5. **webApp1** - 第一个产品
6. **webApp2** - 第二个产品
7. **portfolio1** - 第一个作品集
8. **portfolio2** - 第二个作品集
9. **portfolio3** - 第三个作品集

### 🔄 如何更换图片

#### 方式一：使用本地图片

1. 将图片文件放到 `public` 文件夹中
2. 在配置文件中引用：

```typescript
webApp1: {
  url: '/my-product-image.jpg',  // 放在 public 文件夹中
  link: 'https://your-product-url.com',
}
```

#### 方式二：使用网络图片

直接使用图片的完整 URL：

```typescript
webApp1: {
  url: 'https://example.com/image.jpg',
  link: 'https://your-product-url.com',
}
```

### ✨ 示例：配置产品图片和链接

```typescript
// src/lib/images.ts
webApp1: {
  url: 'https://your-cdn.com/product1-cover.jpg',
  link: 'https://your-website.com/product1',
}
```

---

## 🔗 超链接配置

所有图片都支持配置超链接，点击后会在新窗口打开。

### 🎯 点击行为

- **头像**：点击跳转到个人主页或社交媒体
- **实践项目**：点击跳转到对应平台账号
- **产品展示**：点击跳转到产品页面
- **作品集**：点击跳转到作品详情页

### 📋 链接配置示例

```typescript
// 实践项目链接
zhihu: {
  url: '图片地址',
  link: 'https://www.zhihu.com/people/your-id', // 知乎账号链接
},

// 产品链接
webApp1: {
  url: '图片地址',
  link: 'https://your-product.com', // 产品链接
},

// 作品集链接
portfolio1: {
  url: '图片地址',
  link: 'https://your-portfolio.com/project1', // 作品链接
}
```

### 🔐 安全设置

所有链接都使用 `window.open(link, '_blank', 'noopener,noreferrer')` 打开，确保安全性。

---

## 🎨 综合示例

### 同时修改图片和链接

```typescript
// src/lib/images.ts
portfolio1: {
  url: 'https://your-site.com/images/project-alpha.png',
  link: 'https://your-site.com/projects/alpha',
}
```

```typescript
// src/lib/content.ts
zh: {
  portfolio1: 'Project Alpha 项目',
  portfolio1Desc: '这是一个创新的产品项目，主要功能是...',
},
en: {
  portfolio1: 'Project Alpha',
  portfolio1Desc: 'An innovative product project that mainly...',
}
```

---

## 💡 高级技巧

### 1. 使用相对路径

如果图片放在 `public` 文件夹，使用 `/` 开头的相对路径：

```typescript
url: '/images/my-avatar.jpg'
```

### 2. 使用占位符

页脚支持 `{name}` 占位符：

```typescript
footer: '© 2024 {name}. All rights reserved.'
```

会自动替换为你的名字。

### 3. 图片格式推荐

- **头像**：JPG/PNG，正方形，建议 400x400 像素
- **项目图片**：JPG/PNG，正方形，建议 300x300 像素
- **支持格式**：JPG, PNG, GIF, WebP, SVG

---

## 🔧 注意事项

1. **保持对应关系**：修改中文内容时，记得同步修改对应的英文内容
2. **链接格式**：确保链接以 `http://` 或 `https://` 开头
3. **图片大小**：建议图片大小不超过 1MB，以确保加载速度
4. **保存文件**：修改完成后记得保存，页面会自动热更新
5. **图片尺寸**：正方形图片显示效果最佳

---

## 🎉 完成！

现在你可以轻松自定义所有文字和图片内容了！

### 📂 文件清单

- `src/lib/content.ts` - 文字内容配置
- `src/lib/images.ts` - 图片和链接配置

---

**提示**：由于启用了热更新（HMR），你修改文件后浏览器会自动刷新，无需手动重启服务。
