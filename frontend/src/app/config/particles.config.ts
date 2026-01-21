/**
 * Configurações de Partículas para o Portfólio
 * Este arquivo centraliza todas as configurações do tsparticles
 */

export const PARTICLES_CONFIG = {
  // Configurações básicas
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle'
    },

    // Opacidade
    opacity: {
      value: {
        min: 0.1,
        max: 0.6
      },
      animation: {
        enable: true,
        speed: 1,
        sync: false
      }
    },

    // Tamanho
    size: {
      value: {
        min: 1,
        max: 3
      },
      animation: {
        enable: true,
        speed: 2,
        sync: false
      }
    },

    // Links entre partículas
    links: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.3,
      width: 1
    },

    // Movimento
    move: {
      enable: true,
      speed: {
        min: 0.5,
        max: 2
      },
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
      bounce: true,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },

  // Interatividade
  interactivity: {
    detect_on: 'canvas',
    events: {
      on_hover: {
        enable: true,
        mode: 'repulse'
      },
      on_click: {
        enable: true,
        mode: 'push'
      },
      resize: {
        enable: true
      }
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      }
    }
  },

  // Background
  background: {
    color: '#0a0e27'
  },

  // Configurações gerais
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  detectRetina: true,
  fps_limit: 120
};

/**
 * Configurações pré-definidas para diferentes estilos
 */
export const PARTICLES_PRESETS = {
  light: {
    ...PARTICLES_CONFIG,
    particles: {
      ...PARTICLES_CONFIG.particles,
      color: { value: '#000000' },
      links: {
        ...PARTICLES_CONFIG.particles.links,
        color: '#cccccc'
      }
    },
    background: { color: '#ffffff' }
  },

  minimal: {
    ...PARTICLES_CONFIG,
    particles: {
      ...PARTICLES_CONFIG.particles,
      number: { value: 20, density: { enable: true, value_area: 1000 } },
      links: { ...PARTICLES_CONFIG.particles.links, distance: 200 }
    }
  },

  dense: {
    ...PARTICLES_CONFIG,
    particles: {
      ...PARTICLES_CONFIG.particles,
      number: { value: 150, density: { enable: true, value_area: 600 } }
    }
  }
};
