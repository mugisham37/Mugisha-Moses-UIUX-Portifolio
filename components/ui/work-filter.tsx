"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { Search, SlidersHorizontal, X, Check } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

interface WorkFilterProps {
  onSearch: (query: string) => void
  onFilter: (filters: Record<string, string[]>) => void
  onSort: (sortBy: string) => void
  totalProjects: number
  filteredCount: number
}

// Filter options
const filterOptions = {
  category: [
    { id: "web", label: "Web Design" },
    { id: "mobile", label: "Mobile Design" },
    { id: "branding", label: "Branding" },
    { id: "ui", label: "UI Design" },
    { id: "ux", label: "UX Design" },
  ],
  industry: [
    { id: "finance", label: "Finance" },
    { id: "healthcare", label: "Healthcare" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "education", label: "Education" },
    { id: "tech", label: "Technology" },
  ],
  year: [
    { id: "2024", label: "2024" },
    { id: "2023", label: "2023" },
    { id: "2022", label: "2022" },
    { id: "2021", label: "2021" },
  ],
}

// Sort options
const sortOptions = [
  { id: "newest", label: "Newest First" },
  { id: "oldest", label: "Oldest First" },
  { id: "az", label: "A-Z" },
  { id: "za", label: "Z-A" },
]

// Memoized filter group component for better performance
const FilterGroup = memo(({ 
  title, 
  options, 
  selectedOptions, 
  onChange 
}: { 
  title: string
  options: { id: string; label: string }[]
  selectedOptions: string[]
  onChange: (optionId: string) => void
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-neutral-300 mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div
              className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                selectedOptions.includes(option.id)
                  ? "bg-accent-blue border-accent-blue"
                  : "border-neutral-600 group-hover:border-neutral-400"
              }`}
            >
              {selectedOptions.includes(option.id) && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <span className="text-sm text-neutral-400 group-hover:text-neutral-300">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
})

FilterGroup.displayName = "FilterGroup"

// Memoized sort selector component for better performance
const SortSelector = memo(({ 
  options, 
  selectedOption, 
  onChange 
}: { 
  options: { id: string; label: string }[]
  selectedOption: string
  onChange: (optionId: string) => void
}) => {
  return (
    <div className="relative">
      <select
        value={selectedOption}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full bg-[#1a1a1d] border border-neutral-800 rounded-lg px-4 py-2 text-sm text-neutral-300 focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue"
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <SlidersHorizontal className="w-4 h-4 text-neutral-500" />
      </div>
    </div>
  )
})

SortSelector.displayName = "SortSelector"

export function WorkFilter({
  onSearch,
  onFilter,
  onSort,
  totalProjects,
  filteredCount,
}: WorkFilterProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [sortBy, setSortBy] = useState("newest")
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("")

  // Debounce search input to prevent excessive filtering
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Call parent's onSearch when debounced query changes
  useEffect(() => {
    onSearch(debouncedSearchQuery)
  }, [debouncedSearchQuery, onSearch])

  // Toggle filter option
  const toggleFilterOption = useCallback((groupId: string, optionId: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev }
      
      if (!newFilters[groupId]) {
        newFilters[groupId] = []
      }
      
      if (newFilters[groupId].includes(optionId)) {
        newFilters[groupId] = newFilters[groupId].filter((id) => id !== optionId)
      } else {
        newFilters[groupId] = [...newFilters[groupId], optionId]
      }
      
      // Remove empty arrays
      if (newFilters[groupId].length === 0) {
        delete newFilters[groupId]
      }
      
      return newFilters
    })
  }, [])

  // Update parent component when filters change
  useEffect(() => {
    onFilter(selectedFilters)
  }, [selectedFilters, onFilter])

  // Handle sort change
  const handleSortChange = useCallback((value: string) => {
    setSortBy(value)
    onSort(value)
  }, [onSort])

  // Clear all filters
  const clearFilters = useCallback(() => {
    setSearchQuery("")
    setSelectedFilters({})
    setSortBy("newest")
    onSearch("")
    onFilter({})
    onSort("newest")
  }, [onSearch, onFilter, onSort])

  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        {/* Search input */}
        <div className="relative w-full md:w-auto md:min-w-[300px]">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1a1a1d] border border-neutral-800 rounded-lg pl-10 pr-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Filter toggle button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`px-4 py-2 rounded-lg border text-sm font-medium flex items-center gap-2 transition-colors ${
              isFilterOpen || Object.keys(selectedFilters).length > 0
                ? "bg-accent-blue border-accent-blue text-white"
                : "border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
            {Object.values(selectedFilters).flat().length > 0 && (
              <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {Object.values(selectedFilters).flat().length}
              </span>
            )}
          </button>

          {/* Sort selector */}
          <div className="w-full md:w-auto min-w-[150px]">
            <SortSelector
              options={sortOptions}
              selectedOption={sortBy}
              onChange={handleSortChange}
            />
          </div>
        </div>
      </div>

      {/* Filter panel */}
      {isFilterOpen && (
        <AnimatedElement variant="fadeIn" className="mb-8">
          <div className="bg-[#1a1a1d] border border-neutral-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium">Filter Projects</h2>
              <button
                onClick={clearFilters}
                className="text-sm text-neutral-400 hover:text-white"
              >
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(filterOptions).map(([groupId, options]) => (
                <FilterGroup
                  key={groupId}
                  title={groupId.charAt(0).toUpperCase() + groupId.slice(1)}
                  options={options}
                  selectedOptions={selectedFilters[groupId] || []}
                  onChange={(optionId) => toggleFilterOption(groupId, optionId)}
                />
              ))}
            </div>
          </div>
        </AnimatedElement>
      )}

      {/* Results count */}
      <div className="text-sm text-neutral-500 mb-8">
        Showing {filteredCount} of {totalProjects} projects
      </div>
    </div>
  )
}
