"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X, File, Check } from "lucide-react"

interface FileUploadProps {
  onChange: (files: File[]) => void
  maxFiles?: number
  maxSizeMB?: number
  acceptedTypes?: string[]
  className?: string
}

export function FileUpload({
  onChange,
  maxFiles = 5,
  maxSizeMB = 10,
  acceptedTypes = ["image/jpeg", "image/png", "image/gif", "application/pdf"],
  className = "",
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    validateAndAddFiles(selectedFiles)
  }

  const validateAndAddFiles = (selectedFiles: File[]) => {
    const newErrors: string[] = []
    const validFiles: File[] = []

    // Check if adding these files would exceed the max number
    if (files.length + selectedFiles.length > maxFiles) {
      newErrors.push(`You can only upload a maximum of ${maxFiles} files.`)
      return
    }

    selectedFiles.forEach((file) => {
      // Check file size
      if (file.size > maxSizeMB * 1024 * 1024) {
        newErrors.push(`${file.name} exceeds the maximum file size of ${maxSizeMB}MB.`)
        return
      }

      // Check file type
      if (!acceptedTypes.includes(file.type)) {
        newErrors.push(`${file.name} is not a supported file type.`)
        return
      }

      validFiles.push(file)
    })

    if (validFiles.length > 0) {
      const newFiles = [...files, ...validFiles]
      setFiles(newFiles)
      onChange(newFiles)
    }

    setErrors(newErrors)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    validateAndAddFiles(droppedFiles)
  }

  const removeFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
    onChange(newFiles)
  }

  const clearErrors = () => {
    setErrors([])
  }

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith("image/")) {
      return "image"
    } else if (fileType === "application/pdf") {
      return "pdf"
    } else {
      return "file"
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) {
      return bytes + " B"
    } else if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(1) + " KB"
    } else {
      return (bytes / (1024 * 1024)).toFixed(1) + " MB"
    }
  }

  return (
    <div className={className}>
      {/* File Input */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragging ? "border-accent-blue bg-accent-blue/10" : "border-white/20 hover:border-white/40 hover:bg-white/5"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          accept={acceptedTypes.join(",")}
          className="hidden"
        />
        <Upload className="w-10 h-10 mx-auto mb-3 text-neutral-400" />
        <p className="text-sm text-neutral-300 mb-1">
          <span className="font-medium">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-neutral-500">
          {acceptedTypes.map((type) => type.split("/")[1]).join(", ")} (Max: {maxSizeMB}MB)
        </p>
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-red-400">Upload failed</p>
            <button onClick={clearErrors} className="text-neutral-500 hover:text-neutral-400">
              <X className="w-4 h-4" />
            </button>
          </div>
          <ul className="text-xs text-red-300 space-y-1 list-disc pl-4">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-3 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded bg-accent-blue/20 flex items-center justify-center">
                  <File className="w-4 h-4 text-accent-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-neutral-500">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="text-neutral-500 hover:text-neutral-400 ml-2"
                aria-label="Remove file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          <div className="flex items-center justify-between text-xs text-neutral-500 px-2">
            <span>
              {files.length} of {maxFiles} files
            </span>
            {files.length > 0 && (
              <div className="flex items-center text-accent-blue">
                <Check className="w-3 h-3 mr-1" />
                <span>Files ready to upload</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
