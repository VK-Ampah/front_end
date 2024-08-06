import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from 'query-string'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string) {
  const [first, last] = name.split(" ")
  return first.charAt(0) + last.charAt(0)
}

// export function formUrlQuery({
//   params,
//   key,
//   value,
// }: {
//   params: string
//   key: string
//   value: string
// }) {
//   const searchParams = new URLSearchParams(params)
//   searchParams.set(key, value)
//   return `?${searchParams.toString()}`
// }



import { UrlQueryParams, RemoveUrlQueryParams } from '@/constant/types'

export const convertFileToUrl = (file: File) => URL.createObjectURL(file)

export function formUrlQuery({ params, key, value, limitKey, limitValue, pageKey, pageValue }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  if (limitKey && limitValue) {
    currentUrl[limitKey] = limitValue;
  }

  if (pageKey && pageValue) {
    currentUrl[pageKey] = pageValue;
  }

  const orderedQuery = {
    query: currentUrl.query,
    page: currentUrl.page,
    limit: currentUrl.limit
  };

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: orderedQuery,
    },
    { skipNull: true }
  );
}


export function removeKeysFromQuery({ params, keysToRemove }: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(params)

  keysToRemove.forEach(key => {
    delete currentUrl[key]
  })

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  )
}

// export const handleError = (error: unknown) => {
//   console.error(error)
//   throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
// }


export const handleError = (error: unknown) => {
  console.error(error)
  let errorMessage = 'An unknown error occurred'
  if (typeof error === 'string') {
    errorMessage = error
  } else if (error && typeof error === 'object') {
    errorMessage = JSON.stringify(error)
  }
  throw new Error(errorMessage)
}