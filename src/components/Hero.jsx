import React from 'react'
import { FaGithub, FaLinkedinIn, FaNewspaper } from "react-icons/fa";

const Hero = () => {

  return (
    <>

<section id="hero" className="bg-black mt-20 pt-5 "  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 75%,rgba(0,0,0,10) 100%), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1033%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/rect%3e%3cpath d='M280 57.44C245.69 57.44 216.86 105.08 216.86 140C216.86 164.45 247.46 176.18 280 176.18C320.31 176.18 362.56 165.87 362.56 140C362.56 106.5 318.54 57.44 280 57.44' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M560 129.23C551.84 129.23 544.44 135.73 544.44 140C544.44 143.71 552.11 145.19 560 145.19C570.66 145.19 581.54 143.82 581.54 140C581.54 135.84 570.39 129.23 560 129.23' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1400 132.22C1389.76 132.22 1376.67 136.33 1376.67 140C1376.67 143.63 1389.54 146.83 1400 146.83C1403.58 146.83 1404.75 143.49 1404.75 140C1404.75 136.18 1403.8 132.22 1400 132.22' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M140 262.5C127.29 262.5 108.89 271.03 108.89 280C108.89 289.12 127.46 298.67 140 298.67C147.02 298.67 148 289.29 148 280C148 271.2 146.85 262.5 140 262.5' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1120 257.89C1105.52 257.89 1090 266.18 1090 280C1090 300.57 1105.98 326.67 1120 326.67C1133.34 326.67 1144.71 301.13 1144.71 280C1144.71 266.74 1132.88 257.89 1120 257.89' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M980 353.33C950.94 353.33 931.72 390.94 931.72 420C931.72 440.56 953.92 452.56 980 452.56C1021.81 452.56 1067.5 442.78 1067.5 420C1067.5 393.16 1018.83 353.33 980 353.33' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 61.25C45.55 49.86 80.47 73.38 140 105C154.59 112.75 148.24 123.18 148.24 140C148.24 147.25 147 150.15 140 153.13C72.88 181.65 49.16 207.61 0 203C-20.84 201.05 0 171.5 0 140C0 100.63 -24.45 67.36 0 61.25' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M420 95C368.57 95 325 27.82 325 0C325 -19.68 372.5 0 420 0C486.5 0 553 -21.31 553 0C553 26.19 482.57 95 420 95' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M949.8 140C949.8 110.72 960.8 109.54 980 85C1015.57 39.54 1013.33 27.93 1059.33 0C1083.33 -14.57 1089.66 0 1120 0C1138.2 0 1151.81 -14.43 1156.4 0C1174.08 55.57 1177.86 79.36 1164.55 140C1159.66 162.26 1142.11 152.61 1120 165.79C1049.83 207.61 1030.11 257.59 980 250C945.01 244.7 949.8 193.22 949.8 140' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1400 35C1387.86 16.42 1372.61 10.83 1372.61 0C1372.61 -6.67 1386.3 0 1400 0C1470 0 1505 -35 1540 0C1575 35 1540 70 1540 140C1540 168 1554.14 196 1540 196C1516.18 196 1494.46 174.94 1464.07 140C1424.46 94.44 1433.59 86.42 1400 35' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M198 280C227.03 238.57 232.65 227.45 280 215.51C343.65 199.45 350.11 225.38 420 224C490.11 222.62 497.14 194.16 560 210C608.23 222.16 604.15 241.98 642.17 280C674.15 311.98 661.38 332.02 700 350C760.29 378.07 778.97 347.18 840 372.11C864.66 382.18 850.09 401.58 871.38 420C920.09 462.15 927.85 453.82 980 493.26C1020.42 523.82 1056.53 540.97 1056.53 560C1056.53 574.34 1018.26 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C630 560 630 560 560 560C529.09 560 498.18 575.58 498.18 560C498.18 533.82 523.87 513.01 560 476.49C593.12 443.01 636.67 449.47 636.67 420C636.67 389.02 602.95 380.32 560 355.6C494.61 317.96 476.03 278.99 420 295.27C365.2 311.19 375.67 355.62 338.33 420C305.67 476.32 321.75 535.72 280 536.67C222.58 537.98 209.6 481 140 424.52C137.71 422.66 136.22 422.28 136.22 420C136.22 417.68 138.79 418.07 140 415.33C169.68 348.07 157.03 338.48 198 280' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1247.65 280C1247.65 268.73 1248.07 260.41 1260 256.67C1324.24 236.51 1338.85 223.89 1400 232.2C1424.66 235.55 1431.61 256.61 1431.61 280C1431.61 301.36 1423.1 319.34 1400 321.7C1337.29 328.09 1326.2 315.62 1260 297.5C1250.02 294.77 1247.65 289.14 1247.65 280' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 486.32C23.85 486.32 80 538.77 80 560C80 575.61 20.82 579.18 0 560C-19.18 542.34 -16.15 486.32 0 486.32' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1296.98 560C1296.98 539 1341.99 501.69 1400 484.17C1463.5 464.99 1494.08 461.72 1540 486.59C1564.08 499.63 1564.08 547.37 1540 560C1494.08 584.08 1470 560 1400 560C1348.49 560 1296.98 576.91 1296.98 560' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1523.39 140C1489.93 72.97 1458.46 46.67 1464 0C1466.77 -23.33 1526.63 -24.63 1540 0C1564.63 45.37 1540 70 1540 140C1540 146.13 1543.09 152.25 1540 152.25C1534.79 152.25 1527.93 149.1 1523.39 140' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M248 280C252.63 261.43 262.15 254.83 280 254.83C310.15 254.83 341.35 253.77 344 280C349.69 336.36 322.23 350.79 296.67 420C290.23 437.45 291.94 453.33 280 453.33C263.02 453.33 243.21 443.76 238.82 420C227.21 357.09 232.04 344.01 248 280' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M546.67 280C546.67 277.32 553.77 274.81 560 274.81C563.48 274.81 566.09 277.35 566.09 280C566.09 282.74 563.53 285.6 560 285.6C553.82 285.6 546.67 282.71 546.67 280' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 532.37C8.94 532.37 30 552.04 30 560C30 565.86 7.81 567.19 0 560C-7.19 553.38 -6.06 532.37 0 532.37' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M543.64 560C543.64 553.07 548.85 545.74 560 537.89C627.03 490.74 641.83 443.79 700 450C745.31 454.84 766.96 523.81 766.96 560C766.96 578.81 733.48 560 700 560C630 560 630 560 560 560C551.82 560 543.64 564.12 543.64 560' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M924 560C924 553.17 953.85 533.95 980 533.95C996.78 533.95 1009.87 552.57 1009.87 560C1009.87 565.6 994.93 560 980 560C952 560 924 566.19 924 560' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1363.02 560C1363.02 552.46 1378.15 536.57 1400 532.78C1466.64 521.21 1482.6 518.11 1540 529.27C1552.6 531.72 1552.6 557.23 1540 560C1482.6 572.6 1470 560 1400 560C1381.51 560 1363.02 566.07 1363.02 560' stroke='rgba(38%2c 39%2c 37%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1033'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
 
    backgroundSize: 'cover',
    
}}>
        <div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 class="max-w-md text-7xl font-bold md:text-8xl text-left text-white">
                    <p class="text-[#3ac790]">Hey there!, I'm- </p>
                    Jaime Cardoso.
                </h1>
                <p class="font-medium max-w-sm text-gray text-left text-2xl md:mx-0">
             <span className="text-white">Software Engineer.</span> Computer Science senior with an interest in Front End development.
         </p>  
           <p className="text-base">
           🎓 Currently a Computer Science Senior at The University Of Texas at Dallas. <br />
          🚀 Exploring opportunities and side projects.

           </p>

                <div class="flex justify-center md:justify-start space-x-4">
                <button button onClick={() => window.open("https://github.com/jaimemcardoso")} className="rounded bg-zinc-900 px-6 py-2 text-white font-bold inline-flex items-center hover:bg-zinc-700"> <FaGithub className="text-[#3ac790] mr-3 "/> Github</button>
                <button button onClick={() => window.open("https://www.linkedin.com/in/jaime-cardoso-b42734164/")} className="rounded bg-zinc-900 px-6 py-2 text-white font-bold inline-flex items-center hover:bg-zinc-700"> <FaLinkedinIn className="text-[#3ac790] mr-3 "/> LinkedIn</button>
                <button button onClick={() => window.open("https://drive.google.com/file/d/1JbYEc9_C1GeGlvE5yEtn7D5z16XbwRdw/view?usp=sharing")} className="rounded bg-zinc-900 px-6 py-2 text-white font-bold inline-flex items-center hover:bg-zinc-700"> <FaNewspaper className="text-[#3ac790] mr-3 "/> Resume</button>

                    </div>
            </div>
            <div class="md:w-1/2">

            </div>
        </div>
    </section>
    </>
    )
}

export default Hero

