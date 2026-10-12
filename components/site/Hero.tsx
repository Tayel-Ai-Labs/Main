import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-overline text-ink-muted">AI Research · Products · Transformation</p>
            <h1 className="mt-6 text-h1 md:text-display-lg text-ink">{site.name}</h1>
            <p className="mt-6 max-w-xl text-body-xl text-ink-soft">{site.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/#products" size="lg" trailing={<ArrowRight size={18} />}>
                Our Products
              </Button>
              <Button href="/#clients" size="lg" variant="outline">
                See our work
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <Lattice />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Standing in for the polyhedron on the current site, drawn from the DS
 * palette so it reads as part of the system. Replace with the real asset if
 * the owner wants to keep the 3D mark.
 */
function Lattice() {
  const nodes = [
    [50, 10], [85, 30], [85, 70], [50, 90], [15, 70], [15, 30], [50, 50],
  ];
  return (
    <svg viewBox="0 0 100 100" className="mx-auto w-full max-w-md" aria-hidden="true">
      {nodes.map(([x1, y1], i) =>
        nodes.slice(i + 1).map(([x2, y2], j) => (
          <line
            key={`${i}-${j}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="var(--color-primary-200)"
            strokeWidth="0.4"
          />
        )),
      )}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x} cy={y}
          r={i === 6 ? 4 : 2.5}
          fill={i === 6 ? "var(--color-accent-500)" : "var(--color-primary-500)"}
        />
      ))}
    </svg>
  );
}
