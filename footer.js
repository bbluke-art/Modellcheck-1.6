class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1f2937;
          color: white;
          padding: 3rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.25rem;
          font-weight: bold;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .footer-links h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #e5e7eb;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s;
          font-size: 0.875rem;
        }
        .footer-links a:hover {
          color: white;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: #9ca3af;
          transition: color 0.2s;
        }
        .social-links a:hover {
          color: white;
        }
        .copyright {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid #374151;
          color: #9ca3af;
          font-size: 0.875rem;
        }
        @media (max-width: 640px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-about">
            <a href="/" class="footer-logo">
              <i data-feather="activity"></i>
              FitTrack Pro
            </a>
            <p class="text-gray-400 text-sm">Your ultimate fitness companion for tracking workouts and achieving goals.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
              <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
              <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            </div>
          </div>
          
          <div class="footer-links">
            <h3>Product</h3>
            <ul>
              <li><a href="/features.html">Features</a></li>
              <li><a href="/pricing.html">Pricing</a></li>
              <li><a href="/changelog.html">Changelog</a></li>
              <li><a href="/roadmap.html">Roadmap</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h3>Resources</h3>
            <ul>
              <li><a href="/blog.html">Blog</a></li>
              <li><a href="/guides.html">Guides</a></li>
              <li><a href="/support.html">Support</a></li>
              <li><a href="/api.html">API</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="/about.html">About</a></li>
              <li><a href="/careers.html">Careers</a></li>
              <li><a href="/privacy.html">Privacy</a></li>
              <li><a href="/terms.html">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div class="copyright">
          &copy; ${new Date().getFullYear()} FitTrack Pro. All rights reserved.
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
