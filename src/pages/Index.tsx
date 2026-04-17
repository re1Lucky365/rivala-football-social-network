import { mockMatches, mockTopTipsters } from "@/lib/mockData";
import { MatchCard } from "@/components/MatchCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Radio,
  Shield,
  Trophy,
  Zap,
  Target,
} from "lucide-react";

const Index = () => {
  const liveMatches = mockMatches.filter((m) => m.status === "live" || m.status === "ht");
  const upcoming = mockMatches.filter((m) => m.status === "scheduled");

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <div className="container relative pt-16 pb-20 md:pt-24 md:pb-28 text-center">
          {/* Terminal pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.06] px-3.5 py-1.5 font-mono text-[11px] text-primary">
              <span className="live-dot" />
              {liveMatches.length} matchs en direct · refresh 20s
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-surface-1/60 px-3.5 py-1.5 font-mono text-[11px] text-muted-foreground">
              rivala://feed · saison 25-26 active
            </span>
          </div>

          {/* Title — typographique massif, gradient sur la 2e ligne */}
          <h1 className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-balance mb-8 animate-slide-up">
            <span className="block text-5xl md:text-7xl lg:text-[7.5rem] text-foreground">
              Les autres regardent.
            </span>
            <span className="block text-5xl md:text-7xl lg:text-[7.5rem] text-gradient">
              Toi tu prouves.
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in">
            Le réseau social foot où chaque pick est public, chaque match a sa room,
            <br className="hidden md:block" />
            et chaque rival voit ton track record. <span className="text-foreground/80">Free to play. Reputation earned.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fade-in">
            <Button variant="hero" size="xl" className="group">
              Rejoindre la meute
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="ghost" size="xl" className="text-foreground/80 hover:text-foreground">
              Comment ça marche
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mb-10">
            Sans carte bancaire · 18+ uniquement
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
            Pas de DM. Pas de promesse de gain. Coins virtuels. Sans valeur réelle.
          </p>
        </div>

        {/* Console card — proof/discipline grid à la MoneyBotOS */}
        <div className="container relative pb-20 md:pb-28">
          <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-surface-1/80 backdrop-blur shadow-elegant overflow-hidden animate-fade-in">
            {/* terminal header */}
            <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-border bg-black/40">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rival/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-premium/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="ml-3 font-mono text-[11px] text-muted-foreground hidden sm:inline">
                  rivala://terminal · live feed
                </span>
              </div>
              <a className="font-mono text-[11px] text-primary hover:underline" href="#">
                Voir le classement →
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
              {[
                {
                  icon: Target,
                  title: "Picks publics",
                  desc: "Chaque pronostic est horodaté, settle automatique. Aucun rétro-edit possible.",
                },
                {
                  icon: Trophy,
                  title: "Track record",
                  desc: "Win rate 7j / 30j / lifetime. ROI virtuel. Vérifiable par tes rivaux.",
                },
                {
                  icon: Radio,
                  title: "Rooms live",
                  desc: "Un salon par match, un par ligue, un par pays. Trois langues : FR · AR · EN.",
                },
                {
                  icon: Shield,
                  title: "Zéro gambling",
                  desc: "Coins 100% virtuels, jamais convertibles. Économie de mérite, pas de paris.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-5 lg:p-6 transition-smooth hover:bg-surface-2/40">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/[0.08] text-primary mb-4">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="font-display font-bold text-base mb-1.5">{title}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="px-5 py-3 border-t border-border bg-black/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span>Free to play / Pro tipster / Sponsor stand</span>
              <a className="text-primary hover:underline" href="#">Plus d'infos →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIVE NOW ============ */}
      {liveMatches.length > 0 && (
        <section className="container py-16 md:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                <span className="live-dot" /> live · {liveMatches.length} en cours
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Ça se joue <span className="text-gradient">maintenant.</span>
              </h2>
            </div>
            <a className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth" href="/live">
              Tous les matchs <ArrowRight className="h-3 w-3" />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {liveMatches.map((m) => (
              <MatchCard key={m.id} match={m} />
            ))}
          </div>
        </section>
      )}

      {/* ============ UPCOMING ============ */}
      <section className="container py-16 md:py-20 border-t border-border/60">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Zap className="h-3 w-3" /> à venir
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Prépare ton <span className="text-gradient">pick.</span>
            </h2>
          </div>
          <a className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth" href="#">
            Calendrier complet <ArrowRight className="h-3 w-3" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcoming.map((m) => (
            <MatchCard key={m.id} match={m} />
          ))}
        </div>
      </section>

      {/* ============ TOP TIPSTERS ============ */}
      <section className="container py-16 md:py-20 border-t border-border/60">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-premium">
              <Trophy className="h-3 w-3" /> tipsters
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Les vrais se <span className="text-gradient">montrent.</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Track record public, vérifiable, mis à jour à chaque settle. Pas de capture, pas de bullshit.
            </p>
          </div>
          <a className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth" href="/tipsters">
            Tous les tipsters <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {mockTopTipsters.map((t, i) => (
            <article
              key={t.username}
              className="group rounded-xl border border-border bg-gradient-card p-5 transition-smooth hover:border-primary/40 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  rang #{i + 1} · 30j
                </span>
                {t.verified && (
                  <Badge variant="info" className="px-1.5 py-0 text-[9px]">
                    <CheckCircle2 className="h-2.5 w-2.5" /> Verified
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="h-11 w-11 rounded-full bg-gradient-premium grid place-items-center font-bold text-premium-foreground shrink-0">
                  {t.username[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold truncate">{t.username}</span>
                    <span className="text-sm">{t.country}</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{t.picks} picks settlés</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="rounded-lg border border-border bg-black/30 px-3 py-2.5">
                  <div className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-1">Win rate</div>
                  <div className="font-mono tabular text-2xl font-bold text-primary">{t.winRate}%</div>
                </div>
                <div className="rounded-lg border border-border bg-black/30 px-3 py-2.5">
                  <div className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-1">Streak</div>
                  <div className="flex items-center gap-1.5">
                    <Flame className="h-4 w-4 text-rival" />
                    <span className="font-mono tabular text-2xl font-bold">{t.streak}</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full group-hover:border-primary/40 group-hover:text-primary">
                Suivre
              </Button>
            </article>
          ))}
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="container py-20 md:py-28 border-t border-border/60">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display font-bold tracking-[-0.03em] leading-[0.95] text-4xl md:text-6xl mb-6">
            Le foot, en live,
            <br />
            <span className="text-gradient">entre rivaux.</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-base md:text-lg">
            Joue, ou regarde. Mais ne dis pas que tu savais — prouve-le.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="hero" size="xl" className="group">
              Créer mon compte
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="ghost" size="xl" className="text-muted-foreground hover:text-foreground">
              Devenir tipster
            </Button>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-border/60">
        <div className="container py-10 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-muted-foreground/70">
          <span>RIVALA · v0.1 · le foot, en live, entre rivaux.</span>
          <span>Coins virtuels · zéro valeur monétaire · 18+ uniquement</span>
        </div>
      </footer>
    </>
  );
};

export default Index;
