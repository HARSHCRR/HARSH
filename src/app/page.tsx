"use client"

import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 shadow-lg">
                <div className="w-8 h-8 text-white">🧠</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                HackLLM Medical Summarizer
              </h1>
            </div>
            
            <p className="text-xl text-blue-200/80 mb-2">
              ESYA'25 | IIIT Delhi
            </p>
            
            <p className="text-lg text-blue-300/70">
              AI-Powered Dual Summarization for Medical Queries
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 space-y-8">
          <div className="w-full max-w-4xl mx-auto">
            <div className="rounded-lg border border-white/20 bg-white/5 backdrop-blur-md shadow-xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Medical Query Input
              </h2>
              <p className="text-blue-200/80 mb-4">
                Enter your medical question or condition description for AI-powered dual summarization
              </p>
              <textarea 
                className="w-full min-h-[120px] rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-blue-200/50 backdrop-blur-sm"
                placeholder="Describe your medical condition, symptoms, or ask a health-related question..."
              />
              <button className="mt-4 w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm rounded-md">
                Generate Dual Summaries
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-200/80">
              Built for ESYA'25 HackLLM Hackathon at IIIT Delhi
            </p>
            <p className="text-sm text-blue-300/60">
              © 2024 Medical AI Team | Powered by Next.js & Custom AI Architecture
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
