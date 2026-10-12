import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { clients } from "@/content/site";

/**
 * The section the old site did not have. Every product card says "coming
 * soon", so without this nothing on the page shows delivered work.
 */
export function Clients() {
  return (
    <section id="clients" className="scroll-mt-24 bg-subtle py-20 md:py-24">
      <Container>
        <p className="text-overline text-ink-muted">Working with us</p>
        <h2 className="mt-3 text-h2 text-ink">Clients</h2>
        <p className="mt-4 max-w-2xl text-body-lg text-ink-soft">
          Shipped work, not roadmap. Each of these is live or in build with a
          named owner on the other side.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {clients.map((client) => (
            <article
              key={client.slug}
              className="flex flex-col rounded-xl border border-line bg-surface p-8 shadow-sm"
            >
              <p className="text-overline text-ink-muted">{client.sector}</p>
              <h3 className="mt-3 text-h5 text-ink">{client.name}</h3>
              <p className="mt-4 grow text-body-md text-ink-soft">{client.summary}</p>

              {client.work.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {client.work.map((item) => (
                    <Badge key={item} tone="primary" size="sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              )}

              {client.url && (
                <a
                  href={client.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-label-md text-action transition-opacity hover:opacity-70"
                >
                  Visit
                  <ArrowUpRight size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
