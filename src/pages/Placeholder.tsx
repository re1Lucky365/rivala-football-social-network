import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  sprint?: string;
}

const Placeholder = ({ title, description, sprint }: Props) => (
  <div className="container py-20 md:py-28">
    <div className="max-w-xl mx-auto text-center animate-fade-in">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-2 border border-border mb-6">
        <Construction className="h-7 w-7 text-primary" />
      </div>
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">{title}</h1>
      <p className="text-muted-foreground mb-2">{description}</p>
      {sprint && <p className="text-xs text-muted-foreground/70 mb-8">Livré en {sprint}</p>}
      <Button asChild variant="hero">
        <Link to="/">Retour à l'accueil</Link>
      </Button>
    </div>
  </div>
);

export default Placeholder;
