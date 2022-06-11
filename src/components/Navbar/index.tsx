import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import s from "./styles.module.css";
import {
  closeIcon,
  facebookIcon,
  logoIcon,
  menuIcon,
  dribbbleIcon,
  instagramIcon,
  linkedinIcon,
  twitterIcon,
  youtubeIcon,
} from "@assets/index";

const Navbar = () => {
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <header className={s.container}>
      <nav className={s.nav}>
        <Link href={"/"}>
          <a className={s.nav__link}>Arx</a>
        </Link>

        <Image src={logoIcon} width={32} height={32} alt={"Logo do Arx"} />

        <Link href={""}>
          <a onClick={() => setOffCanvas(!offCanvas)}>
            <Image src={menuIcon} width={32} height={32} alt={"Menu"} />
          </a>
        </Link>
      </nav>

      <aside
        className={`${s.offcanvas__menu} ${
          offCanvas ? s.offcanvas__menu_active : ""
        }`}
      >
        <div className={s.offcanvas__menu_closeIcon}>
          <Link href={""}>
            <a onClick={() => setOffCanvas(!offCanvas)}>
              <Image
                src={closeIcon}
                width={32}
                height={32}
                alt={"close menu"}
              />
            </a>
          </Link>
        </div>

        <div className={s.offcanvas__wrapper}>
          <div className={s.offcanvas_social}>
            <h4 className={s.menu__title}>Redes Sociais</h4>
            <Link href={""}>
              <a>
                <Image
                  src={facebookIcon}
                  width={24}
                  height={24}
                  alt={"linkdedin"}
                />
                <span>Facebook</span>
              </a>
            </Link>

            <Link href={""}>
              <a>
                <Image
                  src={instagramIcon}
                  width={24}
                  height={24}
                  alt={"linkdedin"}
                />
                <span>Instagram</span>
              </a>
            </Link>

            <Link href={""}>
              <a>
                <Image
                  src={linkedinIcon}
                  width={24}
                  height={24}
                  alt={"linkdedin"}
                />
                <span>Linkedin</span>
              </a>
            </Link>
          </div>

          <div className={s.offcanvas__menu_list}>
            <h4 className={s.menu__title}>Menu</h4>
            <Link href={"#home"}>
              <a>Home</a>
            </Link>

            <Link href={"#home"}>
              <a>Home</a>
            </Link>

            <Link href={"#home"}>
              <a>Home</a>
            </Link>

            <Link href={"#home"}>
              <a>Home</a>
            </Link>

            <Link href={"#home"}>
              <a>Home</a>
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
