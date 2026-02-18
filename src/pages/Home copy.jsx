import { useState } from "react";
import pic from '../assets/MwangazaLogo.jpg';

export default function Home(){
    const text = "Home page";
    console.log(text);
    console.log(text.split());
    console.log([text]);
    console.log(Array(text));
    return(
    //   <section style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
    //     <div style={{fontSize:'20px'}}>
    //         {
    //             text.split("").map((char, index)=>(
    //                 <div className="anime" key={index} style={{animationDelay:`${index*0.5}s`, display:'inline-block'}}>
    //                     {char === " " ? "\u00A0" : char}
    //                 </div>
    //             ))
    //         }

    //     </div>
    //     <Step3/>
    //     <Step3Css/>
    //     <Step04/>
    //     <Step05/>
    //   </section>
      <div style={{backgroundColor:'#EAFFFD'}}>
        <nav style={{padding:'25px',backgroundColor:'rgba(124, 67, 165, 1)'}}>
            <span style={{padding:'8px 10px', borderRadius:'5px',backgroundColor:'rgba(251, 212, 113, 1)', color:'rgba(42, 42, 81, 1)', fontSize:'13px'}}>Home</span>
        </nav>
        <section style={{height:'400px', backgroundColor:'#C9F0FF'}}></section>
        <section style={{height:'400px',padding:'200px 0px 800px 0px'}}>
            <h1 style={{color:'rgba(15, 23, 42, 1)'}}>
                This is heading
            </h1>
            <p style={{color:'rgba(15, 23, 42, 0.75)'}}>
                Paragraph paragraph paragraph
                Paragraph paragraph paragraph
                Paragraph paragraph paragraph
                Paragraph paragraph paragraph
                Paragraph paragraph paragraph
            </p>
        </section>
        <section style={{height:'400px', backgroundColor:'#24797B'}}></section>
      </div>
    )
}

function Step3(){
    const [cssIndex, setCssIndex] = useState(null);
    const text = 'this is step 03';
    return(
        <div>
            {
                text.split("").map((char, index)=>(
                    <div key={index} style={{display:'inline-block', fontSize:'30px'}} className={cssIndex === index ? "hoverAnime" : ""} onMouseEnter={()=>(setCssIndex(index))} onMouseLeave={()=>(setCssIndex(null))} 
                    >
                        {char === " " ? "\u00A0" : char}
                    </div>
                ))
            }
        </div>
    )
}

function Step3Css(){
    const text = 'this is step 03';
    return(
        <div>
            {
                text.split("").map((char, index)=>(
                    <div key={index} 
                    style={{display:'inline-block', fontSize:'30px', 
                    }} className="hoverAnimeCss"
                    >
                        {char === " " ? "\u00A0" : char}
                    </div>
                ))
            }
        </div>
    )
}

function Step04(){
    const text = "Abdd";
return (
    <div style={{display:'inline-block', border:'1px solid red', fontSize:'40px', width:'fit-content', cursor:'pointer'}}>
        <svg width="500" height="100">
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
            >
                {
                    text.split("").map((char, index)=>(
                       <tspan className="svg-text">
                        {char}
                       </tspan> 
                    ))
                }
            </text>
        </svg>
    </div>
  );
}

function Step05(){
    return(
        <div className="title" style={{backgroundImage:`url(${pic})`}}>
            Juma mojowjojo
        </div>
    )
}