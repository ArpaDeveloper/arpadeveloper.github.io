import "./index.scss";

export default function PageButtons({ setPage, openLinkedIn }) {
  return (
    <div className="nav">
      <button className="nav-btn" onClick={() => setPage("home")}>
        <span className="default" data-hover="H0M3">HOME</span>
      </button>

      <button className="nav-btn" onClick={() => setPage("timeline")}>
        <span className="default" data-hover="T1M3L1N3">TIMELINE</span>
      </button>

      <button className="nav-btn" onClick={() => setPage("projects")}>
        <span className="default" data-hover="PR0J3CT5">PROJECTS</span>
      </button>

      <button className="nav-btn" onClick={openLinkedIn}>
        <span className="default" data-hover="C0NN3CT">CONNECT</span>
      </button>
    </div>
  );
}