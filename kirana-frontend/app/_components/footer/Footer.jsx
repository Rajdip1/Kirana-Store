import { Image } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="container ml-20">
    <footer class="bg-white">
        <div class="container px-4 mx-auto">
    <div class="pt-24 pb-11 mx-auto max-w-4xl"><a class="block md:mx-auto mb-5 max-w-max" href="#">
        <img src="/assests/mainlogo.png" width={200} height={100}/>
      </a>
      <div class="flex flex-wrap justify-center -mx-3 lg:-mx-6">
        <div class="w-full md:w-auto p-3 md:px-6"><a href="/terms"
            class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">Terms</a>
        </div>
        <div class="w-full md:w-auto p-3 md:px-6"><a href="/privacy"
            class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">Privacy</a>
        </div>
        <div class="w-full md:w-auto p-3 md:px-6"><a
            class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium" href="">Contact Us</a>
        </div>
        <div class="w-full md:w-auto p-3 md:px-6"><a href="/careers"
            class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">Careers</a>
        </div>
        <div class="w-full md:w-auto p-3 md:px-6"><a href="/pricing"
            class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">Pricing</a>
        </div>
      </div>
    </div>
  </div>
  <div class="border-b border-gray-100"></div>
  <div class="container px-4 mx-auto">
    <p class="py-10 md:pb-20 text-md text-gray-400 font-medium text-center">
      © 2024 Kirana Store
      All rights reserved.
    </p>
  </div>
</footer>
    </div>
    </>
  )
}

export default Footer