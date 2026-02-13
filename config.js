/*
        Copyright (C) 2026 - Kiwi Docs by Veer Bajaj <https://github.com/kiwidocs>

        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.

        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.

        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/*
async function fetchToken() {
    try {
        // Fetch from your worker
        const res = await fetch("https://kiwiback.veerbajaj11.workers.dev/pat");
        if (!res.ok) return "";
        const data = await res.json();
        return data.token; // Returns JUST the string
    } catch (err) {
        console.error("Token fetch failed:", err);
        return "";
    }
}
*/

// Polyfill for randomUUID
if (typeof crypto !== 'undefined' && !crypto.randomUUID) {
    crypto.randomUUID = () =>
        ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
}

const CONFIG = {
    owner: "team5171",
    repo: "2026docs",
    activityRepo: "2026docs",
    branch: "main",

    // We will populate this via the init logic in index.html 
    // or keep it as an empty string here.
    repoToken: "",

    extensions: [".md", ".txt", ".java"],
    ignorePaths: ["^_.*\\.md$"],

    askKiwiEndpoint: "https://kiwiback.veerbajaj11.workers.dev",
    authWorker: "https://kiwiback.veerbajaj11.workers.dev", // Added this reference
    ai_owner: "team5171",
    ai_repo: "FRC-2026",
    ai_branch: "main",

    branding: {
        title: "Team 5171",
        shortTitle: "5171",
        logo: "https://github.com/team5171.png",
        welcomeTitle: "Welcome to Team 5171",
        welcomeText: "We are initializing the workspace and fetching the latest guides. Please select a file from the sidebar to begin."
    },

    footer: {
        creator: "Veer Bajaj",
        organization: "Team 5171",
        version: "Kiwi Docs v2.2.0"
    },
};

// Global initialization helper
async function initializeKiwiConfig() {
    const token = await fetchToken();
    CONFIG.repoToken = token;
    // Also update the legacy Settings object used in your index.html
    if (window.Settings) {
        window.Settings.token = token;
    }
}

// Kick off the fetch immediately
initializeKiwiConfig();

if (!CONFIG.baseUrl) {
    CONFIG.baseUrl = window.location.href.split('?')[0].replace(/\/$/, "");
}