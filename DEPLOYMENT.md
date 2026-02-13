# Deployment Guide

This guide covers deploying the TealTiger landing page to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/agentguard-ai/tealtiger-landing)

### Manual Deployment

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Production Deploy**:
   ```bash
   vercel --prod
   ```

### Custom Domain Setup

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add `tealtiger.co.in`
4. Update DNS records as instructed
5. Wait for SSL certificate provisioning

### Environment Variables

No environment variables required for the landing page.

## 🌐 Netlify

### Deploy via Git

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select your repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 or higher

3. **Deploy**:
   - Click "Deploy site"

### Custom Domain

1. Go to "Domain settings"
2. Add custom domain: `tealtiger.co.in`
3. Configure DNS records
4. Enable HTTPS

## 🐳 Docker

### Build Docker Image

```bash
# Build
docker build -t tealtiger-landing .

# Run
docker run -p 3000:3000 tealtiger-landing
```

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

## ☁️ AWS Amplify

1. **Connect Repository**:
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your GitHub repository

2. **Build Settings**:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Deploy**:
   - Save and deploy

## 🔧 Self-Hosted

### Using PM2

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Install PM2**:
   ```bash
   npm install -g pm2
   ```

3. **Start with PM2**:
   ```bash
   pm2 start npm --name "tealtiger-landing" -- start
   pm2 save
   pm2 startup
   ```

### Using Nginx

1. **Build the application**:
   ```bash
   npm run build
   npm start
   ```

2. **Configure Nginx**:
   ```nginx
   server {
       listen 80;
       server_name tealtiger.co.in;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Enable SSL with Let's Encrypt**:
   ```bash
   sudo certbot --nginx -d tealtiger.co.in
   ```

## 📊 Performance Optimization

### Enable Caching

Add to `next.config.js`:
```javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
};
```

### CDN Setup

- Use Vercel's built-in CDN
- Or configure Cloudflare for additional caching

### Analytics

Add analytics to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🔍 Monitoring

### Vercel Analytics
- Automatically enabled on Vercel
- View in project dashboard

### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`

### Uptime Monitoring
- Use UptimeRobot or Pingdom
- Monitor `https://tealtiger.co.in`

## 🚨 Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Images Not Loading
- Verify images are in `public/` folder
- Check Next.js image optimization settings

### Slow Performance
- Enable caching
- Optimize images
- Use CDN
- Check bundle size: `npm run build`

## 📞 Support

Need help? Contact us:
- GitHub Issues: [tealtiger-landing/issues](https://github.com/agentguard-ai/tealtiger-landing/issues)
- Email: support@tealtiger.co.in
