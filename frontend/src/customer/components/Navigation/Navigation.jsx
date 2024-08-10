// import { Fragment, useState } from 'react';
// import Image1 from '../../assets/images/girl.jpg';
// import Image2 from '../../assets/images/girl1.jpg';
// import Image3 from '../../assets/images/boy1.jpg';
// import Image4 from '../../assets/images/boy2.jpg';
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
//   Tab,
//   TabGroup,
//   TabList,
//   TabPanel,
//   TabPanels,
// } from '@headlessui/react';
// import {
//   Bars3Icon,
//   MagnifyingGlassIcon,
//   ShoppingBagIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline';

// const navigation = {
//   categories: [
//     {
//       id: 'women',
//       name: 'Women',
//       featured: [
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc: Image1,
//           imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//         },
//         {
//           name: 'Basic Tees',
//           href: '#',
//           imageSrc: Image2,
//           imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//         },
//       ],
//       sections: [
//         {
//           id: 'clothing',
//           name: 'Clothing',
//           items: [
//             { name: 'Tops', href: '#' },
//             { name: 'Dresses', href: '#' },
//             { name: 'Pants', href: '#' },
//             { name: 'Denim', href: '#' },
//             { name: 'Sweaters', href: '#' },
//             { name: 'T-Shirts', href: '#' },
//             { name: 'Jackets', href: '#' },
//             { name: 'Activewear', href: '#' },
//             { name: 'Browse All', href: '#' },
//           ],
//         },
//         {
//           id: 'accessories',
//           name: 'Accessories',
//           items: [
//             { name: 'Watches', href: '#' },
//             { name: 'Wallets', href: '#' },
//             { name: 'Bags', href: '#' },
//             { name: 'Sunglasses', href: '#' },
//             { name: 'Hats', href: '#' },
//             { name: 'Belts', href: '#' },
//           ],
//         },
//         {
//           id: 'brands',
//           name: 'Brands',
//           items: [
//             { name: 'Full Nelson', href: '#' },
//             { name: 'My Way', href: '#' },
//             { name: 'Re-Arranged', href: '#' },
//             { name: 'Counterfeit', href: '#' },
//             { name: 'Significant Other', href: '#' },
//           ],
//         },
//       ],
//     },
//     {
//       id: 'men',
//       name: 'Men',
//       featured: [
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc: Image3,
//           imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
//         },
//         {
//           name: 'Artwork Tees',
//           href: '#',
//           imageSrc: Image4,
//           imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
//         },
//       ],
//       sections: [
//         {
//           id: 'clothing',
//           name: 'Clothing',
//           items: [
//             { name: 'Tops', href: '#' },
//             { name: 'Pants', href: '#' },
//             { name: 'Sweaters', href: '#' },
//             { name: 'T-Shirts', href: '#' },
//             { name: 'Jackets', href: '#' },
//             { name: 'Activewear', href: '#' },
//             { name: 'Browse All', href: '#' },
//           ],
//         },
//         {
//           id: 'accessories',
//           name: 'Accessories',
//           items: [
//             { name: 'Watches', href: '#' },
//             { name: 'Wallets', href: '#' },
//             { name: 'Bags', href: '#' },
//             { name: 'Sunglasses', href: '#' },
//             { name: 'Hats', href: '#' },
//             { name: 'Belts', href: '#' },
//           ],
//         },
//         {
//           id: 'brands',
//           name: 'Brands',
//           items: [
//             { name: 'Re-Arranged', href: '#' },
//             { name: 'Counterfeit', href: '#' },
//             { name: 'Full Nelson', href: '#' },
//             { name: 'My Way', href: '#' },
//           ],
//         },
//       ],
//     },
//   ],
//   pages: [
//     { name: 'Company', href: '#' },
//     { name: 'Stores', href: '#' },
//   ],
// };

// export default function Navigation() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-white">
//       {/* Mobile menu */}
//       <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
//         <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />

//         <div className="fixed inset-0 z-40 flex">
//           <DialogPanel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full">
//             <div className="flex px-4 pb-2 pt-5">
//               <button
//                 type="button"
//                 onClick={() => setOpen(false)}
//                 className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//               >
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//               </button>
//             </div>

//             {/* Links */}
//             <TabGroup className="mt-2">
//               <div className="border-b border-gray-200">
//                 <TabList className="-mb-px flex space-x-8 px-4">
//                   {navigation.categories.map((category) => (
//                     <Tab
//                       key={category.name}
//                       className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
//                     >
//                       {category.name}
//                     </Tab>
//                   ))}
//                 </TabList>
//               </div>
//               <TabPanels as={Fragment}>
//                 {navigation.categories.map((category) => (
//                   <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
//                     <div className="grid grid-cols-2 gap-x-4">
//                       {category.featured.map((item) => (
//                         <div key={item.name} className="group relative text-sm">
//                           <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                             <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
//                           </div>
//                           <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                             <span aria-hidden="true" className="absolute inset-0 z-10" />
//                             {item.name}
//                           </a>
//                           <p aria-hidden="true" className="mt-1">Shop now</p>
//                         </div>
//                       ))}
//                     </div>
//                     {category.sections.map((section) => (
//                       <div key={section.name}>
//                         <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
//                           {section.name}
//                         </p>
//                         <ul
//                           role="list"
//                           aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                           className="mt-6 flex flex-col space-y-6"
//                         >
//                           {section.items.map((item) => (
//                             <li key={item.name} className="flow-root">
//                               <a href={item.href} className="-m-2 block p-2 text-gray-500">
//                                 {item.name}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </TabPanel>
//                 ))}
//               </TabPanels>
//             </TabGroup>

//             <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//               {navigation.pages.map((page) => (
//                 <div key={page.name} className="flow-root">
//                   <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
//                     {page.name}
//                   </a>
//                 </div>
//               ))}
//             </div>

//             <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//               <div className="flow-root">
//                 <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
//                   Sign in
//                 </a>
//               </div>
//               <div className="flow-root">
//                 <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
//                   Create account
//                 </a>
//               </div>
//             </div>

//             <div className="border-t border-gray-200 px-4 py-6">
//               <a href="#" className="-m-2 flex items-center p-2">
//                 <img
//                   alt=""
//                   src="https://tailwindui.com/img/flags/flag-canada.svg"
//                   className="block h-auto w-5 flex-shrink-0"
//                 />
//                 <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
//                 <span className="sr-only">, change currency</span>
//               </a>
//             </div>
//           </DialogPanel>
//         </div>
//       </Dialog>

//       <header className="relative bg-white">
//         <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
//           Get free delivery on orders over $100
//         </p>

//         <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="border-b border-gray-200">
//             <div className="flex h-16 items-center">
//               <button
//                 type="button"
//                 className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
//                 onClick={() => setOpen(true)}
//               >
//                 <span className="sr-only">Open menu</span>
//                 <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//               </button>

//               <div className="ml-4 flex lg:ml-0">
//                 <a href="#">
//                   <span className="sr-only">Your Company</span>
//                   <img
//                     alt=""
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                     className="h-8 w-auto"
//                   />
//                 </a>
//               </div>

//               <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
//                 <div className="flex h-full space-x-8">
//                   {navigation.categories.map((category) => (
//                     <Popover key={category.name} className="flex">
//                       {({ open }) => (
//                         <>
//                           <div className="relative flex">
//                             <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out data-[state=open]:border-indigo-600 data-[state=open]:text-indigo-600">
//                               {category.name}
//                             </PopoverButton>
//                           </div>

//                           <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
//                             <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
//                             <div className="relative bg-white">
//                               <div className="mx-auto max-w-7xl px-8">
//                                 <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
//                                   <div className="col-start-2 grid grid-cols-2 gap-x-8">
//                                     {category.featured.map((item) => (
//                                       <div key={item.name} className="group relative text-base sm:text-sm">
//                                         <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                           <img
//                                             alt={item.imageAlt}
//                                             src={item.imageSrc}
//                                             className="object-cover object-center"
//                                           />
//                                         </div>
//                                         <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                                           <span aria-hidden="true" className="absolute inset-0 z-10" />
//                                           {item.name}
//                                         </a>
//                                         <p aria-hidden="true" className="mt-1">Shop now</p>
//                                       </div>
//                                     ))}
//                                   </div>
//                                   <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
//                                     {category.sections.map((section) => (
//                                       <div key={section.name}>
//                                         <p
//                                           id={`${section.name}-heading`}
//                                           className="font-medium text-gray-900"
//                                         >
//                                           {section.name}
//                                         </p>
//                                         <ul
//                                           role="list"
//                                           aria-labelledby={`${section.name}-heading`}
//                                           className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                                         >
//                                           {section.items.map((item) => (
//                                             <li key={item.name} className="flex">
//                                               <a href={item.href} className="hover:text-gray-800">
//                                                 {item.name}
//                                               </a>
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       </div>
//                                     ))}
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </PopoverPanel>
//                         </>
//                       )}
//                     </Popover>
//                   ))}
//                 </div>
//               </PopoverGroup>

//               <div className="ml-auto flex items-center">
//                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                   <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
//                     Sign in
//                   </a>
//                   <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
//                   <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
//                     Create account
//                   </a>
//                 </div>

//                 <div className="hidden lg:ml-8 lg:flex">
//                   <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
//                     <img
//                       alt=""
//                       src="https://tailwindui.com/img/flags/flag-india.svg"
//                       className="block h-auto w-5 flex-shrink-0"
//                     />
//                     <span className="ml-3 block text-sm font-medium">CAD</span>
//                     <span className="sr-only">, change currency</span>
//                   </a>
//                 </div>

//                 <div className="flex lg:ml-6">
//                   <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
//                     <span className="sr-only">Search</span>
//                     <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
//                   </a>
//                 </div>

//                 <div className="ml-4 flow-root lg:ml-6">
//                   <a href="#" className="group -m-2 flex items-center p-2">
//                     <ShoppingBagIcon
//                       className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                       aria-hidden="true"
//                     />
//                     <span className="ml-2 text-sm font-medium text-gray-700">0</span>
//                     <span className="sr-only">items in cart, view bag</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

// import { Fragment, useState } from 'react';
// import Image1 from '../../assets/images/girl.jpg'
// import Image2 from '../../assets/images/girl1.jpg';
// import Image3 from '../../assets/images/boy1.jpg';
// import Image4 from '../../assets/images/boy2.jpg';

// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
//   Tab,
//   TabGroup,
//   TabList,
//   TabPanel,
//   TabPanels,
// } from '@headlessui/react';
// import {
//   Bars3Icon,
//   MagnifyingGlassIcon,
//   ShoppingBagIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline';

// const navigation = {
//   categories: [
//     {
//       id: 'women',
//       name: 'Women',
//       featured: [
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc: Image1,
//           imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//         },
//         {
//           name: 'Basic Tees',
//           href: '#',
//           imageSrc: Image2,
//           imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//         },
//       ],
//       sections: [
//         {
//           id: 'clothing',
//           name: 'Clothing',
//           items: [
//             { name: 'Tops', href: '#' },
//             { name: 'Dresses', href: '#' },
//             { name: 'Pants', href: '#' },
//             { name: 'Denim', href: '#' },
//             { name: 'Sweaters', href: '#' },
//             { name: 'T-Shirts', href: '#' },
//             { name: 'Jackets', href: '#' },
//             { name: 'Activewear', href: '#' },
//             { name: 'Browse All', href: '#' },
//           ],
//         },
//         {
//           id: 'accessories',
//           name: 'Accessories',
//           items: [
//             { name: 'Watches', href: '#' },
//             { name: 'Wallets', href: '#' },
//             { name: 'Bags', href: '#' },
//             { name: 'Sunglasses', href: '#' },
//             { name: 'Hats', href: '#' },
//             { name: 'Belts', href: '#' },
//           ],
//         },
//         {
//           id: 'brands',
//           name: 'Brands',
//           items: [
//             { name: 'Full Nelson', href: '#' },
//             { name: 'My Way', href: '#' },
//             { name: 'Re-Arranged', href: '#' },
//             { name: 'Counterfeit', href: '#' },
//             { name: 'Significant Other', href: '#' },
//           ],
//         },
//       ],
//     },
//     {
//       id: 'men',
//       name: 'Men',
//       featured: [
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc: Image3,
//           imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
//         },
//         {
//           name: 'Artwork Tees',
//           href: '#',
//           imageSrc: Image4,
//           imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
//         },
//       ],
//       sections: [
//         {
//           id: 'clothing',
//           name: 'Clothing',
//           items: [
//             { name: 'Tops', href: '#' },
//             { name: 'Pants', href: '#' },
//             { name: 'Sweaters', href: '#' },
//             { name: 'T-Shirts', href: '#' },
//             { name: 'Jackets', href: '#' },
//             { name: 'Activewear', href: '#' },
//             { name: 'Browse All', href: '#' },
//           ],
//         },
//         {
//           id: 'accessories',
//           name: 'Accessories',
//           items: [
//             { name: 'Watches', href: '#' },
//             { name: 'Wallets', href: '#' },
//             { name: 'Bags', href: '#' },
//             { name: 'Sunglasses', href: '#' },
//             { name: 'Hats', href: '#' },
//             { name: 'Belts', href: '#' },
//           ],
//         },
//         {
//           id: 'brands',
//           name: 'Brands',
//           items: [
//             { name: 'Re-Arranged', href: '#' },
//             { name: 'Counterfeit', href: '#' },
//             { name: 'Full Nelson', href: '#' },
//             { name: 'My Way', href: '#' },
//           ],
//         },
//       ],
//     },
//   ],
//   pages: [
//     { name: 'Company', href: '#' },
//     { name: 'Stores', href: '#' },
//   ],
// };

// export default function Navigation() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-gray-500 ">
//       {/* Mobile menu */}
//       <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
//         <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />

//         <div className="fixed inset-0 z-40 flex">
//           <DialogPanel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full">
//             <div className="flex px-4 pb-2 pt-5">
//               <button
//                 type="button"
//                 onClick={() => setOpen(false)}
//                 className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//               >
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//               </button>
//             </div>

//             {/* Links */}
//             <TabGroup className="mt-2">
//               <div className="border-b border-gray-200">
//                 <TabList className="-mb-px flex space-x-8 px-4">
//                   {navigation.categories.map((category) => (
//                     <Tab
//                       key={category.name}
//                       className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
//                     >
//                       {category.name}
//                     </Tab>
//                   ))}
//                 </TabList>
//               </div>
//               <TabPanels as={Fragment}>
//                 {navigation.categories.map((category) => (
//                   <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
//                     <div className="grid grid-cols-2 gap-x-4">
//                       {category.featured.map((item) => (
//                         <div key={item.name} className="group relative text-sm">
//                           <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                             <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
//                           </div>
//                           <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                             <span aria-hidden="true" className="absolute inset-0 z-10" />
//                             {item.name}
//                           </a>
//                           <p aria-hidden="true" className="mt-1">Shop now</p>
//                         </div>
//                       ))}
//                     </div>
//                     {category.sections.map((section) => (
//                       <div key={section.name}>
//                         <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
//                           {section.name}
//                         </p>
//                         <ul
//                           role="list"
//                           aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                           className="mt-6 flex flex-col space-y-6"
//                         >
//                           {section.items.map((item) => (
//                             <li key={item.name} className="flow-root">1
//                               <a href={item.href} className="-m-2 block p-2 text-gray-500">
//                                 {item.name}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </TabPanel>
//                 ))}
//               </TabPanels>
//             </TabGroup>

//             <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//               {navigation.pages.map((page) => (
//                 <div key={page.name} className="flow-root">
//                   <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
//                     {page.name}
//                   </a>
//                 </div>
//               ))}
//             </div>

//             <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//               <div className="flow-root">
//                 <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
//                   Sign in
//                 </a>
//               </div>
//               <div className="flow-root">
//                 <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
//                   Create account
//                 </a>
//               </div>
//             </div>

//             <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
//               <div className="flex items-center space-x-6">
//                 <div className="flow-root">
//                   <a href="#" className="-m-2 block p-2 text-gray-400 hover:text-gray-500">
//                     <span className="sr-only">View cart</span>
//                     <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
//                   </a>
//                 </div>
//                 <div className="flow-root">
//                   <a href="#" className="-m-2 block p-2 text-gray-400 hover:text-gray-500">
//                     <span className="sr-only">Search</span>
//                     <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </DialogPanel>
//         </div>
//       </Dialog>

//       <header className="relative z-10 bg-white">
//         <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-15xl font-bold text-white sm:px-6 lg:px-8">
//          ALL-IN-ONE LIFESTYLE HUB
//         </p>

//         <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="border-b border-gray-200">
//             <div className="flex h-16 items-center">
//               <button
//                 type="button"
//                 className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
//                 onClick={() => setOpen(true)}
//               >
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open menu</span>









//                 <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//               </button>

//               {/* Logo */}
//               <div className="ml-4 flex lg:ml-0">
//               <h1 className="text-4xl font-bold md:text-5xl font-signature ml-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
//             ShopEase
//           </h1>
// </div>


//               {/* Flyout menus */}
//               <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
//                 <div className="flex h-full space-x-8">
//                   {navigation.categories.map((category) => (
//                     <Popover key={category.name} className="flex">
//                       {({ open }) => (
//                         <>
//                           <PopoverButton
//                             className={`relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
//                               open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800'
//                             }`}
//                           >
//                             {category.name}
//                           </PopoverButton>

//                           <PopoverPanel className="absolute inset-x-0 top-full z-20 text-sm text-gray-500">
//                             <div className="absolute inset-0 top-1/2 shadow" aria-hidden="true" />
//                             <div className="relative bg-white">
//                               <div className="mx-auto max-w-7xl px-8">
//                                 <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
//                                   <div className="col-start-2 grid grid-cols-2 gap-x-8">
//                                     {category.featured.map((item) => (
//                                       <div key={item.name} className="group relative text-base sm:text-sm">
//                                         <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                           <img
//                                             src={item.imageSrc}
//                                             alt={item.imageAlt}
//                                             className="object-cover object-center"
//                                           />
//                                         </div>
//                                         <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                                           <span aria-hidden="true" className="absolute inset-0 z-10" />
//                                           {item.name}
//                                         </a>
//                                         <p aria-hidden="true" className="mt-1">Shop now</p>
//                                       </div>
//                                     ))}
//                                   </div>
//                                   <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
//                                     {category.sections.map((section) => (
//                                       <div key={section.name}>
//                                         <p
//                                           id={`${section.name}-heading`}
//                                           className="font-medium text-gray-900"
//                                         >
//                                           {section.name}
//                                         </p>
//                                         <ul
//                                           role="list"
//                                           aria-labelledby={`${section.name}-heading`}
//                                           className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                                         >
//                                           {section.items.map((item) => (
//                                             <li key={item.name} className="flex">
//                                               <a href={item.href} className="hover:text-gray-800">
//                                                 {item.name}
//                                               </a>
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       </div>
//                                     ))}
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </PopoverPanel>
//                         </>
//                       )}
//                     </Popover>
//                   ))}
//                 </div>
//               </PopoverGroup>

//               <div className="ml-auto flex items-center">
//                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                   <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
//                     Sign in
//                   </a>
//                   <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
//                   <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
//                     Create account
//                   </a>
//                 </div>

//                 <div className="hidden lg:ml-8 lg:flex">
//                   <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
//                     <img
//                       alt=""
//                       src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
//                       className="block h-auto w-5 flex-shrink-0"
//                     />
//                     <span className="ml-3 block text-sm font-medium">IND</span>
//                     <span className="sr-only">, change currency</span>
//                   </a>
//                 </div>

//                 <div className="flex lg:ml-6">
//                   <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
//                     <span className="sr-only">Search</span>
//                     <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
//                   </a>
//                 </div>

//                 <div className="ml-4 flow-root lg:ml-6">
//                   <a href="#" className="group -m-2 flex items-center p-2">
//                     <ShoppingBagIcon
//                       className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                       aria-hidden="true"
//                     />
//                     <span className="ml-2 text-sm font-medium text-gray-700">0</span>
//                     <span className="sr-only">items in cart, view bag</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

// import { useState } from 'react';
// import { Dialog, Popover, Transition } from '@headlessui/react';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';
// import { Avatar, Button, Menu, MenuItem } from '@mui/material';
// import { deepPurple } from '@mui/material/colors';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const openUserMenu = Boolean(anchorEl);

//   const handleOpenUserMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorEl(null);
//   };

//   const navigation = {
//     categories: [
//       {
//         name: 'Women',
//         featured: [
//           {
//             name: 'New Arrivals',
//             href: '#',
//             imageSrc: 'https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg',
//             imageAlt: 'New Arrivals',
//           },
//         ],
//         sections: [
//           {
//             id: 'clothing',
//             name: 'Clothing',
//             items: [{ name: 'Tops', href: '#' }, { name: 'Dresses', href: '#' }],
//           },
//         ],
//       },
//     ],
//     pages: [{ name: 'Company', href: '#' }, { name: 'Stores', href: '#' }],
//   };

//   return (
//     <div className="bg-blue-600">
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full"
//             >
//               <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
//                 <div className="flex px-4 pt-5 pb-2">
//                   <button
//                     type="button"
//                     className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <XIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>

//                 <div className="space-y-6 py-6 px-4">
//                   <div className="space-y-6 border-t border-gray-200 pt-6">
//                     <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
//                       Sign in
//                     </a>
//                     <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
//                       Create account
//                     </a>
//                   </div>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       <header className="relative bg-white">
//         <p className="flex h-10 items-center justify-center bg-gray-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
//           Get free delivery on orders over $100
//         </p>

//         <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="border-b border-gray-200">
//             <div className="flex h-16 items-center">
//               <button
//                 type="button"
//                 onClick={() => setOpen(true)}
//                 className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
//               >
//                 <span className="sr-only">Open menu</span>
//                 <MenuIcon className="h-6 w-6" aria-hidden="true" />
//               </button>

//               {/* Logo */}
//               <div className="ml-4 flex lg:ml-0">
//                 <a href="#">
//                   <span className="sr-only">Your Company</span>
//                   <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
//                 </a>
//               </div>

//               {/* Flyout menus */}
//               <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
//                 <div className="flex h-full space-x-8">
//                   {navigation.categories.map((category) => (
//                     <Popover key={category.name} className="flex">
//                       {({ open }) => (
//                         <>
//                           <div className="relative flex">
//                             <Popover.Button
//                               className={classNames(
//                                 open
//                                   ? 'border-indigo-600 text-indigo-600'
//                                   : 'border-transparent text-gray-700 hover:text-gray-800',
//                                 'relative z-10 flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
//                               )}
//                             >
//                               {category.name}
//                             </Popover.Button>
//                           </div>

//                           <Transition
//                             as={Fragment}
//                             enter="transition ease-out duration-200"
//                             enterFrom="opacity-0"
//                             enterTo="opacity-100"
//                             leave="transition ease-in duration-150"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                           >
//                             <Popover.Panel className="absolute inset-x-0 top-full text-gray-500">
//                               <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

//                               <div className="relative bg-white">
//                                 <div className="mx-auto max-w-7xl px-8">
//                                   <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
//                                     <div className="col-start-2 grid grid-cols-2 gap-x-8">
//                                       {category.featured.map((item) => (
//                                         <div key={item.name} className="group relative text-base sm:text-sm">
//                                           <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                             <img
//                                               src={item.imageSrc}
//                                               alt={item.imageAlt}
//                                               className="object-cover object-center"
//                                             />
//                                           </div>
//                                           <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                                             <span className="absolute inset-0" />
//                                             {item.name}
//                                           </a>
//                                           <p className="mt-1">Shop now</p>
//                                         </div>
//                                       ))}
//                                     </div>
//                                     <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
//                                       {category.sections.map((section) => (
//                                         <div key={section.name}>
//                                           <p id={`${section.id}-heading`} className="font-medium text-gray-900">
//                                             {section.name}
//                                           </p>
//                                           <ul
//                                             role="list"
//                                             aria-labelledby={`${section.id}-heading`}
//                                             className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                                           >
//                                             {section.items.map((item) => (
//                                               <li key={item.name} className="flex">
//                                                 <a href={item.href} className="text-gray-500">
//                                                   {item.name}
//                                                 </a>
//                                               </li>
//                                             ))}
//                                           </ul>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Popover.Panel>
//                           </Transition>
//                         </>
//                       )}
//                     </Popover>
//                   ))}

//                   {navigation.pages.map((page) => (
//                     <a
//                       key={page.name}
//                       href={page.href}
//                       className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
//                     >
//                       {page.name}
//                     </a>
//                   ))}
//                 </div>
//               </Popover.Group>

//               <div className="ml-auto flex items-center">
//                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                   <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
//                     Sign in
//                   </a>
//                   <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
//                   <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
//                     Create account
//                   </a>
//                 </div>

//                 <div className="hidden lg:ml-8 lg:flex">
//                   <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
//                     <img
//                       src="https://tailwindui.com/img/flags/flag-canada.svg"
//                       alt=""
//                       className="block h-auto w-5 flex-shrink-0"
//                     />
//                     <span className="ml-3 block text-sm font-medium">CAD</span>
//                     <span className="sr-only">, change currency</span>
//                   </a>
//                 </div>

//                 <div className="flex lg:ml-6">
//                   <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
//                     <span className="sr-only">Search</span>
//                     <SearchIcon className="h-6 w-6" aria-hidden="true" />
//                   </a>
//                 </div>

//                 <div className="ml-4 flow-root lg:ml-6">
//                   <a href="#" className="group -m-2 flex items-center p-2">
//                     <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
//                     <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
//                     <span className="sr-only">items in cart, view bag</span>
//                   </a>
//                 </div>

//                 <div className="ml-4 flex items-center">
//                   <Avatar
//                     sx={{ bgcolor: deepPurple[500], cursor: 'pointer' }}
//                     onClick={handleOpenUserMenu}
//                   >
//                     S
//                   </Avatar>
//                   <Menu
//                     id="basic-menu"
//                     anchorEl={anchorEl}
//                     open={openUserMenu}
//                     onClose={handleCloseUserMenu}
//                     MenuListProps={{ "aria-labelledby": "basic-button" }}
//                   >
//                     <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
//                     <MenuItem onClick={handleCloseUserMenu}>My Orders</MenuItem>
//                     <MenuItem onClick={handleCloseUserMenu}>Logout</MenuItem>
//                   </Menu>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }


import React from 'react';
import { MagnifyingGlassIcon, ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { deepPurple } from '@mui/material/colors';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const openUserMenu = Boolean(anchorEl);

  return (
    <div className="bg-gray-700 shadow-md">
      <header>
        <nav className="relative z-10 bg-black shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              
              {/* Logo with Men and Women links */}
              <div className="flex items-center space-x-8">
                <a href="/" className="text-xl font-bold text-gray-800">
                  <div className="flex-1 flex items-center">
                    <h1 className="text-2xl md:text-3xl font-signature ml-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                      ShopEase
                    </h1>
                  </div>
                </a>
                
                <a href="/women" className="text-sm font-medium text-white hover:text-blue-600">
                  Women
                </a>
                <a href="/men" className="text-sm font-medium text-white hover:text-blue-600">
                  Men
                </a>
              </div>

              {/* Search bar */}
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg">
                  <label htmlFor="search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-gray-100 border border-transparent rounded-md py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>

              {/* Account, Wishlist, Cart, and Avatar */}
              <div className="flex items-center lg:ml-6">
                {/* Cart Icon */}
                <a href="#" className="p-2 text-gray-400 hover:text-gray-600">
                  <span className="sr-only">View cart</span>
                  <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                </a>

                {/* Wishlist Icon */}
                <a href="#" className="p-2 text-gray-400 hover:text-red-600">
                  <span className="sr-only">View wishlist</span>
                  <HeartIcon className="h-6 w-6" aria-hidden="true" />
                </a>

                {/* Avatar and Dropdown */}
                <div className="ml-4 flex items-center">
                  <Avatar
                    sx={{ bgcolor: deepPurple[500], cursor: 'pointer' }}
                    onClick={handleOpenUserMenu}
                  >
                    S
                  </Avatar>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openUserMenu}
                    onClose={handleCloseUserMenu}
                    MenuListProps={{ "aria-labelledby": "basic-button" }}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>My Orders</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>Logout</MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
