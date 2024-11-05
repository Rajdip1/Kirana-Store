import { ReceiptRefundIcon } from '@heroicons/react/24/outline'
import { Headphones, Receipt, Rocket, ShieldCheckIcon } from 'lucide-react'
import React from 'react'

const PaymentMethods = () => {
  return (
    <>
    <div className="container pl-20 px-0 pb-20 mt-8">
        <div className="grid grid-cols-4 gap-10">

            <div className="grid grid-cols-3 gap-3 bg-green-100 py-8 rounded-lg">
                <div class="flex justify-center">
                    <Rocket size={50} className="bg-green-600 text-white p-2 rounded-lg"/>
                </div>
                <div className="col-span-2 ...">
                    <h3 className="font-semibold">Free Shipping</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-green-100 py-8 rounded-lg">
                <div class="flex justify-center">
                    <ReceiptRefundIcon width={50} className="bg-green-600 text-white p-2 rounded-lg"/>
                </div>
                <div className="col-span-2 ...">
                    <h3 className="font-semibold">Easy To Return</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-green-100 py-8 rounded-lg">
                <div class="flex justify-center">
                    <ShieldCheckIcon size={50} className="bg-green-600 text-white p-2 rounded-lg"/>
                </div>
                <div className="col-span-2 ...">
                    <h3 className="font-semibold">Secure Payment</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-green-100 py-8 rounded-lg">
                <div class="flex justify-center">
                    <Headphones size={50} className="bg-green-600 text-white p-2 rounded-lg"/>
                </div>
                <div className="col-span-2 ...">
                    <h3 className="font-semibold">24 Hours Support</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet</p>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default PaymentMethods