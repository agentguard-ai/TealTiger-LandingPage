# TealTiger Landing Page

Official landing page for [TealTiger](https://tealtiger.co.in) - Open-source AI security and cost control platform.

![TealTiger Logo](./public/tealtiger-logo.png)

## 🚀 Overview

This is the marketing website for TealTiger, showcasing our open-source SDK for securing AI applications with built-in guardrails, cost tracking, and multi-provider support.

**Live Site:** [tealtiger.co.in](https://tealtiger.co.in)

## ✨ Features

- **Modern Design** - Built with Next.js 14, React 18, and Tailwind CSS
- **Responsive** - Mobile-first design that works on all devices
- **Dark Mode** - Automatic dark mode support
- **Fast** - Optimized for performance with Next.js App Router
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Developer-Focused** - Code examples with TypeScript/Python tabs

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/agentguard-ai/tealtiger-landing.git
cd tealtiger-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🏗️ Project Structure

```
tealtiger-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── public/
│   ├── tealtiger-logo.png  # Main logo
│   ├── tealtiger-logo-dark.png
│   └── favicon.png         # Favicon
├── tailwind.config.ts      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json
```

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/agentguard-ai/tealtiger-landing)

1. Push code to GitHub
2. Import project in Vercel
3. Configure custom domain (tealtiger.co.in)
4. Deploy!

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### Manual Build

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Content

Edit `app/page.tsx` to modify:
- Hero section text
- Feature cards
- Code examples
- SDK version information
- Links and CTAs

### Update Styling

Edit `tailwind.config.ts` for:
- Color scheme
- Typography
- Spacing
- Breakpoints

### Update Metadata

Edit `app/layout.tsx` for:
- Page title
- Description
- Keywords
- Open Graph tags

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/agentguard-ai/tealtiger-landing/blob/main/CONTRIBUTING.md).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Main SDK:** [github.com/agentguard-ai/tealtiger](https://github.com/agentguard-ai/tealtiger)
- **Python SDK:** [github.com/agentguard-ai/tealtiger-python](https://github.com/agentguard-ai/tealtiger-python)
- **npm Package:** [npmjs.com/package/tealtiger](https://www.npmjs.com/package/tealtiger)
- **PyPI Package:** [pypi.org/project/tealtiger](https://pypi.org/project/tealtiger/)
- **Documentation:** [github.com/agentguard-ai/tealtiger#readme](https://github.com/agentguard-ai/tealtiger#readme)
- **Blog:** [dev.to/nagasatish_chilakamarti_2](https://dev.to/nagasatish_chilakamarti_2/introducing-tealtiger-ai-security-cost-control-made-simple-4lma)

## 💬 Support

- **Issues:** [GitHub Issues](https://github.com/agentguard-ai/tealtiger-landing/issues)
- **Discussions:** [GitHub Discussions](https://github.com/agentguard-ai/tealtiger/discussions)
- **Email:** support@tealtiger.co.in

## 🙏 Acknowledgments

Built with ❤️ by the TealTiger team and contributors.

---

**TealTiger** - Secure your AI. Control your costs.
