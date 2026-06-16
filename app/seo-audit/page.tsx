'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Search, ChevronDown, ChevronUp, AlertCircle, AlertTriangle, CheckCircle2 } from 'lucide-react'

interface Issue {
  id: string
  title: string
  count: number
  severity: 'error' | 'warning'
  why: string
  fix: string
  status: 'todo' | 'in-progress' | 'fixed'
}

const initialIssues: Issue[] = [
  {
    id: 'e1',
    title: '10 structured data items are invalid',
    count: 10,
    severity: 'error',
    why: 'Invalid schema markup prevents rich results in search and can cause indexing issues.',
    fix: 'Review Google Search Console Structured Data report. Fix JSON-LD schema validation errors for LocalBusiness, WebSite, and BlogPosting types. Ensure all required properties (name, url, address) are present and correctly formatted.',
    status: 'todo',
  },
  {
    id: 'e2',
    title: '2 issues with duplicate title tags',
    count: 2,
    severity: 'error',
    why: 'Duplicate titles confuse search engines about which page to rank for a query.',
    fix: 'Write unique, descriptive titles for each page. Format: [Primary Keyword] | Outlaw Feed. Ensure homepage title is different from product pages. Keep titles under 60 characters.',
    status: 'todo',
  },
  {
    id: 'e3',
    title: '2 pages have duplicate content issues',
    count: 2,
    severity: 'error',
    why: 'Duplicate content dilutes ranking signals and can result in Google choosing the wrong page to index.',
    fix: 'Add canonical tags pointing to the preferred URL version. If shadow pages exist (e.g. /formulas/ vs /products/), set noindex on duplicates and canonical to the primary version. Consider 301 redirects for retired URLs.',
    status: 'todo',
  },
  {
    id: 'e4',
    title: '2 pages have duplicate meta descriptions',
    count: 2,
    severity: 'error',
    why: 'Duplicate meta descriptions waste SERP snippet real estate and reduce click-through rates.',
    fix: 'Write unique meta descriptions for each page (120-155 characters). Include primary keyword and a clear value proposition. Avoid boilerplate text copied across pages.',
    status: 'todo',
  },
  {
    id: 'e5',
    title: 'Robots.txt file has format errors',
    count: 1,
    severity: 'error',
    why: 'Syntax errors in robots.txt can block critical pages from being crawled or indexed.',
    fix: 'Validate robots.txt at outlawfeed.com/robots.txt using Google Search Console robots.txt tester. Remove non-standard directives (e.g. "host:"). Ensure sitemap URL is absolute: /sitemap.xml',
    status: 'todo',
  },
  {
    id: 'w1',
    title: '414 issues with blocked internal resources in robots.txt',
    count: 414,
    severity: 'warning',
    why: 'Blocking CSS/JS resources prevents Google from rendering pages correctly, which can hurt mobile rankings and indexing.',
    fix: 'Update robots.txt to allow Googlebot access to /_next/static/* and other critical rendering resources. Remove overly broad disallow rules. Only block /api/, admin panels, and non-public directories.',
    status: 'todo',
  },
  {
    id: 'w2',
    title: '44 pages have low text-HTML ratio',
    count: 44,
    severity: 'warning',
    why: 'Low text-to-HTML ratio suggests thin content, excessive code bloat, or poor mobile UX.',
    fix: 'Add meaningful body content to key landing pages. Reduce inline styles and scripts. Move CSS to external files. Ensure product pages have detailed descriptions, benefits, and usage instructions.',
    status: 'todo',
  },
  {
    id: 'w3',
    title: '24 pages have too much text within the title tags',
    count: 24,
    severity: 'warning',
    why: 'Titles longer than 60 characters get truncated in search results, wasting valuable SERP real estate.',
    fix: 'Trim titles to 50-60 characters. Remove filler words like "Best" or "Top" unless they add value. Place brand name at end: [Page Topic] | Outlaw Feed. Prioritize primary keyword at the start.',
    status: 'todo',
  },
  {
    id: 'w4',
    title: '2 pages have a low word count',
    count: 2,
    severity: 'warning',
    why: 'Thin content pages provide little value to users and rank poorly in search results.',
    fix: 'Expand content to minimum 300 words. Add FAQs, product benefits, usage tips, or customer testimonials. If the page serves no SEO value, consider noindexing it or consolidating with a stronger page.',
    status: 'todo',
  },
]

export default function SEOAuditPage() {
  const [issues, setIssues] = useState<Issue[]>(initialIssues)
  const [filter, setFilter] = useState<'all' | 'error' | 'warning'>('all')
  const [search, setSearch] = useState('')
  const [expandedIssues, setExpandedIssues] = useState<Set<string>>(new Set())

  const filteredIssues = issues.filter((issue) => {
    const matchesFilter = filter === 'all' || issue.severity === filter
    const matchesSearch = search === '' || issue.title.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const errorCount = issues.filter((i) => i.severity === 'error' && i.status !== 'fixed').length
  const warningCount = issues.filter((i) => i.severity === 'warning' && i.status !== 'fixed').length
  const fixedCount = issues.filter((i) => i.status === 'fixed').length

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIssues)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedIssues(newExpanded)
  }

  const updateStatus = (id: string, status: Issue['status']) => {
    setIssues(issues.map((issue) => (issue.id === id ? { ...issue, status } : issue)))
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                SEO Site Audit
              </h1>
              <p className="text-muted-foreground text-lg">Outlaw Feed Co</p>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors text-sm"
              >
                outlawfeed.com
              </a>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-red-500" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{errorCount}</p>
                  <p className="text-sm text-muted-foreground">Errors</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{warningCount}</p>
                  <p className="text-sm text-muted-foreground">Warnings</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{fixedCount}/{issues.length}</p>
                  <p className="text-sm text-muted-foreground">Fixed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('error')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Errors
              </button>
              <button
                onClick={() => setFilter('warning')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === 'warning'
                    ? 'bg-amber-500 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Warnings
              </button>
            </div>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search issues..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>

        {/* Issues List */}
        <div className="space-y-4">
          {filteredIssues.map((issue) => (
            <div
              key={issue.id}
              className={`bg-card border rounded-lg overflow-hidden transition-all ${
                issue.severity === 'error' ? 'border-red-500/30' : 'border-amber-500/30'
              } ${issue.status === 'fixed' ? 'opacity-60' : ''}`}
            >
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={issue.status === 'fixed'}
                    onChange={(e) => updateStatus(issue.id, e.target.checked ? 'fixed' : 'todo')}
                    className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3
                        className={`font-semibold text-foreground ${
                          issue.status === 'fixed' ? 'line-through' : ''
                        }`}
                      >
                        {issue.title}
                      </h3>
                      <span className="px-2.5 py-0.5 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                        {issue.count} affected
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                          issue.severity === 'error'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-amber-500/20 text-amber-400'
                        }`}
                      >
                        {issue.severity}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      <span className="font-medium text-foreground">Why it matters:</span> {issue.why}
                    </p>

                    {/* Status Dropdown */}
                    <div className="flex items-center gap-3 mb-3">
                      <label className="text-sm font-medium text-muted-foreground">Status:</label>
                      <select
                        value={issue.status}
                        onChange={(e) => updateStatus(issue.id, e.target.value as Issue['status'])}
                        className="px-3 py-1.5 bg-background border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="todo">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="fixed">Fixed</option>
                      </select>
                    </div>

                    {/* Expandable Fix Section */}
                    <button
                      onClick={() => toggleExpand(issue.id)}
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      {expandedIssues.has(issue.id) ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Hide fix instructions
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Show fix instructions
                        </>
                      )}
                    </button>

                    {expandedIssues.has(issue.id) && (
                      <div className="mt-4 p-4 bg-muted/50 border border-border rounded-md">
                        <p className="text-sm font-medium text-foreground mb-2">How to fix:</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{issue.fix}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredIssues.length === 0 && (
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <p className="text-muted-foreground">No issues found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
