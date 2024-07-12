import React from 'react'
import { Button, InputForm } from '../../components'

export default function Login() {
  return (
    <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm border-red-100 border-4'>
        <h3 className='font-semibold text-2xl mb-3'>Đăng Nhập</h3>  
        <div className='w-full flex flex-col gap-5'>
          <InputForm label={"Số Điện Thoại"}/>
          <InputForm label={"Mật Khẩu"}/>

        <Button
        text="Đăng Nhập"
        bgColor="bg-secondary1"
        textColor="text-white"
        fullWidth={true}

        />
        </div>
        <div className='mt-7 flex items-center justify-between'>
              <small className='text-[blue] hover:text-[#f56dd5] cursor-pointer'>Bạn quên mật khẩu</small>
              <small className='text-[blue] hover:text-[#f56dd5] cursor-pointer'> Tạo tài khoản</small>

        </div>


    </div>
  )
}
