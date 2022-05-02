import React from 'react'

const Footer = () => {
  return (
      <>
    <footer class="bg-black text-white">
    <div
      class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
    >
      <div
        class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
      >
        <div class="mx-auto my-6 text-center text-white md:hidden">
          Copyright &copy; 2022, All Rights Reserved
        </div>
        <div>
          Jaime Cardoso
        </div>
        <div class="flex justify-center space-x-4">

        </div>
      </div>
      <div class="flex justify-around space-x-32">
        <div class="flex flex-col space-y-3 text-white">

        </div>
        <div class="flex flex-col space-y-3 text-white">

        </div>
      </div>

      <div class="flex flex-col justify-between">
       
        <div class="hidden text-white md:block">
          Copyright &copy; 2022, All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer