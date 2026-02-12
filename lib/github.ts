import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

const owner = process.env.GITHUB_OWNER!
const repo = process.env.GITHUB_REPO!
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || 'main'

export async function createOrUpdateArticle(
  slug: string,
  content: string
): Promise<{ success: boolean; message: string; sha?: string }> {
  try {
    const path = `content/articles/${slug}.md`

    // Check if file exists
    let sha: string | undefined
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path,
        ref: branch,
      })
      if ('sha' in data) {
        sha = data.sha
      }
    } catch (error: any) {
      if (error.status !== 404) throw error
      // File doesn't exist, that's okay
    }

    // Create or update file
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: sha
        ? `Update article: ${slug}`
        : `Add article: ${slug}`,
      content: Buffer.from(content).toString('base64'),
      branch,
      ...(sha && { sha }),
    })

    return {
      success: true,
      message: sha ? 'Article updated' : 'Article created',
      sha: data.content?.sha,
    }
  } catch (error: any) {
    console.error('GitHub API error:', error)
    return {
      success: false,
      message: error.message || 'Failed to create/update article',
    }
  }
}

export async function listArticles(): Promise<string[]> {
  try {
    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path: 'content/articles',
      ref: branch,
    })

    if (Array.isArray(data)) {
      return data
        .filter((file) => file.name.endsWith('.md'))
        .map((file) => file.name.replace('.md', ''))
    }

    return []
  } catch (error) {
    console.error('Failed to list articles:', error)
    return []
  }
}
