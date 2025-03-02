import React, { useState } from "react";

const LearnPage = () => {
    const [selectedSection, setSelectedSection] = useState("intro");

    // Smooth scrolling function
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setSelectedSection(sectionId);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Left Sidebar: Table of Contents */}
            <aside className="w-1/4 bg-teal-900 text-white p-6 sticky top-0 h-screen hidden md:block">
                <h2 className="text-2xl font-bold mb-4">📚 Learn Assembly</h2>
                <ul className="space-y-4">
                    {[
                        { id: "intro", label: "Introduction" },
                        { id: "how-it-works", label: "How Assembly Works" },
                        { id: "syntax", label: "Basic Syntax" },
                        { id: "registers", label: "Registers & Memory" },
                        { id: "running-code", label: "Writing & Running Code" },
                        { id: "examples", label: "Examples & Exercises" },
                        { id: "advanced", label: "Advanced Concepts" },
                        { id: "applications", label: "Applications of Assembly" },
                    ].map((item) => (
                        <li
                            key={item.id}
                            className={`cursor-pointer px-3 py-2 rounded-lg transition ${
                                selectedSection === item.id ? "bg-teal-700" : "hover:bg-teal-600"
                            }`}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="w-full md:w-3/5 p-8 overflow-auto scrollbar-hide">
                <section id="intro" className="mb-10">
                    <h2 className="text-3xl font-bold text-teal-800">1️⃣ Introduction to Assembly</h2>
                    <p className="mt-2 text-gray-700">
                        Assembly language is a low-level programming language that communicates directly with the CPU.
                        It provides fine-grained control over hardware and is widely used in systems programming, 
                        embedded systems, and performance-critical applications.
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-700">
                        <li>Used for direct hardware manipulation and optimization.</li>
                        <li>Requires knowledge of CPU architecture.</li>
                        <li>Essential for debugging and reverse engineering.</li>
                    </ul>
                </section>

                <section id="how-it-works" className="mb-10">
                    <h2 className="text-3xl font-bold text-teal-800">2️⃣ How Assembly Works?</h2>
                    <p className="mt-2 text-gray-700">Assembly code is translated into machine code and executed by the CPU.</p>
                    <ul className="mt-4 list-disc list-inside text-gray-700">
                        <li><strong>Assembler:</strong> Converts .asm file to machine code.</li>
                        <li><strong>Linker:</strong> Resolves dependencies and creates executable files.</li>
                        <li><strong>Loader:</strong> Loads the program into memory for execution.</li>
                    </ul>
                </section>

                <section id="syntax" className="mb-10">
                    <h2 className="text-3xl font-bold text-teal-800">3️⃣ Basic Syntax & Instructions</h2>
                    <p className="mt-2 text-gray-700">Assembly uses mnemonics like MOV, ADD, and JMP to perform operations.</p>
                    <div className="mt-4 bg-gray-900 text-white p-4 rounded-lg font-mono">
                        <code>
                            <span className="text-yellow-400">section .text</span> <br />
                            <span className="text-blue-400">global _start</span> <br />
                            <span className="text-green-400">_start:</span> <br />
                            &nbsp;&nbsp;mov eax, 1 &nbsp; ; System call number (exit) <br />
                            &nbsp;&nbsp;xor ebx, ebx &nbsp; ; Exit status 0 <br />
                            &nbsp;&nbsp;int 0x80 &nbsp; ; Call kernel
                        </code>
                    </div>
                </section>

                <section id="advanced" className="mb-10">
                    <h2 className="text-3xl font-bold text-teal-800">7️⃣ Advanced Concepts</h2>
                    <p className="mt-2 text-gray-700">Understanding Stack, Heap, and Control Flow.</p>
                    <ul className="mt-4 list-disc list-inside text-gray-700">
                        <li>Stack-based memory allocation.</li>
                        <li>Interrupt handling and system calls.</li>
                        <li>Optimizing Assembly code for performance.</li>
                    </ul>
                </section>

                <section id="applications" className="mb-10">
                    <h2 className="text-3xl font-bold text-teal-800">8️⃣ Applications of Assembly</h2>
                    <p className="mt-2 text-gray-700">Assembly language is used in:</p>
                    <ul className="mt-4 list-disc list-inside text-gray-700">
                        <li>Operating System Development</li>
                        <li>Game Development (low-level graphics rendering)</li>
                        <li>Embedded Systems</li>
                        <li>Cybersecurity & Malware Analysis</li>
                    </ul>
                </section>
            </main>

            {/* Right Sidebar: Step-by-Step Guide for Windows */}
            <aside className="w-1/4 hidden lg:block bg-gray-200 p-6 sticky top-0 h-screen">
                <h3 className="text-xl font-bold text-teal-800 mb-4">⚙️ Running Assembly on Windows</h3>
                <ol className="list-decimal list-inside text-gray-700">
                    <li>Download and install <strong>NASM</strong> (Netwide Assembler).</li>
                    <li>Install a C Compiler like <strong>MinGW</strong> or use Windows Subsystem for Linux (WSL).</li>
                    <li>Write an Assembly program and save it as <code className="font-mono">program.asm</code>.</li>
                    <li>Assemble the code using NASM:</li>
                    <div className="mt-2 bg-gray-900 text-white p-4 rounded-lg font-mono">
                        <code>nasm -f win64 program.asm -o program.obj</code>
                    </div>
                    <li>Link the object file using GCC:</li>
                    <div className="mt-2 bg-gray-900 text-white p-4 rounded-lg font-mono">
                        <code>gcc program.obj -o program.exe</code>
                    </div>
                    <li>Run the executable:</li>
                    <div className="mt-2 bg-gray-900 text-white p-4 rounded-lg font-mono">
                        <code>./program.exe</code>
                    </div>
                </ol>
            </aside>
        </div>
    );
};

export default LearnPage;
