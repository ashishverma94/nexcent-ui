import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col bg-silver-neutral">
      <header className="flex h-20 w-full items-center justify-center px-5">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-6 w-8.5" />

          <span className="text-2xl font-bold text-brand-secondary">
            Nexcent
          </span>
        </Link>
      </header>

      <section className="flex flex-1 items-center justify-center px-5 py-16">
        <div className="flex w-full max-w-180 flex-col items-center text-center">
          <h1 className="text-[120px] font-bold leading-none text-brand-primary md:text-[180px]">
            404
          </h1>

          <h2 className="mt-6 text-3xl font-semibold text-neutral-d-gray md:text-4xl">
            Page not found
          </h2>

          <p className="mt-4 max-w-140 text-base leading-7 text-neutral-gray md:text-lg">
            Sorry, the page you are looking for doesn't exist or may have been
            moved. Let's get you back to the home page.
          </p>

          <Button className="mt-8">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
