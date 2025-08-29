"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User, Stethoscope, Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface SummaryResult {
  patient: string
  clinician: string
  sources: string[]
  modelInfo: {
    architecture: string
    processingTime: number
    confidence: number
  }
}

interface DualSummaryOutputProps {
  result: SummaryResult | null
  isLoading: boolean
}

export function DualSummaryOutput({ result, isLoading }: DualSummaryOutputProps) {
  const [copiedTab, setCopiedTab] = useState<'patient' | 'clinician' | null>(null)

  const handleCopy = async (text: string, tab: 'patient' | 'clinician') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedTab(tab)
      setTimeout(() => setCopiedTab(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="w-full max-w-6xl mx-auto">
          <CardContent className="p-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-teal-400/30 border-t-teal-400 rounded-full animate-spin" style={{ animationDelay: '-0.5s' }} />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-white">Processing Medical Query</h3>
                <p className="text-blue-200/80">Our dual-decoder AI is analyzing your input...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  if (!result) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Stethoscope className="w-6 h-6 text-blue-400" />
            Dual Summary Results
          </CardTitle>
          <p className="text-blue-200/80">
            AI-generated summaries tailored for both patients and healthcare professionals
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="patient" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="patient" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Patient-Friendly
              </TabsTrigger>
              <TabsTrigger value="clinician" className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                Clinician-Focused
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="patient" className="mt-6">
              <Card className="bg-gradient-to-br from-blue-900/20 to-teal-900/20 border-blue-400/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-xl text-blue-100">
                      <User className="w-5 h-5 text-blue-400" />
                      Patient-Friendly Summary
                    </CardTitle>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCopy(result.patient, 'patient')}
                      className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      {copiedTab === 'patient' ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-blue-300" />
                      )}
                    </motion.button>
                  </div>
                  <p className="text-blue-200/70 text-sm">
                    Easy-to-understand explanation for patients and families
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-blue-100 leading-relaxed whitespace-pre-wrap">
                      {result.patient}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="clinician" className="mt-6">
              <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-400/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-xl text-purple-100">
                      <Stethoscope className="w-5 h-5 text-purple-400" />
                      Clinician-Focused Summary
                    </CardTitle>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCopy(result.clinician, 'clinician')}
                      className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      {copiedTab === 'clinician' ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-purple-300" />
                      )}
                    </motion.button>
                  </div>
                  <p className="text-purple-200/70 text-sm">
                    Technical summary with medical terminology and clinical details
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-purple-100 leading-relaxed whitespace-pre-wrap">
                      {result.clinician}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Model Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Model Architecture & Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="font-semibold text-blue-300 mb-2">Architecture</h4>
              <p className="text-sm text-blue-200/80">{result.modelInfo.architecture}</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="font-semibold text-teal-300 mb-2">Processing Time</h4>
              <p className="text-sm text-teal-200/80">{result.modelInfo.processingTime}ms</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="font-semibold text-purple-300 mb-2">Confidence</h4>
              <p className="text-sm text-purple-200/80">{result.modelInfo.confidence}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sources */}
      {result.sources.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Sources & Citations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {result.sources.map((source, index) => (
                <div key={index} className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-blue-200/80">{source}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  )
}
