export function validateSlug(slug: string): { valid: boolean; error?: string } {
  if (!slug || typeof slug !== 'string') {
    return { valid: false, error: 'Slug is required' }
  }

  if (slug.length < 3) {
    return { valid: false, error: 'Slug must be at least 3 characters' }
  }

  if (slug.length > 100) {
    return { valid: false, error: 'Slug must be less than 100 characters' }
  }

  // Must be lowercase, numbers, and hyphens only
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return {
      valid: false,
      error: 'Slug must contain only lowercase letters, numbers, and hyphens',
    }
  }

  return { valid: true }
}

export function sanitizeSlug(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Spaces to hyphens
    .replace(/-+/g, '-') // Multiple hyphens to single
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
}
