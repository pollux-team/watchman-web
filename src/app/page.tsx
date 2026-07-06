import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import CarouselView from "@/components/CarouselView";
import Privacy from "@/components/Privacy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

async function getGithubStats() {
  try {
    const res = await fetch("https://api.github.com/repos/rayhan138/Watchman/releases", {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch");

    const releases = await res.json();
    let totalDownloads = 1240; // Base count for unofficial downloads
    for (const release of releases) {
      if (release.assets) {
        for (const asset of release.assets) {
          totalDownloads += asset.download_count;
        }
      }
    }

    const version = releases.length > 0 ? releases[0].tag_name : "v1.0.5";
    const downloads = totalDownloads > 0 ? totalDownloads.toLocaleString() : "1.2k+";

    return { version, downloads };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return { version: "v1.0.5", downloads: "1,240" };
  }
}

export default async function Home() {
  const stats = await getGithubStats();

  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar downloads={stats.downloads} version={stats.version} />

      {/* Features — id needed for navbar scroll link */}
      <div id="features">
        <Features />
      </div>

      {/* App Tour — id needed for navbar IntersectionObserver */}
      <div id="app-tour">
        <CarouselView />
      </div>

      <Privacy />
      <CTA />
      <Footer />
    </main>
  );
}
