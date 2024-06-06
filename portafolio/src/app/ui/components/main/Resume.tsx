import '@/ui/css/Resume.css'

export default function Resume () {
  return (
    <>
      <section id="resume" className="resume sectionResume">
        <div className="container lg:px-0 md:px-4 mx-auto">
            <div className="section-title">
                <h2>Resume</h2>
                <p>Computer Engineer, focused on software development, in continuouse learning and dedicated to give the best of myself to deliver efficient,
                reliable, maintainable, and scalable software solutions and products.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2">
                <div className="row-span-1" data-aos="fade-up">
                    <h3 className="resume-title">Sumary</h3>
                    <div className="resume-item pb-0">
                        <h4>Oscar Rondon</h4>
                        <p>
                            <em>
                                With 10+ years of experience designing and developing custom software solution on .Net Framework, .NetCore, C#, SAP Business One,
                                Sap Business One SDK, SAP Business One Service Layer, MS SQL Server, MySql, HANA DB and Crystal Report.
                                Also I have knoledge on JavaScript Web development using React, NextJs and NodeJs
                            </em>
                        </p>
                        <ul>
                            <li>Orlando, FL</li>
                            <li>(689) 699-1729</li>
                            <li>oscar.rondon.c@gmail.com</li>
                        </ul>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                        <h4>Bachelor's degree on Computer engenieering</h4>
                        <h5>2001 - 2007</h5>
                        <p><em>Catholic University Andrés Bello, Caracas, Venezuela</em></p>
                    </div>

                    <h3 className="resume-title">Certifications</h3>
                    <div className="resume-item">
                        <ul>
                            <li>SAP Business One Consultant</li>
                            <li>SAP Business One Developer</li>
                            <li>HUAWEI HCIA Cloud Administrator</li>
                            <li>Linux SLES 15 Basic Administration</li>
                        </ul>
                    </div>
                </div>
                <div className="row-span-1" data-aos="fade-up" data-aos-delay="100">

                    <h3 className="resume-title">Professional Experience <a className="moreLink" href="#">more...</a></h3>

                    <div className="resume-item">
                        <h4>FULLSTACK DEVELOPER</h4>
                        <h5>Oct. 2022 - Present</h5>
                        <p><em>Tree of life Software, Santiago de Chile, Chile</em></p>
                        <ul>
                            <li>InterSystems Health Care Solutions (TRAKCare) customs developments and enhancing.</li>
                            <li>Custom reports design and development for TrakCare.</li>
                            <li>CI/CD for SAP B1 (Functional and development)</li>
                            <li>CI/CD for TrakCare Solution (development)</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>FULLSTACK TECHNICIAN</h4>
                        <h5>May. 2022 - Sep. 2022</h5>
                        <p><em>Pronova, Santiago de Chile, Chile</em></p>
                        <ul>
                            <li>InterSystems Health Care Solutions (TRAKCare) customs developments</li>
                            <li>Customer development support</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>INFRAESTRUCTURE PROJECT LEADER</h4>
                        <h5>Nov. 2021 - Apr. 2022</h5>
                        <p><em>Seidor Chile, Santiago de Chile, Chile</em></p>
                        <ul>
                            <li>Infrastructure planning and deployment on AWS, HUAWEI, GCP and On-Premises</li>
                            <li>Infrastructure deployment project plan supervising.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}
