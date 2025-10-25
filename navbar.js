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
          z-index: 50;
        }
        .logo {
          color: #4f46e5;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
        <a href="/" class="logo">
          <i data-feather="activity"></i>
          FitTrack Pro
        </a>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        
        <ul class="nav-links">
          <li><a href="/"><i data-feather="home" class="w-4 h-4"></i> Home</a></li>
          <li><a href="/features.html"><i data-feather="zap" class="w-4 h-4"></i> Features</a></li>
          <li><a href="/workouts.html"><i data-feather="dumbbell" class="w-4 h-4"></i> Workouts</a></li>
          <li><a href="/progress.html"><i data-feather="trending-up" class="w-4 h-4"></i> Progress</a></li>
          <li><a href="/pricing.html"><i data-feather="dollar-sign" class="w-4 h-4"></i> Pricing</a></li>
          <li><a href="/signup.html" class="cta-button">Sign Up</a></li>
        </ul>
      </nav>
    `;

    // Mobile menu toggle
    this.shadowRoot.querySelector('.mobile-menu-btn').addEventListener('click', () => {
      const links = this.shadowRoot.querySelector('.nav-links');
      if (links.style.display === 'flex') {
        links.style.display = 'none';
      } else {
        links.style.display = 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = '100%';
        links.style.left = '0';
        links.style.right = '0';
        links.style.backgroundColor = 'white';
        links.style.padding = '1rem';
        links.style.gap = '1rem';
        links.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
