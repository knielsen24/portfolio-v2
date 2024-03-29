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
    <Container className="mt-28 sm:mt-44">
      <header className="mx-4 max-w-2xl sm:mx-0">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-slate-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-6 sm:mt-8 z-0">{children}</div>}
    </Container>
  );
}
