import React from "react";
import Container from "../components/Container";
import logo from "../assets/images/logo/logo.png";
import { ItemTitle, MainText } from "../components/Text";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ItemWrapper from "../components/ItemWrapper";

const Footer = () => {
  return (
    <footer className="h-60 bg-white py-10 box-border">
      <Container
        content={
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5">
            <div className="md:col-span-2">
              <div className="mb-6">
                <img src={logo} alt="Fazztrack" />
              </div>
              <MainText text="Fazztrack adalah program pelatihan yang berkomitmen untuk mencetak developer yang profesional dan memberikan kesempatan untuk berkarir di perusahaan ternama." />
            </div>

            <div className="space-y-2">
              <div className="mb-4">
                <ItemTitle text="Kelas" />
              </div>
              <MainText text="Fullstack Mobile" />
              <MainText text="Fullstack Website" />
              <MainText text="Backend Javaspring" />
              <MainText text="Backend Golang" />
              <MainText text="Lihat semua" />
            </div>

            <div className="space-y-2">
              <div className="mb-4">
                <ItemTitle text="Dukungan" />
              </div>
              <MainText text="Cicil Setelah Kerja (ISA)" />
              <MainText text="Career Ready" />
              <MainText text="FAW" />
              <MainText text="Hire Our Gradiates" />
            </div>

            <div className="space-y-2">
              <div className="mb-4">
                <ItemTitle text="Tentang" />
              </div>
              <MainText text="Carita Alumni" />
              <MainText text="Sekilas Fasstrack" />
            </div>

            <div className="space-y-2">
              <div className="mb-4">
                <ItemTitle text="Sodial Media" />
              </div>
              <MainText text="Instagram" />
              <MainText text="Facebook" />
              <MainText text="Youtube" />
            </div>

            {/* <div className="md:col-span-2 lg:col-span-6 py-5 pb-10 border-t border-gray-300">
              <div className="flex flex-col">
                <MainText
                  text={
                    <p>
                      © <span className="font-bold">2022 Fazztrack.</span> All
                      Rights Reserved
                    </p>
                  }
                />
                <ItemWrapper
                  spaceX="wide"
                  components={[
                    <ItemWrapper
                      spaceX={"narrow"}
                      components={[
                        <BsTelephoneFill color="rgb(31 41 55)" />,
                        <MainText text="+6281132010888" />,
                      ]}
                    />,
                    <ItemWrapper
                      spaceX={"narrow"}
                      components={[
                        <MdEmail color="rgb(31 41 55)" />,
                        <MainText text="hello@fazztrack.com" />,
                      ]}
                    />,
                  ]}
                />
                ,
              </div>
            </div> */}
          </div>
        }
      />
    </footer>
  );
};

export default Footer;
