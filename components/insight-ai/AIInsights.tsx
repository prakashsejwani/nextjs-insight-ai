'use client';
import { useState } from "react";

export default function AIInsights() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/ai-insights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input })
      });
      if (!res.ok) throw new Error("AI query failed");
      const { result }: { result: string } = await res.json();
      setOutput(result);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-xl">
      <h2 className="text-xl font-semibold mb-2">Ask InsightAI</h2>
      <input value={input} onChange={e => setInput(e.target.value)} className="p-2 border rounded w-full" placeholder="e.g. Why did traffic spike yesterday?" />
      <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-black text-white rounded" disabled={loading}>
        {loading ? "Thinking..." : "Submit"}
      </button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
      {output && <p className="mt-4 text-gray-800 whitespace-pre-line">{output}</p>}
    </div>
  );
}
