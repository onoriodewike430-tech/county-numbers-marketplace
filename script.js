* {
  box-sizing: border-box;
}

:root {
  --bg: #f6f7fb;
  --panel: #ffffff;
  --panel-alt: #eef2ff;
  --primary: #3d5af1;
  --primary-dark: #2944d6;
  --accent: #0fbf8f;
  --text: #161b2c;
  --muted: #586179;
  --line: rgba(22, 27, 44, 0.08);
  --shadow: 0 18px 40px rgba(24, 39, 75, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #f8f9fe 0%, #eef4ff 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: rgba(248, 249, 254, 0.8);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 32px;
}

.brand-wrap {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
}

.brand-mark {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #7b8cff);
  color: white;
  font-size: 0.8rem;
  box-shadow: var(--shadow);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--muted);
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  border: 0;
  border-radius: 12px;
  padding: 0.9rem 1.2rem;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  box-shadow: 0 12px 25px rgba(61, 90, 241, 0.24);
}

.btn-secondary,
.btn-light {
  background: white;
  color: var(--text);
  border: 1px solid var(--line);
}

.hero {
  padding: 72px 0 30px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(61, 90, 241, 0.1);
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.eyebrow.accent {
  background: rgba(15, 191, 143, 0.12);
  color: #0a8d6c;
}

.hero-copy h1,
.section-head h2 {
  margin: 0;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 4.8rem);
  line-height: 0.96;
  max-width: 640px;
}

.hero-copy p {
  font-size: 1.08rem;
  line-height: 1.7;
  color: var(--muted);
  max-width: 560px;
  margin: 20px 0 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 34px;
}

.trust-row div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.trust-row strong {
  font-size: 1.5rem;
  letter-spacing: -0.05em;
}

.trust-row span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.panel-badge {
  display: inline-flex;
  padding: 0.5rem 0.8rem;
  background: rgba(15, 191, 143, 0.12);
  color: #0a8d6c;
  font-size: 0.77rem;
  font-weight: 700;
  border-radius: 999px;
  margin-bottom: 12px;
}

.number-card {
  width: min(100%, 430px);
  background: linear-gradient(180deg, #172033 0%, #111827 100%);
  color: white;
  border-radius: 28px;
  padding: 26px;
  box-shadow: var(--shadow);
}

.number-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.12);
}

.price {
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.number-card h2 {
  margin: 18px 0 10px;
  font-size: clamp(2rem, 4vw, 2.7rem);
  letter-spacing: -0.06em;
}

.number-card p {
  color: rgba(255, 255, 255, 0.66);
  margin: 0 0 16px;
}

.number-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: rgba(255, 255, 255, 0.85);
}

.number-card li::before {
  content: "•";
  color: var(--accent);
  margin-right: 8px;
}

.stats-section {
  padding: 18px 0 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.stats-grid article,
.feature-card,
.step-card,
.faq-item,
.product-card {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 12px 26px rgba(31, 41, 55, 0.04);
}

.stats-grid article {
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stats-grid strong {
  font-size: clamp(1.8rem, 2vw, 2.2rem);
  letter-spacing: -0.06em;
}

.stats-grid span {
  color: var(--muted);
}

.catalog-section,
.features-section,
.steps-section,
.faq-section {
  padding: 90px 0 0;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 26px;
}

.section-head.center {
  text-align: center;
  justify-content: center;
  display: block;
}

.section-head h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  border: 1px solid var(--line);
  background: white;
  color: var(--muted);
  border-radius: 999px;
  padding: 0.65rem 1rem;
  font-weight: 600;
}

.filter-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.product-card {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.product-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.product-badge {
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  background: rgba(61, 90, 241, 0.1);
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
}

.product-price {
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: -0.06em;
}

.product-card h3 {
  margin: 0;
  font-size: 1.35rem;
}

.product-card .meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 0.88rem;
}

.product-card .meta span {
  background: #f4f6fb;
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
}

.product-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
}

.product-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  gap: 12px;
}

.product-actions .btn {
  flex: 1;
}

.feature-grid,
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card,
.step-card {
  padding: 28px 22px;
}

.icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(61, 90, 241, 0.1), rgba(15, 191, 143, 0.12));
  font-size: 1.4rem;
}

.feature-card h3,
.step-card h3,
.faq-item h3 {
  margin: 18px 0 12px;
  font-size: 1.3rem;
}

.feature-card p,
.step-card p,
.faq-item p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.step-number {
  display: inline-flex;
  margin-bottom: 8px;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: var(--primary);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
}

.promo-banner {
  padding-top: 90px;
}

.banner-box {
  background: linear-gradient(135deg, #13213f, #20356f);
  color: white;
  border-radius: 30px;
  padding: clamp(24px, 5vw, 42px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.banner-box h2 {
  margin: 10px 0 0;
  font-size: clamp(1.9rem, 3vw, 2.8rem);
  letter-spacing: -0.05em;
}

.faq-wrap {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 24px;
  align-items: start;
}

.faq-list {
  display: grid;
  gap: 18px;
}

.faq-item {
  padding: 24px 20px;
}

.site-footer {
  margin-top: 90px;
  background: #0d1425;
  color: rgba(255, 255, 255, 0.8);
  padding: 50px 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr;
  gap: 30px;
}

.footer-grid h4 {
  margin: 0 0 16px;
  color: white;
}

.footer-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.footer-grid p {
  margin-top: 18px;
  line-height: 1.7;
  max-width: 420px;
}

@media (max-width: 980px) {
  .hero-grid,
  .faq-wrap,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid,
  .product-grid,
  .feature-grid,
  .steps-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px 0;
  }
}

@media (max-width: 640px) {
  .nav-links,
  .nav-cta,
  .hero-actions,
  .filters,
  .section-head,
  .banner-box {
    flex-direction: column;
    align-items: stretch;
  }

  .stats-grid,
  .product-grid,
  .feature-grid,
  .steps-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 48px;
  }

  .brand-wrap {
    justify-content: center;
  }
}
