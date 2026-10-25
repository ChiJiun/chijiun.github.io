import type { ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#0b0f14', text: '#e8edf2', accent: '#f2b33d' },
  fonts: {
    display: '"Fira Code", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    body: 'system-ui, -apple-system, "Segoe UI", "Noto Sans TC", "Microsoft JhengHei", sans-serif',
  },
  typeScale: { hero: 150, body: 34 },
  radius: 14,
};

const muted = '#8b96a3';
const subtle = '#59636f';
const line = '#263040';
const panel = '#10161e';
const PAD = 140;

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';
export const transition: SlideTransition = {
  duration: 200,
  exit: { duration: 140, easing: EASE_IN, keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-4px)' }] },
  enter: { duration: 200, delay: 80, easing: EASE_OUT, keyframes: [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }] },
};

const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
} as const;

const page = { ...fill, padding: `120px ${PAD}px` } as const;

// Instrument backdrop shared by every page: fine grid, warm glow, corner ticks.
const Backdrop = () => (
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }} aria-hidden>
    <defs>
      <pattern id="hg" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M48,0 H0 V48" stroke="#161c25" strokeWidth="1" fill="none" />
      </pattern>
      <radialGradient id="hglow" cx="0.85" cy="0.1" r="0.6">
        <stop offset="0" stopColor="#f2b33d" stopOpacity="0.14" />
        <stop offset="1" stopColor="#f2b33d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#hg)" />
    <rect width="1920" height="1080" fill="url(#hglow)" />
    <g stroke="#f2b33d" strokeOpacity="0.8" strokeWidth="2" fill="none">
      <path d="M40,64 V40 H64" />
      <path d="M1856,40 H1880 V64" />
      <path d="M1880,1016 V1040 H1856" />
      <path d="M64,1040 H40 V1016" />
    </g>
  </svg>
);

const Eyebrow = ({ children }: { children: string }) => (
  <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 24, letterSpacing: '0.22em', color: 'var(--osd-accent)', textTransform: 'uppercase' }}>
    {children}
  </div>
);

const Heading = ({ children }: { children: string }) => (
  <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 700, margin: '16px 0 0', lineHeight: 1.15 }}>{children}</h2>
);

const Mono = ({ children }: { children: ReactNode }) => (
  <span style={{ fontFamily: 'var(--osd-font-display)' }}>{children}</span>
);

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '2px solid var(--osd-accent)' }}>
    {children}
  </a>
);

const Fact = ({ label, children }: { label: string; children: ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 40, alignItems: 'baseline', padding: '26px 0', borderBottom: `1px solid ${line}` }}>
    <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 24, letterSpacing: '0.12em', color: 'var(--osd-accent)', textTransform: 'uppercase' }}>{label}</div>
    <div style={{ fontSize: 36, lineHeight: 1.5 }}>{children}</div>
  </div>
);

const ProjectCard = ({ repo, claim, part }: { repo: string; claim: string; part: string }) => (
  <a
    href={`https://github.com/ChiJiun/${repo}`}
    target="_blank"
    rel="noreferrer"
    style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: '34px 38px', background: panel, border: `1px solid ${line}`, borderRadius: 'var(--osd-radius)', color: 'inherit', textDecoration: 'none' }}
  >
    <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 32, fontWeight: 700, color: 'var(--osd-accent)' }}>{repo} ↗</div>
    <div style={{ fontSize: 32, lineHeight: 1.45 }}>{claim}</div>
    <div style={{ fontSize: 26, lineHeight: 1.5, color: muted }}>{part}</div>
  </a>
);

const AlsoRow = ({ repo, what, part }: { repo: string; what: string; part: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '500px 1fr 440px', gap: 40, alignItems: 'baseline', padding: '22px 0', borderBottom: `1px solid ${line}` }}>
    <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 28 }}>
      <Link href={`https://github.com/ChiJiun/${repo}`}>{repo}</Link>
    </div>
    <div style={{ fontSize: 30 }}>{what}</div>
    <div style={{ fontSize: 28, color: muted }}>{part}</div>
  </div>
);

const ContactRow = ({ label, href, text }: { label: string; href: string; text: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 40, alignItems: 'baseline', padding: '24px 0', borderBottom: `1px solid ${line}` }}>
    <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 24, letterSpacing: '0.12em', color: subtle, textTransform: 'uppercase' }}>{label}</div>
    <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 44 }}>
      <Link href={href}>{text}</Link>
    </div>
  </div>
);

// ------------------------------------------------------------------------------------------
const Cover: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: `0 ${PAD + 40}px` }}>
    <Backdrop />
    <div style={{ position: 'relative' }}>
      <Eyebrow>chijiun.github.io · personal site</Eyebrow>
      <h1 style={{ fontSize: 'var(--osd-size-hero)', fontWeight: 800, margin: '28px 0 0', lineHeight: 1.05, letterSpacing: '0.04em' }}>翁祺鈞</h1>
      <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 56, fontWeight: 700, color: muted, marginTop: 12 }}>Chi-Jiun Wong</div>
      <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 48 }}>
        <div style={{ width: 4, height: 64, background: 'var(--osd-accent)', borderRadius: 2 }} />
        <div style={{ fontSize: 30, lineHeight: 1.45 }}>
          <div style={{ color: muted }}>這個世界就是一個巨大的草台班子，</div>
          <div style={{ color: 'var(--osd-accent)' }}>所以弄假直到成真。</div>
        </div>
      </div>
      <p style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.5, margin: '52px 0 0', maxWidth: 1400 }}>
        中央大學資工系，輔系財金。做可驗證的機器學習原型，也做跑在免費額度上的小工具。
      </p>
      <p style={{ fontSize: 26, color: subtle, margin: '40px 0 0' }}>
        <Mono>→ / Space</Mono> 或點畫面右側：下一頁　·　<Mono>←</Mono> 或點左側：上一頁
      </p>
    </div>
  </div>
);

const About: Page = () => (
  <div style={page}>
    <Backdrop />
    <div style={{ position: 'relative' }}>
      <Eyebrow>01 · about</Eyebrow>
      <Heading>關於我</Heading>
      <div style={{ marginTop: 56, borderTop: `1px solid ${line}` }}>
        <Fact label="school">國立中央大學 資訊工程學系，輔系財務金融</Fact>
        <Fact label="research">國科會大專生研究計畫：聯邦學習的可驗證差分隱私</Fact>
        <Fact label="side work">交易回測、放貸機器人、監測服務，盡量跑在免費額度上</Fact>
        <Fact label="rule">每個數字都來自連結的 repo，旁邊寫著它的限制；團隊專案只寫我負責的部分</Fact>
      </div>
    </div>
  </div>
);

const Research: Page = () => (
  <div style={page}>
    <Backdrop />
    <div style={{ position: 'relative' }}>
      <Eyebrow>02 · research</Eyebrow>
      <Heading>證明每個 client 更新都有正確地裁剪、加噪</Heading>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 64 }}>
        <div style={{ padding: '40px 44px', background: panel, border: `1px solid ${line}`, borderRadius: 'var(--osd-radius)' }}>
          <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 96, fontWeight: 700, color: 'var(--osd-accent)', lineHeight: 1.1 }}>150/150</div>
          <div style={{ fontSize: 32, lineHeight: 1.5, marginTop: 20 }}>合成資料上，逐次更新的 Halo2 證明全數通過</div>
        </div>
        <div style={{ padding: '40px 44px', background: panel, border: `1px solid ${line}`, borderRadius: 'var(--osd-radius)' }}>
          <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 96, fontWeight: 700, color: muted, lineHeight: 1.1 }}>300/300</div>
          <div style={{ fontSize: 32, lineHeight: 1.5, marginTop: 20 }}>界內攻擊同樣通過驗證：證明只保證不越界，不保證更新是善意的</div>
        </div>
      </div>
      <p style={{ fontSize: 30, color: muted, margin: '56px 0 0', lineHeight: 1.5 }}>
        <Link href="https://github.com/ChiJiun/zk-verifiable-dp-fl"><Mono>zk-verifiable-dp-fl</Mono></Link>　·　Halo2 / EZKL 零知識證明
      </p>
    </div>
  </div>
);

const SelectedWork: Page = () => (
  <div style={{ ...page, paddingTop: 100, paddingBottom: 100 }}>
    <Backdrop />
    <div style={{ position: 'relative' }}>
      <Eyebrow>03 · selected work</Eyebrow>
      <Heading>精選作品</Heading>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 44 }}>
        <ProjectCard repo="bitfinex-lending-bot" claim="依實際成交分層掛單" part="限制：250 小時內從未觸及 FRR" />
        <ProjectCard repo="mvdis-watch" claim="36 個監理站 × 10 種照類，共 360 組場次餘額" part="全部跑在一個 Cloudflare Worker 免費額度上" />
        <ProjectCard repo="StatsDiscordBot" claim="統計作業回饋機器人，約 150 位學生使用" part="我負責 bot 核心：登入、HTML 解析、LLM 呼叫、儲存與 Drive 同步" />
        <ProjectCard repo="aws-hoyabit" claim="加密貨幣市場分析 agent" part="我負責 agent loop、平行預取、問題路由、15 個資料工具與報告 schema" />
      </div>
    </div>
  </div>
);

const Also: Page = () => (
  <div style={page}>
    <Backdrop />
    <div style={{ position: 'relative' }}>
      <Eyebrow>04 · also</Eyebrow>
      <Heading>其他專案</Heading>
      <div style={{ marginTop: 56, borderTop: `1px solid ${line}` }}>
        <AlsoRow repo="NCU_AI_Guidance" what="中央大學選課諮詢平台（團隊）" part="部署、Google 登入、對話紀錄" />
        <AlsoRow repo="forecasting-fx-transformer" what="Fork 學長的匯率預測專案" part="加入無洩漏的滾動回測" />
        <AlsoRow repo="usdt-invoice-pulse" what="USDT/TWD 手續費與電子發票儀表板" part="全部" />
        <AlsoRow repo="worldquant" what="WorldQuant BRAIN alpha 研究迴圈" part="全部" />
      </div>
    </div>
  </div>
);

const Contact: Page = () => (
  <div style={{ ...page, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Backdrop />
    <div style={{ position: 'relative' }}>
      <Eyebrow>05 · contact</Eyebrow>
      <Heading>找到我</Heading>
      <div style={{ marginTop: 56, borderTop: `1px solid ${line}` }}>
        <ContactRow label="github" href="https://github.com/ChiJiun" text="github.com/ChiJiun" />
        <ContactRow label="links" href="https://linktr.ee/0311gino" text="linktr.ee/0311gino" />
      </div>
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: 'Chi-Jiun Wong · 翁祺鈞',
  createdAt: '2026-10-25T16:28:46.089Z',
};
export default [Cover, About, Research, SelectedWork, Also, Contact] satisfies Page[];
