<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard | Team 5171</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700;800&display=swap"
        rel="stylesheet">

    <style>
        :root {
            --bg-dark: #090b0f;
            --glass-bg: rgba(22, 27, 34, 0.7);
            --glass-border: rgba(255, 255, 255, 0.1);
            --accent-primary: #58a6ff;
            --accent-secondary: #bc8cff;
            --text-main: #e6edf3;
            --text-dim: #8b949e;
            --glow: 0 0 20px rgba(88, 166, 255, .15);
        }

        * {
            box-sizing: border-box
        }

        body {
            font-family: Inter, system-ui;
            margin: 0;
            color: var(--text-main);
            background: transparent;
        }

        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
        }

        .dash-card {
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: 16px;
            padding: 24px;
        }

        h2 {
            font-family: Outfit;
            font-size: 1.1rem;
            color: var(--text-dim);
            letter-spacing: .05em;
            margin: 0 0 16px;
            text-transform: uppercase;
        }

        .activity-item {
            display: flex;
            gap: 12px;
            padding: 10px 0;
            border-bottom: 1px solid var(--glass-border);
            align-items: flex-start;
        }

        .activity-item:last-child {
            border-bottom: none
        }

        .activity-avatar {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: 1px solid var(--glass-border);
        }

        .activity-author {
            font-weight: 600;
            color: var(--accent-secondary)
        }

        .activity-msg {
            font-size: .9rem;
            margin: 3px 0
        }

        .activity-date {
            font-size: .75rem;
            color: var(--text-dim)
        }

        .countdown-timer {
            font-family: Outfit;
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .logo {
            width: 80px;
            height: 80px;
            border-radius: 12px;
            background: url('https://github.com/team5171.png') center/cover;
            margin: 0 auto 12px;
            box-shadow: var(--glow);
        }
    </style>
</head>

<body>

    <div style="text-align:center;margin:40px 0">
        <div class="logo"></div>
        <h1 style="font-family:Outfit;margin:0">2026 Season Overview</h1>
        <p style="color:var(--text-dim)">Technical Hub</p>
    </div>

    <div class="dashboard-grid">

        <div class="dash-card" id="countdown-card">
            <h2>Next Event</h2>
            <div id="countdown-ui">Loading calendar…</div>
        </div>

        <div class="dash-card">
            <h2>Team Updates</h2>
            <div id="activity-feed">Syncing…</div>
        </div>

        <div class="dash-card">
            <h2>Top Contributors</h2>
            <div id="contributors">Analyzing commits…</div>
        </div>

    </div>

    <script>
        const CONFIG = {
            owner: "team5171",
            repo: "FRC-2026",
            authWorker: "https://team5171pat.veerbajaj11.workers.dev"
        };

        // ---------- AUTH ----------
        async function getHeaders() {
            const r = await fetch(`${CONFIG.authWorker}/pat`);
            const j = await r.json();
            return {
                'Authorization': `token ${j.token}`,
                'Accept': 'application/vnd.github+json'
            };
        }

        // ---------- CONTRIBUTORS (REAL STANDINGS) ----------
        async function loadContributors() {
            const el = document.getElementById('contributors');
            const headers = await getHeaders();

            let page = 1, commits = [];
            while (page <= 10) {
                const r = await fetch(`https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/commits?per_page=100&page=${page}`, { headers });
                if (!r.ok) break;
                const d = await r.json();
                if (!d.length) break;
                commits.push(...d);
                page++;
            }

            const map = {};
            for (const c of commits) {
                const key = c.author?.login ?? c.commit.author.email;
                const name = c.author?.login ?? c.commit.author.name;
                const avatar = c.author?.avatar_url ?? `https://github.com/${CONFIG.owner}.png`;
                if (!map[key]) map[key] = { name, avatar, commits: 0 };
                map[key].commits++;
            }

            const sorted = Object.values(map).sort((a, b) => b.commits - a.commits).slice(0, 10);

            el.innerHTML = sorted.map((u, i) => `
<div class="activity-item">
<img src="${u.avatar}" class="activity-avatar">
<div>
<div class="activity-author">#${i + 1} ${u.name}</div>
<div class="activity-msg">${u.commits} commits</div>
</div>
</div>`).join('');
        }

        // ---------- ACTIVITY FEED ----------
        async function loadActivity() {
            const el = document.getElementById('activity-feed');
            const headers = await getHeaders();

            const [commits, issues, pulls] = await Promise.all([
                fetch(`https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/commits?per_page=5`, { headers }).then(r => r.json()),
                fetch(`https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/issues?state=open&per_page=5`, { headers }).then(r => r.json()),
                fetch(`https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/pulls?state=open&per_page=5`, { headers }).then(r => r.json())
            ]);

            let merged = [
                ...commits.map(c => ({ date: new Date(c.commit.author.date), author: c.commit.author.name, avatar: c.author?.avatar_url, msg: c.commit.message, url: c.html_url })),
                ...issues.filter(i => !i.pull_request).map(i => ({ date: new Date(i.created_at), author: i.user.login, avatar: i.user.avatar_url, msg: `Issue #${i.number}: ${i.title}`, url: i.html_url })),
                ...pulls.map(p => ({ date: new Date(p.created_at), author: p.user.login, avatar: p.user.avatar_url, msg: `PR #${p.number}: ${p.title}`, url: p.html_url }))
            ].sort((a, b) => b.date - a.date).slice(0, 10);

            el.innerHTML = merged.map(i => `
<div class="activity-item" onclick="window.open('${i.url}')">
<img src="${i.avatar}" class="activity-avatar">
<div>
<div class="activity-author">${i.author}</div>
<div class="activity-msg">${i.msg}</div>
<div class="activity-date">${i.date.toLocaleString()}</div>
</div>
</div>`).join('');
        }

        // ---------- CALENDAR ----------
        async function loadCalendar() {
            const ui = document.getElementById('countdown-ui');
            const txt = await fetch(`${CONFIG.authWorker}/calendar`).then(r => r.text());
            const match = txt.match(/DTSTART:(\d+T\d+Z)/);
            if (!match) { ui.innerText = "No events"; return; }
            const dateStr = match[1];
            const d = new Date(dateStr.replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/, "$1-$2-$3T$4:$5:$6Z"));

            setInterval(() => {
                const now = new Date();
                const diff = d - now;
                if (diff < 0) { ui.innerText = "Event started!"; return; }
                const dd = Math.floor(diff / 86400000);
                const hh = Math.floor((diff % 86400000) / 3600000);
                const mm = Math.floor((diff % 3600000) / 60000);
                const ss = Math.floor((diff % 60000) / 1000);
                ui.innerHTML = `<div class="countdown-timer">${dd}d ${hh}h ${mm}m ${ss}s</div>`;
            }, 1000);
        }

        window.onload = () => {
            loadCalendar();
            loadActivity();
            loadContributors();
        };
    </script>

</body>

</html>