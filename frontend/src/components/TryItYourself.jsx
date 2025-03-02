import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

const TryItYourself = () => {
    const [code, setCode] = useState(`section .text
global _start
_start:
    mov eax, 1
    xor ebx, ebx
    int 0x80`);
    const [output, setOutput] = useState("");

    const runCode = async () => {
        try {
            const response = await axios.post("http://localhost:5000/execute", { code });
            setOutput(response.data.output);
        } catch (error) {
            setOutput(error.response?.data?.details || "An error occurred.");
        }
    };

    const saveCode = () => {
        const element = document.createElement("a");
        const file = new Blob([code], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "snippet.asm"; // Default filename
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div className="flex h-screen text-white">
            {/* Left - Code Editor */}
            <div className="w-1/2 p-4 border-r border-gray-700">
                <h2 className="text-xl font-bold mb-2 text-teal-700">Assembly Editor</h2>
                <Editor
                    height="75vh"
                    defaultLanguage="assembly"
                    theme="vs-dark"
                    value={code}
                    onChange={(newValue) => setCode(newValue)}
                    className="border border-gray-700 rounded"
                />
                <div className="flex justify-between mt-4">
                    <button
                        className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-700"
                        onClick={saveCode}
                    >
                        Save Code
                    </button>
                </div>
            </div>

            {/* Right - Output */}
            <div className="w-1/2 p-4 flex flex-col">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-teal-700">Output</h2>
                    <button
                        className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-700"
                        onClick={runCode}
                    >
                        Run Code
                    </button>
                </div>
                <div className="bg-gray-800 text-white p-4 rounded h-80 overflow-auto mt-2 border border-gray-700">
                    {output || "Click 'Run Code' to see output here..."}
                </div>
            </div>
        </div>
    );
};

export default TryItYourself;
