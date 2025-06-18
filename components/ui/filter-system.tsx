"use client"

import { useState, useEffect } from "react"
import { AnimatedElement } from "@/components/ui/animated-element"
import { X } from "lucide-react"

export interface FilterOption {
  id: string
  label: string
  count?: number
}

interface FilterGroup {
  id: string
  name: string
  options: FilterOption[]
}

interface FilterSystemProps {
  groups: FilterGroup[]
  onFilterChange: (filters: Record<string, string[]>) => void
  className?: string
}

export function FilterSystem({ groups, onFilterChange, className = "" }: FilterSystemProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  // Initialize expanded state for each group
  useEffect(() => {
    const initialExpanded: Record<string, boolean> = {}
    groups.forEach((group) => {
      initialExpanded[group.id] = false
    })
    setExpanded(initialExpanded)
  }, [groups])

  const toggleFilter = (groupId: string, optionId: string) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev }

      if (!newFilters[groupId]) {
        newFilters[groupId] = []
      }

      const index = newFilters[groupId].indexOf(optionId)

      if (index === -1) {
        newFilters[groupId] = [...newFilters[groupId], optionId]
      } else {
        newFilters[groupId] = newFilters[groupId].filter((id) => id !== optionId)
        if (newFilters[groupId].length === 0) {
          delete newFilters[groupId]
        }
      }

      return newFilters
    })
  }

  const toggleGroup = (groupId: string) => {
    setExpanded((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }))
  }

  const clearFilters = () => {
    setActiveFilters({})
  }

  const clearGroupFilters = (groupId: string) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev }
      delete newFilters[groupId]
      return newFilters
    })
  }

  // Notify parent component when filters change
  useEffect(() => {
    onFilterChange(activeFilters)
  }, [activeFilters, onFilterChange])

  // Count active filters
  const activeFilterCount = Object.values(activeFilters).reduce((acc, filters) => acc + filters.length, 0)

  return (
    <div className={`${className}`}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-lg font-medium">Filters</h2>
        {activeFilterCount > 0 && (
          <button onClick={clearFilters} className="text-sm text-accent-blue hover:underline flex items-center gap-1">
            Clear all filters ({activeFilterCount})
          </button>
        )}
      </div>

      {/* Active filters */}
      {activeFilterCount > 0 && (
        <AnimatedElement variant="fadeIn" className="mb-6">
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([groupId, optionIds]) => {
              const group = groups.find((g) => g.id === groupId)
              if (!group) return null

              return optionIds.map((optionId) => {
                const option = group.options.find((o) => o.id === optionId)
                if (!option) return null

                return (
                  <button
                    key={`${groupId}-${optionId}`}
                    onClick={() => toggleFilter(groupId, optionId)}
                    className="px-3 py-1.5 bg-accent-blue/20 text-accent-blue text-sm rounded-full flex items-center gap-1 hover:bg-accent-blue/30 transition-colors"
                  >
                    <span>{option.label}</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                )
              })
            })}
          </div>
        </AnimatedElement>
      )}

      {/* Filter groups */}
      <div className="space-y-6">
        {groups.map((group) => (
          <div key={group.id} className="border-b border-white/10 pb-6">
            <button
              onClick={() => toggleGroup(group.id)}
              className="w-full flex items-center justify-between text-left mb-4"
            >
              <h3 className="font-medium">{group.name}</h3>
              <span className="text-neutral-400 text-sm">{expanded[group.id] ? "−" : "+"}</span>
            </button>

            {expanded[group.id] && (
              <AnimatedElement variant="fadeIn" className="space-y-2">
                {group.options.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters[group.id]?.includes(option.id) || false}
                        onChange={() => toggleFilter(group.id, option.id)}
                        className="w-4 h-4 rounded border-white/20 bg-white/5 text-accent-blue focus:ring-accent-blue focus:ring-offset-[#111112]"
                      />
                      <span className="text-sm">{option.label}</span>
                      {option.count !== undefined && <span className="text-xs text-neutral-500">({option.count})</span>}
                    </label>
                  </div>
                ))}

                {activeFilters[group.id]?.length > 0 && (
                  <button
                    onClick={() => clearGroupFilters(group.id)}
                    className="text-xs text-accent-blue hover:underline mt-2"
                  >
                    Clear {group.name.toLowerCase()} filters
                  </button>
                )}
              </AnimatedElement>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
