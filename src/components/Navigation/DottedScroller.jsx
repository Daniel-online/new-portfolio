import React, { useState, useEffect } from "react";

const sections = [
    { id: "home", label: "HOME" },
    { id: "portfolio", label: "PORTFOLIO" },
    { id: "stack", label: "STACK" },
    { id: "aboutme", label: "ABOUT ME" },
    { id: "contact", label: "CONTACT" }
];

const DottedScroller = () => {
    const [active, setActive] = useState(sections[0].id);

    useEffect(() => {
        const handleScroll = () => {
            let current = sections[0].id;
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el && window.scrollY >= el.offsetTop - 100) {
                    current = section.id;
                }
            }
            setActive(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed right-6 top-1/2 z-50 flex flex-col gap-4 -translate-y-1/2">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`w-4 h-4 rounded-full border-2 border-purple-800 transition-all duration-300 ${active === section.id
                        ? "bg-white scale-125 shadow-lg"
                        : "bg-transparent"
                        }`}
                    aria-label={section.label}
                />
            ))}
        </div>
    );
};

export default DottedScroller;