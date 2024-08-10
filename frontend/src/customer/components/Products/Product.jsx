

import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import ProductCard from './ProductCard';
import { womens } from '../../../Data/womens';
import { filters, singleFilter } from './FilterData';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation, useNavigate } from 'react-router-dom';

const sortOptions = [
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    let filterValue = searchParams.getAll(sectionId);

    if (filterValue.length > 0 && filterValue[0].split(',').includes(value)) {
      filterValue = filterValue[0].split(',').filter((item) => item !== value);
      if (filterValue.length === 0) {
        searchParams.delete(sectionId);
      } else {
        searchParams.set(sectionId, filterValue.join(','));
      }
    } else {
      if (filterValue.length === 0) {
        filterValue = [];
      }
      filterValue.push(value);
      searchParams.set(sectionId, filterValue.join(','));
    }

    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleRadioFilterChange = (e, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(sectionId, e.target.value);

    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              onChange={() => handleFilter(option.value, section.id)}
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              <div>
                <div className="py-10 flex justify-between item-center">
                  <h1 className="text-lg opacity-50 font-bold">Filters</h1>
                  <FilterListIcon />
                </div>

                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                            <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                onChange={() => handleFilter(option.value, section.id)}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>

                <div className="w-full h-[1px] bg-gray-200 my-8" />

                <FormControl>
                  {singleFilter.map((section) => (
                    <div key={section.id} className="flex flex-col space-y-4 pb-8">
                      <FormLabel id="radio-filter-group-label">{section.name}</FormLabel>
                      <RadioGroup
                        aria-labelledby="radio-filter-group-label"
                        defaultValue={section.options.find((option) => option.checked)?.value}
                        name="radio-buttons-group"
                        onChange={(e) => handleRadioFilterChange(e, section.id)}
                      >
                        {section.options.map((option, idx) => (
                          <FormControlLabel
                            key={idx}
                            value={option.value}
                            control={<Radio />}
                            label={option.label}
                          />
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                </FormControl>
              </div>

              <div className="lg:col-span-4">
                <div className="border-2 border-gray-200 px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                  {womens.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}


// import { useState } from 'react'
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
// import ProductCard from './ProductCard'
// import { womens } from '../../../Data/womens'
// import { filters } from './FilterData'
// import { singleFilter } from './FilterData'
// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { useLocation, useNavigate } from 'react-router-dom'

// const sortOptions = [
//   { name: 'Price: Low to High', href: '#', current: false },
//   { name: 'Price: High to Low', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Product() {
//     const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
//     const location = useLocation();
//     const navigate = useNavigate();

//     const handleFilter = (value, sectionId) => {
//         const searchParams = new URLSearchParams(location.search);

//         let filterValue = searchParams.getAll(sectionId);
//         if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
//             filterValue = filterValue[0].split(",").filter((item) => item !== value);

//             if (filterValue.length === 0) {
//                 searchParams.delete(sectionId);
//             }
//         } else {
//             filterValue.push(value);
//         }

//         if (filterValue.length > 0) {
//             searchParams.set(sectionId, filterValue.join(","));
//         } else {
//             searchParams.delete(sectionId);
//         }

//         const query = searchParams.toString();
//         navigate({ search: `?${query}` });
//     }

//     const handleRadioFilterChange = (e, sectionId) => {
//         const searchParams = new URLSearchParams(location.search);
//         searchParams.set(sectionId, e.target.value);

//         const query = searchParams.toString();
//         navigate({ search: `?${query}` });
//     }

//     return (
//         <div className="bg-white">
//             <div>
//                 {/* Mobile filter dialog */}
//                 <Dialog open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} className="relative z-40 lg:hidden">
//                     <DialogBackdrop
//                         transition
//                         className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
//                     />

//                     <div className="fixed inset-0 z-40 flex">
//                         <DialogPanel
//                             transition
//                             className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
//                         >
//                             <div className="flex items-center justify-between px-4">
//                                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                                 <button
//                                     type="button"
//                                     onClick={() => setMobileFiltersOpen(false)}
//                                     className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                                 >
//                                     <span className="sr-only">Close menu</span>
//                                     <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//                                 </button>
//                             </div>

//                             {/* Filters */}
//                             <form className="mt-4 border-t border-gray-200">
//                                 {filters.map((section) => (
//                                     <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
//                                         <h3 className="-mx-2 -my-3 flow-root">
//                                             <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                                                 <span className="font-medium text-gray-900">{section.name}</span>
//                                                 <span className="ml-6 flex items-center">
//                                                     <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
//                                                     <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
//                                                 </span>
//                                             </DisclosureButton>
//                                         </h3>
//                                         <DisclosurePanel className="pt-6">
//                                             <div className="space-y-6">
//                                                 {section.options.map((option, optionIdx) => (
//                                                     <div key={option.value} className="flex items-center">
//                                                         <input
//                                                             onChange={() => handleFilter(option.value, section.id)}
//                                                             defaultChecked={option.checked}
//                                                             id={`filter-mobile-${section.id}-${optionIdx}`}
//                                                             name={`${section.id}[]`}
//                                                             type="checkbox"
//                                                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                                         />
//                                                         <label
//                                                             htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                                                             className="ml-3 min-w-0 flex-1 text-gray-500"
//                                                         >
//                                                             {option.label}
//                                                         </label>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </DisclosurePanel>
//                                     </Disclosure>
//                                 ))}
//                             </form>
//                         </DialogPanel>
//                     </div>
//                 </Dialog>

//                 <main className="mx-auto  px-4 sm:px-6 lg:px-20">
//                     <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
//                         <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

//                         <div className="flex items-center">
//                             <Menu as="div" className="relative inline-block text-left">
//                                 <div>
//                                     <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                                         Sort
//                                         <ChevronDownIcon
//                                             aria-hidden="true"
//                                             className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                                         />
//                                     </MenuButton>
//                                 </div>

//                                 <MenuItems
//                                     transition
//                                     className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                                 >
//                                     <div className="py-1">
//                                         {sortOptions.map((option) => (
//                                             <MenuItem key={option.name}>
//                                                 <a
//                                                     href={option.href}
//                                                     className={classNames(
//                                                         option.current ? 'font-medium text-gray-900' : 'text-gray-500',
//                                                         'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
//                                                     )}
//                                                 >
//                                                     {option.name}
//                                                 </a>
//                                             </MenuItem>
//                                         ))}
//                                     </div>
//                                 </MenuItems>
//                             </Menu>

//                             <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
//                                 <span className="sr-only">View grid</span>
//                                 <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={() => setMobileFiltersOpen(true)}
//                                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//                             >
//                                 <span className="sr-only">Filters</span>
//                                 <FunnelIcon aria-hidden="true" className="h-5 w-5" />
//                             </button>
//                         </div>
//                     </div>

//                     <section aria-labelledby="products-heading" className="pb-24 pt-6">
//                         <h2 id="products-heading" className="sr-only">
//                             Products
//                         </h2>

//                         <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
//                             <div>
//                                 <div className='py-10 flex justify-between item-center'>
//                                     <h1 className='text-lg opacity-50 font-bold '>Filters</h1>
//                                     <button onClick={() => {
//                                         const searchParams = new URLSearchParams(location.search);
//                                         searchParams.delete('category');
//                                         searchParams.delete('price');
//                                         navigate({ search: `?${searchParams.toString()}` });
//                                     }} className='opacity-50'>Clear all</button>
//                                 </div>
//                                 <div className="space-y-4 px-4">
//                                     {filters.map((section) => (
//                                         <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
//                                             <h3 className="-mx-2 -my-3 flow-root">
//                                                 <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                                                     <span className="font-medium text-gray-900">{section.name}</span>
//                                                     <span className="ml-6 flex items-center">
//                                                         <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
//                                                         <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
//                                                     </span>
//                                                 </DisclosureButton>
//                                             </h3>
//                                             <DisclosurePanel className="pt-6">
//                                                 <div className="space-y-4">
//                                                     {section.options.map((option, optionIdx) => (
//                                                         <div key={option.value} className="flex items-center">
//                                                             <input
//                                                                 onChange={() => handleFilter(option.value, section.id)}
//                                                                 defaultChecked={option.checked}
//                                                                 id={`filter-${section.id}-${optionIdx}`}
//                                                                 name={`${section.id}[]`}
//                                                                 type="checkbox"
//                                                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                                             />
//                                                             <label
//                                                                 htmlFor={`filter-${section.id}-${optionIdx}`}
//                                                                 className="ml-3 min-w-0 flex-1 text-gray-500"
//                                                             >
//                                                                 {option.label}
//                                                             </label>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </DisclosurePanel>
//                                         </Disclosure>
//                                     ))}
//                                     {singleFilter.map((section) => (
//                                         <FormControl key={section.id} className="border-b border-gray-200 py-6">
//                                             <FormLabel component="legend">{section.name}</FormLabel>
//                                             <RadioGroup
//                                                 name={section.id}
//                                                 value={new URLSearchParams(location.search).get(section.id) || ''}
//                                                 onChange={(e) => handleRadioFilterChange(e, section.id)}
//                                             >
//                                                 {section.options.map((option) => (
//                                                     <FormControlLabel
//                                                         key={option.value}
//                                                         value={option.value}
//                                                         control={<Radio />}
//                                                         label={option.label}
//                                                     />
//                                                 ))}
//                                             </RadioGroup>
//                                         </FormControl>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="lg:col-span-4">
//                                 <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
//                                     {womens.map((product) => (
//                                         <ProductCard key={product.id} product={product} />
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </main>
//             </div>
//         </div>
//     )
// }
