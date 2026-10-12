import { Container } from "@/components/ui/Container";
import { about } from "@/content/site";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="scroll-mt-24 py-20 md:py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {[about.who, about.vision].map((block) => (
            <div
              key={block.title}
              className="rounded-2xl bg-subtle p-10 md:p-12"
            >
              <h2 className="text-h3 text-ink">{block.title}</h2>
              <p className="mt-5 text-body-xl text-ink-soft">{block.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
