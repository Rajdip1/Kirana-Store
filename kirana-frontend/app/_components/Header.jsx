"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GlobalApi from "../GlobalApi";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartItemList from "./Cart/CartItemList";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  const isBrowser = typeof window !== "undefined";
  const isLogin =
    isBrowser && window.sessionStorage.getItem("jwt") ? true : false;

  const user = isBrowser
    ? JSON.stringify(window.sessionStorage.getItem("user"))
    : null;
  const jwt = isBrowser
    ? JSON.stringify(window.sessionStorage.getItem("jwt"))
    : null;

  const router = useRouter();

  useEffect(() => {
    // Check sessionStorage for the cart total when the component loads
    const totalCartFromStorage = sessionStorage.getItem("totalCart");
    setTotalCart(totalCartFromStorage || 0);

    // Listen for cart updates
    const handleCartUpdated = (event) => {
      setTotalCart(event.detail); // Update totalCart with the new value
    };

    window.addEventListener("cartUpdated", handleCartUpdated);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);

  const getCartData = async () => {
    if (!user) return; // Ensure user is logged in

    // Fetch the cart items from Strapi based on the user's ID and JWT
    const cartItemList = await GlobalApi.getCartItem(user?.id, jwt);
    console.log("Cart item list: ", cartItemList);

    // Update the cart count in the UI
    setTotalCart(cartItemList?.length || 0); // Ensure it is zero if the cart is empty
    setCartItems(cartItemList);
  };

  const onSignOut = () => {
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("user");

    window.location.reload();
    router.push("/sign-in");
  };

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="container mx-auto flex items-center justify-between py-10 padding-left-42 padding-right-89"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src="/assests/mainlogo.png" height={160} width={150} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-md font-semibold leading-6 text-gray-900">
            Shop
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900">
            About
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900">
            Contact us
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <a className="bg-gray-200 p-2 rounded-full">
            <MagnifyingGlassIcon
              width={28}
              className="cursor-pointer hover:scale-110 hover:transition-transform"
            />
          </a>
          <Sheet>
            <SheetTrigger>
              <a className="bg-gray-200 p-2 rounded-full">
                <ShoppingBag
                  width={28}
                  className="cursor-pointer hover:scale-110 hover:transition-transform"
                />
              </a>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>My Cart</SheetTitle>
                <SheetDescription>
                  <CartItemList cartItems={cartItems}/>
                </SheetDescription>
                <SheetClose>
                  <div className="absolute w-[85%] bottom-6 flex flex-col gap-5">
                    <h2 className="font-semibold text-lg flex justify-around">
                      SubTotal: <span>${subTotal}</span>
                    </h2>
                    <Button className="bg-green-600 mx-18" onClick={()=>router.push(jwt?"/checkout":"/sign-in")}>
                      Checkout</Button>
                  </div>
                </SheetClose>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Badge className="text-sm w-8 h-8 mt-1">{totalCart}</Badge>
          <div className="bg-green-400 p-2 rounded-lg">
            {!isLogin ? (
              <Link href={"/sign-in"}>
                <Button className="container">Login</Button>
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <UserCircleIcon
                    width={28}
                    className="cursor-pointer hover:scale-110 hover:transition-transform"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="bg-grey rounded-md p-2 shadow-lg cursor-pointer "
                  sideOffset={10}
                >
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>My Orders</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onSignOut()}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/assests/mainlogo.png" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6 flex gap-6">
                <a className="bg-gray-200 p-2 rounded-full">
                  <MagnifyingGlassIcon
                    width={28}
                    className="cursor-pointer hover:scale-110 hover:transition-transform"
                  />
                </a>
                <a className="bg-gray-200 p-2 rounded-full">
                  <ShoppingCartIcon
                    width={28}
                    className="cursor-pointer hover:scale-110 hover:transition-transform"
                  />
                </a>
                <Badge className="text-md items-center h-8 w-8 mt-2 bg-green-600">
                  0
                </Badge>
                <div className="bg-green-400 p-2 rounded-lg">
                  {!isLogin ? (
                    <Link href={"/sign-in"}>
                      <Button className="container">Login</Button>
                    </Link>
                  ) : (
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <UserCircleIcon
                          width={28}
                          className="cursor-pointer hover:scale-110 hover:transition-transform"
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="bg-grey rounded-md p-2 shadow-lg cursor-pointer "
                        sideOffset={10}
                      >
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>My Orders</DropdownMenuItem>
                        <DropdownMenuItem
                          className="bg-green-200 rounded-lg items-center shadow-lg"
                          onClick={() => onSignOut()}
                        >
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
