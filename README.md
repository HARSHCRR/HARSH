# 🏥 HackLLM Medical Summarizer

A stunning, modern medical summarization web application built for the ESYA'25 HackLLM hackathon at IIIT Delhi. This application demonstrates cutting-edge AI technology with a beautiful glassmorphic interface.

## 🎯 Project Overview

**HackLLM Medical Summarizer** is an AI-powered web application that generates dual summaries from medical queries:
- **Patient-Friendly**: Easy-to-understand explanations for patients and families
- **Clinician-Focused**: Detailed technical summaries for healthcare professionals

## ✨ Key Features

### 🎨 Stunning UI/UX
- **Glassmorphic Design**: Modern frosted glass effects with blur backgrounds
- **ESYA'25 Theme**: Matches the "Techmorphosis" aesthetic with deep blues and teals
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### 🤖 AI Technology
- **Custom Dual-Decoder Architecture**: Novel transformer model for medical summarization
- **Real-time Processing**: Live model architecture visualization
- **Browser-Native**: Runs entirely in the browser using TensorFlow.js
- **No External APIs**: Complete privacy and offline capability

### 🏥 Medical Features
- **Dual Summarization**: Patient and clinician perspectives
- **Source Citations**: Provenance tracking with medical references
- **Safety Disclaimers**: Comprehensive medical disclaimers
- **Sample Queries**: Pre-built medical examples for demonstration

## 🚀 Tech Stack

- **Frontend**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom glassmorphism
- **Animations**: Framer Motion
- **UI Components**: Radix UI + Custom components
- **ML Framework**: TensorFlow.js (for browser inference)
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HARSHCRR/HARSH.git
   cd HARSH
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
medical-summarizer/
├── src/
│   ├── app/
│   │   ├── api/summarize/     # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main page
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── medical/           # Medical-specific components
│   │   └── model/             # Model visualization
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
└── README.md
```

## 🎭 Design System

### Color Palette
- **Primary**: Deep Blue (#1e3a8a)
- **Secondary**: Teal (#0d9488)
- **Accent**: Purple (#7c3aed)
- **Background**: Dark slate (#0f172a)
- **Glass**: rgba(255,255,255,0.1)

### Typography
- **Headings**: Bold, modern fonts
- **Body**: Clean, readable text
- **Medical**: Professional medical terminology

## 🤖 AI Model Architecture

### Custom Dual-Decoder Transformer
```
Input → Encoder → Dual Decoders → Output
                ├── Patient Decoder
                └── Clinician Decoder
```

### Key Innovations
- **Cross-Attention Bridging**: Connects patient and clinician perspectives
- **Medical Domain Adaptation**: Specialized for healthcare terminology
- **Browser-Native Inference**: No server dependencies
- **Real-time Visualization**: Live processing pipeline display

## 📱 Demo Scenarios

### Sample Medical Queries
1. **Cardiovascular Health**: "What are the symptoms of high blood pressure?"
2. **Mental Health**: "What are the signs of anxiety and treatment options?"
3. **Medication**: "Side effects of diabetes medications"

### Expected Outputs
- **Patient Summary**: Simplified explanations with lifestyle tips
- **Clinician Summary**: Technical details with treatment protocols
- **Sources**: Medical literature citations
- **Model Info**: Processing metrics and confidence scores

## 🏆 Hackathon Features

### Judge Impression Factors
- **Visual Impact**: Stunning glassmorphic interface
- **Technical Innovation**: Custom AI architecture
- **Real-world Value**: Clear medical applications
- **Performance**: Fast, responsive, and professional

### Demo Script
1. **Opening Hook** (30s): "Traditional medical summaries are one-size-fits-all..."
2. **Technical Deep-dive** (2min): Show custom architecture
3. **Live Demo** (2min): Input medical query, show dual outputs
4. **Innovation Highlight** (1min): Browser-native AI processing

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_APP_NAME=HackLLM Medical Summarizer
NEXT_PUBLIC_ESYA_YEAR=2025
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Get instant live demo URL

### Manual Deployment
```bash
npm run build
npm run start
```

## 📄 License

This project is built for the ESYA'25 HackLLM hackathon at IIIT Delhi.

## 👥 Team

Built with ❤️ for the medical AI community.

---

**Note**: This application is for demonstration purposes. Always consult healthcare professionals for medical advice.
