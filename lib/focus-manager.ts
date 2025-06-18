/**
 * Focus Manager - Utility for managing focus in the application
 * Provides methods for saving and restoring focus, and announcing focus changes to screen readers
 */

class FocusManager {
  private previousFocus: HTMLElement | null = null
  private focusHistory: HTMLElement[] = []

  /**
   * Save the current focus state
   */
  saveFocus(): void {
    if (document.activeElement instanceof HTMLElement) {
      this.previousFocus = document.activeElement
      this.focusHistory.push(this.previousFocus)
    }
  }

  /**
   * Restore the previous focus state
   */
  restoreFocus(): void {
    if (this.previousFocus && document.body.contains(this.previousFocus)) {
      this.previousFocus.focus()
      this.focusHistory.pop()
      this.previousFocus = this.focusHistory[this.focusHistory.length - 1] || null
    } else {
      // If the previous element is no longer in the DOM, focus the body
      document.body.focus()
    }
  }

  /**
   * Focus an element and announce it to screen readers
   */
  focusAndAnnounce(element: HTMLElement, announcement?: string): void {
    if (element) {
      element.focus()

      if (announcement && window.announce) {
        window.announce(announcement)
      }
    }
  }

  /**
   * Focus the first focusable element in a container
   */
  focusFirstElement(container: HTMLElement): HTMLElement | null {
    if (!container) return null

    const focusableElements = this.getFocusableElements(container)

    if (focusableElements.length > 0) {
      focusableElements[0].focus()
      return focusableElements[0]
    }

    return null
  }

  /**
   * Get all focusable elements in a container
   */
  getFocusableElements(container: HTMLElement): HTMLElement[] {
    if (!container) return []

    return Array.from(
      container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
    ).filter((el) => !el.hasAttribute("disabled") && this.isVisible(el)) as HTMLElement[]
  }

  /**
   * Check if an element is visible
   */
  private isVisible(element: Element): boolean {
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
  }
}

// Export a singleton instance
export const focusManager = new FocusManager()
