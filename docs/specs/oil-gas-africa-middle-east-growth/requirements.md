# 需求文档：oil-gas-africa-middle-east-growth

## 功能概述

Implement the Oil & Gas Africa and Middle East SEO Growth Programme from docs/product/prd/product-requirements.md: 5 Regional Hubs, 25 Country Market Pages, 10 Cross-Market Solution Pages, 6 Technical Authority Articles, 4 Lead-Magnet Checklists, dynamic routing isolation, anti-doorway quality compliance, schema and internal linking.
面向中东和非洲 25 个石油与天然气重点市场的国家石油公司 (NOC)、国际运营商 (IOC)、合资公司 (JV) 和 EPC 承包商工程与技术决策者，构建结构化、高权威、深度的需求生成体系与非侵入式架构内容。

## 历史经验与坑（来自记忆库）

- **可复用经验**: 
  - 严谨的 Next.js App Router 动静态路由隔离设计，采用 `/regions/<region>` 与 `/markets/<market>` 独立命名空间，避免与已存在的 `/industries/oil-and-gas/[slug]` 历史案例路由冲突。
  - 既有 SolutionPage 校验体系（`lib/solutions/index.ts`），严格遵循 >=6 个模块、>=4 个 FAQ、H1 包含关键词、字数与 assetId 契约。
  - 双语字典与元数据生成器，支持 BreadcrumbList、WebPage、FAQPage 及 Article 结构化数据。
- **必须规避的坑**:
  - 严禁生产模板套用式的“门页”（doorway pages）；每个国家和区域页面必须具备独一无二的操作环境、买方问题、监管/本地化内容合规引用与真实的证据边界。
  - 严禁虚构本地办事处、未经核实的当地法人资格、虚构合规认证或客户背书。

## 术语定义

- **Regional Hub (RH)**: 区域枢纽页面，连接区域内各国的宏观运营背景、合规环境、共享基础设施及解决方案。
- **Country Market Page (CP)**: 国家市场页面，基于国家独特的油气地质、基础设施、主权托管与本地内容（Local Content）政策构建的定制化方案入口。
- **Cross-Market Solution (SP)**: 跨市场解决方案页面，针对油气行业具体技术痛点（如 AFE、工期控制、数据驻留、OSDU 等）的深度技术规格页。
- **Authority Article (AR)**: 技术权威洞察文章，回答决策者在技术架构选型阶段的核心疑问。
- **Lead Magnet (LM)**: 实用型采购/架构评估清单与工作底稿。

---

## 范围边界

**In Scope（本次要做）**
- 5 个 Regional Hub 路由与数据定义（Middle East, North Africa, West & Central Africa, East Africa, Southern Africa）。
- 25 个 Country Market 页面与结构化数据模型（涵盖 Tier 1/2/3，重点交付 Tier 1 深度配置）。
- 10 个 Cross-market Solution 页面定义与 `lib/solutions` 契约集成。
- 6 个 Technical Authority Articles 页面与元数据。
- 4 个 Lead Magnet 页面与可下载/交互评估底稿。
- 更新油气全球枢纽 `/en/industries/oil-and-gas` 与页脚 `SiteFooter`，构建网状拓扑权重流向。
- 更新 sitemap.ts 与 JSON-LD 结构化数据。

**Out of Scope（本次不做，避免过度实现）**
- 阿拉伯语、法语、葡萄牙语等本地化多语言直译（待 Wave 验证门禁后再行开启）。
- 虚构未经核实的第三方合作伙伴认证或实体分支机构。

---

## 需求列表

### FR-1: 区域枢纽与国家市场路由及数据隔离 (RH-01~05, CP-01~25)
**优先级:** Must (MoSCoW)
**用户故事:** 作为中东/非洲油气企业技术决策者，我希望通过搜索引擎直达针对我们所在地区/国家专门编制的操作环境与方案页，以便评估技术可行性与主权合规性。
#### 验收标准（EARS）
1. WHEN 用户访问 `/en/industries/oil-and-gas/regions/[region]` THEN 系统 SHALL 渲染包含区域运营特性、国家导航模块、优先工作流与 FAQ 的 Regional Hub 视图，且不干扰现有案例路由。
2. WHEN 用户访问 `/en/industries/oil-and-gas/markets/[market]` THEN 系统 SHALL 渲染对应国家具体资产环境、主权/托管要求、买方痛点矩阵与权威引用的 Market 页面。
3. IF 访问的 region 或 market 不在合法白名单内 THEN 系统 SHALL 返回 404 notFound()。

### FR-2: 跨市场油气解决方案扩展 (SP-01~10)
**优先级:** Must (MoSCoW)
**用户故事:** 作为项目总监或数字化负责人，我希望深入了解针对 GCC 工控、中东承包商协同、非洲合资 AFE 及离线生产报表等场景的专属解决方案，以便获取可落地的架构依据。
#### 验收标准（EARS）
1. WHEN 用户访问 `/en/solutions/<slug>`（如 `sovereign-industrial-ai-gcc-energy` 或 `africa-upstream-production-reporting`）THEN 系统 SHALL 渲染通过 `validateSolution` 校验的完整方案页，包含架构图、功能模块与 FAQ。
2. WHILE 遍历所有新增解决方案 THEN 所有条目 SHALL 拥有唯一 assetId，并在 solutions 目录与分类筛选中正常展示。

### FR-3: 技术权威洞察与采购工具/资源落地 (AR-01~06, LM-01~04)
**优先级:** Must (MoSCoW)
**用户故事:** 作为采购主管或 IT 架构师，我希望获取可下载的工作表、架构检查清单与中立的权威技术分析，以便在内部评审会议中直接使用。
#### 验收标准（EARS）
1. WHEN 用户访问 `/en/insights/<slug>`（如 `oil-gas-it-ot-data-platform-architecture`）THEN 系统 SHALL 呈现权威深度技术文章，并提供指向对应方案页和资源清单的上下文引导。
2. WHEN 用户访问 `/en/resources/<slug>`（如 `upstream-production-system-requirements`）THEN 系统 SHALL 呈现免门槛的 HTML 检查清单概览及获取完整可编辑工作底稿的表单入口。

### FR-4: 站点拓扑链接、Sitemap 与结构化数据验证
**优先级:** Must (MoSCoW)
**用户故事:** 作为搜索引擎蜘蛛与合规审查人员，我希望获得清晰的 canonical、面包屑导航与 JSON-LD 结构化数据，确保所有新资产被索引且无死链。
#### 验收标准（EARS）
1. WHEN 构建 sitemap.ts THEN 系统 SHALL 包含所有新增的 5 个区域、25 个国家市场、10 个解决方案、6 篇洞察文章与 4 个资源页面的规范 URL。
2. WHEN 执行 `npm run build` 和类型检查 THEN 系统 SHALL 零错误通过，且没有打破现有 `/en/industries/oil-and-gas/[slug]` 案例路由。

---

## 非功能需求

- **NFR-1（性能）**: 所有动态页面服务端渲染（SSR/SSG）支持 `generateStaticParams` 静态预生成，首屏加载保持在 1.5s 以内。
- **NFR-2（SEO规范）**: 每个资产页面必须生成完备的 OpenGraph、Twitter card、canonical URL 以及符合 Schema.org 的 JSON-LD（WebPage、BreadcrumbList、FAQPage、Article）。
- **NFR-3（代码质量）**: TypeScript 全局严格类型检查无 any 逃逸，通过 `next lint` 与 `npm run build`。

---

## 依赖关系

- 依赖现有 `lib/solutions/` 架构与验证工具。
- 依赖现有 `components/Header.tsx` 与 `components/SiteFooter.tsx` 导航底座。
- 依赖 Next.js 15 App Router 路由协议。

---

## 检查清单

- [x] 已消化记忆库的历史经验，并逐条规避「历史坑」
- [x] 需求覆盖核心场景与边界场景
- [x] 每条需求有唯一 ID（FR-1~FR-4），将在 design.md / tasks.md 中被引用
- [x] 验收标准使用 EARS 格式且可测
- [x] 已标注优先级（MoSCoW）
- [x] 范围边界（In/Out of Scope）明确
- [x] 非功能需求明确、尽量可量化
- [x] 依赖关系完整

