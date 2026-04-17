import { type MockMatch } from "@/lib/mockData";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  match: MockMatch;
  variant?: "default" | "compact";
}

const formatKickoff = (iso: string) => {
  const d = new Date(iso);
  const today = new Date();
  const sameDay = d.toDateString() === today.toDateString();
  const time = d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  if (sameDay) return `Aujourd'hui · ${time}`;
  return d.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" }) + ` · ${time}`;
};

export const MatchCard = ({ match, variant = "default" }: Props) => {
  const isLive = match.status === "live" || match.status === "ht";
  const compact = variant === "compact";

  return (
    <article
      className={cn(
        "group relative rounded-2xl border bg-gradient-card transition-smooth overflow-hidden",
        isLive
          ? "border-primary/40 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.4)]"
          : "border-border hover:border-border/80",
        match.isDerby && !isLive && "border-rival/30"
      )}
    >
      {match.isDerby && (
        <div className="absolute top-0 right-0 px-3 py-1 bg-rival/20 border-l border-b border-rival/40 rounded-bl-xl">
          <span className="text-[10px] font-bold uppercase tracking-wider text-rival flex items-center gap-1">
            <Flame className="h-3 w-3" /> Derby
          </span>
        </div>
      )}

      <div className="p-4 sm:p-5">
        {/* League + status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <img src={match.leagueLogo} alt="" className="h-5 w-5 rounded" />
            <span className="text-xs font-medium text-muted-foreground">{match.league}</span>
          </div>
          {isLive ? (
            <div className="flex items-center gap-1.5">
              <span className="live-dot" />
              <span className="text-xs font-bold text-primary tabular">
                {match.status === "ht" ? "MT" : `${match.minute}'`}
              </span>
            </div>
          ) : (
            <span className="text-xs font-medium text-muted-foreground">{formatKickoff(match.kickoff)}</span>
          )}
        </div>

        {/* Teams + score */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <img src={match.homeCrest} alt={match.homeTeam} className="h-10 w-10 rounded-full" />
            <span className={cn("font-semibold truncate", compact ? "text-sm" : "text-base")}>{match.homeTeam}</span>
          </div>

          <div className={cn("flex items-center gap-2 font-mono font-bold", compact ? "text-xl" : "text-2xl")}>
            {isLive || match.status === "finished" ? (
              <>
                <span className="tabular text-foreground">{match.homeScore}</span>
                <span className="text-muted-foreground">–</span>
                <span className="tabular text-foreground">{match.awayScore}</span>
              </>
            ) : (
              <span className="text-muted-foreground text-sm font-sans font-medium">vs</span>
            )}
          </div>

          <div className="flex items-center gap-3 flex-1 min-w-0 justify-end">
            <span className={cn("font-semibold truncate text-right", compact ? "text-sm" : "text-base")}>
              {match.awayTeam}
            </span>
            <img src={match.awayCrest} alt={match.awayTeam} className="h-10 w-10 rounded-full" />
          </div>
        </div>

        {/* Picks (odds) — labelled "lines", never "odds/bet" */}
        {!compact && (
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { label: "1", value: match.oddsHome },
              { label: "X", value: match.oddsDraw },
              { label: "2", value: match.oddsAway },
            ].map((p) => (
              <button
                key={p.label}
                className="group/pick rounded-lg border border-border bg-surface-1/50 hover:border-primary/40 hover:bg-primary/5 transition-smooth py-2 px-2"
              >
                <div className="text-[10px] font-medium text-muted-foreground group-hover/pick:text-primary">
                  {p.label}
                </div>
                <div className="font-mono font-bold tabular text-sm text-foreground">{p.value.toFixed(2)}</div>
              </button>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Button variant={isLive ? "live" : "secondary"} size="sm" className="flex-1">
            {isLive ? "Rejoindre la room" : "Prédire"}
          </Button>
          {isLive && (
            <Badge variant="live" className="px-2">
              LIVE
            </Badge>
          )}
        </div>
      </div>
    </article>
  );
};
