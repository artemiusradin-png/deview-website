<!-- mcp-probe:context begin — auto-generated; re-run init_project_context updates this block only -->
<!-- mcp-probe:context-version: 4.1.1 -->
## MCP (call first)
Requires mcp-probe-kit. Before coding, read Skill: @.agents/skills/mcp-probe-kit/SKILL.md (or [When to call MCP](.agents/skills/mcp-probe-kit/SKILL.md)) (Skill file auto-created on first MCP call).

- User says only “continue / start / keep going” → **call `resume_plan` first**; pass `plan_id` when known, otherwise pass only `project_root` to recover the latest active/blocked Plan. Do not explore with Bash, call `workflow`, or restart with `start_*` until no resumable Plan is confirmed. When recovery returns `mustContinue=true`, do not stop after reporting recovery; execute `nextStep/nextTool` immediately, call `plan_heartbeat` after each step, and continue until blocked, cancelled, or converged
- Unsure which MCP → `workflow` (returns a tool-selection guide only; the Agent decides, and clarifies only when needed)
- MCP tools missing from this Agent session → follow the Skill CLI fallback and call `.mcp-probe-kit/bin/probe.*`; do not ask the user to install it
- Feature → `start_feature` (searches memory first)
- Bug → `start_bugfix` (searches memory first)
- UI → `start_ui` (searches memory first)
- Unfamiliar code / impact → `code_insight` (context / impact / auto)
- Missing context → `init_project_context`
- Commit → `gencommit`

Context: before coding read [project-context](./docs/project-context.md) (links to `docs/project-context/`)
Graph: read [latest](./docs/graph-insights/latest.md) before large changes; refresh `code_insight` mode=auto save_to_docs=true
History Session (default ON; disable with `MCP_HISTORY_SESSION=0|false|off`; see Skill “History Session” rules):
- **Write**: bootstrap at conversation start (server mints `hs_<uuid>` when the host has no session id — do not share `project-active`); checkpoint before each final reply (echo prior `session_key`/`expected_path` + `raw_user_input`/`user_intent`)
- **Minimum checkpoint**: fill `findings`/`decisions`/`files_changed`/`tests`/`runtime_state`/`next_actions` (use explicit placeholders when empty — no bare empty arrays)
- **Read**: bounded bootstrap state first; `history_session_search` → `history_session_read` for exact older context
- Archives under `docs/history-session/` (gitignore; do not commit); soft-rotate on limits; separate from Memory/Qdrant; “continue” with an open Plan → `resume_plan` first
Memory (requires MEMORY_* env):
- Search: `start_*` auto-injects full memory hits; use `search_memory` mid-task; `read_memory_asset` for a specific id
- Store: do NOT use source_project/source_path for cross-repo pools; put paths in content; write keyword-rich summary
- Update: fix existing entries in place with `update_memory_asset` by asset_id (preserves ID)
- Cleanup: remove stale/wrong/duplicate entries with `delete_memory_asset` (confirm via `read_memory_asset` first)
- After each verification, prepare successful or negative memory candidates and record them in `plan_heartbeat`; persist with `memorize_asset` only after `converge` passes
- For reusable feature/UI output, prepare a candidate first; after convergence persist it as `pattern`/`component`
<!-- mcp-probe:context end -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deploy hygiene

Only `main` deploys to **deviewai.com** (Vercel project `deview-website`). Every other branch gets a **preview** URL of the form `deview-website-git-<branch>-artems-projects-072681ab.vercel.app` — these look identical to production but are NOT production. When the user reports "the site shows X" or asks to revert a recent change, always:

1. Verify the claim against `deviewai.com` directly (`curl -s https://deviewai.com | grep <marker>`), not against a preview URL or memory.
2. Check `git log main -- <path>` before assuming a file was ever on main. A feature visible on a preview branch may never have been merged.
3. Confirm the target deployment SHA via the GitHub Deployments API (`gh api repos/artemiusradin-png/deview-website/deployments`) before pushing reverts.
