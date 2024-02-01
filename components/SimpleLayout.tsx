import { Container } from "@/components/Container";

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <Container className="mt-8 sm:mt-20">
      <header className="max-w-2xl mx-5 sm:mx-0">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-slate-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-8 sm:mt-10">{children}</div>}
    </Container>
  );
}
