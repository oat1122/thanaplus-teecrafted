/**
 * Safely copy text to clipboard with fallback support
 * @param text Text to copy to the clipboard
 * @returns Promise that resolves when copy is complete or rejects on error
 */
export async function copyToClipboard(text: string): Promise<void> {
  // First try the modern Clipboard API
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (err) {
      console.warn('Clipboard API failed:', err);
      // Fall through to alternatives
    }
  }

  // Fallback 1: Use document.execCommand (older browsers)
  if (typeof document !== 'undefined') {
    try {
      // Create a temporary textarea element
      const textArea = document.createElement('textarea');
      textArea.value = text;

      // Make the textarea out of viewport
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);

      // Select and copy
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (success) return;
      console.warn('execCommand copy failed');
    } catch (err) {
      console.warn('Document copy fallback failed:', err);
    }
  }

  // Fallback 2: Show instruction for manual copy (especially for mobile devices)
  console.warn('Clipboard functionality unavailable. User must copy manually.');

  // If all methods fail, throw an error for the caller to handle
  throw new Error('Unable to copy to clipboard');
}
