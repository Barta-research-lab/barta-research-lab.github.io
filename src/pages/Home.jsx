import Footer from "../components/General/Footer";
import Navbar from "../components/General/Navbar";
import Banner from "../components/Home/Banner";
import Header from "../components/Home/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Projects from "../components/Projects/Projects";
import OurResearch from "../components/Publications/OurResearch";
import Publications from "../components/Publications/Publications";
import Teams from "../components/Teams/Teams";
import Courses from "../components/Courses/Courses";
import { useEffect, useRef, useState } from "react"


const Home = () => {
  const canvasRef = useRef(null)
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    const fontFace = new FontFace(
      "Hind Siliguri",
      "url(https://fonts.gstatic.com/s/hindsiliguri/v12/ijwTs5juQtsyLLR5jN4cxBEoTI7ax9k0.woff2)",
      { weight: "400" },
    )

    fontFace
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont)
        setFontLoaded(true)
      })
      .catch((error) => {
        console.error("Error loading Bangla font:", error)
        setFontLoaded(true)
      })
  }, [])

  useEffect(() => {
    if (!fontLoaded) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = canvas.offsetWidth * dpr
    canvas.height = canvas.offsetHeight * dpr
    ctx.scale(dpr, dpr)

    const particles = []

    const banglaChars = [
      "অ",
      "আ",
      "ই",
      "ঈ",
      "উ",
      "ঊ",
      "এ",
      "ঐ",
      "ও",
      "ঔ",
      "ক",
      "খ",
      "গ",
      "ঘ",
      "চ",
      "ছ",
      "জ",
      "ঝ",
      "ট",
      "ঠ",
      "ড",
      "ঢ",
      "ণ",
      "ত",
      "থ",
      "দ",
      "ধ",
      "ন",
      "প",
      "ফ",
      "ব",
      "ভ",
      "ম",
      "য",
      "র",
      "ল",
      "শ",
      "ষ",
      "স",
      "হ",
    ]

    const textParticles = []
    for (let i = 0; i < 25; i++) {
      textParticles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        char: banglaChars[Math.floor(Math.random() * banglaChars.length)],
        size: 32 + Math.random() * 10,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.6,
        opacity: 0.4,
        color: `rgba(0, ${100 + Math.random() * 55}, ${100 + Math.random() * 55}, 1)`,
        rotation: Math.random() * Math.PI * 2,
      })
    }

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        size: Math.random() * 8 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(${10 + Math.random() * 15}, ${50 + Math.random() * 30}, ${50 + Math.random() * 30}, ${0.2
          })`,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      ctx.strokeStyle = "rgba(0, 128, 128, 0.2)"
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.speedY *= -1

        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      textParticles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += 0.001

        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.speedY *= -1

        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)
        ctx.font = `${particle.size}px 'Noto Sans Bengali', Arial, sans-serif`
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(particle.char, 0, 0)
        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [fontLoaded])

  return (
    <>
      <title>BARTA Research Lab - Home</title>
      <meta
        name="description"
        content="BARTA Research Lab develops innovative solutions at the intersection of artificial intelligence, data science, and computational systems. Our enthusiastic team specializes in Bangla Natural Language Processing, building AI tools for social inclusion and accessibility."
      />
      <meta name="keywords" content="artificial intelligence, data science, computational systems, Bangla NLP, language technology, social inclusion, accessibility, AI research lab" />

      <link rel="canonical" href={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="BARTA Research Lab - AI, Data Science & Bangla NLP" />
      <meta
        property="og:description"
        content="BARTA Research Lab focuses on AI, data science, and computational systems, with a special emphasis on Bangla Natural Language Processing and inclusive language technologies."
      />
      <meta property="og:url" content={window.location.href} />
      {/* <meta property="og:image" content="https://yourdomain.com/path-to-image.jpg" /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="BARTA Research Lab - AI, Data Science & Bangla NLP" />
      <meta
        name="twitter:description"
        content="Innovative research at the intersection of AI, data science, and Bangla NLP. BARTA Lab builds language technologies for social inclusion and accessibility."
      />
      {/* <meta name="twitter:image" content="https://yourdomain.com/path-to-image.jpg" /> */}

      <div className="px-2 md:px-0 bg-cream-primary">
        <Navbar />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-cream-primary opacity-70" style={{ zIndex: 0 }}></canvas>
        <div className="pt-4 lg:pt-16 2xl:pt-20">
          <section id="home" className="relative z-20">
            <h1>BARTA Research Lab</h1>
            <Header />
          </section>
          <div className="container pt-6 bg-cream-primary  2xl:pt-12 mx-auto max-w-6xl 2xl:max-w-screen-xl">
            <section className="relative flex flex-col md:flex-row gap-4 md:gap-6 p-8 lg:p-12 bg-cream-primary border-2 border-[#679b9b] rounded-md z-20">
              <div className=" md:w-3/5">
                <Banner />
              </div>
              <div
                className="flex-grow md:w-2/5 overflow-auto"
                style={{ height: "500px" }}
              >
                <LatestNews />
              </div>
            </section>
          </div>
          <div id="goal">
            {/* <section className="mt-16 2xl:mt-24">
              <OurResearch />
            </section> */}
          </div>
          <div className="container mx-auto max-w-6xl lg:max-w-7xl">
            <section id="publications" className="mt-16 lg:mt-24">
              <Publications />
            </section>
            <section id="courses" className="mt-16 lg:mt-24">
              <Courses />
            </section>
            <section id="projects" className="mt-16 lg:mt-24">
              <Projects />
            </section>
            <section id="teams" className="mt-16 lg:mt-24">
              <Teams />
            </section>
          </div>
          <section className="mt-16 lg:mt-24">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;