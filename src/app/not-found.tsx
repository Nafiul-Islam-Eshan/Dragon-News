
import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="flex min-h-[80vh] items-center justify-center px-6 py-16">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-8 flex size-20 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
                    <SearchX size={38} strokeWidth={1.5} />
                </div>

                {/* Error Code */}
                <p className="mb-4 text-sm font-semibold tracking-[0.35em] text-sky-400">
                    ERROR 404
                </p>

                {/* Heading */}
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                    Page not found<span className="text-sky-400">.</span>
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
                    Oops! The page you&apos;re looking for doesn&apos;t exist,
                    may have been moved, or the URL might be incorrect.
                </p>

                {/* Actions */}
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                    <Button render={<Link href="/" />}>
                        <Home className="mr-2 size-4" />
                        Back to Home
                    </Button>

                    <Button
                        variant="outline"
                        render={<Link href="/" />}
                    >
                        <ArrowLeft className="mr-2 size-4" />
                        Go Back
                    </Button>
                </div>

                {/* Footer */}
                <p className="mt-16 text-sm text-muted-foreground">
                    Lost in the digital space? Let&apos;s get you home.
                </p>
            </div>
        </main>
    );
}
