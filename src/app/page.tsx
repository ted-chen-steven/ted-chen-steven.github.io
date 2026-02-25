'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Languages } from 'lucide-react';
import { translations } from '@/lib/content';
import { imageConfigs } from '@/lib/images';

// 翻转卡片组件
interface FlipCardProps {
  image: string;
  title: string;
  desc: string;
  link: string;
  onClickSound: () => void;
}

function FlipCard({ image, title, desc, link, onClickSound }: FlipCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    onClickSound();
    // 跳转到链接
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      className="group relative w-full h-80 cursor-pointer perspective-1000"
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        {/* 正面 */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border border-border/50 shadow-xl">
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-card">
            <div className="relative w-32 h-32 mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-lg"></div>
              <img
                src={image}
                alt={title}
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/30"
              />
            </div>
            <h3 className="text-xl font-bold text-center text-foreground">
              {title}
            </h3>
          </div>
        </div>

        {/* 背面 */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border border-border/50 shadow-xl rotate-y-180 bg-gradient-to-br from-primary/20 to-accent/20">
          <div className="w-full h-full flex flex-col items-center justify-center p-6">
            <h3 className="text-lg font-bold text-center mb-3 text-foreground">
              {title}
            </h3>
            <p className="text-center text-muted-foreground leading-relaxed text-sm mb-4">
              {desc}
            </p>
            <span className="text-xs text-primary/70 font-semibold">
              点击访问 →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [isDark, setIsDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const t = translations[lang];

  // 播放点击声效
  const playClickSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  // 切换语言
  const toggleLanguage = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  // 切换主题
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    setIsMounted(true);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* 右上角功能按钮 */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => {
            toggleLanguage();
            playClickSound();
          }}
          className="p-3 rounded-full bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 hover:scale-110 transition-all duration-300 shadow-lg"
          aria-label="Toggle Language"
        >
          <Languages className="w-5 h-5 text-primary" />
        </button>
        <button
          onClick={() => {
            toggleTheme();
            playClickSound();
          }}
          className="p-3 rounded-full bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 hover:scale-110 transition-all duration-300 shadow-lg"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
        </button>
      </div>

      {/* 第一部分：关于我 - 温暖柔和的粉色背景 */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 via-orange-50/60 to-background opacity-90"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl w-full text-center">
          {/* 头像 */}
          <div className="mb-8 inline-block">
            <div
              onClick={() => {
                playClickSound();
                window.open(imageConfigs.avatar.link, '_blank', 'noopener,noreferrer');
              }}
              className="relative w-48 h-48 mx-auto cursor-pointer group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 to-accent/40 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                src={imageConfigs.avatar.url}
                alt="Avatar"
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 group-hover:border-primary/60 transition-all duration-300 shadow-2xl"
              />
            </div>
          </div>

          {/* 名字和角色 */}
          <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{t.role}</p>

          {/* 联系方式 */}
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-semibold">{t.contact}:</span>
            </div>
            <div className="text-sm bg-card/50 px-4 py-2 rounded-full border border-border/50">
              {t.email}
            </div>
            <div className="text-sm bg-card/50 px-4 py-2 rounded-full border border-border/50">
              {t.phone}
            </div>
            <div className="text-sm bg-card/50 px-4 py-2 rounded-full border border-border/50">
              {t.location}
            </div>
          </div>

          {/* 个人评价 */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-xl max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.bio}
            </p>
          </div>

          {/* 导航链接 */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {[
              { key: 'aboutMe', id: 'about' },
              { key: 'myProjects', id: 'projects' },
              { key: 'products', id: 'products' },
              { key: 'portfolio', id: 'portfolio' },
            ].map((nav) => (
              <a
                key={nav.key}
                href={`#${nav.id}`}
                onClick={playClickSound}
                className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300 font-semibold"
              >
                {t[nav.key as keyof typeof t]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 第二部分：实践项目 - 暖橘色与藏蓝色 */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-blue-200/20 to-background opacity-90"></div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-orange-300/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300/25 rounded-full blur-3xl"></div>
        <div className="relative max-w-6xl w-full">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
            {t.myProjects}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.zhihu,
                desc: t.zhihuDesc,
                image: imageConfigs.zhihu.url,
                link: imageConfigs.zhihu.link,
              },
              {
                title: t.productManager,
                desc: t.productManagerDesc,
                image: imageConfigs.productManager.url,
                link: imageConfigs.productManager.link,
              },
              {
                title: t.xiaohongshu,
                desc: t.xiaohongshuDesc,
                image: imageConfigs.xiaohongshu.url,
                link: imageConfigs.xiaohongshu.link,
              },
            ].map((project, index) => (
              <FlipCard
                key={index}
                title={project.title}
                desc={project.desc}
                image={project.image}
                link={project.link}
                onClickSound={playClickSound}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 第三部分：产品展示 - 浅黄色与粉色 */}
      <section id="products" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-pink-100/25 to-background opacity-90"></div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-yellow-200/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-200/25 rounded-full blur-3xl"></div>
        <div className="relative max-w-6xl w-full">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-600 to-pink-500 bg-clip-text text-transparent">
            {t.products}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: t.webApp1,
                desc: t.webApp1Desc,
                image: imageConfigs.webApp1.url,
                link: imageConfigs.webApp1.link,
              },
              {
                title: t.webApp2,
                desc: t.webApp2Desc,
                image: imageConfigs.webApp2.url,
                link: imageConfigs.webApp2.link,
              },
            ].map((product, index) => (
              <FlipCard
                key={index}
                title={product.title}
                desc={product.desc}
                image={product.image}
                link={product.link}
                onClickSound={playClickSound}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 第四部分：作品集展示 - 浅蓝色与米白色 */}
      <section id="portfolio" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-orange-50/25 to-background opacity-90"></div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-blue-200/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-100/25 rounded-full blur-3xl"></div>
        <div className="relative max-w-6xl w-full">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent">
            {t.portfolio}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.portfolio1,
                desc: t.portfolio1Desc,
                image: imageConfigs.portfolio1.url,
                link: imageConfigs.portfolio1.link,
              },
              {
                title: t.portfolio2,
                desc: t.portfolio2Desc,
                image: imageConfigs.portfolio2.url,
                link: imageConfigs.portfolio2.link,
              },
              {
                title: t.portfolio3,
                desc: t.portfolio3Desc,
                image: imageConfigs.portfolio3.url,
                link: imageConfigs.portfolio3.link,
              },
            ].map((portfolio, index) => (
              <FlipCard
                key={index}
                title={portfolio.title}
                desc={portfolio.desc}
                image={portfolio.image}
                link={portfolio.link}
                onClickSound={playClickSound}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50 bg-background/50">
        <p>{t.footer.replace('{name}', t.name)}</p>
      </footer>
    </div>
  );
}
