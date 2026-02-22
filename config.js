// ============================================================
//  NSTudio Biolink Config
//  Edit this file to update content for any page
// ============================================================

const NSTUDIO_CONFIG = {

  // ── Main biolink (NSTudio.com) ──────────────────────────────
  main: {
    logo: "assets/nstudio-logo.png",
    name: "NSTudio",
    tagline: "Roblox Map Developer",
    links: [
      { label: "Our Community", url: "https://example.com",        icon: "🌐" },
      { label: "Discord",       url: "https://discord.gg/example", icon: "💬" },
      { label: "Saweria",       url: "https://saweria.co/example", icon: "❤️" },
    ],
    theme: {
      bg_from:    "#FF4500",
      bg_to:      "#FF8C00",
      card:       "#ffffff",
      text:       "#1a1a1a",
      name_color: "#ffffff",
    }
  },

  // ── Map pages (NSTudio.com/MAP_NAME) ────────────────────────
  // Key must match the URL slug exactly (case-sensitive)
  maps: {

    "HWCLUB": {
      logo: "assets/hwclub-logo.png",
      name: "HW Club",
      tagline: "Roblox Map by NSTudio",
      links: [
        { label: "Community", url: "https://example.com",        icon: "🌐" },
        { label: "Discord",   url: "https://discord.gg/example", icon: "💬" },
        { label: "Saweria",   url: "https://saweria.co/example", icon: "❤️" },
      ],
      theme: {
        bg_from:    "#FF4500",
        bg_to:      "#FF8C00",
        card:       "#ffffff",
        text:       "#1a1a1a",
        name_color: "#ffffff",
      }
    }, // ← comma required between map entries

    "SAWADEECLUB": {
      logo: "assets/sawadee-logo.png",
      name: "Sawadee Club",
      tagline: "Roblox Map by NSTudio",
      links: [
        { label: "Community", url: "https://example.com",        icon: "🌐" },
        { label: "Discord",   url: "https://discord.gg/example", icon: "💬" },
        { label: "Saweria",   url: "https://saweria.co/example", icon: "❤️" },
      ],
      theme: {
        bg_from:    "#1a1a2e",
        bg_to:      "#16213e",
        card:       "#ffffff",
        text:       "#1a1a1a",
        name_color: "#ffffff",
      }
    }, // ← comma required between map entries

    "NEWMAP": {
      logo: "assets/newmap-logo.png",
      name: "New Map Name",
      tagline: "Roblox Map by NSTudio",
      links: [
        { label: "Community", url: "https://example.com",        icon: "🌐" },
        { label: "Discord",   url: "https://discord.gg/example", icon: "💬" },
        { label: "Saweria",   url: "https://saweria.co/example", icon: "❤️" },
      ],
      theme: {
        bg_from:    "#FF4500",
        bg_to:      "#FF8C00",
        card:       "#ffffff",
        text:       "#1a1a1a",
        name_color: "#ffffff",
      }
    }, // ← trailing comma is safe in JS, keeps it easy to add more

    // ── Add more maps below ──────────────────────────────────
    // "MAPSLUG": {
    //   logo: "assets/map-logo.png",
    //   name: "Map Name",
    //   tagline: "Roblox Map by NSTudio",
    //   links: [...],
    //   theme: {...}
    // },

  }

};