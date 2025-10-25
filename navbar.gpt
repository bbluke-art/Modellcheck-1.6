class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .logo {
          color: #4f46e5;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        .nav-links a {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .nav-links a:hover {
          color: #4f46e5;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        .cta-button {
          background: #4f46e5;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          transition: background 0.2s;
        }
        .cta-button:hover {
          background: #4338ca;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>

      <nav>
        <a href="index.html" class="logo">
          <i data-feather="activity"></i>
          FitTrack Pro
        </a>

        <button class="mobile-menu-btn" aria-label="Menu">
          <i data-feather="menu"></i>
        </button>

        <ul class="nav-links">
          <li><a href="index.html"><i data-feather="home"></i> Home</a></li>
          <li><a href="features.html"><i data-feather="zap"></i> Features</a></li>
          <li><a href="workouts.html"><i data-feather="dumbbell"></i> Workouts</a></li>
          <li><a href="progress.html"><i data-feather="trending-up"></i> Progress</a></li>
          <li><a href="pricing.html"><i data-feather="dollar-sign"></i> Pricing</a></li>
          <li><a href="signup.html" class="cta-button">Sign Up</a></li>
        </ul>
      </nav>
    `;

    // Feather icons im Shadow DOM initialisieren
    requestAnimationFrame(() => {
      if (window.feather) window.feather.replace({ 'stroke-width': 1.5, parent: this.shadowRoot });
    });

    // Mobile menu toggle
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    menuBtn.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.backgroundColor = 'white';
      navLinks.style.padding = '1rem';
      navLinks.style.gap = '1rem';
      navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);
