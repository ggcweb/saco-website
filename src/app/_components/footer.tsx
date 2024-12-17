"use client"

export function Footer() {
  return (
    <footer className="w-full bg-endings text-white flex flex-col justify-evenly bottom-0 relative">
      <h3 className="text-2xl items-center flex flex-row justify-center">Come experience the White Mountains and Saco River and explore
        all the possibilities right outside our door ...</h3>
      <div className="w-full flex flex-row justify-around items-center">
        <div className="w-1/2 text-center">
          <ul>
            <li>Phone: 603-447-3720</li>
            <br />
            <li>Address: Saco River Motor Lodge & Suites 2626 E Main St, Center Conway, NH 03813</li>
            <br />
            <li>Email: sacorivermotorlodge@yahoo.com</li>
            <br />
            <a href="https://www.facebook.com/SacoRiverLodgeAndSuites">
              <li className="fa fa-facebook"></li>
            </a>
            <a
              href="https://www.tripadvisor.co.uk/Hotel_Review-g46054-d1210880-Reviews-Saco_River_Lodge_Suites-Conway_New_Hampshire.html"></a>
              <li className="fa fa-tripadvisor"></li>
          </ul>
        </div>
        <div className="w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.1322994891875!2d-71.02628952380483!3d43.99799087108794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb30804b53313e5%3A0x16fc93b01db91ab!2sSaco%20River%20Motor%20Lodge!5e0!3m2!1sen!2sus!4v1721757700878!5m2!1sen!2sus"
            width="100%" height="300" style={{border: "none"}} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </footer>
  );
}