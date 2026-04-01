// MODAL
function openModal(src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modalImg");

  modal.style.display = "flex";
  img.src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// close when clicking outside
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") closeModal();
});

/* NEURAL PLEXUS */
tsParticles.load("tsparticles", {
  background: { color: "#0b0e14" },

  particles: {
    number: { value: 80 },
    color: { value: "#00d4ff" },
    shape: { type: "circle" },
    size: { value: 3 },

    links: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.1,
      width: 1
    },

    move: {
      enable: true,
      speed: 1
    }
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 150,
        links: { opacity: 0.5 }
      }
    }
  }
});