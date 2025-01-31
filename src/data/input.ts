export const importCode = `
---
import { FloatingFilledLabel } from 'free-astro-components'
---
`

export const floatingStandardLabel = `
<div class="relative z-0">
  <input
    type="text"
    id="floating_standard"
    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
  />
  <label
    for="floating_standard"
    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
>{{ textLabel }}</label
  >
</div>

{% manifest %} 
  { 
    "type": "Functional", 
    "displayName": "Floating Filled Label", 
    "description": "Floating ",
    "tables": [], 
    "params": [
      {
        "id": "textLabel",
        "displayName": "Text Label",
        "description": "Text for label"
      }
    ] 
  } 
{% endmanifest %}
`

export const floatingFilledLabel = `
<div class="relative">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{{ textLabel }}</label>
</div>

{% manifest %} 
  { 
  "type": "Functional", 
  "displayName": "Floating Filled Label", 
  "description": "Floating ",
  "tables": [], 
  "params": [
    {
      "id": "textLabel",
      "displayName": "Text Label",
      "description": "Text for label"
    }
  ] 
  } 
{% endmanifest %} 
`
export const floatingOutlinedLabel = `
<div class="relative">
    <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{{ textLabel }}</label>
</div>

{% manifest %} 
  { 
  "type": "Functional", 
  "displayName": "Floating Outlined Label", 
  "description": "",
  "tables": [], 
  "params": [
     {
      "id": "textLabel",
      "displayName": "Text Label",
      "description": "Text for label"
    }
  ] 
  } 
{% endmanifest %}
`