"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { SearchIcon, MenuIcon } from "lucide-react";

export default function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "P") {
                e.preventDefault();
                handleClickAddProject();
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, []);

    const navigationItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Submit Project", href: "/submit/new" },
        { name: "Dashboard", href: "/dashboard" },
        { name: "Rewards", href: "/rewards" },
    ];

    const handleClickAddProject = useCallback(() => {
        router.push("/submit/new");
    }, [router]);

    return (
        <>
            <header className="w-full bg-background">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4">
                    <div className="w-full lg:w-1/3">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsOpen(true)}
                        >
                            <SearchIcon className="mr-2 h-4 w-4" />
                            <span>Search...</span>
                        </Button>
                    </div>

                    <div className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            <MenuIcon className="h-6 w-6" />
                        </Button>
                    </div>
                    <nav
                        className={`w-full lg:w-auto ${isMobileMenuOpen ? "block" : "hidden"} lg:block`}
                    >
                        <ul className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-4">
                            {navigationItems.map((item) => (
                                <li key={item.name}>
                                    <Button
                                        variant="ghost"
                                        className="w-full lg:w-auto"
                                        onClick={() => router.push(item.href)}
                                    >
                                        {item.name}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                        <Button
                            onClick={handleClickAddProject}
                            variant="secondary"
                            size="sm"
                            className="flex items-center gap-2"
                        >
                            <p className="flex gap-1 items-center">
                                Press
                                <span className="rounded py-1 px-2 text-foreground border bg-muted font-bold">
                                    P
                                </span>
                                to add a project
                            </p>
                        </Button>
                    </div>
                </div>
            </header>
            <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Navigation">
                        {navigationItems.map((item) => (
                            <CommandItem
                                key={item.name}
                                onSelect={() => {
                                    router.push(item.href);
                                    setIsOpen(false);
                                }}
                            >
                                {item.name}
                                <span className="ml-auto text-xs tracking-widest opacity-60">
                                    {item.shortcut}
                                </span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
