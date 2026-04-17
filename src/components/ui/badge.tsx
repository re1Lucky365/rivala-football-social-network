import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-surface-2 text-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border-border",
        live: "border-primary/40 bg-primary/15 text-primary",
        premium: "border-premium/40 bg-premium/15 text-premium",
        rival: "border-rival/40 bg-rival/15 text-rival",
        info: "border-info/40 bg-info/15 text-info",
        sponsor: "border-sponsor/40 bg-sponsor/15 text-sponsor",
        founder: "border-founder/40 bg-founder/15 text-founder",
        rookie: "border-division-rookie/40 bg-division-rookie/15 text-division-rookie",
        starter: "border-division-starter/40 bg-division-starter/15 text-division-starter",
        captain: "border-division-captain/40 bg-division-captain/15 text-division-captain",
        ultra: "border-division-ultra/40 bg-division-ultra/15 text-division-ultra",
        elite: "border-division-elite/40 bg-division-elite/15 text-division-elite",
        legend: "border-division-legend/40 bg-division-legend/15 text-division-legend",
        icon: "border-premium/60 bg-division-icon text-premium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
