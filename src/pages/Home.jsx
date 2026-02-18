import { TbBrandLinkedinFilled, TbBrandWhatsappFilled } from 'react-icons/tb';
import agrohub from '../../src/assets/agrohub2.png';
import tanzcoff from '../../src/assets/tanzcoff5.png';
import mwangaza from '../../src/assets/mwangaza1.png';
import Owur from '../../src/assets/Owur.jpg';
import logo from '../../src/assets/logo3.svg';
import { SiMaildotcom } from 'react-icons/si';
import { FaBars, FaGithub } from 'react-icons/fa6';
import { LiaCopyrightSolid } from 'react-icons/lia';
import { useState, useRef, useEffect } from "react";
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { IoIosCloseCircleOutline, IoIosConstruct } from 'react-icons/io';

export default function Home(){
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const colors = {
    background: "#EAFFFD",

    neutrals: {
      heading: "rgba(20, 20, 30, 1)",
      text: "rgba(20, 20, 30, 0.85)",
      muted: "rgba(20, 20, 30, 0.45)",
      border: "rgba(20, 20, 30, 0.12)",
      white:"rgba(232, 228, 255, 1)",
      whiteBackground:"rgba(250,250,250,1)"
    },

    primary: {
      base: "#24797B",
      hover: "#2FA2A3",
      active: "#174F50",
      soft: "#4EC9CC",
      subtle: "#A0E2E3",
    },

    secondary: {
      base: "#E6DB65",    // main secondary (buttons, highlights, badges)
      active: "#CFC34E",  // darker → for text on light bg, hover, active states
      subtle: "#FAF7DD",  // very light → for backgrounds, chips, soft sections
    },

    accents: {
      error: {
        text: "hsl(356, 70%, 45%)",
        bg: "hsl(356, 40%, 92%)",
      },
      warning: {
        text: "hsl(32, 80%, 50%)",
        bg: "hsl(32, 45%, 90%)",
      },
      success: {
        text: "hsl(145, 65%, 38%)",
        bg: "hsl(145, 35%, 90%)",
      },
    },
  };
  const webDev = 'Web Developer';
  const web = 'Web';
  const Dev = 'Developer';

  return(
    <section style={{backgroundColor:colors.background}} ref={homeRef}>
      <Navbar 
          colors={colors} 
          scrollToSection={scrollToSection}
          refs={{
            Home: homeRef,
            About: aboutRef,
            Projects: projectsRef,
            Testimonials: testimonialsRef,
            Contacts: contactsRef,
          }}
      />
      <div style={{minHeight:'90vh', display:'flex', flexDirection:'column'}}>
        <section style={{ backgroundColor: colors.background, position:'relative', height:'fit-content', padding:'0px'}}>
          <SectionFoldTop bgColor={colors.primary.base} />
          <HeroAnimatedBlobs colors={colors} /> 
          <div
            style={{
              minHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              position:'relative',
              zIndex:2
            }}
          >
            <div
              style={{
                maxWidth: '1100px',
                margin: '0 auto',
                padding: '20px 20px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Intro */}
              <div style={{ fontSize: '28px', color: colors.neutrals.heading }}>
                Hello, I am{' '}
                <span style={{ color: colors.secondary.base, fontWeight: 800 }}>
                  Abdillah Rajabu
                </span>
              </div>

              {/* Main role (dominant) */}
              <svg
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  fontWeight: 800,
                  strokeWidth: 2,
                }}
                className='svg-Container'
              >
                {
                  window.innerWidth >= 840 ?
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="none">
                  {webDev.split('').map((char, index) => (
                    <tspan
                      key={index}
                      className="svg-webDev"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </tspan>
                  ))}
                </text> 
                :
                <>
                <text x="50%" y="30%" dominantBaseline="middle" textAnchor="middle" fill="none">
                  {web.split('').map((char, index) => (
                    <tspan
                      key={index}
                      className="svg-webDev"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </tspan>
                  ))}
                </text>
                <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="none">
                  {Dev.split('').map((char, index) => (
                    <tspan
                      key={index}
                      className="svg-webDev"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </tspan>
                  ))}
                </text>
                </>
                }
              </svg>

              {/* Description */}
              <div
                style={{
                  maxWidth: '600px',
                  fontSize: '18px',
                  color: colors.neutrals.text,
                  lineHeight: 1.6,
                }}
              >
                Best web developer who loves to make professional and responsive websites and web applications by considering UI/UX design.
              </div>

              {/* CTA */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginTop: '16px',
                }}
              >
                <span style={{ color: colors.neutrals.text, fontWeight: 600 }}>
                  Get in touch
                </span>
                <span
                  onClick={() => scrollToSection(contactsRef)}
                  style={{
                    backgroundColor: colors.secondary.base,
                    padding: '12px 20px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    boxShadow: `0 6px 20px rgba(100,100,100,1)`,
                  }}
                >
                  Let’s talk
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
          <About colors={colors} aboutRef={aboutRef}/>
          <Projects colors={colors} projectsRef={projectsRef}/>
          <Testimonials colors={colors} testimonialsRef={testimonialsRef}/>
          <Contacts colors={colors} contactsRef={contactsRef}/>
          <CopyRight colors={colors} />
    </section>
  )
}

function HeroAnimatedBlobs({ colors }) {
  const blob1 = useRef();
  const blob2 = useRef();
  const blob3 = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 100;
      const y = (e.clientY / innerHeight - 0.5) * 100;

      if (blob1.current) blob1.current.setAttribute("transform", `translate(${-150 - x / 4} ${-190 - y / 1})`);
      if (blob2.current) blob2.current.setAttribute("transform", `translate(${100 - x / 5} ${100 - y / 2}) scale(0.5)`);
      if (blob3.current) blob3.current.setAttribute("transform", `translate(${400 + x / 6} ${200 + y / 3}) scale(0.5)`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "visible",
      }}
    >
      {/* Blob 1 */}
      <g ref={blob1} transform="translate(-150 -190)">
        <path fill={colors.primary.soft} opacity="0.25">
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="
            M200,300 C250,200 400,200 450,300 C500,400 350,450 250,400 C150,350 150,350 200,300 Z;
            M220,280 C280,180 420,220 460,320 C500,420 320,480 240,420 C160,360 160,360 220,280 Z;
            M200,300 C250,200 400,200 450,300 C500,400 350,450 250,400 C150,350 150,350 200,300 Z
            "
          />
        </path>
      </g>

      {/* Blob 2 */}
      <g ref={blob2} transform="translate(100 100) scale(0.5)">
        <path fill={colors.secondary.base} opacity="0.3">
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
            M200,300 
            C320,120 520,180 520,320 
            C520,520 280,560 180,420 
            C80,320 100,360 200,300 Z;

            M240,260 
            C420,80 640,260 560,420 
            C480,620 180,580 140,360 
            C100,220 140,300 240,260 Z;

            M180,340 
            C300,160 620,140 640,360 
            C660,540 360,620 220,480 
            C80,360 100,420 180,340 Z;

            M200,300 
            C320,120 520,180 520,320 
            C520,520 280,560 180,420 
            C80,320 100,360 200,300 Z
            "
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 0; -40 30; 0 0"
            dur="30s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Blob 3 */}
      <g ref={blob3} transform="translate(400 200) scale(0.5)">
        <path fill={colors.primary.base} opacity="0.3">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
            M500,200 C600,150 700,250 650,350 C600,450 500,450 450,350 C400,250 450,250 500,200 Z;
            M520,220 C630,160 720,260 660,360 C610,460 480,480 430,370 C390,260 450,260 520,220 Z;
            M500,200 C600,150 700,250 650,350 C600,450 500,450 450,350 C400,250 450,250 500,200 Z
            "
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -40 30; 0 0"
            dur="30s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
}


function SectionFoldBottom({ bgColor }) {
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        bottom: -120,
        left: 0,
        width: "100%",
        height: "120px",
        display: "block",
      }}
    >
      <path
        d="
        M0,0
        C120,60 260,140 420,110
        C580,80 640,20 820,70
        C980,120 1100,40 1240,90
        C1340,120 1400,70 1440,100
        L1440,0
        L0,0
        Z
        "
        fill={bgColor}
      />
    </svg>
  );
}

function SectionFoldTop({ bgColor }) {
  return (
    <svg
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100px",
        display: "block",
      }}
    >
      <path
        d="
          M0,40
          C150,120 350,0 600,70
          C850,140 1100,10 1440,80
          L1440,150
          L0,150
          Z
        "
        fill={bgColor}
      />
    </svg>
  );
}

function Navbar({ colors, scrollToSection, refs }) {
  const defaultOpenedState = window.innerWidth >= 840 ? true : false;
  const navItems = ["Home", "About", "Projects", "Testimonials", "Contacts"];
  const [active, setActive] = useState("Home");
  const [opened, setOpened] = useState(defaultOpenedState);

  return (
    <nav
      style={{
        backgroundColor: colors.primary.base,
        display: "flex",
        flexWrap: "wrap",
        padding: "15px 7px",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div>
        <span
          style={{
            fontWeight: 700,
            fontSize: "22px",
            color: colors.neutrals.white,
            cursor: "pointer",
            padding:'8px 10px',
            //border:'1px solid red'
          }}
        >
          <img src={logo} width={50} height={50} />
        </span>
      </div>

      {/** Nav icon */}
        <span               
          style={{
            cursor: "pointer",
            fontSize:'25px',
            padding: "8px 14px",
            borderRadius: "6px",
            transition: "all 0.25s ease",
            color: colors.secondary.base
          }}
          className='navItem navIcon'
          onClick={()=>{setOpened(!opened)}}

        >
          {opened == false ? <HiMiniBars3CenterLeft/> : <IoIosCloseCircleOutline/>}
        </span>

      {/* Nav items */}
      <div style={{ display: opened? 'flex':'none', gap: "15px", flexWrap: "wrap"}}>
        {navItems.map((item) => {
          const isActive = active === item;

          return (
            <span
              key={item}
              onClick={() => {setActive(item); scrollToSection(refs[item]); defaultOpenedState == false && setOpened(false)}}
              className="navItem"
              style={{
                cursor: "pointer",
                fontWeight: 600,
                padding: "8px 10px",
                borderRadius: "6px",
                transition: "all 0.25s ease",
                color: isActive
                  ? colors.secondary.base
                  : colors.neutrals.white,
                borderBottom: isActive
                  ? `3px solid ${colors.secondary.base}`
                  : "3px solid transparent",
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </nav>
  );
}

function About({ colors, aboutRef }) {
  return (
    <section ref={aboutRef} style={{ backgroundColor: colors.primary.base, position:'relative' }}>
      <SectionFoldBottom bgColor={colors.primary.base} />
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 20px 80px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          color: colors.neutrals.white,
        }}
      >
        {/* Section Title */}
        <div style={{ fontSize: '40px', fontWeight: 1000, textAlign: 'center' }}>
          About Me
        </div>

        {/* Content Row */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Text Column */}
          <div
            style={{
              flex: '1 1 300px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              fontSize: '18px',
              lineHeight: 1.6,
            }}
          >
            <div>
              <span style={{ fontSize: '24px', fontWeight: 800 }}>
                I’m Abdillah Rajabu,
              </span>
              <br />
              React developer with a background in Information Technology and over
              three years of experience building modern web applications. I focus
              on creating fast, responsive, and user-friendly websites for both
              personal and business use.
            </div>

            <div>
              I work mainly with HTML, CSS, and JavaScript, alongside tools like
              React, Next.js, Node.js, Supabase.
            </div>
          </div>
          <div
            style={{
              flex: '1 1 300px',
              display: 'flex',
              justifyContent: 'center',
              //border: '1px solid red',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                aspectRatio:1/1,
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))',
              }}
            >
          <svg
            viewBox="0 0 580 590"
            style={{ width: '100%', height: '100%', display: 'block' }}
            preserveAspectRatio="none"
          >
                <defs>
                  <clipPath id="aboutClip">
                    <path d="M142.671 18.527L98.2004 10.5365C63.3024 4.26608 28.3726 21.3721 11.9293 52.7856C-0.653731 76.8245 -0.393865 105.561 12.6218 129.368L18.4367 140.004C31.9367 164.697 34.8347 193.813 26.467 220.683L5.27312 288.739C-3.33572 316.384 -0.208918 346.35 13.9213 371.622C30.0685 400.501 31.7374 435.281 18.4293 465.574L7.42349 490.626C-2.33616 512.841 -0.273064 538.475 12.9139 558.843C28.9962 583.684 58.6184 596.183 87.6343 590.371L142.065 579.469C163.354 575.205 185.305 575.496 206.473 580.324L292.744 600L378.957 580.517C400.886 575.561 423.611 575.268 445.661 579.658L506.541 591.778C531.659 596.779 557.367 586.53 572.156 565.621C584.451 548.238 587.431 525.928 580.13 505.927L566.774 469.342C554.637 436.096 556.014 399.417 570.61 367.175C584.254 337.034 586.378 302.937 576.58 271.335L560.884 220.712C552.515 193.721 554.934 164.536 567.632 139.29L573.799 127.029C585.143 104.476 585.371 77.9355 574.418 55.1911C558.681 22.5127 523.209 4.2031 487.455 10.3041L438.63 18.6357C421.166 21.616 403.306 21.4166 385.912 18.0472L292.744 0L194.021 18.3685C177.055 21.5252 159.656 21.5789 142.671 18.527Z" />
                  </clipPath>
                </defs>
                <image
                  href={agrohub}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#aboutClip)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({ colors, projectsRef }) {
  const [projectToast, setProjectToast] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  function handleProjectsToast() {
    setProjectToast(true);

    // small delay so DOM mounts first
    setTimeout(() => {
      setAnimateIn(true);
    }, 10);

    setTimeout(() => {
      setAnimateIn(false);
      setTimeout(() => setProjectToast(false), 400);
    }, 3000);
  }

  return (
    <section ref={projectsRef} style={{position:'relative'}}>
      <SectionFoldTop bgColor={colors.primary.subtle}/>
        {projectToast && (
          <>
            <div
              style={{
                position: "fixed",
                inset: 0,
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                background: "rgba(0,0,0,0.2)",
                zIndex: 998,
              }}
            />
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: animateIn
                  ? "translate(-50%, -50%)"
                  : "translate(-50%, -150vh)",
                opacity: animateIn ? 1 : 0,
                transition: "transform 0.6s ease, opacity 0.4s ease",
                background: colors.background,
                color: colors.primary.active,
                padding: "24px 24px",
                borderRadius: "5px",
                boxShadow: "1px 20px 50px rgba(0,0,0,0.75)",
                zIndex: 999,
                fontWeight: 1000,
                fontSize: "25px",
                textAlign:"center",
                display:'flex', 
                flexDirection:'column',
                gap:'20px'
              }}
            >
              <div>Sorry!!</div>
              <div style={{fontSize:'16px', fontWeight:600, display:"flex", flexDirection:'column', gap:'15px', alignItems:'center'}}>
                <span style={{padding:"10px 15px", borderRadius:'50px',fontSize:'35px', width:'fit-content', backgroundColor:colors.primary.base, color: colors.background, display:"flex", justifyContent:"center", alignItems:'center'}}>
                  <IoIosConstruct/>
                </span>
                <span><strong style={{fontSize:'18px'}}>"Agro-hub"</strong> is under development</span>
              </div>
            </div>
          </>
        )}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '130px 20px 130px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        {/* Section Title */}
        <div style={{ fontSize: '40px', fontWeight: 1000, textAlign: 'center' }}>
          Latest Projects
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Card 1 */}
          <ProjectCard
            colors={colors}
            title="Tanzcoffee"
            image={tanzcoff}
            link={'https://www.tanzcoffee.co.tz/'}
          />

          {/* Card 2 */}
          <ProjectCard
            colors={colors}
            title="Mwangaza Knowledge Hub"
            image={mwangaza}
            link={'https://www.tanzcoffee.co.tz/mwangaza_hub/'}
          />

          {/* Card 3 */}
          <div onClick={handleProjectsToast}>
            <ProjectCard
              colors={colors}
              title="Agrohub"
              image={agrohub}
              link={'#'}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ colors, title, image, link , disabled}) {
  return (
    <a
      href={disabled ? undefined:link}
      target={disabled? undefined:'_blank'}
      className="projectHover"
      style={{
        display:'flex',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        cursor: 'pointer',
        aspectRatio: '1 / 0.9',
        backgroundColor: colors.primary.subtle,
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: '12px 16px',
          backgroundColor: colors.primary.subtle,
          textAlign: 'center',
          fontWeight: 800,
          fontSize: '18px',
          color: colors.primary.active,
        }}
      >
        {title}
      </div>
    </a>
  );
}

function Testimonials({ colors, testimonialsRef }) {
  return (
    <section ref={testimonialsRef} style={{ backgroundColor: colors.primary.subtle }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 20px 100px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        {/* Section Title */}
        <div style={{ fontSize: '40px', fontWeight: 1000, textAlign: 'center' }}>
          Testimonials
        </div>

        {/* Testimonial Card */}
        <div
          style={{
            //maxWidth: '800px',
            margin: '0',
            backgroundColor: colors.neutrals.whiteBackground,
            padding: '32px',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            color: colors.neutrals.heading,
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Author */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap:'wrap' }}>
            <img
              src={Owur}
              alt=""
              style={{ width: 80, height: 80, borderRadius: '50%',boxShadow: '0 10px 30px rgba(0,0,0,0.3)',objectFit:'cover' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800 }}>Sospeter Ewour</span>
              <span style={{ color: colors.neutrals.muted }}>
                Co. Founder at Tanzcoffee
              </span>
            </div>
          </div>

          {/* Quote */}
          <div
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: colors.neutrals.text,
            }}
          >
            I’ve worked with Abdillah Rajabu to develop Tanzcoffee.co.tz and Mwangaza Knowledge Hub for our company. Both projects were complex, but Abdillah delivered fast, responsive, and highly polished websites that matched our exact specifications. His dedication, problem-solving skills, and attention to detail are outstanding. Even under tight deadlines, he remained professional, communicative, and proactive. I highly recommend Abdillah for any web development project — his expertise in React, Next.js, and UI/UX design ensures projects are executed efficiently and beautifully.
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacts({ colors, contactsRef }) {
  return (
    <div
    ref={contactsRef}
      style={{
        padding: '80px 20px',
        backgroundColor: colors.primary.base,
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '40px', fontWeight: 1000, textAlign: 'center' }}>
        Contact
      </div>

      {/* Optional subtitle */}
      <div
        style={{
          color: colors.neutrals.text,
          fontSize: '18px',
          marginBottom: '12px',
          textAlign:'center',
        }}
      >
        Reach me anywhere you prefer
      </div>

      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
        }}
      >
        {/* Make them clickable */}
        <a
          href="https://www.linkedin.com/in/abdillah-suleiman-5a6563226/"
          target="_blank"
          rel="noopener noreferrer"
          className="Contact"
        >
          <TbBrandLinkedinFilled />
        </a>

        <a
          href="https://github.com/abdillah-9/"
          target="_blank"
          rel="noopener noreferrer"
          className="Contact"
        >
          <FaGithub />
        </a>

        <a
          href="https://wa.me/255689500692"
          target="_blank"
          rel="noopener noreferrer"
          className="Contact"
        >
          <TbBrandWhatsappFilled />
        </a>

        <a
          href="mailto:sabdillah855@gmail.com"
          className="Contact"
        >
          <SiMaildotcom />
        </a>
      </section>
    </div>
  );
}

function CopyRight({ colors }) {
  return (
    <div
      style={{
        backgroundColor: colors.secondary.base,
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',
        fontSize: '18px',
        fontWeight: 700,
        borderTop: '1px solid rgba(20,20,30,0.12)',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <span>Abdillah Rajabu</span>
      <span
        className="footer-copyright"
        style={{ position: 'relative', top: '3px', cursor: 'default' }}
      >
        <LiaCopyrightSolid />
      </span>
      <span>2026</span>
    </div>
  );
}
