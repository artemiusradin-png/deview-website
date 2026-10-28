# 任务清单：oil-gas-africa-middle-east-growth

## 概述

实现 oil-gas-africa-middle-east-growth 功能的任务分解。涵盖 5 个 Regional Hubs、25 个 Country Markets、10 个 Cross-Market Solutions、6 篇 Technical Authority Articles 与 4 个 Lead Magnets 的数据建模、页面渲染、路由拓扑及自动化验证。

---

## 交付物清单（Scope-lock）

- **预计新建文件数**: 12 个
- **预计修改文件数**: 4 个
- **预计新增/修改函数数**: 约 28 个
- **交付物逐项列举**:
  1. `lib/oil-gas/regions.ts`（新建，5 个区域枢纽数据与检索函数）
  2. `lib/oil-gas/markets.ts`（新建，25 个国家市场深度数据与检索函数）
  3. `lib/oil-gas/insights.ts`（新建，6 篇油气技术权威文章数据）
  4. `lib/oil-gas/resources.ts`（新建，4 个 Lead Magnet 资源与检查表数据）
  5. `lib/solutions/oil-gas-regional.ts`（新建，10 个跨市场油气解决方案数据）
  6. `app/[locale]/industries/oil-and-gas/regions/[region]/page.tsx`（新建，区域枢纽页面视图与元数据）
  7. `app/[locale]/industries/oil-and-gas/markets/[market]/page.tsx`（新建，国家市场页面视图与元数据）
  8. `app/[locale]/resources/[slug]/page.tsx`（新建，Lead Magnet 资源详情页与下载底稿）
  9. `app/[locale]/resources/page.tsx`（新建，资源中心列表页）
  10. `app/[locale]/insights/[slug]/page.tsx`（新建，技术洞察文章详情页）
  11. `app/[locale]/insights/page.tsx`（新建，技术洞察文章列表页）
  12. `docs/specs/oil-gas-africa-middle-east-growth/verification-report.md`（新建，验收与对账报告）
  13. `lib/solutions/index.ts`（修改，引入并注册 10 个跨市场新方案）
  14. `app/[locale]/industries/oil-and-gas/page.tsx`（修改，接入中东与非洲区域导航与市场索引）
  15. `app/sitemap.ts`（修改，注册 50 个新资产规范 URL）
  16. `components/SiteFooter.tsx`（修改，增加区域及核心国家市场外链索引）

---

## 任务列表

### 阶段 1: 准备工作与数据建模

- [ ] 1.1 创建区域枢纽与国家市场静态数据底座 `lib/oil-gas/regions.ts` 与 `lib/oil-gas/markets.ts`
  - **证据块**: 
    参考 `lib/oil-gas-cases.ts:1-25`:
    ```typescript
    export interface OilGasCaseStudy {
      slug: string;
      title: string;
      company: string;
      year: string;
      role: string;
      ...
    }
    ```
  - **涉及文件**: `lib/oil-gas/regions.ts` (预算 380 行), `lib/oil-gas/markets.ts` (预算 480 行；拆分为各市场条目与检索助手 `getMarketBySlug`, `getAllMarkets`)
  - _需求: FR-1_ ｜ _设计: 数据模型 1, 2_

- [ ] 1.2 创建 10 个跨市场方案数据 `lib/solutions/oil-gas-regional.ts` 并接入 `lib/solutions/index.ts`
  - **证据块**:
    参考 `lib/solutions/index.ts:18-35`:
    ```typescript
    export function validateSolution(solution: SolutionPage): string[] {
      const errors: string[] = [];
      if (!solution.assetId) errors.push(`${solution.slug}: missing assetId`);
      if (solution.modules.length < 6) errors.push(`${solution.slug}: requires >= 6 modules`);
      if (solution.faq.length < 4) errors.push(`${solution.slug}: requires >= 4 FAQs`);
      return errors;
    }
    ```
  - **涉及文件**: `lib/solutions/oil-gas-regional.ts` (预算 450 行), `lib/solutions/index.ts` (预算 40 行改动)
  - _需求: FR-2_ ｜ _设计: 数据模型 3_

- [ ] 1.3 创建技术权威文章与采购工具资源数据 `lib/oil-gas/insights.ts` 与 `lib/oil-gas/resources.ts`
  - **证据块**:
    参考 `docs/product/prd/product-requirements.md:280-297`:
    ```markdown
    | AR-01 | /en/insights/gcc-oil-gas-ai-data-residency | How should an energy company design AI...
    | LM-01 | /en/resources/upstream-production-system-requirements | Editable requirements workbook...
    ```
  - **涉及文件**: `lib/oil-gas/insights.ts` (预算 360 行), `lib/oil-gas/resources.ts` (预算 320 行)
  - _需求: FR-3_ ｜ _设计: 数据模型 4, 5_

---

### 阶段 2: 核心实现与页面路由渲染

- [ ] 2.1 构建区域枢纽页面 `app/[locale]/industries/oil-and-gas/regions/[region]/page.tsx`
  - **证据块**:
    参考 `app/[locale]/industries/oil-and-gas/page.tsx:20-45`:
    ```typescript
    export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
      ...
    }
    ```
  - **涉及文件**: `app/[locale]/industries/oil-and-gas/regions/[region]/page.tsx` (预算 350 行，拆解为独立组件卡片与元数据函数)
  - _需求: FR-1_ ｜ _设计: 文件结构_

- [ ] 2.2 构建国家市场深度页面 `app/[locale]/industries/oil-and-gas/markets/[market]/page.tsx`
  - **证据块**:
    参考 `docs/product/prd/product-requirements.md:495-515` 12 大防门页必选区块要求。
  - **涉及文件**: `app/[locale]/industries/oil-and-gas/markets/[market]/page.tsx` (预算 460 行，拆解为 BuyerProblemGrid、SovereigntyBlock、WorkflowsBlock、LocalContentBlock 及 FAQAccordion)
  - _需求: FR-1_ ｜ _设计: 文件结构_

- [ ] 2.3 构建技术洞察与采购资源落地页 `app/[locale]/insights/` 与 `app/[locale]/resources/`
  - **证据块**:
    参考 `app/[locale]/contact/page.tsx:1-50` 交互表单结构与 `components/forms/ContactForm.tsx`。
  - **涉及文件**: 
    - `app/[locale]/insights/[slug]/page.tsx` (预算 280 行)
    - `app/[locale]/insights/page.tsx` (预算 160 行)
    - `app/[locale]/resources/[slug]/page.tsx` (预算 320 行)
    - `app/[locale]/resources/page.tsx` (预算 180 行)
  - _需求: FR-3_ ｜ _设计: 文件结构_

- [ ] 2.4 更新全球油气枢纽与页脚链路拓扑 `app/[locale]/industries/oil-and-gas/page.tsx` 与 `components/SiteFooter.tsx`
  - **证据块**:
    参考 `components/SiteFooter.tsx:320-360` 行业与方案链接结构。
  - **涉及文件**: `app/[locale]/industries/oil-and-gas/page.tsx` (预算 60 行改动), `components/SiteFooter.tsx` (预算 50 行改动)
  - _需求: FR-1, FR-4_ ｜ _设计: 架构设计_

- [ ] 2.5 更新 Sitemap 规范注册 `app/sitemap.ts`
  - **证据块**:
    参考 `app/sitemap.ts:1-40` 动态条目生成逻辑。
  - **涉及文件**: `app/sitemap.ts` (预算 40 行改动)
  - _需求: FR-4_ ｜ _设计: 文件结构_

---

### 阶段 3: 集成测试与全量验收

- [ ] 3.1 对照验收标准核验全部 50 个新资产路由、类型安全与 SEO 规范
  - **证据块**:
    执行 `npx tsc --noEmit`、`npm run build`、`curl` 本地服务校验。
  - **涉及文件**: `docs/specs/oil-gas-africa-middle-east-growth/verification-report.md` (预算 120 行)
  - _需求: FR-1, FR-2, FR-3, FR-4, NFR-1, NFR-2, NFR-3_ ｜ _设计: 测试策略_

---

## 检查点

- [ ] 阶段 1 完成后：运行 TypeScript 校验确认静态数据契约与 `validateSolution` 校验 100% 通过。
- [ ] 阶段 2 完成后：启动本地 dev 服务，抽检 Regional Hub、Market 页面、Insights 文章与 Resources 页面，确保无渲染异常。
- [ ] 阶段 3 完成后：执行全量 `npm run build`，确认所有静态路由生成，无编译告警或 404 悬空死链。

---

## 需求覆盖矩阵

| 需求 ID | 设计章节 | 任务编号 | 状态 |
|---------|----------|----------|------|
| FR-1 | 数据模型 1, 2 与架构设计 | 1.1, 2.1, 2.2, 2.4, 3.1 | 未开始 |
| FR-2 | 数据模型 3 与文件结构 | 1.2, 3.1 | 未开始 |
| FR-3 | 数据模型 4, 5 与文件结构 | 1.3, 2.3, 3.1 | 未开始 |
| FR-4 | 架构设计与测试策略 | 2.4, 2.5, 3.1 | 未开始 |
| NFR-1 | 技术选型 | 2.1, 2.2, 3.1 | 未开始 |
| NFR-2 | 技术选型与数据模型 | 2.1, 2.2, 2.3, 2.5, 3.1 | 未开始 |
| NFR-3 | 测试策略 | 3.1 | 未开始 |

---

## 文件变更清单

| 文件 | 操作 | 行数预算 | 说明 |
|------|------|----------|------|
| `lib/oil-gas/regions.ts` | 新建 | 380 行 | 5 个区域枢纽数据模型与检索工具 |
| `lib/oil-gas/markets.ts` | 新建 | 480 行 | 25 个国家市场详细数据模型与检索工具 |
| `lib/oil-gas/insights.ts` | 新建 | 360 行 | 6 篇技术权威文章定义 |
| `lib/oil-gas/resources.ts` | 新建 | 320 行 | 4 个采购工具与检查清单定义 |
| `lib/solutions/oil-gas-regional.ts` | 新建 | 450 行 | 10 个跨市场油气解决方案数据 |
| `lib/solutions/index.ts` | 修改 | 40 行 | 注册 10 个新解决方案并集成校验 |
| `app/[locale]/industries/oil-and-gas/regions/[region]/page.tsx` | 新建 | 350 行 | 区域枢纽页面视图与元数据 |
| `app/[locale]/industries/oil-and-gas/markets/[market]/page.tsx` | 新建 | 460 行 | 国家市场深度页面视图与元数据 |
| `app/[locale]/resources/[slug]/page.tsx` | 新建 | 320 行 | Lead Magnet 详情与交互工作表 |
| `app/[locale]/resources/page.tsx` | 新建 | 180 行 | 资源中心索引列表 |
| `app/[locale]/insights/[slug]/page.tsx` | 新建 | 280 行 | 技术权威文章详情页 |
| `app/[locale]/insights/page.tsx` | 新建 | 160 行 | 技术权威文章列表页 |
| `app/[locale]/industries/oil-and-gas/page.tsx` | 修改 | 60 行 | 引入区域导航卡片与国家锚点 |
| `components/SiteFooter.tsx` | 修改 | 50 行 | 引入区域及重点国家直链 |
| `app/sitemap.ts` | 修改 | 40 行 | 自动收录 50 个新资产规范路由 |
| `docs/specs/oil-gas-africa-middle-east-growth/verification-report.md` | 新建 | 120 行 | 验收与对账报告 |

---

## 检查清单

- [x] 交付物清单（Scope-lock）已填，实现后数量已逐项核对
- [x] 每条任务标题是"动词+对象+约束"的具体描述，无宽泛标题
- [x] 每条任务含证据块（先读后写）
- [x] 每条任务标注涉及文件与行数预算，超 500 行的有拆分方案
- [x] 任务分阶段合理，粒度可在单次提交内完成
- [x] 每条任务都回链到 FR 与 design 章节
- [x] 需求覆盖矩阵已填，无遗漏的 FR
- [x] 阶段 3 包含"对照验收标准核验"
- [x] 全文无占位符（二元禁令）

