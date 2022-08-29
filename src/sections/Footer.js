import React from "react";
import Container from "../components/Container";
import logo from "../assets/images/logo/logo.png";
import Text from "../components/Text";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ItemWrapper from "../components/ItemWrapper";

const Footer = () => {
  return (
    <footer className="h-60 bg-white py-10">
      <Container
        content={
          <div className="grid grid-cols-6 gap-5">
            <div className="col-span-2">
              <div className="mb-6">
                <img src={logo} alt="Fazztrack" />
              </div>
              <Text text="Fazztrack adalah program pelatihan yang berkomitmen untuk mencetak developer yang profesional dan memberikan kesempatan untuk berkarir di perusahaan ternama." />
            </div>

            <div className="space-y-2">
              <div className="mb-4">
                <Text itemTitle text="Kelas" />
              </div>
              <Text text="Fullstack Mobile" />
              <Text text="Fullstack Website" />
              <Text text="Backend Javaspring" />
              <Text text="Backend Golang" />
              <Text text="Lihat semua" />
            </div>

            <div className="space-y-2">
              <div className="mb-4">
                <Text itemTitle text="Dukungan" />
              </div>
              <Text text="Cicil Setelah Kerja (ISA)" />
              <Text text="Career Ready" />
              <Text text="FAW" />
              <Text text="Hire Our Gradiates" />
            </div>

            <div className="space-y-2">
              <div className="mb-4">
                <Text itemTitle text="Tentang" />
              </div>
              <Text text="Carita Alumni" />
              <Text text="Sekilas Fasstrack" />
            </div>

            <div className="space-y-2">
              <div className="mb-4">
                <Text itemTitle text="Sodial Media" />
              </div>
              <Text text="Instagram" />
              <Text text="Facebook" />
              <Text text="Youtube" />
            </div>

            <div className="col-span-6 py-5 pb-10 border-t border-gray-300">
              <ItemWrapper
                justify="between"
                components={[
                  <Text
                    component={
                      <p>
                        © <span className="font-bold">2022 Fazztrack.</span> All
                        Rights Reserved
                      </p>
                    }
                  />,

                  <ItemWrapper
                    spaceX="6"
                    components={[
                      <ItemWrapper
                        spaceX={"3"}
                        components={[
                          <BsTelephoneFill color="rgb(31 41 55)" />,
                          <Text text="+6281132010888" />,
                        ]}
                      />,
                      <ItemWrapper
                        spaceX={"3"}
                        components={[
                          <MdEmail color="rgb(31 41 55)" />,
                          <Text text="hello@fazztrack.com" />,
                        ]}
                      />,
                    ]}
                  />,
                ]}
              />
            </div>
          </div>
        }
      />
    </footer>
  );
};

export default Footer;
