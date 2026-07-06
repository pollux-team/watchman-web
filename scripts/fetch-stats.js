const fs = require('fs');
const path = require('path');

async function fetchStats() {
  try {
    const res = await fetch("https://api.github.com/repos/rayhan138/Watchman/releases", {
      headers: {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "watchman-web-build-script"
      }
    });

    if (!res.ok) {
      console.error(`GitHub API returned status: ${res.status}`);
      return;
    }

    const releases = await res.json();
    let totalDownloads = 1000; // Base count for unofficial downloads
    
    for (const release of releases) {
      if (release.assets) {
        for (const asset of release.assets) {
          totalDownloads += asset.download_count;
        }
      }
    }

    let version = "v1.0.5";
    if (releases.length > 0) {
      version = releases[0].tag_name;
    }
    
    const downloads = totalDownloads > 1000 ? totalDownloads.toLocaleString() : "1,000";

    const data = {
      downloads,
      version
    };

    const targetDir = path.join(__dirname, '../src/data');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(targetDir, 'stats.json'),
      JSON.stringify(data, null, 2)
    );
    
    console.log(`Successfully fetched and saved GitHub stats: ${version} with ${downloads} downloads.`);
  } catch (error) {
    console.error("Error fetching GitHub stats during build:", error);
  }
}

fetchStats();
