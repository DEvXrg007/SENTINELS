import React from 'react'

const Outpage = () => {
  return (
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    History Of Diseases
                </th>
                <th scope="col" class="px-6 py-3">
                    Age of detection
                </th>
                <th scope="col" class="px-6 py-3">
                    Physician
                </th>
                <th scope="col" class="px-6 py-3">
                    Hospital
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Diabetes
                </th>
                <td class="px-6 py-4">
                    55
                </td>
                <td class="px-6 py-4">
                   Dr.Melendez
                </td>
                <td class="px-6 py-4">
                    St.Bonaventure
                </td>
                <td class="px-6 py-4">
                    unhealed wounds, high levels of insulin
                </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Scurvy
                </th>
                <td class="px-6 py-4">
                    9
                </td>
                <td class="px-6 py-4">
                    Dr.Browne
                </td>
                <td class="px-6 py-4">
                    St.Bonaventure
                </td>
                <td class="px-6 py-4">
                    curved knee and posture,lower bone density
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Arthritis
                </th>
                <td class="px-6 py-4">
                    37
                </td>
                <td class="px-6 py-4">
                  Dr.Patel
                </td>
                <td class="px-6 py-4">
                    Winter Solstice
                </td>
                <td class="px-6 py-4">
                   Joint pains,etc
                </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    High cholestrol levels
                </th>
                <td class="px-6 py-4">
                    32
                </td>
                <td class="px-6 py-4">
                    NY Care
                </td>
                <td class="px-6 py-4">
                   Blood Test Results
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Alziemers
                </th>
                <td class="px-6 py-4">
                    77
                </td>
                <td class="px-6 py-4">
                    Dr.Singh
                </td>
                <td class="px-6 py-4">
                    Repeating questions and memory loss
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div class="mb-1 text-base font-medium dark:text-white">dementia</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-gray-600 h-4.95 rounded-full dark:bg-gray-300" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">fatty liver</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-blue-600 h-1.35 rounded-full" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">insomnia</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-red-600 h-0.05 rounded-full dark:bg-red-500" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">parkinsons</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-green-600 h-7.5 rounded-full dark:bg-green-500" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500"></div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-yellow-400 h-1.5 rounded-full" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">asthma</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-indigo-600 h-3.5 rounded-full dark:bg-indigo-500" style="width: 45%">Kidney Stones</div>
</div>
<div class="mb-1 text-base font-medium text-purple-700 dark:text-purple-500"></div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style="width: 45%"></div>
</div>
    </div>
  )
}

export default Outpage