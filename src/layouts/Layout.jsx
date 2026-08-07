export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">🎬 Movie Watchlist</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>

      <main className="flex-1 container mx-auto p-6">{children}</main>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Front-End Development 2 — Lab Activity</p>
        </aside>
      </footer>
    </div>
  );
}
