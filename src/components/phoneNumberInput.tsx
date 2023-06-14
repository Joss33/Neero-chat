import { useState } from 'react';

const countryCodes = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+61', name: 'Australia' },
  // Agrega más códigos de países si lo deseas
];

export const PhoneNumberInput = () => {
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryCodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <>
      <label
        htmlFor="brand"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Phone number
      </label>
      <div className='flex items-center w-full'>
        <select value={countryCode} onChange={handleCountryCodeChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-shrink-0">
          {countryCodes.map((country) => (
            <option key={country.code} value={country.code}>
              {country.code} - {country.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Phone number"
          className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </>
  );
};