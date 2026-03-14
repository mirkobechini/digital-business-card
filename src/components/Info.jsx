import profileThumb from "../assets/images/profilo.jpg";

export default function Info() {
    return (
        <>
            <section className="info-section">
                <img className="profile-picture" src={profileThumb} alt="profile thumbnail" />
                <div className="info-div">
                    <h2>Mirko Bechini</h2>
                    <span className="role">Full Stack Web Developer</span>
                    <div className="links">
                        <a href="mailto:mirkobechini@gmail.com"><i className="bi bi-envelope"></i> E-mail</a>
                        <a id="linkedin" href="https://www.linkedin.com/in/mirko-bechini-892202252"><i className="bi bi-linkedin"></i> Linkedin</a>
                    </div>
                </div>
            </section>
        </>
    )
}