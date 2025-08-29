"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Stethoscope, Brain, Heart, Pill } from 'lucide-react'
import { motion } from 'framer-motion'

interface MedicalInputProps {
  onSummarize: (text: string) => void
  isLoading: boolean
}

const sampleQueries = [
  {
    title: "Cardiovascular Health",
    query: "What are the symptoms of high blood pressure and how can it be managed?",
    icon: Heart
  },
  {
    title: "Mental Health",
    query: "What are the common signs of anxiety and what treatment options are available?",
    icon: Brain
  },
  {
    title: "Medication",
    query: "What are the side effects of common diabetes medications and how should they be taken?",
    icon: Pill
  }
]

export function MedicalInput({ onSummarize, isLoading }: MedicalInputProps) {
  const [inputText, setInputText] = useState('')

  const handleSampleClick = (query: string) => {
    setInputText(query)
  }

  const handleSummarize = () => {
    if (inputText.trim()) {
      onSummarize(inputText.trim())
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Stethoscope className="w-6 h-6 text-blue-400" />
            Medical Query Input
          </CardTitle>
          <p className="text-blue-200/80">
            Enter your medical question or condition description for AI-powered dual summarization
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-200">
              Medical Query
            </label>
            <Textarea
              placeholder="Describe your medical condition, symptoms, or ask a health-related question..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>
          
          <div className="space-y-3">
            <p className="text-sm font-medium text-blue-200">Sample Queries</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {sampleQueries.map((sample, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-auto p-3 flex flex-col items-start gap-2 text-left"
                    onClick={() => handleSampleClick(sample.query)}
                  >
                    <sample.icon className="w-4 h-4 text-blue-400" />
                    <div>
                      <p className="font-medium text-sm">{sample.title}</p>
                      <p className="text-xs text-blue-200/70 line-clamp-2">
                        {sample.query}
                      </p>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleSummarize}
              disabled={!inputText.trim() || isLoading}
              className="w-full h-12 text-lg font-semibold"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </div>
              ) : (
                'Generate Dual Summaries'
              )}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
