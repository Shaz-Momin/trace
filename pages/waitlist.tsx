"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, BarChart2, Layers, Moon, Gift, Download, CalendarCheck } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Home() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!firstName.trim()) newErrors.firstName = "First name is required"
    if (!lastName.trim()) newErrors.lastName = "Last name is required"
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      setIsSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-white grid md:grid-cols-2">
      {/* Left Column - Form */}
      <div className="flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="absolute top-6 right-6 flex items-center gap-3 bg-gray-100 border-2 border-gray-300 rounded-lg px-4 py-2 opacity-70">
                <Download className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-500">PWA</span>
              </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">
                Install Trace on any device with a browser.
                <br />
                Get a seamless, app-like experience.
                <br />
                Access your productivity tracker anytime, anywhere!
              </p>
              <p className="text-sm font-semibold text-emerald-600 mt-2">Coming Soon!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="max-w-md space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-indigo-800">
              <CalendarCheck size={32} />
            </div>
            {/* <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Trace Logo"
              width={32}
              height={32}
              className="rounded"
            /> */}
          </div>

          <div className="text-emerald-600 text-sm font-medium">Coming soon!</div>

          <h1 className="text-3xl font-bold text-gray-900">Get early access!</h1>

          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg border border-indigo-200 shadow-sm">
            <div className="flex items-center gap-3 text-indigo-800 mb-3">
              <Gift className="w-8 h-8 text-indigo-600" />
              <span className="font-bold text-xl">Limited Time Offer</span>
            </div>
            <p className="text-indigo-700 font-semibold text-lg">Join the waitlist now and get 3 months free!</p>
            <p className="mt-2 text-sm text-indigo-600">
              Be one of the first to experience a revolutionary way of tracking your productivity, and enjoy an extended
              free trial.
            </p>
          </div>

          {isSubmitted ? (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative"
              role="alert"
            >
              <strong className="font-bold">You're on the waitlist!</strong>
              <p className="block sm:inline">
                {" "}
                We'll email you as soon as we start beta testing with your 3 months free access!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstname" className="block text-sm text-gray-600 mb-1">
                    First name
                  </label>
                  <Input
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    className={`w-full ${errors.firstName ? "border-red-500" : ""}`}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm text-gray-600 mb-1">
                    Last name
                  </label>
                  <Input
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    className={`w-full ${errors.lastName ? "border-red-500" : ""}`}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full ${errors.email ? "border-red-500" : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <Button type="submit" className="w-full bg-[#6366F1] hover:bg-[#5558DD] text-white" size="lg">
                Join waitlist & Get 3 Months Free
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Right Column - Preview */}
      <div className="bg-gray-50 flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-2xl">
          <div className="rounded-lg border shadow-lg overflow-hidden bg-white">
            {/* Browser-like header */}
            <div className="bg-gray-100 border-b px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-full px-3 py-1 text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
                  trace.app
                </div>
              </div>
            </div>

            {/* App preview content */}
            <div className="bg-white">
              <div className="h-32 bg-gradient-to-r from-orange-500 to-rose-400 rounded-t-lg"></div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 border-4 border-white -mt-12"></div>
                  <div className="space-y-6 flex-1">
                    <div className="space-y-1">
                      <h2 className="text-xl font-semibold">Revamp your task tracking game with Trace</h2>
                      <p className="text-gray-600 text-sm">Discover your true productivity patterns</p>
                    </div>
                    <div className="space-y-6">
                      <FeaturePreview
                        icon={<Bell className="w-5 h-5" />}
                        title="Randomized Push Notifications"
                        description="Get alerted at random times during your customizable waking hours to log your current activity."
                      />
                      <FeaturePreview
                        icon={<BarChart2 className="w-5 h-5" />}
                        title="Activity Timeline Visualization"
                        description="See your logged activities in a clean, intuitive timeline format. Gain insights into your daily patterns and productivity trends."
                      />
                      <FeaturePreview
                        icon={<Layers className="w-5 h-5" />}
                        title="Customizable Categories"
                        description="Define primary categories (Work, Recreation, Chores) and add subcategories (Meetings, Emails, Movies). Edit or add categories as needed."
                      />
                      <FeaturePreview
                        icon={<Moon className="w-5 h-5" />}
                        title="Sleep/Off-Time Customization"
                        description="Set specific hours when you won't receive notifications, ensuring your rest time remains uninterrupted. Perfect for maintaining work-life balance."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeaturePreview({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="text-gray-400">{icon}</div>
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 pl-7">{description}</p>
    </div>
  )
}

