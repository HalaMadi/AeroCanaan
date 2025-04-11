"use client"

import type React from "react"
import { useState } from "react"
import { User, MailOpenIcon as Envelope, Phone, Camera } from "lucide-react"

const UserProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Changes saved!")
  }

  const handleDelete = () => {
    const confirmDelete = confirm("Are you sure you want to delete your account?")
    if (confirmDelete) {
      alert("Account deleted!")
    }
  }

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-muted p-6">
        <h2 className="text-2xl font-bold mb-6 text-[#E17100]">Menu</h2>
        <nav>
          <ul className="space-y-4 text-foreground">
            <li className="font-semibold text-[#E17100] cursor-pointer hover:text-[#E17100]">Profile</li>
            <li className="cursor-pointer hover:text-[#E17100]">Trips</li>
            <li className="cursor-pointer hover:text-[#E17100]">Settings</li>
            <li className="cursor-pointer hover:text-[#E17100]">Logout</li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-10 flex items-center justify-center bg-gradient-to-br from-muted to-background">
        <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(225,113,0,0.15)]">
          <div className="h-2 w-full bg-gradient-to-r from-[#E17100] to-orange-400"></div>
          <div className="relative space-y-6 bg-card p-8 text-sm transition-all duration-300 ease-in-out">
            <div className="absolute top-0 left-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#E17100]/20 to-orange-500/5"></div>
            <div className="absolute right-0 bottom-0 h-28 w-28 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-tl from-[#E17100]/20 to-orange-500/5"></div>

            <div className="relative mx-auto h-24 w-24 mb-2">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E17100] to-orange-400 p-[2px]">
                <div className="h-full w-full rounded-full bg-card flex items-center justify-center overflow-hidden"></div>
              </div>
              <button className="absolute bottom-0 right-0 rounded-full bg-[#E17100] p-1.5 text-white shadow-lg hover:bg-orange-600 transition-colors">
                <Camera size={14} />
              </button>
            </div>

            <div className="relative">
              <h1 className="mb-1.5 text-center text-2xl font-bold text-foreground">User Profile</h1>
              <p className="mb-6 text-center text-sm text-muted-foreground">Update your personal information</p>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-foreground text-xs font-medium uppercase tracking-wide">
                    First Name
                  </label>
                  <div className="group relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <User
                        className="text-muted-foreground group-focus-within:text-[#E17100] transition-colors duration-200"
                        size={18}
                      />
                    </div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full rounded-md border border-border bg-muted px-4 py-2.5 pl-10 text-sm text-foreground placeholder-muted-foreground shadow-sm transition-all duration-200 focus:border-[#E17100] focus:bg-background focus:ring-1 focus:ring-[#E17100] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-foreground text-xs font-medium uppercase tracking-wide">
                    Last Name
                  </label>
                  <div className="group relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <User
                        className="text-muted-foreground group-focus-within:text-[#E17100] transition-colors duration-200"
                        size={18}
                      />
                    </div>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full rounded-md border border-border bg-muted px-4 py-2.5 pl-10 text-sm text-foreground placeholder-muted-foreground shadow-sm transition-all duration-200 focus:border-[#E17100] focus:bg-background focus:ring-1 focus:ring-[#E17100] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-foreground text-xs font-medium uppercase tracking-wide">
                  Email
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Envelope
                      className="text-muted-foreground group-focus-within:text-[#E17100] transition-colors duration-200"
                      size={18}
                    />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full rounded-md border border-border bg-muted px-4 py-2.5 pl-10 text-sm text-foreground placeholder-muted-foreground shadow-sm transition-all duration-200 focus:border-[#E17100] focus:bg-background focus:ring-1 focus:ring-[#E17100] focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="text-foreground text-xs font-medium uppercase tracking-wide">
                  Phone Number
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Phone
                      className="text-muted-foreground group-focus-within:text-[#E17100] transition-colors duration-200"
                      size={18}
                    />
                  </div>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="w-full rounded-md border border-border bg-muted px-4 py-2.5 pl-10 text-sm text-foreground placeholder-muted-foreground shadow-sm transition-all duration-200 focus:border-[#E17100] focus:bg-background focus:ring-1 focus:ring-[#E17100] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 rounded-md bg-gradient-to-r from-[#E17100] to-orange-500 px-4 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:from-[#E17100] hover:to-orange-600 focus:ring-2 focus:ring-[#E17100] focus:ring-offset-2 focus:outline-none"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="rounded-md bg-gradient-to-r from-red-500 to-red-600 px-4 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:from-red-600 hover:to-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
                >
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default UserProfile
