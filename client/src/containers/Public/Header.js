import React, { useCallback } from "react";
import logo from "../../assets/motel-1-logo-svg-vector.svg";
import { Button } from "../../components";
import icons from "../../utils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/constant";

const {AiOutlinePlusCircle} = icons

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const navigate = useNavigate();
  const goLogin = useCallback(() =>{
    navigate(path.LOGIN);

  })
  
  return (
    <div className="w-1100 flex items-center justify-between bg-red-300">
      <img
        src={logo}
        alt="logo"
        className="w-[240px] h-[70px] object-contain bg-[#3961fb]"
      />
      <div className="flex items-center gap-1">
        <span>Phòng Trọ 123 Xin Chào</span>
        <Button
          text={"Đăng Nhập"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={goLogin}
        />
        <Button text={"Đăng Ký"} textColor="text-primary" bgColor="bg-white" />
        <Button
          text={"Đăng Tin Mới"}
          textColor="text-white"
          bgColor="bg-secondary2"
          Icons={AiOutlinePlusCircle}
        />
      </div>
    </div>
  );
}
