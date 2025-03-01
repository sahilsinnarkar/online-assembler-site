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
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-700">
                        <li>Used for system programming and performance-critical applications.</li>
                        <li>Provides control over CPU registers and memory.</li>
                        <li>Essential for writing optimized machine-level code.</li>
                    </ul>
                </section>

                <section id="how-it-works" className="mb-10">
                    <h2 className="text-3xl font-bold text-teal-800">2️⃣ How Assembly Works?</h2>
                    <p className="mt-2 text-gray-700">Assembly code is translated into machine code and executed by the CPU.</p>
                    <ul className="mt-4 list-disc list-inside text-gray-700">
                        <li><strong>Assembler:</strong> Converts .asm file to machine code.</li>
                        <li><strong>Linker:</strong> Resolves dependencies.</li>
                        <li><strong>Loader:</strong> Loads executable into memory.</li>
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

                <section id="registers" className="mb-10">
                    <h2 className="text-3xl font-bold text-teal-800">4️⃣ Registers & Memory Management</h2>
                    <table className="w-full border-collapse border border-gray-300 mt-4">
                        <thead>
                            <tr className="bg-teal-700 text-white">
                                <th className="p-2">Register</th>
                                <th className="p-2">Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="p-2">EAX</td>
                                <td className="p-2">Accumulator</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-2">EBX</td>
                                <td className="p-2">Base Register</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="running-code" className="mb-10">
                    <h2 className="text-3xl font-bold text-teal-800">5️⃣ Writing & Running Assembly Code</h2>
                    <p className="mt-2 text-gray-700">To run Assembly programs, install NASM and GCC:</p>
                    <div className="mt-4 bg-gray-900 text-white p-4 rounded-lg font-mono">
                        <code>
                            sudo apt install nasm <br />
                            nasm -f elf64 hello.asm <br />
                            ld hello.o -o hello <br />
                            ./hello
                        </code>
                    </div>
                </section>

                <section id="examples" className="mb-10">
                    <h2 className="text-3xl font-bold text-teal-800">6️⃣ Examples & Exercises</h2>
                    <p className="mt-2 text-gray-700">Try modifying this example to subtract numbers.</p>
                    <div className="mt-4 bg-gray-900 text-white p-4 rounded-lg font-mono">
                        <code>
                            mov eax, 5 <br />
                            mov ebx, 3 <br />
                            add eax, ebx &nbsp; ; eax = 5 + 3
                        </code>
                    </div>
                </section>
            </main>

            {/* Right Sidebar (Optional Quick Tips) */}
            <aside className="w-1/4 hidden lg:block bg-gray-200 p-6 sticky top-0 h-screen">
                <h3 className="text-xl font-bold text-teal-800 mb-4">💡 Quick Tips</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Use NASM for assembling code.</li>
                    <li>Memory is managed in segments.</li>
                    <li>Registers store temporary data.</li>
                </ul>
            </aside>
        </div>
    );
};

export default LearnPage;
