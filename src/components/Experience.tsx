export const Experience = () => (
  <div className="ds-experience-section mx-10 pt-10">
    <div className="container">
      <h2 className="ds-heading">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <span className="ds-year">May 2024 - July 2024</span>
          <h3 className="ds-officename">Horizon Cloud</h3>
          <span className="ds-department">Software Developer Intern</span>
          <p className="mt-2">
            I interned at Horizon Cloud as a Developer Intern.
          </p>
          <ul className="max-w-[90%] list-disc pl-8">
            <li>
              Discovered new methods of 3D scanning utilizing computer vision
              for use in Placez event planning software.
            </li>
            <li>Using Ubuntu VM to train machine learning models.</li>
          </ul>
        </section>
        <section>
          <span className="ds-year">May 2023 - July 2023</span>
          <h3 className="ds-officename">Apex Service Partners</h3>
          <span className="ds-department">IT Intern</span>
          <p className="mt-2">
            I interned at Apex Service Partners in the summer of 2023.
          </p>
          <ul className="max-w-[90%] list-disc pl-8">
            <li>
              {" "}
              Migrated web domains to a new tenant for 5+ MEP companies,
              ensuring minimal downtime.
            </li>
            <li>
              Automated key migration tasks using PowerShell and batch scripts.
            </li>
            <li>
              Implemented changes on-site at multiple U.S. locations, gaining
              hands-on experience under skilled IT professionals.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);
