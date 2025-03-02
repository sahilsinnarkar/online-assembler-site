import React, { useState, useEffect } from "react";
import axios from "axios";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const ContributePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [codeSnippet, setCodeSnippet] = useState("");
    const [contributions, setContributions] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // Fetch contributions from backend
    const fetchContributions = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/contributions");
            setContributions(res.data);
        } catch (err) {
            console.error("Error fetching contributions:", err);
        }
    };

    useEffect(() => {
        fetchContributions();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) return alert("Title and content are required");

        try {
            await axios.post("http://localhost:5000/api/contribute", { title, content, codeSnippet });

            // After submitting, refresh the contributions list
            fetchContributions();

            // Clear form fields
            setTitle("");
            setContent("");
            setCodeSnippet("");
            setShowForm(false);
            alert("Contribution added successfully!");
        } catch (error) {
            console.error("Error adding contribution:", error);
        }
    };

    return (
        <div className="max-w-7xl mx-auto mt-10 p-6">
            <div className="px-4 py-6 bg-gray-200 rounded-lg">
                <h1 className="text-4xl font-bold text-center mb-6 text-teal-700">Contribute to Assembly Learning</h1>

                <div className="flex justify-center mb-6">
                    <SignedIn>
                        {!showForm && (
                            <button
                                onClick={() => setShowForm(true)}
                                className="bg-teal-700 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition"
                            >
                                <img src="/images/plus.png" alt="Add" className="w-6 h-6 inline mr-2" /> Add a Contribution
                            </button>
                        )}
                    </SignedIn>
                </div>

                {showForm && (
                    <div className="max-w-3xl mx-auto bg-white p-4 shadow-md rounded-lg mb-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-2 border rounded text-lg font-semibold"
                            />
                            <textarea
                                placeholder="Share your knowledge..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full p-2 border rounded"
                                rows="4"
                            />
                            <textarea
                                placeholder="Optional: Paste code here..."
                                value={codeSnippet}
                                onChange={(e) => setCodeSnippet(e.target.value)}
                                className="w-full p-2 border rounded font-mono"
                                rows="4"
                            />
                            <div className="flex justify-between">
                                <button
                                    className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-700 transition"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-600 transition"
                                    type="button"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <SignedOut>
                    <p className="text-red-500 text-center">You must sign in to contribute.</p>
                </SignedOut>
            </div>

            {/* Contributions Section */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold text-gray-700 mb-4">Latest Contributions</h2>

                <div className="space-y-6">
                    {contributions.length === 0 ? (
                        <p className="text-teal-800">No contributions yet. Be the first to add!</p>
                    ) : (
                        contributions.map((post, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-xl p-6 border-l-4 border-teal-500 flex flex-col sm:flex-row"
                            >
                                {/* Left Section: Title & Content */}
                                <div className="w-full sm:w-2/3 p-4">
                                    <h3 className="text-xl font-bold text-teal-800 mb-2">{post.title}</h3>
                                    <div
                                        className="text-teal-700 whitespace-pre-wrap overflow-auto scrollbar-hide"
                                        style={{
                                            maxHeight: "160px",
                                            padding: "8px",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        {post.content}
                                    </div>
                                </div>

                                {/* Right Section: Code Snippet (If Provided) */}
                                {post.codeSnippet && (
                                    <div className="w-full sm:w-1/3 bg-gray-900 text-white p-4 rounded-lg mt-3 sm:mt-0">
                                        <h4 className="text-lg font-semibold text-gray-200 mb-2">Code Snippet</h4>
                                        <pre
                                            className="p-2 rounded text-sm font-mono overflow-auto scrollbar-hide"
                                            style={{
                                                maxHeight: "220px",
                                                padding: "8px",
                                                borderRadius: "8px",
                                            }}
                                        >
                                            <code>{post.codeSnippet}</code>
                                        </pre>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContributePage;
