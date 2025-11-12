"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronRight, BrainCircuit, Languages, BookText, MessageSquareText, Bot } from "lucide-react"

const Header = () => {

  return (
    <div className="relative overflow-hidden">
      {/* <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" style={{ zIndex: -1 }}></canvas> */}

      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-teal-200 text-4xl font-bangla"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${50 + Math.random() * 80}s infinite ease-in-out`,
            }}
          >
            {["অ", "আ", "ই", "ঈ", "উ", "ঊ", "এ", "ঐ", "ও", "ঔ"][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div> */}

      <div className="max-w-5xl mx-auto px-4 py-8 text-center relative z-10">
        <div className="space-y-10">
          <h1 className="mt-9 text-4xl md:text-5xl font-bold tracking-tight bg-white">
            <span className="text-green-primary">
              Bangla AI Research, Tools and Applications
            </span>
          </h1>

          <div className="flex items-center justify-center space-x-2 bg-white">
            <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-teal-500"></div>
            <p className="text-xl md:text-2xl font-bold tracking-widest text-gray-800">
              <span className="text-teal-600">BARTA RESEARCH LAB</span>
            </p>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-transparent"></div>
          </div>
          {/* 
          <div className="flex justify-center py-5">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-md bg-teal-100 flex items-center justify-center text-teal-600">
                <BookText size={18} />
              </div>
              <ChevronRight className="text-teal-400" size={14} />
              <div className="w-9 h-9 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Languages size={18} />
              </div>
              <ChevronRight className="text-teal-400" size={14} />
              <div className="w-9 h-9 rounded-md bg-teal-100 flex items-center justify-center text-teal-600">
                <BrainCircuit size={18} />
              </div>
              <ChevronRight className="text-teal-400" size={14} />
              <div className="w-9 h-9 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600">
                <MessageSquareText size={18} />
              </div>
              <ChevronRight className="text-teal-400" size={14} />
              <div className="w-9 h-9 rounded-md bg-teal-100 flex items-center justify-center text-teal-600">
                <Bot size={18} />
              </div>
            </div>
          </div> */}

          <div className="relative max-w-3xl mx-auto bg-teal-100 bg-opacity-60 border border-green-secondary backdrop-blur-xs p-5 rounded-lg shadow-sm">
            <p className="text-base text-gray-700 leading-relaxed">
              We are a group of enthusiastic researchers working to solve the many challenges related to Artificial Intelligence, with a special focus on Bangla Natural Language Processing. We aim to develop AI tools that promote social inclusion and accessibility through advanced language technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
