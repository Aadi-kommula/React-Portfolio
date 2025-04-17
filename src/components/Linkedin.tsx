import pic from '../images/linkedin.webp'
import '../components/Linkedin.css'
export default function About() {
  return (
    <section className="py-20 px-4" id="about">
      <h2 className="section-title text-cyan-500 hover:text-cyan-600 ">Linkedin</h2>

      <div className="flex flex-col justify-center md:flex-row gap-8 items-center">

        <a href="https://www.linkedin.com/in/lakshman-adi-venkat-eswar-kommula-57a29224a/" 
        target="_blank">
          <img
            id="linkedin"
            src={pic}
            alt="Profile"
            className=" max-w-6xl  hover:shadow-slate-400  rounded-2xl"
          />
        </a>
      </div>

    </section>
  );
}