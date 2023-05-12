import Head from 'next/head';
import Image from 'next/image';



export default function Home() {
  return (

      <main className="bg-white flex flex-col items-center px-5">
        <head className="flex flex-col items-center justify-center md:py-48 py-24">
          <Image src="/image/Xelmar Logo.png" width={100} height={100} alt="Xelmar Logo"/>
          <div>
            <div className="font-conthrax text-center text-[2.5rem] md:text-7xl leading-[3.7rem] md:leading-[5.3rem] pt-16 pb-6">
              <h1>DO USERS TRULY<br/>
              UNDERSTAND YOUR<br/>
              <span className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FAEF41] to-[#2AD3D4]">WEB3</span> PRODUCT?</h1>
            </div>
            <p className="font-work text-center text-[#B5B4B4] pb-8 text-lg">LET US SIMPLIFY FOR BETTER CONVERSION AND USER EXPERIENCE.</p>
          </div>
          <a href="https://calendly.com/israelrex/xelmar-client" target="blank">
            <button className="font-syne bg-black text-white font-bold py-5 px-12 text-center hover:bg-gradient-to-r hover:from-[#FAEF41] hover:to-[#2AD3D4]">
              SCHEDULE A CALL
            </button>
          </a>
        </head>

        <hr className="max-w-6xl mt-18 w-full"/>
          
        <div className="max-w-6xl w-full space-y-12 py-20">
              <p className="font-work text-center text-[#B5B4B4] text-lg leading-7">AS A TEAM, WE COLLABORATE WITH LEADING WEB3 PROJECTS AND DAOS TO <span className="text-black">STRATEGIZE (UX)</span> AND <span className="text-black">DESIGN (UI)</span> <br/>
                FOR INNOVATIVE PRODUCTS THAT ARE <span className="text-black">INTUITIVE, ENGAGING</span> AND <span className="text-black">FAMILIAR.</span></p>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-8 justify-between">
                <Image src="/image/Bankless Loans.png" width={238.5} height={40} alt="Bankless Loans"/>
                <Image src="/image/White Hat DAO.png" width={226} height={40} alt="White Hat DAO"/>
                <Image src="/image/Vitareels.png" width={151.56} height={40} alt="Vitareels"/>
                <Image src="/image/TalentDAO 1.png" width={169} height={40} alt="TalentDAO"/>
              </div>
        </div>

        <hr className="max-w-6xl w-full"/>

        <div className="flex md:flex-row flex-col justify-between py-16 max-w-6xl w-full gap-10">
          <div className="flex flex-col space-y-6 justify-between font-bold md:text-6xl text-5xl gap-4 leading-[4.5rem] text-black">
            <h2 className="font-syne text-left">Concepeting</h2>
            <h2 className="font-syne text-left">UX/UI</h2>
            <h2 className="font-syne text-left">dAPP Design</h2>
            <h2 className="font-syne text-left">Research</h2>
            <h2 className="font-syne text-left">Design Systems</h2>
            <h2 className="font-syne text-left">Usability Test</h2>
          </div>
          <a>
            <div className="overflow-hidden rounded-2xl">
                
              {/* <Image alt='img' src="/image/image_02.png" width={555} height={557} className=" h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer"/>
                  
              <Image alt='img' src="/image/image_01.png" width={555} height={557} className=" h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer"/> */}
                    
              <Image alt='img' src="/image/image_03.png" width={555} height={557} className=" h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer"/>
                
            </div>
          </a>
        </div>

        <hr className="max-w-6xl w-full"/>

        <div className="py-16 max-w-6xl w-full justify-between flex md:flex-row flex-col gap-12">
          <div className="max-w-lg flex flex-col gap-7">
                  <h3 className="font-syne text-[#D4D4D4] text-3xl font-medium leading-[3.06rem]">
                      Working with Rex was a great experience. He's a Product Designer that goes overboard to understand the vision and
                      translates it into mind-blowing designs.
                  </h3>
                  <div className="flex items-center gap-4">
                      <Image src="/image/Nathaniel Luz.png" width={57} height={57} alt="Nathaniel Luz"/>
                      <div className="flex flex-col text-black">
                          <p className="font-syne font-bold text-xl">Nathaniel Luz</p>
                          <p className="font=syne font-medium text-sm">CEO at Flincap</p>
                      </div>
                  </div>
          </div>
          <div className="max-w-lg flex flex-col gap-7">
            <h3 className="font-syne text-[#D4D4D4] text-3xl font-medium leading-[3.06rem]">
                  IsraelRex did an exceptional job designing the Bankless Loans Frontend for Liquity Protocol.
                  I was impressed with his ability to seamlessly integrate our instructions with his own innovative
                  ideas and improvements. IsraelRex demonstrated a keen sense of aesthetics and a contemporary design
                  style that is sure to resonate with users. I appreciated his timely delivery. Overall, I highly
                  recommend IsraelRex for any design project.
            </h3>
            <div className="flex items-center gap-4">
              <Image src="/image/Katarina.png" width={57} height={57} alt="Katarina"/>
                <div className="flex flex-col text-black">
                  <p className="font-syne font-bold text-xl">Katarina</p>
                  <p className="font=syne font-medium text-sm">Project Coordinator at BanklessLoans</p>
                </div>
            </div>
          </div>
        </div>

          <div className="max-w-6xl w-full pt-8 pb-16 justify-between flex md:flex-row flex-col md:items-end gap-8">
              <h2 className="font-conthrax md:text-[2.5rem] text-4xl leading-[3rem] text-black">
                  LET'S ENHANCE<br/>YOUR PRODUCT FOR<br/><div className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#FAEF41] to-[#2AD3D4]">SPEED, USABILITY,<br/>AND EFFICIENCY.</div>
              </h2>
              <div className="flex flex-col gap-3.5 justify-start">
                  <h3 className="font-syne text-base font-bold text-[#B6B3B3]">PREPARE FOR A QUICK RESPONSE</h3>
                  <a href="mailto:israel06.rex@gmail.com">
                    <button className="bg-black text-white font-bold py-6 md:px-36 px-28 text-xl font-syne text-center w-full">
                      Email Israel Rex
                    </button>
                  </a>
              </div>
          </div>

          <hr className="max-w-6xl w-full bg-[#8F8F8F]"/>

          <div className="max-w-6xl w-full pt-10 pb-20">
              <p className="font-work text-base leading-[1.4rem] font-normal pb-9 text-black">
                  XELMAR IS A PRODUCT STUDIO, SPECIALIZED IN BUILDING USER INTERFACES (UI) FOR DECENTRALIZED APPLICATIONS (dAPP) AND OTHER WEB3 TECHNOLOGIES.
                  WE HELP STARTUPS, BUSINESSES AND ORGANIZATIONS CREATE SEAMLESS AND USER-FRIENDLY EXPERIENCES THAT LEVERAGE THE POWER OF BLOCKCHAIN AND OTHER DECENTRALIZED TECHNOLOGIES.
              </p>
              <div className="max-w-6xl w-full font-syne bg-[#2AD3D5]">
                  <h3 className="text-white text-center py-16 font-bold text-4xl leading-[3.75rem] hover:bg-gradient-to-r hover:from-[#FAEF41] hover:to-[#2AD3D4]">
                      Work with us
                  </h3>
              </div>
              <div className="flex justify-between font-work text-base font-normal pt-5 text-black">
                  © 2023 XELMAR
                  <div className="flex gap-5">
                      <a className="cursor-pointer" href="https://www.linkedin.com/company/xelmartech/" target="blank">LINKEDIN</a>
                      <a className="cursor-pointer" href="https://twitter.com/xelmartech?s=21&t=u5tJLmhWHkGcx1F2CYdixA" target="blank">TWITTER</a>
                  </div>
              </div>
          </div>
      </main>
  )
}
