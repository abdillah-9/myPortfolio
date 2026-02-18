import { TbBrandLinkedinFilled, TbBrandWhatsappFilled } from 'react-icons/tb';
import a1 from '../../src/assets/1.png';
import { SiMaildotcom } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa6';
import { LiaCopyrightSolid } from 'react-icons/lia';

export default function Home(){
  const colors = {
    background: "#EAFFFD",

    neutrals: {
      heading: "rgba(20, 20, 30, 1)",
      text: "rgba(20, 20, 30, 0.85)",
      muted: "rgba(20, 20, 30, 0.45)",
      border: "rgba(20, 20, 30, 0.12)",
      white:"rgba(232, 228, 255, 1)",
    },

    primary: {
      base: "#24797B",
      hover: "#2FA2A3",
      active: "#174F50",
      soft: "#4EC9CC",
      subtle: "#A0E2E3",
    },

    secondary: {
      base: "#E6DB65",
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
  return(
    <section style={{backgroundColor:colors.background}}>
      <div style={{minHeight:'100vh', display:'flex', flexDirection:'column'}}>
        <nav style={{backgroundColor:colors.primary.base, display:'flex',flexWrap:'wrap', padding:'20px'}}>
          <div style={{display:'flex', width:'50%',minWidth:'250px'}}>
            <span style={{borderRadius:'5px',cursor:'pointer',padding:'5px 10px',color:colors.neutrals.white, border:`1px solid ${colors.neutrals.white}`}}>
              Logo
            </span>
          </div>
          <div style={{display:'flex', width:'50%',minWidth:'250px', gap:'25px', justifyContent:'flex-end'}}>
            <span style={{display:"inline-block",borderRadius:'5px',cursor:'pointer',padding:'5px 10px',color:colors.neutrals.white, border:`1px solid ${colors.neutrals.white}`}}>
              Home
            </span>
            <span style={{display:"inline-block",borderRadius:'5px',cursor:'pointer',padding:'5px 10px',color:colors.neutrals.white, border:`1px solid ${colors.neutrals.white}`}}>
              About
            </span>
            <span style={{display:"inline-block",borderRadius:'5px',cursor:'pointer',padding:'5px 10px',color:colors.neutrals.white, border:`1px solid ${colors.neutrals.white}`}}>
              Projects
            </span>
            <span style={{display:"inline-block",borderRadius:'5px',cursor:'pointer',padding:'5px 10px',color:colors.neutrals.white, border:`1px solid ${colors.neutrals.white}`}}>
              Testimonials
            </span>
            <span style={{display:"inline-block",borderRadius:'5px',cursor:'pointer',padding:'5px 10px',color:colors.neutrals.white, border:`1px solid ${colors.neutrals.white}`}}>
              Contacts
            </span>
          </div>
        </nav>
        <section style={{display:'flex', flexDirection:'column', gap:'20px', alignItems:'center', justifyContent:'center',flexGrow:1}}>
          <div style={{width:'fit-content',height:'auto', fontSize:"32px", color:colors.neutrals.heading}}>
            Hello, I am <span style={{color:colors.secondary.base, fontWeight:800}}>Abdillah Rajabu</span>
          </div>
          <svg style={{width:'80%',maxWidth:'600px', height:'100px',fontSize:'75px', fontWeight:800, strokeWidth:2}}>
            <text x={'50%'} y={'50%'} dominantBaseline="middle" textAnchor="middle" fill='none'>
              {
                  webDev.split('').map((char, index)=>(
                    <tspan key={index} className='svg-webDev'style={{ animationDelay: `${index * 0.15}s` }}>
                      {char === " " ? "\u00A0" : char}
                    </tspan>
                  ))
              }
            </text>
          </svg>
          <div style={{width:'80%',maxWidth:'550px', height:'auto', fontSize:'20px', textAlign:'center', color:colors.neutrals.text}} >
            Best web developer who loves to make prefessional and responsive websites and web applications by concidering UI/UX design. 
          </div>
          <div style={{width:'fit-content',height:'auto', fontSize:'16px', textAlign:'center',display:'flex', gap:'10px',alignItems:'center', paddingTop:'30px',color:colors.neutrals.text, fontWeight:700}}>
            <span>Get intouch</span>
            <span style={{backgroundColor:colors.secondary.base, padding:'8px 14px', borderRadius:'5px',cursor:'pointer', 
            boxShadow:`1px 1px 10px ${colors.primary.base}`}}>
              Let's talk
            </span>
          </div>
        </section>
      </div>
          <About colors={colors} />
          <Projects colors={colors}/>
          <Testimonials colors={colors}/>
          <Contacts colors={colors}/>
          <CopyRight colors={colors} />
    </section>
  )
}

function About({colors}){

  return(
    <div style={{backgroundColor:colors.primary.base, display:"flex", flexWrap:'wrap',justifyContent:'space-between', padding:'50px 20px 100px 20px',fontSize:'20px',gap:'50px', color:colors.neutrals.white}}>
      <div style={{fontSize:'40px', fontWeight:1000,textAlign:'center',width:'100%'}}>About Me</div>
      <div style={{width:'45%', minWidth:'250px', display:"flex", flexDirection:'column',gap:'18px'}}>
        <div>
          <span style={{fontSize:"25px", fontWeight:800}}>I’m Abdillah Rajabu,</span> <br/>React developer with a background in Information Technology and over three years of experience building modern web applications. I focus on creating fast, responsive, and user-friendly websites for both personal and business use.
        </div>
        <div>
          I work mainly with HTML, CSS, and JavaScript, alongside tools like React, Next.js, Node.js, Supabase,
        </div>

      </div>
      <div style={{width:"45%", minWidth:"250px"}}>
        <img src={a1} alt="" style={{objectFit:'cover', aspectRatio:'1/0.8', width:"100%"}}/>
      </div>
    </div>
  )
}

function Projects({colors}){
  return(
    <div style={{padding:'50px 20px 100px 20px',display:'flex',flexDirection:'column', gap:'50px'}}>
      <div style={{fontSize:'40px', fontWeight:1000, textAlign:'center'}}>Latest Projects</div>
      <div style={{display:'flex', flexWrap:"wrap", gap:"60px", borderRadius:"5px", justifyContent:'center'}}>

        <div style={{display:"flex", width:'25%', minWidth:'200px', aspectRatio:'1/0.9', position:"relative", overflow:'hidden', cursor:'pointer', borderRadius:'15px', boxShadow:`1px 1px 10px black`, color:colors.primary.active,}}className='projectHover'>
          <img src={a1} alt='' style={{width:"100%", height:"100%", objectFit:'cover'}} />
          <div style={{position:'absolute', width:"100%", height:'20%', bottom:0, backgroundColor: colors.primary.subtle, padding:'10px', textAlign:'center',fontWeight:800, fontSize:'20px'}}>
            Tanzcoffee
          </div>
        </div>

        <div style={{display:"flex", width:'25%', minWidth:'200px', aspectRatio:'1/0.9', position:"relative", overflow:'hidden', cursor:'pointer', borderRadius:'15px', boxShadow:`1px 1px 10px black`, color:colors.primary.active}}className='projectHover'>
          <img src={a1} alt='' style={{width:"100%", height:"100%", objectFit:'cover'}} />
          <div style={{position:'absolute', width:"100%", height:'20%', bottom:0, backgroundColor: colors.primary.subtle, padding:'10px', textAlign:'center',fontWeight:800, fontSize:'20px'}}>
            Mwangaza Knowledge Hub
          </div>
        </div>

        <div style={{display:"flex", width:'25%', minWidth:'200px', aspectRatio:'1/0.9', position:"relative", overflow:'hidden', cursor:'pointer', borderRadius:'15px', boxShadow:`1px 1px 10px black`, color:colors.primary.active,}}className='projectHover'>
          <img src={a1} alt='' style={{width:"100%", height:"100%", objectFit:'cover'}} />
          <div style={{position:'absolute', width:"100%", height:'20%', bottom:0, backgroundColor: colors.primary.subtle, padding:'10px', textAlign:'center',fontWeight:800, fontSize:'20px'}}>
            Agrohub
          </div>
        </div>

      </div>
    </div>
  )
}

function Testimonials({colors}){
  return(
    <div style={{padding:'50px 20px 100px 20px', backgroundColor:colors.primary.subtle, display:"flex", flexDirection:'column', gap:'25px',}}>
      <div style={{fontSize:'40px', fontWeight:1000, textAlign:"center"}}>Testimonials</div>
      <section style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <div style={{maxWidth:'900px', fontSize:'18px'}}>
          <div style={{display:"flex", flexWrap:'wrap', gap:'10px', paddingBottom:'20px'}}>
            <img src={a1} alt='' style={{width:70, height:70, borderRadius:'50%'}} />
            <div style={{display:'flex', flexDirection:'column',justifyContent:'center', fontWeight:900, fontSize:'18px'}}>
              <span>Sospeter Ewour</span>
              <span>Co. Founder at Tanzcoffee</span>
            </div>
          </div>
          I've hired Frugence when we first started our two SaaS project Influspy.com and Minea.com. Both projects were small at the time (~5k$ MRR), 10 month later we are now at 200k$ MRR. A good part of it is thanks to Frugence's dedication and work ethic. He has played a key role in developing the 8/10 nps score product that are now Minea and Influspy. Even in the darkest hours and late into the night releases he always answered present and with a positive attitude. Frugence's react/nextJs skills are outstanding, the execution is fast and pixel perfect to the figma wireframe he has in input. I highly recommend Frugence for any product centric start-ups.
        </div>
      </section>
    </div>
  )
}

function Contacts({colors}){
  return(
    <div style={{padding:'50px 20px', backgroundColor:colors.primary.base, display:"flex", flexDirection:'column', gap:'25px'}}>
      <div style={{fontSize:'40px', fontWeight:1000, textAlign:"center"}}>
        Contact
      </div>
      <section style={{display:'flex',justifyContent:"center", gap:"40px"}}>
        <span className="Contact"><TbBrandLinkedinFilled /></span>
        <span className="Contact"><FaGithub /></span>
        <span className="Contact"><TbBrandWhatsappFilled /></span>
        <span className="Contact"><SiMaildotcom /></span>
      </section>
    </div>
  )
}
function CopyRight({colors}){
  return(
    <div style={{backgroundColor:colors.secondary.base, display:'flex', justifyContent:'center', padding:'30px 0px 30px 0px', fontSize:"20px", fontWeight:800}}>
      <div style={{display:'flex', alignItems:"center", justifyContent:"center", gap:"5px"}}>
        <span>Abdillah Rajabu </span>
        <span style={{position:'relative', top:'3px'}}><LiaCopyrightSolid/></span> 
        <span>2026</span>
      </div>
    </div>
  )
}