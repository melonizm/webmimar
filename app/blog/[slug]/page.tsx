import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// Dinamik SEO Meta Etiketleri Oluşturma
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: "Yazı Bulunamadı | WebMimar",
    };
  }

  return {
    title: `${post.title} | WebMimar Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.webmimar.com.tr/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Tüm blog slug'larını Next.js build aşamasında algılaması için
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Schema.org BlogPosting metadata
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date, // In a real app, use ISO string here
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": "WebMimar",
      "url": "https://www.webmimar.com.tr"
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* JSON-LD Script for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-32 pb-24 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Blog'a Dön
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-border">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Prose (Content) Section */}
        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-primary hover:prose-a:text-primary/80 prose-a:transition-colors
            prose-ul:text-muted-foreground prose-li:mb-2
            prose-strong:text-foreground prose-strong:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* CTA Section */}
        <div className="mt-16 p-8 bg-card rounded-2xl border border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Profesyonel Desteğe mi İhtiyacınız Var?
          </h3>
          <p className="text-muted-foreground mb-6">
            İşletmenizi dijitalde bir adım öne taşımak için WebMimar'ın profesyonel çözümleriyle tanışın.
          </p>
          <Link 
            href="/#fiyatlar" 
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Hizmetlerimizi İnceleyin
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
