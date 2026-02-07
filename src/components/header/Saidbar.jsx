import { useState, useEffect } from "react";

const Saidbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 780);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isMobile) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          fontSize: "24px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      {open && (
        <div style={styles.sidebar}>
          <button onClick={() => setOpen(false)} style={styles.close}>
            ✖
          </button>

          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      )}
    </>
  );
};
const styles = {
  sidebar: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "250px",
    height: "100vh",
    background: "#111",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "15px",
    zIndex: 1000,
  },
  close: {
    alignSelf: "flex-end",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
  },
};



export default Saidbar;