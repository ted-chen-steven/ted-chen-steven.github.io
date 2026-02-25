/**
 * 网站内容配置文件
 *
 * 使用说明：
 * 1. 在此文件中修改所有文字内容
 * 2. 修改后保存，页面会自动热更新
 * 3. 中文和英文内容已关联，修改时请保持对应关系
 */

export interface Translations {
  zh: {
    // 第一部分：关于我
    aboutMe: string;
    name: string;
    role: string;
    contact: string;
    email: string;
    phone: string;
    location: string;
    bio: string;

    // 第二部分：实践项目
    myProjects: string;
    zhihu: string;
    zhihuDesc: string;
    productManager: string;
    productManagerDesc: string;
    xiaohongshu: string;
    xiaohongshuDesc: string;

    // 第三部分：产品展示
    products: string;
    webApp1: string;
    webApp1Desc: string;
    webApp2: string;
    webApp2Desc: string;

    // 第四部分：作品集展示
    portfolio: string;
    portfolio1: string;
    portfolio1Desc: string;
    portfolio2: string;
    portfolio2Desc: string;
    portfolio3: string;
    portfolio3Desc: string;

    // 页脚
    footer: string;
  };
  en: {
    // 第一部分：关于我
    aboutMe: string;
    name: string;
    role: string;
    contact: string;
    email: string;
    phone: string;
    location: string;
    bio: string;

    // 第二部分：实践项目
    myProjects: string;
    zhihu: string;
    zhihuDesc: string;
    productManager: string;
    productManagerDesc: string;
    xiaohongshu: string;
    xiaohongshuDesc: string;

    // 第三部分：产品展示
    products: string;
    webApp1: string;
    webApp1Desc: string;
    webApp2: string;
    webApp2Desc: string;

    // 第四部分：作品集展示
    portfolio: string;
    portfolio1: string;
    portfolio1Desc: string;
    portfolio2: string;
    portfolio2Desc: string;
    portfolio3: string;
    portfolio3Desc: string;

    // 页脚
    footer: string;
  };
}

export const translations: Translations = {
  zh: {
    // ========== 第一部分：关于我 ==========
    aboutMe: '关于我',
    name: '小明同学',
    role: '产品经理 / 全栈开发者',
    contact: '联系方式',
    email: 'email@example.com',
    phone: '+86 138****8888',
    location: '北京',
    bio: '热爱创造，热衷于将创意转化为现实的产品经理。拥有5年产品设计和开发经验，擅长从0到1构建产品。我相信好的产品能让生活更美好。',

    // ========== 第二部分：实践项目 ==========
    myProjects: '实践项目',
    zhihu: '公众号账号',
    zhihuDesc: '分享产品思维和行业见解，累计获得10k+点赞',
    productManager: '人人都是产品经理',
    productManagerDesc: '发布产品设计案例和经验总结，月均阅读量5w+',
    xiaohongshu: '小红书账号',
    xiaohongshuDesc: '分享生活方式和产品设计灵感，粉丝2k+',

    // ========== 第三部分：产品展示 ==========
    products: '产品展示',
    webApp1: '智能任务管理平台',
    webApp1Desc: '帮助团队高效协作的任务管理系统，支持看板和甘特图',
    webApp2: '数据分析仪表盘',
    webApp2Desc: '实时数据可视化平台，提供深度洞察和决策支持',

    // ========== 第四部分：作品集展示 ==========
    portfolio: '作品集展示',
    portfolio1: '电商APP重构项目',
    portfolio1Desc: '从用户体验优化到技术架构重构的完整案例',
    portfolio2: '智能客服系统',
    portfolio2Desc: 'AI驱动的智能客服解决方案，提升服务效率80%',
    portfolio3: '社交平台功能迭代',
    portfolio3Desc: '基于用户需求的快速迭代和A/B测试方法论',

    // ========== 页脚 ==========
    footer: '© 2024 {name}. All rights reserved.',
  },
  en: {
    // ========== 第一部分：关于我 ==========
    aboutMe: 'About Me',
    name: 'Xiao Ming',
    role: 'Product Manager / Full Stack Developer',
    contact: 'Contact',
    email: 'email@example.com',
    phone: '+86 138****8888',
    location: 'Beijing',
    bio: 'Passionate product manager who loves turning ideas into reality. With 5 years of experience in product design and development, I excel at building products from 0 to 1. I believe good products make life better.',

    // ========== 第二部分：实践项目 ==========
    myProjects: 'My Projects',
    zhihu: 'Zhihu Account',
    zhihuDesc: 'Sharing product thinking and industry insights, 10k+ likes',
    productManager: 'Product Manager Platform',
    productManagerDesc: 'Published product design cases and experience summaries, 50k+ monthly views',
    xiaohongshu: 'Xiaohongshu Account',
    xiaohongshuDesc: 'Sharing lifestyle and product design inspiration, 2k+ followers',

    // ========== 第三部分：产品展示 ==========
    products: 'Products',
    webApp1: 'Smart Task Management',
    webApp1Desc: 'Team collaboration task management system with Kanban and Gantt charts',
    webApp2: 'Data Analytics Dashboard',
    webApp2Desc: 'Real-time data visualization platform providing deep insights',

    // ========== 第四部分：作品集展示 ==========
    portfolio: 'Portfolio',
    portfolio1: 'E-commerce App Redesign',
    portfolio1Desc: 'Complete case from UX optimization to technical architecture refactoring',
    portfolio2: 'Smart Customer Service',
    portfolio2Desc: 'AI-driven customer service solution, 80% efficiency improvement',
    portfolio3: 'Social Platform Iteration',
    portfolio3Desc: 'Rapid iteration and A/B testing methodology based on user needs',

    // ========== 页脚 ==========
    footer: '© 2024 {name}. All rights reserved.',
  },
};
