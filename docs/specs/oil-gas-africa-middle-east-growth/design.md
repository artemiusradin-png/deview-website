# 设计文档：oil-gas-africa-middle-east-growth

## 概述

Implement the Oil & Gas Africa and Middle East SEO Growth Programme from docs/product/prd/product-requirements.md: 5 Regional Hubs, 25 Country Market Pages, 10 Cross-Market Solution Pages, 6 Technical Authority Articles, 4 Lead-Magnet Checklists, dynamic routing isolation, anti-doorway quality compliance, schema and internal linking.

**对应需求:** FR-1, FR-2, FR-3, FR-4, NFR-1, NFR-2, NFR-3

---

## 技术方案

### 技术选型

| 类别 | 选择 | 理由 | 关联需求 |
|------|------|------|----------|
| 框架 | Next.js 15 (App Router) | 项目基线，支持静态参数预渲染 (SSG) 与高性能边缘缓存 | FR-1, NFR-1 |
| 样式 | CSS Modules + Tailwind CSS | 延续既有 editorial-precision 统一视觉风格与暗色卡片系统 | FR-1, FR-2 |
| 元数据与架构 | Schema.org JSON-LD | 注入 WebPage, BreadcrumbList, FAQPage, Article 等结构化实体 | FR-4, NFR-2 |
| 静态数据模型 | TypeScript 严格类型常量 | 保证 50 个资产定义与 100 个候选关键词映射的一致性与严谨编译校验 | FR-1, FR-2, FR-3 |

### 架构设计

```
                         [Global O&G Hub]
                  (/en/industries/oil-and-gas)
                             │
            ┌────────────────┴────────────────┐
            ▼                                 ▼
   [5 Regional Hubs]               [10 O&G Solutions]
 (/regions/<region>)              (/solutions/<slug>)
            │                                 ▲
            ▼                                 │
   [25 Market Pages] ─────────────────────────┤
  (/markets/<market>)                         │
            │                                 │
            ├───────────────┬─────────────────┘
            ▼               ▼
   [6 Authority Articles]  [4 Lead Magnets]
     (/insights/<slug>)   (/resources/<slug>)
```

---

## 数据模型

### 1. Regional Hub (`lib/oil-gas/regions.ts`)
```typescript
export interface RegionalHub {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  metaDescription: string;
  executiveSummary: string;
  operatingContext: {
    operators: string;
    assetTypes: string;
    procurementRegime: string;
    hostingAndData: string;
    connectivity: string;
  };
  keyWorkflows: Array<{
    title: string;
    description: string;
    solutionSlug: string;
  }>;
  countries: Array<{
    slug: string;
    name: string;
    rationale: string;
    tier: 1 | 2 | 3;
  }>;
  deploymentPatterns: Array<{
    name: string;
    suitability: string;
    description: string;
  }>;
  sources: Array<{
    title: string;
    organization: string;
    date: string;
    url: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}
```

### 2. Country Market Page (`lib/oil-gas/markets.ts`)
```typescript
export interface MarketPageData {
  slug: string;
  name: string;
  tier: 1 | 2 | 3;
  regionSlug: string;
  title: string;
  metaDescription: string;
  marketOpening: string;
  buyerProblems: Array<{
    role: string;
    problem: string;
    impact: string;
  }>;
  priorityWorkflows: Array<{
    title: string;
    description: string;
    solutionSlug: string;
  }>;
  operatingEnvironment: {
    assetContext: string;
    connectivity: string;
    dataGovernance: string;
    partnerEcosystem: string;
  };
  deploymentAndSovereignty: {
    legalMandate: string;
    buyerPreference: string;
    recommendedArchitecture: string;
  };
  localContentProcurement: {
    statutoryFramework: string;
    technologyTransfer: string;
    citation: string;
  };
  solutions: Array<{
    title: string;
    slug: string;
    annotation: string;
  }>;
  sources: Array<{
    title: string;
    publisher: string;
    date: string;
    url: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}
```

### 3. Cross-Market Solutions (`lib/solutions/oil-gas-regional.ts`)
扩展现有 `SolutionPage` 契约，补齐 SP-01 到 SP-10 的深度技术参数、架构模块与 FAQ。

### 4. Technical Authority Articles (`lib/oil-gas/insights.ts`)
定义 AR-01 到 AR-06 的技术问答、决策矩阵、架构要点及商业转换链接。

### 5. Lead Magnets (`lib/oil-gas/resources.ts`)
定义 LM-01 到 LM-04 的免门槛概览、评分体系与下载表单上下文。

---

## 文件结构

```
deview-website/
├── lib/
│   ├── oil-gas/
│   │   ├── regions.ts             # 5 个区域枢纽数据定义 (RH-01 ~ RH-05)
│   │   ├── markets.ts             # 25 个国家市场数据定义 (CP-01 ~ CP-25)
│   │   ├── insights.ts            # 6 篇技术权威文章定义 (AR-01 ~ AR-06)
│   │   └── resources.ts           # 4 个采购工具与资源定义 (LM-01 ~ LM-04)
│   └── solutions/
│       ├── oil-gas-regional.ts    # 10 个跨市场油气解决方案数据 (SP-01 ~ SP-10)
│       └── index.ts               # 合并导出并执行 Solution 校验
├── app/[locale]/
│   ├── industries/oil-and-gas/
│   │   ├── page.tsx               # 更新增加中东与非洲区域导航版块
│   │   ├── regions/[region]/
│   │   │   └── page.tsx           # 区域枢纽页面 (RH) 视图与元数据
│   │   └── markets/[market]/
│   │   │   └── page.tsx           # 国家市场页面 (CP) 视图与元数据
│   ├── insights/
│   │   └── [slug]/page.tsx        # 增强支持油气权威文章与结构化 Article JSON-LD
│   ├── resources/
│   │   └── [slug]/page.tsx        # 落地 Lead Magnet 资源页面与表单提交
│   └── sitemap.ts                 # 注册 50 个全新规范索引 URL
└── components/
    └── SiteFooter.tsx             # 补充区域及主要市场链接集群
```

---

## 设计决策

### 决策 1: 命名空间绝对隔离（关联需求: FR-1）
**问题**: 现有路由已存在 `/en/industries/oil-and-gas/[slug]` 用于历史案例研究（如 `tomskneft-...`, `lukoil-...`），如果直接使用国家 slug 会发生路由冲突。
**选项**:
1. 将区域和国家放在平级动态路由内部，依靠字典或数据库查找。
2. 明确划分子命名空间 `/regions/<region>` 与 `/markets/<market>`。
**决策**: 选择选项 2。
**理由**: 路由边界彻底解耦，永不发生 slug 碰撞；语义清晰，符合 SEO 分类层级规范。

### 决策 2: 防门页质检与真实证据绑定（关联需求: FR-1, FR-2）
**问题**: 25 个国家市场极易退化为模板化门页，遭搜索引擎降权或用户反感。
**选项**:
1. 采用变量插值快速生成 25 个国家页面。
2. 为每个国家编写专属的 Buyer Problem Map、Operating Environment、Sovereignty Policy 和 Local Content Statutory Framework。
**决策**: 选择选项 2。
**理由**: 坚决贯彻 PRD 质量红线，每个国家至少拥有 40% 的实质差异内容与官方/权威信源引用。

---

## 测试策略

1. **类型检查**: 运行 `npx tsc --noEmit`，确保所有数据模型、路由 Params 与 Props 100% 严格类型匹配。
2. **构建验证**: 运行 `npm run build`，核验静态页面生成清单，确认 50 个新资产及各语言变体全部正常预渲染。
3. **路由碰撞测试**: 校验历史案例路由（如 `/en/industries/oil-and-gas/enerquest`）与新路由无任何冲突或破坏。
4. **代码审查**: 调用 MCP Probe Kit 的 `code_review` 进行全方位质量审计。

---

## 风险评估

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| 数据量庞大导致构建体积或编译时长增加 | 低 | 采用清晰的模块分片，静态字典常驻内存，无需外部数据库查询 |
| 误写未经验证的当地机构背书 | 高 | 严格按照 PRD 既定事实清单，仅声明现有工程能力与通用部署经验，标注信源 |
| 遗漏 sitemap 或 canonical 导致抓取异常 | 中 | 在 sitemap.ts 中统一自动化加载 markets 与 regions 数组 |

---

## 检查清单

- [x] 技术方案与现有架构一致
- [x] requirements.md 中每条 FR 都被本设计覆盖
- [x] 文件结构对照真实代码库，路径可定位
- [x] 数据模型 / 接口契约清晰（含类型与约束）
- [x] 关键设计决策已记录并关联需求
- [x] 测试策略可验证验收标准

