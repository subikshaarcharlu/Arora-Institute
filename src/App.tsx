import { FormEvent, useEffect, useMemo, useState } from "react";

type PageId =
  | "home"
  | "about"
  | "academics"
  | "admissions"
  | "departments"
  | "campus"
  | "placements"
  | "contact";

const pages: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "academics", label: "Academics" },
  { id: "admissions", label: "Admissions" },
  { id: "departments", label: "Departments" },
  { id: "campus", label: "Campus Life" },
  { id: "placements", label: "Placements" },
  { id: "contact", label: "Contact" },
];

const programs = [
  ["B.Sc. Computer Science", "Programming, systems and software engineering with a strong industry project track.", "3 Years", "90 seats", "CS"],
  ["B.Sc. Data Science", "Statistics, machine learning, visualisation and big-data tooling.", "3 Years", "60 seats", "DS"],
  ["B.Tech Artificial Intelligence", "Neural networks, computer vision, language models and ethics of AI.", "4 Years", "60 seats", "AI"],
  ["B.Sc. Cyber Security", "Network defence, cryptography and secure application design.", "3 Years", "40 seats", "CY"],
  ["B.Com Professional Accounting", "Accounting, taxation, auditing and financial analytics.", "3 Years", "120 seats", "CO"],
  ["BBA Business Administration", "Management, marketing, operations and entrepreneurship.", "3 Years", "90 seats", "BA"],
];

const postgrad = [
  ["M.Sc. Computer Science", "Advanced systems, research methods and a thesis project.", "2 Years", "30 seats", "MC"],
  ["M.Sc. Data Science", "Applied analytics, deep learning and a capstone with industry.", "2 Years", "30 seats", "MD"],
  ["M.Com Finance", "Corporate finance, investment analysis and research.", "2 Years", "40 seats", "MF"],
  ["MBA", "Leadership, strategy and analytics-driven management.", "2 Years", "60 seats", "MB"],
];

const departments = [
  ["Computer Science", "Software engineering, systems, networks and secure computing.", "Prof. Nandhini R.", "Programming Lab", "Networks Lab", "assets/labs.png"],
  ["Data Science and Analytics", "Statistical learning, big data and visual analytics for decision-making.", "Dr. Harish M.", "Analytics Lab", "Big Data Cluster", "assets/labs.png"],
  ["Artificial Intelligence", "Deep learning, vision, language and responsible AI research.", "Dr. Janani S.", "AI Research Lab", "GPU Workstation Room", "assets/symposium.png"],
  ["Commerce", "Accounting, taxation, banking and financial markets.", "Prof. Revathi L.", "Finance Simulation Lab", "Tally Lab", "assets/library.png"],
  ["Business Administration", "Management, marketing and entrepreneurship with live projects.", "Prof. Gokul V.", "Case Study Room", "Incubation Studio", "assets/campus-main.png"],
  ["Mathematics and Statistics", "Applied mathematics supporting computing, data and finance.", "Dr. Kavitha N.", "Computation Lab", "Statistics Studio", "assets/symposium.png"],
];

function Mark({ small = false }: { small?: boolean }) {
  return (
    <span className={`mark ${small ? "mark-small" : ""}`} aria-hidden="true">
      A
    </span>
  );
}

function Header({
  page,
  navigate,
}: {
  page: PageId;
  navigate: (page: PageId) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>+91 422 555 0142</span>
          <span>info@aurora-institute.example</span>
          <span className="top-address">Avinashi Road, Coimbatore, Tamil Nadu</span>
          <span>Student Portal &nbsp;|&nbsp; Alumni &nbsp;|&nbsp; Careers</span>
        </div>
      </div>
      <header className="header">
        <div className="shell header-inner">
          <button className="brand" onClick={() => navigate("home")} aria-label="Aurora Institute home">
            <Mark />
            <span>
              <strong>AURORA INSTITUTE</strong>
              <small>OF SCIENCE AND TECHNOLOGY</small>
            </span>
          </button>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            <span />
            <span />
            <span />
          </button>
          <nav className={open ? "nav open" : "nav"}>
            {pages.map((item) => (
              <button
                className={page === item.id ? "active" : ""}
                key={item.id}
                onClick={() => {
                  navigate(item.id);
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
            <button className="apply" onClick={() => navigate("admissions")}>
              Apply Now
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer({ navigate }: { navigate: (page: PageId) => void }) {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">
            <Mark small />
            <span>
              <strong>AURORA INSTITUTE</strong>
              <small>OF SCIENCE AND TECHNOLOGY</small>
            </span>
          </div>
          <p>A forward-looking institution in Coimbatore, committed to rigorous teaching, practical research and responsible leadership.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          {pages.slice(1, 5).map((p) => (
            <button key={p.id} onClick={() => navigate(p.id)}>
              {p.label}
            </button>
          ))}
        </div>
        <div>
          <h4>Programmes</h4>
          <span>B.Sc. Computer Science</span>
          <span>B.Sc. Data Science</span>
          <span>B.Tech Artificial Intelligence</span>
          <span>B.Com &amp; BBA</span>
        </div>
        <div>
          <h4>Contact</h4>
          <span>Avinashi Road, Peelamedu,</span>
          <span>Coimbatore – 641 004</span>
          <span>+91 422 555 0142</span>
          <span>info@aurora-institute.example</span>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© 2026 Aurora Institute of Science and Technology. All rights reserved.</span>
        <span>Fictional institution created for a design project.</span>
      </div>
    </footer>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <i />
    </div>
  );
}

function InnerHero({ page, title, text }: { page: string; title: string; text: string }) {
  return (
    <section className="inner-hero">
      <div className="shell">
        <small>Home &nbsp;/&nbsp; {page}</small>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

function ProgramCard({ item }: { item: string[] }) {
  return (
    <article className="program-card">
      <b className="round-icon">{item[4]}</b>
      <h3>{item[0]}</h3>
      <p>{item[1]}</p>
      <div className="meta"><span>{item[2]}</span><span>{item[3]}</span></div>
      <button>View Details</button>
    </article>
  );
}

function InfoCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <article className="info-card">
      <b className="round-icon">{icon}</b>
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

function Home({ navigate }: { navigate: (p: PageId) => void }) {
  return (
    <>
      <section className="home-hero">
        <div className="shell hero-content">
          <div>
            <i />
            <h1>Building Knowledge.<br />Shaping Tomorrow.</h1>
            <p>A premier institution of science, technology and commerce in Coimbatore, where curiosity meets discipline and graduates are prepared to lead.</p>
            <div className="button-row">
              <button className="gold-button" onClick={() => navigate("admissions")}>Admission Enquiry</button>
              <button className="outline-button" onClick={() => navigate("academics")}>Explore Programmes</button>
            </div>
          </div>
          <img src="assets/clocktower.png" alt="Aurora Institute campus" />
        </div>
      </section>
      <div className="shell quick-strip">
        {[["01", "Apply Online", "Admissions 2027 open"], ["02", "Prospectus", "Download PDF brochure"], ["03", "Scholarships", "Merit and need based"], ["04", "Campus Visit", "Book a guided tour"]].map((a) => (
          <button key={a[1]} onClick={() => navigate(a[1] === "Campus Visit" ? "contact" : "admissions")}>
            <b>{a[0]}</b><span><strong>{a[1]}</strong><small>{a[2]}</small></span>
          </button>
        ))}
      </div>
      <section className="section">
        <div className="shell split intro">
          <div>
            <h2>Welcome to Aurora Institute</h2>
            <p className="lead">A community where rigorous teaching, hands-on laboratories and strong industry links come together.</p>
            <i className="rule" />
            <p>Founded in 2004, Aurora Institute of Science and Technology offers undergraduate and postgraduate programmes across computing, data, commerce and management. Our faculty combine academic depth with industry practice, and our students graduate with the skills and character to thrive anywhere.</p>
            <ul className="checks">
              <li>Outcome-based curriculum reviewed with industry advisors</li>
              <li>Mentoring for every student from the first semester</li>
              <li>Wi-Fi campus with 12 specialised laboratories</li>
              <li>Internship and placement support throughout the programme</li>
            </ul>
            <button className="navy-button" onClick={() => navigate("about")}>About the Institute</button>
          </div>
          <img className="feature-image" src="assets/campus-main.png" alt="Students at Aurora campus" />
        </div>
      </section>
      <section className="stat-band">
        <div className="shell stats">
          {[["12,000+", "Alumni worldwide"], ["180", "Faculty members"], ["45+", "Industry partners"], ["22", "Years of excellence"]].map((s) => <div key={s[1]}><strong>{s[0]}</strong><span>{s[1]}</span></div>)}
        </div>
      </section>
      <section className="section soft">
        <div className="shell">
          <SectionTitle title="Featured Programmes" subtitle="Career-focused degrees designed with input from employers and researchers." />
          <div className="card-grid four">{programs.slice(0, 4).map((p) => <ProgramCard item={p} key={p[0]} />)}</div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <SectionTitle title="Campus Highlights" subtitle="Spaces built for focused study, collaboration and community." />
          <div className="image-card-grid">
            {[["assets/labs.png", "Research Laboratories", "AI, networking, data and electronics laboratories open to students from year one."], ["assets/library.png", "Central Library", "Over 60,000 volumes, digital journals and quiet study halls open late in exam season."], ["assets/sports.png", "Sports Complex", "Athletics track, indoor courts and a gymnasium supporting every level of play."]].map((c) => (
              <article key={c[1]}><img src={c[0]} alt={c[1]} /><div><h3>{c[1]}</h3><p>{c[2]}</p></div></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="shell split announcements">
          <div>
            <h2>Announcements</h2><i className="rule" />
            {[["01 DEC", "Admissions 2027 open"], ["18 JAN", "Aurora Fest 2027"], ["05 FEB", "Industry Connect Summit"], ["20 FEB", "Scholarship test"]].map((a) => <div className="notice" key={a[1]}><b>{a[0]}</b><span><strong>{a[1]}</strong><small>Applications and registrations are now open.</small></span></div>)}
          </div>
          <div>
            <h2>Student Life</h2><i className="rule" />
            <img className="feature-image" src="assets/fest.png" alt="Aurora Fest student event" />
          </div>
        </div>
      </section>
      <section className="cta"><div className="shell"><div><h2>Begin your journey at Aurora</h2><p>Speak with our admissions team about programmes, scholarships and campus visits.</p></div><button className="navy-button" onClick={() => navigate("admissions")}>Admission Enquiry</button></div></section>
    </>
  );
}

function About() {
  const leaders = [["Dr. Meenakshi Raghavan", "Chairperson"], ["Dr. Karthikeyan Subramanian", "Principal"], ["Prof. Lakshmi Narayanan", "Dean of Academics"], ["Dr. Vignesh Ramaswamy", "Controller of Examinations"]];
  return (
    <>
      <InnerHero page="About Us" title="About Us" text="Our story, our values and the people behind Aurora Institute." />
      <section className="section"><div className="shell split intro"><div><h2>Institutional Overview</h2><i className="rule" /><p>Aurora Institute of Science and Technology was established in 2004 with a simple conviction: strong foundations in science, technology and commerce, taught with care, produce graduates who lead with competence and integrity.</p><p>Today the institute serves more than 4,500 students across eight departments on a green campus in Peelamedu, Coimbatore.</p></div><img className="feature-image" src="assets/clocktower.png" alt="Aurora clock tower" /></div></section>
      <section className="section soft"><div className="shell"><SectionTitle title="Vision and Mission" /><div className="card-grid two"><InfoCard icon="V" title="Our Vision"><p>To be a respected centre of learning that develops ethical, skilled and globally aware professionals who contribute to society through knowledge and innovation.</p></InfoCard><InfoCard icon="M" title="Our Mission"><ul><li>Deliver rigorous, outcome-based education.</li><li>Promote research, creativity and entrepreneurship.</li><li>Build lasting partnerships with industry and community.</li></ul></InfoCard></div></div></section>
      <section className="section"><div className="shell"><SectionTitle title="Leadership" subtitle="The people guiding the institute’s academic and administrative direction." /><div className="leader-grid">{leaders.map((l, i) => <article key={l[0]}><div className={`portrait p${i}`}><span /></div><h3>{l[0]}</h3><p>{l[1]}</p></article>)}</div></div></section>
      <section className="section soft"><div className="shell"><SectionTitle title="Achievements" subtitle="Milestones in the institute’s journey." /><div className="timeline">{[["2004", "Institute founded"], ["2012", "Autonomous curriculum"], ["2018", "AI and Data Centre"], ["2024", "Industry network"]].map((t) => <article key={t[0]}><b>{t[0]}</b><h3>{t[1]}</h3><p>Building lasting academic and industry partnerships.</p></article>)}</div></div></section>
      <section className="section"><div className="shell"><SectionTitle title="Accreditation and Recognition" subtitle="Placeholder recognitions shown for design purposes only; no real accreditation is claimed." /><div className="card-grid four">{[["QA", "Quality Assurance Cell"], ["AS", "Autonomous Status"], ["RL", "Research Cell"], ["IC", "Industry Council"]].map((x) => <InfoCard icon={x[0]} title={x[1]} key={x[1]}><p>Supports academic quality, innovation and continuous improvement.</p></InfoCard>)}</div></div></section>
    </>
  );
}

function Academics() {
  const [filter, setFilter] = useState("All Programmes");
  const shown = useMemo(() => filter === "Postgraduate" ? postgrad : filter === "Undergraduate" ? programs : programs, [filter]);
  return (
    <>
      <InnerHero page="Academics" title="Academics" text="Undergraduate and postgraduate programmes built for the careers of tomorrow." />
      <section className="section"><div className="shell"><div className="title-left"><h2>Undergraduate Programmes</h2><p>Six career-oriented degrees combining theory, laboratories and internships.</p><i /></div><div className="tabs">{["All Programmes", "Undergraduate", "Postgraduate"].map((t) => <button className={filter === t ? "active" : ""} onClick={() => setFilter(t)} key={t}>{t}</button>)}</div><div className="card-grid three">{shown.map((p) => <ProgramCard item={p} key={p[0]} />)}</div></div></section>
      {filter !== "Postgraduate" && <section className="section soft"><div className="shell"><div className="title-left"><h2>Postgraduate Programmes</h2><p>Advanced degrees for specialisation, research and leadership.</p><i /></div><div className="card-grid four">{postgrad.map((p) => <ProgramCard item={p} key={p[0]} />)}</div></div></section>}
      <section className="section"><div className="shell"><SectionTitle title="How We Teach" /><div className="card-grid three">{[["LB", "Learning by doing"], ["SM", "Small mentoring groups"], ["IE", "Industry exposure"]].map((x) => <InfoCard icon={x[0]} title={x[1]} key={x[1]}><p>Every course combines focused teaching, practical work and personal guidance.</p></InfoCard>)}</div></div></section>
    </>
  );
}

function ContactForm({ admissions = false }: { admissions?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  if (sent) return <div className="form-success"><b>Thank you.</b><p>Your message has been received. Our team will reply within two working days.</p><button onClick={() => setSent(false)}>Send another message</button></div>;
  return (
    <form className="contact-form" onSubmit={submit}>
      <h2>{admissions ? "Admission Enquiry" : "Send us a message"}</h2>
      <p>We usually reply within two working days.</p>
      <label>Full Name<input required placeholder="Enter your full name" /></label>
      <label>Email Address<input required type="email" placeholder="name@example.com" /></label>
      {admissions && <label>Phone Number<input required type="tel" placeholder="+91" /></label>}
      <label>{admissions ? "Programme of Interest" : "Subject"}<select required defaultValue=""><option value="" disabled>Select</option><option>Computer Science</option><option>Data Science</option><option>Artificial Intelligence</option><option>Commerce &amp; Management</option></select></label>
      <label>Message<textarea required placeholder={admissions ? "Tell us how we can help" : "How can we help?"} /></label>
      <button className="gold-button" type="submit">{admissions ? "Submit Enquiry" : "Send Message"}</button>
    </form>
  );
}

function Admissions() {
  return (
    <>
      <InnerHero page="Admissions" title="Admissions 2027" text="Join a community of learners. Applications are now open for all programmes." />
      <section className="section"><div className="shell"><SectionTitle title="Admission Process" subtitle="Five simple steps from enquiry to enrolment." /><div className="process">{[["1", "Register"], ["2", "Apply"], ["3", "Upload"], ["4", "Interview"], ["5", "Confirm"]].map((x) => <article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>Complete this step through the admissions portal.</p></article>)}</div></div></section>
      <section className="section soft"><div className="shell admissions-grid"><div><h2>Eligibility</h2><table><thead><tr><th>Programme</th><th>Minimum eligibility</th></tr></thead><tbody>{[["B.Sc. / B.Tech", "Higher secondary with Mathematics (minimum 55%)"], ["B.Com / BBA", "Higher secondary in any stream (minimum 50%)"], ["M.Sc.", "Relevant bachelor’s degree (minimum 55%)"], ["M.Com / MBA", "Bachelor’s degree in any discipline (minimum 50%)"]].map(r => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td></tr>)}</tbody></table><h2>Required Documents</h2><ul className="checks"><li>Class X and XII mark statements</li><li>Transfer certificate</li><li>Community certificate, if applicable</li><li>Passport-size photographs</li><li>Government photo identity proof</li></ul><h2>Important Dates</h2><table><thead><tr><th>Event</th><th>Date</th></tr></thead><tbody>{[["Applications open", "1 December 2026"], ["Last date to apply", "15 April 2027"], ["Entrance assessment", "8 May 2027"], ["Merit list published", "22 May 2027"], ["Classes commence", "1 July 2027"]].map(r => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td></tr>)}</tbody></table></div><ContactForm admissions /></div></section>
    </>
  );
}

function Departments() {
  return (
    <>
      <InnerHero page="Departments" title="Departments" text="Faculty expertise and laboratory facilities across the institute." />
      <section className="section"><div className="shell"><SectionTitle title="Our Departments" subtitle="Six academic departments with dedicated faculty and laboratories." /><div className="department-grid">{departments.map((d) => <article key={d[0]}><img src={d[5]} alt="" /><div><h3>{d[0]}</h3><p>{d[1]}</p><p><b>Faculty highlight:</b> {d[2]}</p><span>{d[3]}</span><span>{d[4]}</span></div></article>)}</div></div></section>
    </>
  );
}

function Campus() {
  const facilities = [["H", "Hostels"], ["T", "Transport"], ["C", "Cafeteria"], ["W", "Wi-Fi Campus"], ["+", "Health Centre"], ["S", "Safety"]];
  return (
    <>
      <InnerHero page="Campus Life" title="Campus Life" text="Learning extends beyond the classroom: spaces, clubs and festivals that shape the student experience." />
      <section className="section"><div className="shell campus-features">{[["assets/library-large.png", "Library", "A quiet, well-stocked centre for reading, research and group study.", "60,000+ print volumes and digital journals"], ["assets/labs-large.png", "Laboratories", "Twelve laboratories where theory is tested through experiments and projects.", "Supervised open-lab hours each evening"], ["assets/sports-large.png", "Sports", "Facilities and coaching that encourage fitness, teamwork and competition.", "400 m athletics track and football field"]].map((x, i) => <article className={i % 2 ? "reverse" : ""} key={x[1]}><img src={x[0]} alt={x[1]} /><div><h2>{x[1]}</h2><p>{x[2]}</p><ul className="checks"><li>{x[3]}</li><li>Dedicated student support and mentoring</li><li>Open throughout the academic year</li></ul></div></article>)}</div></section>
      <section className="section soft"><div className="shell"><SectionTitle title="Clubs and Student Events" subtitle="Students lead more than twenty clubs and four annual festivals." /><div className="pills">{["Coding Club", "Robotics Society", "Literary Club", "Photography", "Entrepreneurship Cell", "Music and Dance", "NSS Volunteers", "Debate Society", "Eco Club"].map(x => <span key={x}>{x}</span>)}</div><div className="image-card-grid"><article><img src="assets/fest.png" alt="Aurora Fest" /><div><h3>Aurora Fest</h3><p>Annual cultural and technical festival with competitions and performances.</p></div></article><article><img src="assets/symposium.png" alt="Tech Symposium" /><div><h3>Tech Symposium</h3><p>Student paper presentations, hackathons and workshops.</p></div></article><article><img src="assets/campus-main.png" alt="Orientation week" /><div><h3>Orientation Week</h3><p>A structured welcome programme for new students and their families.</p></div></article></div></div></section>
      <section className="section"><div className="shell"><SectionTitle title="Campus Facilities" /><div className="facility-grid">{facilities.map(f => <article key={f[1]}><b className="round-icon">{f[0]}</b><h3>{f[1]}</h3><p>Student-focused services</p></article>)}</div></div></section>
    </>
  );
}

function Placements() {
  const recruiters = ["Nexora Systems", "BlueOrbit Tech", "Calyx Analytics", "Verdanta Capital", "Helix Labs", "Zephyr Cloud", "Meridian Group", "Kovai Digital", "Astric Logistics", "Pinnacle Finance", "Lumen Software", "Orion Consulting"];
  return (
    <>
      <InnerHero page="Placements" title="Placements" text="Career outcomes, recruiters and the support that prepares students for work." />
      <section className="stat-band"><div className="shell stats">{[["93%", "Placement rate"], ["14.5 LPA", "Highest package"], ["5.2 LPA", "Average package"], ["120+", "Recruiting companies"]].map(s => <div key={s[1]}><strong>{s[0]}</strong><span>{s[1]}</span></div>)}</div></section>
      <section className="section"><div className="shell placement-grid"><div><div className="title-left"><h2>Placement Statistics</h2><p>Illustrative figures shown for design purposes.</p><i /></div><div className="chart">{[84, 88, 91, 93].map((n, i) => <div key={n}><span style={{ height: `${n}%` }}>{n}%</span><small>{2022 + i}–{String(23 + i).padStart(2, "0")}</small></div>)}</div></div><div><div className="title-left"><h2>Our Recruiters</h2><p>Fictional brands representing typical hiring partners.</p><i /></div><div className="recruiters">{recruiters.map((r, i) => <span key={r}><b>{r[0]}</b>{r}</span>)}</div></div></div></section>
      <section className="section soft"><div className="shell"><SectionTitle title="Career Development" subtitle="Preparation begins in the first year and continues through graduation." /><div className="card-grid three">{[["MT", "Mentoring and training"], ["MI", "Mock interviews"], ["CS", "Certification support"]].map(x => <InfoCard icon={x[0]} title={x[1]} key={x[1]}><p>Aptitude, communication and technical training delivered by faculty and industry coaches.</p></InfoCard>)}</div></div></section>
      <section className="section"><div className="shell split"><div><h2>Internships</h2><i className="rule" /><p>Every programme includes a supervised internship of four to twelve weeks. Students are placed with partner companies, start-ups and research groups.</p><ul className="checks"><li>Summer internships after the second year</li><li>Stipend-paid roles with selected partners</li><li>Pre-placement offers for outstanding performers</li></ul></div><blockquote>“The mock interviews and the internship gave me real confidence. I joined my first company before graduation.”<small>Aishwarya R., B.Sc. Data Science</small></blockquote></div></section>
    </>
  );
}

function Contact() {
  return (
    <>
      <InnerHero page="Contact Us" title="Contact Us" text="We would be glad to answer your questions about the institute." />
      <section className="section"><div className="shell card-grid four">{[["AD", "Address", "Aurora Institute of Science and Technology, Avinashi Road, Peelamedu, Coimbatore – 641 004."], ["PH", "Phone", "+91 422 555 0142\n+91 422 555 0143"], ["EM", "Email", "info@aurora-institute.example\nadmissions@aurora-institute.example"], ["OH", "Office Hours", "Monday to Saturday\n9:00 am – 5:00 pm"]].map(x => <InfoCard icon={x[0]} title={x[1]} key={x[1]}><p className="preserve">{x[2]}</p></InfoCard>)}</div></section>
      <section className="section soft"><div className="shell contact-grid"><div><div className="title-left"><h2>Find Us</h2><p>The campus is a short drive from Peelamedu junction.</p><i /></div><div className="map"><span className="map-road r1" /><span className="map-road r2" /><span className="map-road r3" /><b><Mark small /></b><strong>Avinashi Road, Peelamedu</strong></div></div><ContactForm /></div></section>
    </>
  );
}

export default function App() {
  const pathPage = window.location.hash.replace("#/", "") as PageId;
  const [page, setPage] = useState<PageId>(pages.some(p => p.id === pathPage) ? pathPage : "home");
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace("#/", "") as PageId;
      if (pages.some(p => p.id === id)) setPage(id);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const navigate = (id: PageId) => {
    setPage(id);
    window.location.hash = `/${id}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Header page={page} navigate={navigate} />
      <main>
        {page === "home" && <Home navigate={navigate} />}
        {page === "about" && <About />}
        {page === "academics" && <Academics />}
        {page === "admissions" && <Admissions />}
        {page === "departments" && <Departments />}
        {page === "campus" && <Campus />}
        {page === "placements" && <Placements />}
        {page === "contact" && <Contact />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
