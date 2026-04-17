import { NavLink, Outlet } from "react-router-dom";
import { Home, Radio, Target, Trophy, User, Coins } from "lucide-react";
import { RivalaLogo } from "./RivalaLogo";
import { Badge } from "./ui/badge";
import { mockUser } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Accueil" },
  { to: "/live", icon: Radio, label: "Live" },
  { to: "/picks", icon: Target, label: "Picks" },
  { to: "/tipsters", icon: Trophy, label: "Tipsters" },
  { to: "/profile", icon: User, label: "Profil" },
];

export const AppShell = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center">
            <RivalaLogo />
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3.5 py-1.5 text-[13px] font-medium rounded-md transition-smooth",
                    isActive
                      ? "text-foreground bg-surface-2"
                      : "text-muted-foreground hover:text-foreground"
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-1 px-2.5 py-1 font-mono text-[11px] text-primary">
              <Coins className="h-3 w-3" />
              <span className="tabular font-bold">{mockUser.coins.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-surface-1 pl-1 pr-3 py-1 border border-border">
              <div className="h-7 w-7 rounded-full bg-gradient-premium grid place-items-center text-[10px] font-bold text-premium-foreground">
                A
              </div>
              <span className="hidden sm:inline text-xs font-semibold">{mockUser.username}</span>
              <span className="text-sm">{mockUser.country}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 pb-24 md:pb-8">
        <Outlet />
      </main>

      {/* Bottom nav (mobile) */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl">
        <div className="grid grid-cols-5 h-16">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-smooth",
                  isActive ? "text-primary" : "text-muted-foreground"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={cn("h-5 w-5", isActive && "drop-shadow-[0_0_8px_hsl(var(--primary))]")} />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};
