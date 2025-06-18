"use client"

import type React from "react"

import { useState } from "react"

// Types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  budget?: string
  timeline?: string
  services?: string[]
  agreeToTerms: boolean
}

export interface ContactFormState {
  isSubmitting: boolean
  isSubmitted: boolean
  errors: Record<string, string>
}

// Validation rules
const contactFormRules = {
  name: { required: true, minLength: 2 },
  email: { required: true, email: true },
  subject: { required: true },
  message: { required: true, minLength: 10 },
  agreeToTerms: { required: true },
}

// Hook implementation
export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
    services: [],
    agreeToTerms: false,
  });
  
  const [formState, setFormState] = useState<ContactFormState>({
    isSubmitting: false,
    isSubmitted: false,
    errors: {},
  });
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Handle checkboxes
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [name]: '' },
      }));
