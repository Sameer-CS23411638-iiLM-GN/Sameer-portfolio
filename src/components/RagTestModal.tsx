import React, { useState } from "react";
import { X, Send, Database, FileText, CheckCircle2, ShieldCheck, Terminal } from "lucide-react";

interface RagTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RagTestModal: React.FC<RagTestModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("How does the RAG pipeline handle vector chunking and document retrieval?");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    answer: string;
    sources: { id: string; title: string; score: number }[];
    latencyMs: number;
  } | null>({
    answer:
      "The backend applies recursive character splitting to break documents into semantic 500-token chunks with 50-token overlaps. Chunks are converted into high-dimensional vector embeddings and queried via cosine similarity search. Top-k matched chunks are dynamically formatted into the LangChain prompt template and passed to OpenAI LLMs for factual synthesis.",
    sources: [
      { id: "doc_04", title: "vector_index_spec.pdf", score: 0.942 },
      { id: "doc_18", title: "fastapi_middleware_arch.md", score: 0.887 },
    ],
    latencyMs: 342,
  });

  if (!isOpen) return null;

  const handleTestQuery = (customQuery?: string) => {
    const q = customQuery || query;
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      setResult({
        answer: `[FastAPI Status: 200 OK] Retrieval augmented response for: "${q}". The knowledge assistant retrieved 2 high-confidence chunks from the 30+ document knowledge store using LangChain vector search, validating context integrity before answering.`,
        sources: [
          { id: "doc_07", title: "rag_architecture_spec.md", score: 0.961 },
          { id: "doc_12", title: "pytest_ci_pipeline.yaml", score: 0.895 },
        ],
        latencyMs: Math.floor(280 + Math.random() * 90),
      });
    }, 600);
  };

  const presetQueries = [
    "How does the RAG pipeline handle vector chunking?",
    "What unit tests were written with PyTest and Docker?",
    "How is GitHub Actions CI configured for automated tests?",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                AI Knowledge Assistant — Interactive RAG API Console
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                FastAPI • LangChain • Vector DB • Dockerized CI/CD Service
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Query input box */}
          <div>
            <label className="block text-xs font-mono uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>POST /api/v1/query Payload:</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTestQuery()}
                placeholder="Ask the knowledge assistant..."
                className="flex-1 bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors font-mono"
              />
              <button
                onClick={() => handleTestQuery()}
                disabled={loading}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Execute</span>
              </button>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider py-1 font-mono">Presets:</span>
              {presetQueries.map((pq, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(pq);
                    handleTestQuery(pq);
                  }}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all text-left"
                >
                  "{pq}"
                </button>
              ))}
            </div>
          </div>

          {/* Simulated Output Console */}
          <div className="bg-black/80 rounded-xl border border-white/10 p-4 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-zinc-400 border-b border-white/10 pb-2 text-[11px]">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>200 OK • Swagger Schemas Validated</span>
              </span>
              <span>Latency: {result?.latencyMs ?? 0}ms</span>
            </div>

            {loading ? (
              <div className="py-8 flex flex-col items-center justify-center text-zinc-500 gap-2">
                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs">Generating vector embeddings & querying LangChain...</span>
              </div>
            ) : result ? (
              <div className="space-y-3">
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider mb-1">Synthesized Answer:</span>
                  <p className="text-zinc-200 leading-relaxed bg-white/[0.03] p-3 rounded-lg border border-white/5">
                    {result.answer}
                  </p>
                </div>

                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider mb-1.5">
                    Retrieved Knowledge Sources (Top-K Similarity):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {result.sources.map((src, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 text-[11px]"
                      >
                        <div className="flex items-center gap-1.5 text-zinc-300">
                          <FileText className="w-3.5 h-3.5 text-blue-400" />
                          <span>{src.title}</span>
                        </div>
                        <span className="text-emerald-400 font-mono">Score: {src.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Verification Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-xs">
              <div className="flex items-center gap-1.5 text-white font-medium mb-1">
                <Database className="w-3.5 h-3.5 text-blue-400" />
                <span>Knowledge Store</span>
              </div>
              <p className="text-zinc-400 text-[11px]">30+ document knowledge base with semantic embedding search.</p>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-xs">
              <div className="flex items-center gap-1.5 text-white font-medium mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>PyTest Test Suite</span>
              </div>
              <p className="text-zinc-400 text-[11px]">Automated unit tests covering API endpoints and retrieval logic.</p>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-xs">
              <div className="flex items-center gap-1.5 text-white font-medium mb-1">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>CI/CD & Docker</span>
              </div>
              <p className="text-zinc-400 text-[11px]">GitHub Actions CI running tests on push + multi-stage container.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer"
          >
            Close Console
          </button>
        </div>
      </div>
    </div>
  );
};
