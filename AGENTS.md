<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deploy hygiene

Only `main` deploys to **deviewai.com** (Vercel project `deview-website`). Every other branch gets a **preview** URL of the form `deview-website-git-<branch>-artems-projects-072681ab.vercel.app` — these look identical to production but are NOT production. When the user reports "the site shows X" or asks to revert a recent change, always:

1. Verify the claim against `deviewai.com` directly (`curl -s https://deviewai.com | grep <marker>`), not against a preview URL or memory.
2. Check `git log main -- <path>` before assuming a file was ever on main. A feature visible on a preview branch may never have been merged.
3. Confirm the target deployment SHA via the GitHub Deployments API (`gh api repos/artemiusradin-png/deview-website/deployments`) before pushing reverts.
