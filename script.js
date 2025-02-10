document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header")
    const reasonsContainer = document.getElementById("reasonsContainer")
    const ipElement = document.getElementById("ip")
    const copyIcon = document.getElementById("copyIcon")

    let lastScrollTop = 0
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > lastScrollTop) {
        header.classList.add("hidden")
      } else {
        header.classList.remove("hidden")
      }
      lastScrollTop = scrollTop
    })

    function updatePlayerCount() {
      document.getElementById("playerCount").textContent = `Online: ${Math.floor(Math.random() * 100) + 1}`
    }
    updatePlayerCount()
    setInterval(updatePlayerCount, 30000)
  
    const reasons = [
      {
        icon: "fa-bolt",
        title: "Ping Baixo",
        description: "Experimente uma jogabilidade suave com nossos servidores otimizados",
      },
      {
        icon: "fa-users",
        title: "Comunidade Ativa",
        description: "Junte-se a uma base de jogadores vibrante e amigável",
      },
      {
        icon: "fa-shield-alt",
        title: "Anti-Cheat",
        description: "Jogue de forma justa com nosso sistema anti-cheat avançado",
      },
      {
        icon: "fa-cogs",
        title: "Plugins Personalizados",
        description: "Aproveite recursos únicos e modos de jogo exclusivos",
      },
      {
        icon: "fa-headset",
        title: "Suporte 24/7",
        description: "Obtenha ajuda a qualquer momento com nossa equipe dedicada",
      },
    ]
  
    function createReasonCard(reason) {
      const card = document.createElement("div")
      card.className = "reason-card"
      card.innerHTML = `
              <i class="fas ${reason.icon}"></i>
              <h3>${reason.title}</h3>
              <p>${reason.description}</p>
          `
      return card
    }
  
    reasons.forEach((reason) => {
      reasonsContainer.appendChild(createReasonCard(reason))
    })

    function cloneCards() {
      reasons.forEach((reason) => {
        reasonsContainer.appendChild(createReasonCard(reason))
      })
    }
  
    function autoScroll() {
      if (reasonsContainer.scrollLeft >= reasonsContainer.scrollWidth / 2) {
        reasonsContainer.scrollLeft = 0
      } else {
        reasonsContainer.scrollLeft += 1
      }
      requestAnimationFrame(autoScroll)
    }
  
    cloneCards()
    autoScroll()

    const ipText = "play.madrugadao.com"
    function typeEffect(element, text, speed) {
      let i = 0
      function typing() {
        if (i < text.length) {
          element.textContent += text.charAt(i)
          i++
          setTimeout(typing, speed)
        }
      }
      typing()
    }
    typeEffect(ipElement, ipText, 100)
  
    // Copy IP
    copyIcon.addEventListener("click", () => {
      navigator.clipboard
        .writeText(ipText)
        .then(() => {
          copyIcon.classList.add("copied")
          setTimeout(() => {
            copyIcon.classList.remove("copied")
          }, 1000)
        })
        .catch((error) => {
          console.error("Error copying IP: ", error)
        })
    })

    const storeItems = [
      {
        name: "VIP",
        price: "R$25/mês",
        features: ["Slot reservado", "Tag personalizada no chat", "Acesso a comandos VIP"],
      },
      {
        name: "Elite",
        price: "R$50/mês",
        features: ["Todos os recursos VIP", "Acesso a skins exclusivas", "Suporte prioritário"],
      },
      {
        name: "Lenda",
        price: "R$100/mês",
        features: ["Todos os recursos Elite", "Título personalizado", "Acesso a servidor privado"],
      },
    ]
  
    const storeGrid = document.querySelector(".store-grid")
    storeItems.forEach((item) => {
      const card = document.createElement("div")
      card.className = `store-card ${item.name.toLowerCase()}`
      card.innerHTML = `
              <h3>${item.name}</h3>
              <p class="price">${item.price}</p>
              <ul class="features">
                  ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
              </ul>
              <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
          `
      storeGrid.appendChild(card)
    })

    const rules = [
      "Respeite todos os jogadores e administradores.",
      "Não use linguagem ofensiva ou discriminatória.",
      "Proibido o uso de cheats, hacks ou exploits.",
      "Não faça spam no chat ou use microfone de forma abusiva.",
      "Jogue de forma justa e esportiva.",
      "Siga as instruções dos administradores.",
      "Reporte jogadores suspeitos aos administradores.",
      "Divirta-se e ajude a manter uma comunidade positiva!",
    ]
  
    const rulesContent = document.querySelector(".rules-content")
    rules.forEach((rule, index) => {
      const p = document.createElement("p")
      p.textContent = `${index + 1}- ${rule}`
      rulesContent.appendChild(p)
    })
  
    const warning = document.createElement("p")
    warning.className = "ye"
    warning.textContent =
      "O não cumprimento dessas regras pode resultar em advertência, expulsão temporária ou banimento permanente do servidor."
    rulesContent.appendChild(warning)
  

    document.getElementById("currentYear").textContent = new Date().getFullYear()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
  
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section)
    })
  })
  
  