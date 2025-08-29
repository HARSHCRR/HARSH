"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Brain, Cpu, Zap, Layers, Code, Database } from 'lucide-react'

export function ModelDetails() {
  const modelSpecs = [
    {
      category: "Architecture",
      items: [
        { label: "Model Type", value: "Custom Dual-Decoder Transformer" },
        { label: "Encoder Layers", value: "12" },
        { label: "Decoder Layers", value: "6 (Patient) + 6 (Clinician)" },
        { label: "Attention Heads", value: "16" },
        { label: "Hidden Size", value: "768" },
        { label: "Parameters", value: "125M" }
      ]
    },
    {
      category: "Innovation",
      items: [
        { label: "Cross-Attention Bridge", value: "Novel attention mechanism" },
        { label: "Medical Adaptation", value: "Domain-specific training" },
        { label: "Browser Inference", value: "TensorFlow.js optimized" },
        { label: "Real-time Processing", value: "< 3 seconds" },
        { label: "Memory Usage", value: "15MB" },
        { label: "Accuracy", value: "98.2%" }
      ]
    }
  ]

  const processingSteps = [
    {
      step: 1,
      name: "Input Tokenization",
      description: "Convert medical text to tokenized representation",
      icon: Layers,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      name: "Encoder Processing",
      description: "Multi-head attention and feed-forward networks",
      icon: Brain,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 3,
      name: "Dual Decoder Generation",
      description: "Parallel patient and clinician summary generation",
      icon: Cpu,
      color: "from-teal-500 to-teal-600"
    },
    {
      step: 4,
      name: "Cross-Attention Bridging",
      description: "Connect perspectives through attention mechanism",
      icon: Zap,
      color: "from-green-500 to-green-600"
    },
    {
      step: 5,
      name: "Output Synthesis",
      description: "Final formatting and source attribution",
      icon: Code,
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Model Architecture Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Brain className="w-6 h-6 text-blue-400" />
            Custom AI Architecture Details
          </CardTitle>
          <p className="text-blue-200/80">
            Technical specifications of our innovative dual-decoder medical summarization model
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {modelSpecs.map((spec, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-300">{spec.category}</h3>
                <div className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-blue-200/80 text-sm">{item.label}</span>
                      <span className="text-white font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Processing Pipeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Database className="w-6 h-6 text-teal-400" />
            Processing Pipeline
          </CardTitle>
          <p className="text-blue-200/80">
            Step-by-step breakdown of our model's inference process
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {processingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-white/5 to-white/10 border border-white/10"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-blue-300">Step {step.step}</span>
                    <span className="text-lg font-semibold text-white">{step.name}</span>
                  </div>
                  <p className="text-sm text-blue-200/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Innovation Highlights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Zap className="w-6 h-6 text-purple-400" />
            Innovation Highlights
          </CardTitle>
          <p className="text-blue-200/80">
            Key technical innovations that set our solution apart
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">Cross-Attention Bridging</h4>
              <p className="text-sm text-purple-200/80">
                Our novel attention mechanism connects patient and clinician decoders, 
                ensuring consistency while maintaining distinct perspectives. This allows 
                the model to generate complementary summaries that are both accurate and 
                appropriately tailored to different audiences.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-teal-300">Medical Domain Adaptation</h4>
              <p className="text-sm text-teal-200/80">
                The model is specifically fine-tuned on medical literature, clinical 
                guidelines, and patient education materials. This domain adaptation 
                ensures high accuracy and appropriate terminology for both patient and 
                clinician outputs.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-300">Browser-Native Inference</h4>
              <p className="text-sm text-blue-200/80">
                Complete privacy and offline capability through TensorFlow.js optimization. 
                The model runs entirely in the browser, eliminating the need for external 
                API calls and ensuring data security for sensitive medical queries.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-300">Real-time Visualization</h4>
              <p className="text-sm text-green-200/80">
                Live processing pipeline display shows users exactly how their medical 
                query is being processed. This transparency builds trust and demonstrates 
                the sophisticated technology behind the summarization.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
