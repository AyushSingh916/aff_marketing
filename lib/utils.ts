import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import emailjs from 'emailjs-com';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toDateString(date: number) {
  const dateObj = new Date(date);
  return dateObj.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'IST',
  });
}

export function toDateTimeString(date: number) {
  const dateObj = new Date(date);
  return dateObj.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'IST',
  });
}

export function sendEmail(e: React.FormEvent, email: string, message: string) {
  e.preventDefault();

  const templateParams = {
    to_name : "Ayush",
    from_name: email,
    message,
  };

  emailjs.send('service_ul56our', 'template_fnkm83h', templateParams, 'sp4iTcbT8U7vr1Rd8')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });
}