/**
 * 图片配置文件
 *
 * 使用说明：
 * 1. 在此文件中修改所有图片的 URL 和超链接
 * 2. 修改后保存，页面会自动热更新
 * 3. 每个项目包含：图片URL、超链接
 */

export interface ImageConfig {
  url: string;
  link: string;
}

export const imageConfigs: {
  avatar: ImageConfig;
  zhihu: ImageConfig;
  productManager: ImageConfig;
  xiaohongshu: ImageConfig;
  webApp1: ImageConfig;
  webApp2: ImageConfig;
  portfolio1: ImageConfig;
  portfolio2: ImageConfig;
  portfolio3: ImageConfig;
} = {
  // ========== 头像 ==========
  avatar: {
    url: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F%E5%B0%8F%E7%8B%97%E8%83%8C%E6%99%AF%E5%9B%BE%E9%95%BF.jpg&nonce=bbb61318-22dc-4b1a-be07-bc4d55d67836&project_id=7610855774746607643&sign=003a0fefa256f2a1b0d5738225e6fe528ff551d092b368ced8b19e1b227031f0', // 可爱小狗头像
    link: 'https://example.com', // 点击头像跳转的链接
  },

  // ========== 实践项目 ==========
  zhihu: {
    url: 'https://coze-coding-project.tos.coze.site/coze_storage_7610854640674177051/image/generate_image_4ff93add-b14c-4433-8945-26b47cc5fbd2.jpeg?sign=1803594905-d2b2977792-0-d5247432db8342b4457de86949e6cb9fabf1e6a6738ff1eb1e57fee88ed2fc5e',
    link: 'https://www.zhihu.com/people/your-id', // 知乎账号链接
  },
  productManager: {
    url: 'https://coze-coding-project.tos.coze.site/coze_storage_7610854640674177051/image/generate_image_ca5005ad-6dfd-4538-bbed-99b602bf20d1.jpeg?sign=1803594909-38218ca2ca-0-d262fd0d146adbc6061dea5ea2f5f57e2b65fba769d63e085341d8109ad95358',
    link: 'https://www.woshipm.com/u/your-id', // 人人都是产品经理链接
  },
  xiaohongshu: {
    url: 'https://coze-coding-project.tos.coze.site/coze_storage_7610854640674177051/image/generate_image_84384cc2-fabd-4340-91bd-a97acc9c0da6.jpeg?sign=1803594900-50045151b2-0-31f8b1c97a024e53f94f2ed6dfa2e8c911a6a1706f5b9996d010bc736ebb4330',
    link: 'https://www.xiaohongshu.com/user/profile/your-id', // 小红书链接
  },

  // ========== 产品展示 ==========
  webApp1: {
    url: 'https://coze-coding-project.tos.coze.site/coze_storage_7610854640674177051/image/generate_image_e958a4a0-b192-451b-9cd6-c0f9cc96c70d.jpeg?sign=1803594920-97e7863415-0-3c49850c50fb7c0cc8aa09cf94f2dffa805572297f7075fe99c66a2307a82c71',
    link: 'https://example.com/app1', // 第一个产品链接
  },
  webApp2: {
    url: 'https://coze-coding-project.tos.coze.site/coze_storage_7610854640674177051/image/generate_image_df0ad29b-a7b9-4bc9-8911-3e70bbb3d1fd.jpeg?sign=1803594923-7d1f78c595-0-f833fc0711ebcb375d5a60910384daf29f7c0dd1ce2b4dca951d7152eaf57557',
    link: 'https://example.com/app2', // 第二个产品链接
  },

  // ========== 作品集展示 ==========
  portfolio1: {
    url: 'https://coze-coding-project.tos.coze.site/coze_storage_7610854640674177051/image/generate_image_118aab0c-38f3-450b-8637-49d7ee1af6a6.jpeg?sign=1803594926-c949cb5850-0-259e1ba9e77a8b8089643199da48d60b51d16fa7eb4c68b37f39ffb3c9d33c66',
    link: 'https://example.com/portfolio1', // 第一个作品集链接
  },
  portfolio2: {
    url: 'https://coze-coding-project.tos.coze.site/coze_storage_7610854640674177051/image/generate_image_57aafeb2-c2bf-49a1-8b62-19603c99f770.jpeg?sign=1803594929-beab0ab1ea-0-9160e6e4c59031eeb4d345f918b8c7c06702a3431d2d5a5cce6c85d23af4c884',
    link: 'https://example.com/portfolio2', // 第二个作品集链接
  },
  portfolio3: {
    url: 'https://coze-coding-project.tos.coze.site/coze_storage_7610854640674177051/image/generate_image_a404dd30-b66b-4356-b73e-9b82823c39c9.jpeg?sign=1803594929-26522e016a-0-c667273d860f3ca13f4d17ff403bfbe6534ac4ffeca46d7f40ea918268a697aa',
    link: 'https://example.com/portfolio3', // 第三个作品集链接
  },
};
