import React from 'react'

export default function Loading() {
  return (
     <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-b-4 border-gray-200"></div>
      </div>
  )
}
