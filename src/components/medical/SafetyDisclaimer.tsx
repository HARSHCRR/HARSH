"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, Shield, Info } from 'lucide-react'
import { motion } from 'framer-motion'

export function SafetyDisclaimer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card className="w-full max-w-4xl mx-auto border-orange-400/30 bg-gradient-to-br from-orange-900/10 to-red-900/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-orange-300">
            <Shield className="w-6 h-6" />
            Important Safety Disclaimer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-orange-300 mb-1">Medical Information</h4>
                  <p className="text-sm text-orange-200/80">
                    This AI-generated content is for informational purposes only and should not replace professional medical advice, diagnosis, or treatment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-300 mb-1">Consult Healthcare Providers</h4>
                  <p className="text-sm text-blue-200/80">
                    Always consult with qualified healthcare professionals for medical decisions and emergency situations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-300 mb-1">Data Privacy</h4>
                  <p className="text-sm text-green-200/80">
                    Your medical queries are processed locally in your browser. No personal health data is transmitted or stored.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-purple-300 mb-1">AI Limitations</h4>
                  <p className="text-sm text-purple-200/80">
                    While our model is trained on medical literature, it may not reflect the latest medical guidelines or individual circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-center text-white/80">
              <strong>Emergency:</strong> If you are experiencing a medical emergency, call your local emergency services immediately.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
