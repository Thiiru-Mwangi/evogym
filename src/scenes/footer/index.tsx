import Logo from "@/assets/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="footer-logo" />
          <p className="my-5">
            Evogym is a <span className="text-primary-500">5 star</span> rated
            gym that offers top of the range equipment, instructors as well as a
            wide variety of classes guaranteed to help you reach your fitness
            goals
          </p>
          <p>
            &copy; Evogym All Rights Reserved{" "}
            <span className="font-bold">{currentYear}</span>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Terms and Conditions</p>
          <p className="my-5">Privacy Policy</p>
          <p className="my-5">Careers</p>
          <p className="my-5">Policy Documents</p>
        </div>
        <div>
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">info@evogym.com</p>
          <p className="my-5">(333)-333-333</p>
          <p className="my-5">evogym.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
