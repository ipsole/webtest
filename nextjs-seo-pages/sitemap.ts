import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://docdril.in';
  
  const allRoutes = [
    '',
    '/about',
    '/how-it-works',
    '/faqs',
    '/contact',
    '/work',
    '/pricing',
    '/status',
    '/careers',
    '/privacy',
    '/terms',
    '/services/video-editing',
    '/services/website-design',
    '/services/ai-workflows-automation',
    '/services/growth-infrastructure',
    '/services/social-media-management',
    '/services/ai-music-creation',
    '/services/video-production-shoots',
    '/services/marketing-strategy',
    '/ecosystem/make-automation',
    '/ecosystem/nextjs-development',
    '/ecosystem/ai-workflows',
    '/ecosystem/framer-development',
    '/ecosystem/zapier-automation',
    '/industries/ai-startups',
    '/industries/saas-builders',
    '/industries/content-creators',
    '/roles/for-founders',
    '/roles/for-growth-teams',
    '/roles/for-content-creators',
    '/vs/traditional-agencies',
    '/vs/freelancers',
    '/vs/designjoy-alternative',
    '/vs/videohusky-alternative',
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.7,
  }));
}
