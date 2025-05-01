import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation'; // Import notFound for handling invalid locales
 
// Define the locales you want to support
export const locales = ['vi', 'en', 'zh'];
export const defaultLocale = 'vi';
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
     // Use notFound() from next/navigation if the locale is invalid
     notFound(); 
  }
 
  return {
    // Include the locale in the returned config
    locale,
    // Load the messages for the selected locale
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
