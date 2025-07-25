import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Main Apple homepage
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Apple (中国大陆) - 官方网站</title>
        <link rel="stylesheet" href="/static/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <!-- Navigation -->
        <nav class="nav">
            <div class="nav-container">
                <div class="nav-logo">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor">
                        <path d="M8.02 18.61c.16 0 .32-.05.44-.15.12-.1.18-.24.18-.39V2.83c0-.36-.16-.56-.44-.56s-.44.2-.44.56v15.24c0 .15.06.29.18.39.12.1.28.15.44.15z"/>
                        <path d="M1.06 5.49c.78-.42 1.28-1.24 1.28-2.13C2.34 2.6 1.98 2 1.3 2c-.32 0-.61.12-.84.34C.23 2.56.11 2.85.11 3.17c0 .89.5 1.71 1.28 2.13-.33.68-.5 1.42-.5 2.18 0 2.84 2.23 5.14 4.98 5.14 1.45 0 2.75-.6 3.7-1.56.12-.12.18-.28.18-.44 0-.36-.28-.64-.64-.64-.16 0-.32.06-.44.18-.71.71-1.67 1.1-2.68 1.1-2.06 0-3.74-1.72-3.74-3.84 0-.64.15-1.26.43-1.82z"/>
                    </svg>
                </div>
                <ul class="nav-menu">
                    <li><a href="#store">商店</a></li>
                    <li><a href="#mac">Mac</a></li>
                    <li><a href="#ipad">iPad</a></li>
                    <li><a href="#iphone">iPhone</a></li>
                    <li><a href="#watch">Watch</a></li>
                    <li><a href="#vision">Vision</a></li>
                    <li><a href="#airpods">AirPods</a></li>
                    <li><a href="#tv">TV 和家庭</a></li>
                    <li><a href="#entertainment">娱乐</a></li>
                    <li><a href="#accessories">配件</a></li>
                    <li><a href="#support">技术支持</a></li>
                </ul>
                <div class="nav-search">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                        <path d="M17.5 16.94l-4.14-4.14C14.66 11.68 15.5 10.14 15.5 8.5 15.5 3.81 11.69 0 7 0S-1.5 3.81-1.5 8.5 2.31 17 7 17c1.64 0 3.18-.84 4.3-2.14l4.14 4.14c.22.22.58.22.8 0l1.26-1.26c.22-.22.22-.58 0-.8zM7 14.5c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                    </svg>
                </div>
                <div class="nav-bag">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor">
                        <path d="M14.5 6h-2.05c-.03-.33-.05-.66-.05-1 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 .34.02.67.05 1H.5c-.28 0-.5.22-.5.5v12c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-12c0-.28-.22-.5-.5-.5zM4.4 5c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .34-.02.67-.05 1H4.45c-.03-.33-.05-.66-.05-1z"/>
                    </svg>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1 class="hero-title">iPhone 15 Pro</h1>
                <p class="hero-subtitle">钛金属。如此强悍。如此轻盈。如此Pro。</p>
                <div class="hero-actions">
                    <a href="#" class="btn btn-primary">进一步了解</a>
                    <a href="#" class="btn btn-secondary">购买</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="https://assets.stickpng.com/images/6582b1f31222b310816ee093.png" alt="iPhone 15 Pro" class="iphone-img">
            </div>
        </section>

        <!-- Product Grid -->
        <section class="products">
            <div class="product-grid">
                <div class="product-card large">
                    <div class="product-content">
                        <h2>MacBook Air</h2>
                        <p>强大性能。超凡创造力。</p>
                        <div class="product-actions">
                            <a href="#" class="link">进一步了解 ></a>
                            <a href="#" class="link">购买 ></a>
                        </div>
                    </div>
                    <div class="product-image">
                        <img src="https://www.apple.com/v/macbook-air/v/images/overview/hero/hero_endframe__c67cz35iy9me_large.png" alt="MacBook Air" class="product-img macbook-img">
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-content">
                        <h3>iPad Pro</h3>
                        <p>超乎想象的强大</p>
                        <div class="product-actions">
                            <a href="#" class="link">进一步了解 ></a>
                            <a href="#" class="link">购买 ></a>
                        </div>
                    </div>
                    <div class="product-image">
                        <img src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/ipad-pro-11-inch-13-inch.png" alt="iPad Pro" class="product-img ipad-img">
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-content">
                        <h3>Apple Watch</h3>
                        <p>健康的未来，现在开启</p>
                        <div class="product-actions">
                            <a href="#" class="link">进一步了解 ></a>
                            <a href="#" class="link">购买 ></a>
                        </div>
                    </div>
                    <div class="product-image">
                        <img src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121202-apple-watch-series-10.png" alt="Apple Watch" class="product-img watch-img">
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-content">
                        <h3>AirPods Pro</h3>
                        <p>自适应音频。现在登场</p>
                        <div class="product-actions">
                            <a href="#" class="link">进一步了解 ></a>
                            <a href="#" class="link">购买 ></a>
                        </div>
                    </div>
                    <div class="product-image">
                        <img src="https://www.apple.com/v/airpods-3rd-generation/f/images/overview/hero_airpods_left__e4mt0u0p25ea_xlarge.png" alt="AirPods Pro" class="product-img airpods-img">
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-content">
                        <h3>Apple TV 4K</h3>
                        <p>影院体验，在你家</p>
                        <div class="product-actions">
                            <a href="#" class="link">进一步了解 ></a>
                            <a href="#" class="link">购买 ></a>
                        </div>
                    </div>
                    <div class="product-image">
                        <img src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111839_apple-tv-4k-3gen.png" alt="Apple TV 4K" class="product-img appletv-img">
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-content">
                        <h3>HomePod</h3>
                        <p>深邃音效，触手可及</p>
                        <div class="product-actions">
                            <a href="#" class="link">进一步了解 ></a>
                            <a href="#" class="link">购买 ></a>
                        </div>
                    </div>
                    <div class="product-image">
                        <img src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111843_homepod-2gen.png" alt="HomePod" class="product-img homepod-img">
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>选购及了解</h4>
                    <ul>
                        <li><a href="#">商店</a></li>
                        <li><a href="#">Mac</a></li>
                        <li><a href="#">iPad</a></li>
                        <li><a href="#">iPhone</a></li>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">Vision</a></li>
                        <li><a href="#">AirPods</a></li>
                        <li><a href="#">TV 和家庭</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Apple 钱包</h4>
                    <ul>
                        <li><a href="#">钱包</a></li>
                        <li><a href="#">Apple Card</a></li>
                        <li><a href="#">Apple Pay</a></li>
                        <li><a href="#">Apple Cash</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>账户</h4>
                    <ul>
                        <li><a href="#">管理你的 Apple ID</a></li>
                        <li><a href="#">Apple Store 账户</a></li>
                        <li><a href="#">iCloud.com</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>娱乐</h4>
                    <ul>
                        <li><a href="#">Apple One</a></li>
                        <li><a href="#">Apple TV+</a></li>
                        <li><a href="#">Apple Music</a></li>
                        <li><a href="#">Apple Arcade</a></li>
                        <li><a href="#">Apple Fitness+</a></li>
                        <li><a href="#">Apple News+</a></li>
                        <li><a href="#">Apple Podcasts</a></li>
                        <li><a href="#">Apple Books</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Apple Inc. 保留所有权利。</p>
                <div class="footer-links">
                    <a href="#">隐私政策</a>
                    <a href="#">使用条款</a>
                    <a href="#">销售政策</a>
                    <a href="#">法律信息</a>
                    <a href="#">网站地图</a>
                </div>
            </div>
        </footer>

        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
