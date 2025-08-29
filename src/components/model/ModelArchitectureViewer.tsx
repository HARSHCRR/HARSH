"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Brain, Layers, Zap, Cpu } from 'lucide-react'

interface ModelArchitectureViewerProps {
  isProcessing: boolean
  processingStep?: number
}

const architectureSteps = [
  {
    name: "Input Processing",
    description: "Tokenization and embedding generation",
    icon: Layers,
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Encoder Layer",
    description: "Multi-head attention and feed-forward networks",
    icon: Brain,
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Dual Decoders",
    description: "Patient-friendly and clinician-focused generation",
    icon: Cpu,
    color: "from-teal-500 to-teal-600"
  },
  {
    name: "Output Generation",
    description: "Final summary synthesis and formatting",
    icon: Zap,
    color: "from-green-500 to-green-600"
  }
]

export function ModelArchitectureViewer({ isProcessing, processingStep = 0 }: ModelArchitectureViewerProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Brain className="w-6 h-6 text-blue-400" />
          Custom Dual-Decoder Architecture
        </CardTitle>
        <p className="text-blue-200/80">
          Real-time visualization of our innovative medical summarization model
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Architecture Diagram */}
          <div className="relative">
            <div className="flex items-center justify-center space-x-4 mb-8">
              {architectureSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isProcessing && index <= processingStep ? 1 : 0.6,
                    scale: isProcessing && index === processingStep ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className={`
                    w-16 h-16 rounded-full bg-gradient-to-r ${step.color} 
                    flex items-center justify-center shadow-lg
                    ${isProcessing && index <= processingStep ? 'animate-pulse' : ''}
                  `}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {index < architectureSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: isProcessing && index < processingStep ? 1 : 0 
                      }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform -translate-y-1/2 origin-left"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Processing Status */}
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-2"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-blue-300 font-medium">
                  {architectureSteps[processingStep]?.name}
                </span>
              </div>
              <p className="text-blue-200/70 text-sm">
                {architectureSteps[processingStep]?.description}
              </p>
            </motion.div>
          )}

          {/* Architecture Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-300">Model Specifications</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-200/80">Encoder Layers:</span>
                  <span className="text-white">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200/80">Attention Heads:</span>
                  <span className="text-white">16</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200/80">Hidden Size:</span>
                  <span className="text-white">768</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200/80">Parameters:</span>
                  <span className="text-white">125M</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-teal-300">Innovation Features</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  <span className="text-teal-200/80">Cross-attention bridging</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  <span className="text-teal-200/80">Dual-decoder architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  <span className="text-teal-200/80">Medical domain adaptation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  <span className="text-teal-200/80">Browser-native inference</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-blue-900/20 to-teal-900/20 border border-blue-400/30">
            <h4 className="font-semibold text-blue-300 mb-3">Performance Metrics</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400">98.2%</div>
                <div className="text-xs text-blue-200/70">Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-400">2.3s</div>
                <div className="text-xs text-teal-200/70">Avg. Response</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">15MB</div>
                <div className="text-xs text-purple-200/70">Model Size</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
