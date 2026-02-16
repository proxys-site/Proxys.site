# Proxys.Site - Open Source Proxy Comparison Tool

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()

Welcome to the official open-source repository for [Proxys.Site](https://proxys.site) - the premier destination for finding, comparing, and selecting the best proxy services for your needs.

## 🚀 About This Project

This project powers **Proxys.Site**, a modern, fast, and user-friendly platform built to help developers, marketers, and data analysts find the perfect proxy solutions. We believe in transparency and community collaboration, which is why we have open-sourced our core codebase.

Whether you are looking for [Residential Proxies](https://proxys.site/residential-proxies), [Datacenter Proxies](https://proxys.site/datacenter-proxies), or specialized solutions for [Web Scraping](https://proxys.site/web-scraping-proxies), this codebase demonstrates how to build a high-performance, SEO-optimized comparison engine using the **Eleventy** static site generator.

### Key Features

*   **⚡ Blazing Fast Performance**: Built with Eleventy (11ty) for static HTML generation, ensuring top-tier Core Web Vitals.
*   **🎨 Modern UI/UX**: clean, responsive design using Tailwind CSS.
*   **🔍 SEO Optimized**: Native support for SEO best practices including meta tags, Open Graph, and JSON-LD structured data.
*   **📱 Mobile Friendly**: Fully responsive layout that works perfectly on all devices.
*   **🔧 Maintainable**: Modular architecture with reusable Nunjucks components.

## 🛠️ Stack

*   **Core**: [Eleventy (11ty)](https://www.11ty.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Templating**: Nunjucks (.njk)
*   **Package Management**: NPM

> 🌟 **Supported by:** [Evomi](https://evomi.com/?utm_source=proxys.site&utm_medium=referral&utm_campaign=rankings&utm_content=listing) - The #1 Ecosystem for Residential, Mobile & Datacenter Proxies.

## 🏁 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   Node.js (v14 or higher)
*   NPM

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/proxys-site/Proxys.site.git
    cd Proxys.site
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    Copy the sample environment file and configure it (optional for local dev):
    ```bash
    cp .env.sample .env
    ```
    *Note: Google Tag Manager (GTM) is disabled by default in the open-source version. To enable it for your own deployment, add your GTM ID to the `.env` file.*

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:8080`.

## 📦 Building for Production

To generate the static site for deployment:

```bash
npm run build
```

The output will be generated in the `_site` directory.

## 🤝 Contributing

We welcome contributions from the community! If you have suggestions for improving [Proxys.Site](https://proxys.site), please feel free to:

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## � Contact

If you have any questions, suggestions, or feedback, feel free to reach out to us:

*   **Email**: [info@proxys.site](mailto:info@proxys.site)
*   **Website**: [https://proxys.site](https://proxys.site)

## �📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by the <a href="https://proxys.site">Proxys.Site</a> Team.
</p>

<p align="center">
  <a href="https://ko-fi.com/proxys" target="_blank">
    <img src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" alt="Buy Me a Coffee at ko-fi.com" height="36" style="border:0px;height:36px;">
  </a>
</p>
