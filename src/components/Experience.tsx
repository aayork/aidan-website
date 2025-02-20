export const Experience = () => (
  <div className="m-14 pt-10">
    <h1 className="mb-2 font-bold text-xl underline decoration-[#C2DBA2]">
      Experience
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <section>
        <span className="text-xs text-gray-500">May 2024 - July 2024</span>
        <h3 className="font-bold">Horizon Cloud</h3>
        <span className="text-[#004d05] italic">Software Developer Intern</span>
        <p className="mt-2">
          I interned at Horizon Cloud as a Developer Intern.
        </p>
        <ul className="max-w-[90%] list-disc pl-8">
          <li>
            Discovered new methods of 3D scanning utilizing computer vision for
            use in Placez event planning software.
          </li>
          <li>Leveraged THREE.js to render 3D scans in the browser.</li>
          <li>Used an Ubuntu VM to train machine learning models.</li>
        </ul>
      </section>
      <section>
        <span className="text-xs text-gray-500">May 2023 - August 2023</span>
        <h3 className="font-bold">Apex Service Partners</h3>
        <span className="text-[#004d05] italic">IT Intern</span>
        <p className="mt-2">
          I interned at Apex Service Partners in the summer of 2023.
        </p>
        <ul className="max-w-[90%] list-disc pl-8">
          <li>
            {" "}
            Migrated web domains to a new tenant for 5+ MEP companies, ensuring
            minimal downtime.
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
);
