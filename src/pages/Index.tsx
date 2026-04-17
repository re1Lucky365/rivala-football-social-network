import { mockMatches, mockUser, mockTopTipsters } from "@/lib/mockData";
import { MatchCard } from "@/components/MatchCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, TrendingUp, Trophy, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const Index = () => {
  const liveMatches = mockMatches.filter((m) => m.status === "live" || m.status === "ht");
  const upcoming = mockMatches.filter((m) => m.status === "scheduled");

  return (
    <div className="bg-gradient-hero">
      {/* HERO */}
      <section className="container pt-10 pb-12 md:pt-16 md:pb-20">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 mb-5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary">Saison 25-26 · WC2026 incoming</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-balance mb-5">
            Le foot, en live,{" "}
            <span className="bg-gradient-live bg-clip-text text-transparent">entre rivaux.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 text-balance">
            Prédis. Chatte avec ta meute pendant le match. Monte en division. Les vrais se montrent.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="hero" size="xl">
              Joue maintenant <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="xl">
              Devenir tipster
            </Button>
          </div>

          {/* Trust bar */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> 100% gratuit
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> 18+ uniquement
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Coins virtuels · sans valeur réelle
            </span>
          </div>
        </div>
      </section>

      {/* USER STATUS BAND */}
      <section className="container -mt-2 mb-10">
        <div className="rounded-2xl border border-border bg-gradient-card p-5 flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-gradient-premium grid place-items-center font-display font-bold text-xl text-premium-foreground shadow-premium">
              A
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-display font-bold text-lg">{mockUser.username}</span>
                <span>{mockUser.country}</span>
                <Badge variant="elite">{mockUser.divisionLabel}</Badge>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Flame className="h-3 w-3 text-rival" /> Streak {mockUser.streak}j
                </span>
                <span>#{mockUser.country_rank} 🇲🇦</span>
                <span>#{mockUser.rank} global</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">XP</div>
              <div className="font-mono tabular text-sm font-bold">
                {mockUser.xp.toLocaleString()} <span className="text-muted-foreground">/ {mockUser.xpToNext.toLocaleString()}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Coins</div>
              <div className="font-mono tabular text-lg font-bold text-premium">{mockUser.coins.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE NOW */}
      {liveMatches.length > 0 && (
        <section className="container mb-12">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="live-dot" />
              <h2 className="font-display text-2xl font-bold">En direct</h2>
              <Badge variant="live">{liveMatches.length}</Badge>
            </div>
            <Button variant="ghost" size="sm">
              Tout voir <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {liveMatches.map((m) => (
              <MatchCard key={m.id} match={m} />
            ))}
          </div>
        </section>
      )}

      {/* SPONSORED PLACEHOLDER */}
      <section className="container mb-12">
        <div className="rounded-2xl border border-sponsor/30 bg-gradient-to-r from-sponsor/10 to-transparent p-4 flex items-center gap-4">
          <Badge variant="sponsor" className="shrink-0">Sponsorisé</Badge>
          <div className="flex-1">
            <div className="font-semibold text-sm">Stand homepage disponible</div>
            <div className="text-xs text-muted-foreground">Tipsters vérifiés : boostez votre visibilité dès 29€/24h.</div>
          </div>
          <Button variant="outline" size="sm">En savoir plus</Button>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="container mb-12">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-display text-2xl font-bold">À venir</h2>
          </div>
          <Button variant="ghost" size="sm">
            Calendrier <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcoming.map((m) => (
            <MatchCard key={m.id} match={m} />
          ))}
        </div>
      </section>

      {/* TOP TIPSTERS PREVIEW */}
      <section className="container mb-16">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <Trophy className="h-5 w-5 text-premium" />
            <h2 className="font-display text-2xl font-bold">Tipsters qui montent</h2>
          </div>
          <Button variant="ghost" size="sm">
            Voir tous <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {mockTopTipsters.map((t, i) => (
            <article key={t.username} className="rounded-2xl border border-border bg-gradient-card p-5 transition-smooth hover:border-premium/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-premium grid place-items-center font-bold text-premium-foreground">
                    {t.username[0]}
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-surface-1 border border-border grid place-items-center text-[10px] font-bold tabular">
                    {i + 1}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold truncate">{t.username}</span>
                    <span className="text-sm">{t.country}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {t.verified && (
                      <Badge variant="info" className="px-1.5 py-0 text-[9px]">
                        <CheckCircle2 className="h-2.5 w-2.5" /> Verified
                      </Badge>
                    )}
                    <span className="text-[10px] text-muted-foreground">{t.picks} picks</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Win 30j</div>
                  <div className="font-mono tabular text-2xl font-bold text-primary">{t.winRate}%</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Streak</div>
                  <div className="flex items-center gap-1 justify-end">
                    <Flame className="h-4 w-4 text-rival" />
                    <span className="font-mono tabular text-lg font-bold">{t.streak}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Suivre
              </Button>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER MICRO */}
      <footer className="container py-10 border-t border-border/60 text-center text-xs text-muted-foreground">
        <p>Rivala · Le foot, en live, entre rivaux. · Coins virtuels sans valeur monétaire · 18+</p>
      </footer>
    </div>
  );
};

export default Index;
