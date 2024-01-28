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
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl mx-6 sm:mx-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  );
}
