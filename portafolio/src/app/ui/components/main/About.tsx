import '@/ui/css/About.css'
import StackCard from '../shared/StackCard'

export default function About () {
  return (
    <>
      <section id="about" className="sectionAbout about border-dashed border-2 border-sky-500">
        <div className="container mx-auto border-dashed border-2 border-sky-500">
            <div className="section-title">
                <h2>About</h2>
                <p>
                    I am a computer engineer with 10+ years of professional experience as a Software Developer
                </p>
            </div>

            <div className="grid grid-flow-col">
                <div className="col-span-2" data-aos="fade-right">
                    <img src="/img/profile-img.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <p className="fst-italic">
                        My most recent experience has been as a FullStack Developer for a Healtcare Institution usig InterSystem technologies.
                        I am highly competent in all of the associated tasks, such as designing and troubleshooting software, coding, debugging, and optimizing applications.
                        Furthermore, I have strong expertise in .Net Framework, .Net Core, C#, RestApi, WebServices, MS SQL Server, MySql, SAP HANA and SAP Business One (ERP Solution).
                        I also have knowledge on React, NodeJs, Express and NextJs.
                    </p>
                    <p className="fst-italic">
                        I have several other key strengths.
                        My ability to work effectively as part of a team, my problem-solving skills, and my natural organizational skills have, helped me succeed in my professional life.
                    </p>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>June 23</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+689 699 1729</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kissimmee, FL, USA</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's degree in computer engineering</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>oscar.rondon.c@gmail.com</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Fulltime:</strong> <span>Available (Remote / Hybrid / On-Site)</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

      <section id="skills" className="sectionAbout skills section-bg">
        <div className="container mx-auto px-4">

            <div className="section-title">
                <h2>Tech stack</h2>
            </div>

            <div className="techStackCarWrapper">

                <StackCard CardTitle="HTML" ImgSrc="/img/HTML-Logo.png" />

                <StackCard CardTitle="CSS" ImgSrc="/img/CSS-Logo.png" />

                <StackCard CardTitle="JavaScript" ImgSrc="/img/JavaScript-Logo.png" />

                <StackCard CardTitle=".Net Core" ImgSrc="/img/NetCore-Logo.png" />

                <StackCard CardTitle=".Net Framework" ImgSrc="/img/NetFramework-Logo.png" />

                <StackCard CardTitle="C#" ImgSrc="/img/CSharp-Logo.png" />

                <StackCard CardTitle="SAP Business One" ImgSrc="/img/SAPB1-Logo.png" />

                <StackCard CardTitle="SAP Business One SDK" ImgSrc="/img/SAPB1SDK-Logo.png" />

                <StackCard CardTitle="SAP Business One SL" ImgSrc="/img/SAPB1SL-Logo.png" />

                <StackCard CardTitle="React" ImgSrc="/img/React-Logo.png"/>

                <StackCard CardTitle="Nextjs" ImgSrc="/img/NextJs-Logo.png"/>

                <StackCard CardTitle="Nodejs" ImgSrc="/img/NodeJs-Logo.png"/>

                <StackCard CardTitle="MS Sql Server" ImgSrc="/img/MSSqlServer-Logo.png"/>

                <StackCard CardTitle="MySql" ImgSrc="/img/MySql-Logo.png"/>

                <StackCard CardTitle="SAP HANA" ImgSrc="/img/SAPHANA-Logo.png"/>

            </div>
        </div>
      </section>
    </>
  )
}
