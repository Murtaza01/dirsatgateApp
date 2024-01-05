import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <footer className="min-h-36  text-slate-100 bg-slideBg bgImage">
      <div
        className="center flex-col gap-5  relative isolate py-10
        after:bgLowOpacity text-gray-100 font-bold "
      >
        <h3 className="text-3xl text-center  ">
          وزارة التعليم العالي والبحث العلمي
        </h3>
        <p className="text-center text-lg">
          دائرة الدراسات والتخطيط والمتابعة
          <br />
          العنوان : بغداد الرصافة المجمع التربوي ساحة الطيران قرب القصر الابيض
        </p>
        <div className="flex gap-5">
          <FacebookIcon
            fontSize="large"
            className="hover:text-blue-800 hover:cursor-pointer"
          />
          <InstagramIcon
            fontSize="large"
            className="hover:text-red-500 hover:cursor-pointer"
          />
          <TelegramIcon
            fontSize="large"
            className="hover:text-blue-400 hover:cursor-pointer"
          />
        </div>
      </div>

      <div className="bg-navColor h-16 center text-center">
        <p>
          حقوق العمل ©محفوظة لدى وزارة التعليم العالي والبحث العلمي - دائرة
          الدراسات والتخطيط والمتابعة {new Date().getFullYear()}{" "}
        </p>
      </div>
    </footer>
  );
}
