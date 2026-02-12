import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ComparisonTable from '@/components/ComparisonTable'
import ProblemSolution from '@/components/ProblemSolution'
import FeaturedComparisons from '@/components/FeaturedComparisons'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Navigation />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Problem/Solution Section */}
        <ProblemSolution />

        {/* Quick Comparison Table */}
        <ComparisonTable />

        {/* Featured Comparisons Grid */}
        <FeaturedComparisons />

        {/* Testimonials / Social Proof */}
        <Testimonials />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
