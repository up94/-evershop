import PropTypes from 'prop-types';
import React from 'react';

function CurrencyOptions(props) {
  const { currencies, children } = props;

  const options = [
    { value: 'AFN', text: 'Afghan Afghani' },
    { value: 'ALL', text: 'Albanian Lek' },
    { value: 'DZD', text: 'Algerian Dinar' },
    { value: 'AOA', text: 'Angolan Kwanza' },
    { value: 'ARS', text: 'Argentine Peso' },
    { value: 'AMD', text: 'Armenian Dram' },
    { value: 'AWG', text: 'Aruban Florin' },
    { value: 'AUD', text: 'Australian Dollar' },
    { value: 'AZN', text: 'Azerbaijani Manat' },
    { value: 'AZM', text: 'Azerbaijani Manat (1993-2006)' },
    { value: 'BSD', text: 'Bahamian Dollar' },
    { value: 'BHD', text: 'Bahraini Dinar' },
    { value: 'BDT', text: 'Bangladeshi Taka' },
    { value: 'BBD', text: 'Barbadian Dollar' },
    { value: 'BYR', text: 'Belarusian Ruble' },
    { value: 'BZD', text: 'Belize Dollar' },
    { value: 'BMD', text: 'Bermudan Dollar' },
    { value: 'BTN', text: 'Bhutanese Ngultrum' },
    { value: 'BOB', text: 'Bolivian Boliviano' },
    { value: 'BAM', text: 'Bosnia-Herzegovina Convertible Mark' },
    { value: 'BWP', text: 'Botswanan Pula' },
    { value: 'BRL', text: 'Brazilian Real' },
    { value: 'GBP', text: 'British Pound Sterling' },
    { value: 'BND', text: 'Brunei Dollar' },
    { value: 'BGN', text: 'Bulgarian Lev' },
    { value: 'BUK', text: 'Burmese Kyat' },
    { value: 'BIF', text: 'Burundian Franc' },
    { value: 'XOF', text: 'CFA Franc BCEAO' },
    { value: 'XPF', text: 'CFP Franc' },
    { value: 'KHR', text: 'Cambodian Riel' },
    { value: 'CAD', text: 'Canadian Dollar' },
    { value: 'CVE', text: 'Cape Verdean Escudo' },
    { value: 'KYD', text: 'Cayman Islands Dollar' },
    { value: 'CLP', text: 'Chilean Peso' },
    { value: 'CNY', text: 'Chinese Yuan Renminbi' },
    { value: 'COP', text: 'Colombian Peso' },
    { value: 'KMF', text: 'Comorian Franc' },
    { value: 'CDF', text: 'Congolese Franc' },
    { value: 'CRC', text: 'Costa Rican Colón' },
    { value: 'HRK', text: 'Croatian Kuna' },
    { value: 'CUP', text: 'Cuban Peso' },
    { value: 'CZK', text: 'Czech Republic Koruna' },
    { value: 'DKK', text: 'Danish Krone' },
    { value: 'DJF', text: 'Djiboutian Franc' },
    { value: 'DOP', text: 'Dominican Peso' },
    { value: 'XCD', text: 'East Caribbean Dollar' },
    { value: 'EGP', text: 'Egyptian Pound' },
    { value: 'GQE', text: 'Equatorial Guinean Ekwele' },
    { value: 'ERN', text: 'Eritrean Nakfa' },
    { value: 'EEK', text: 'Estonian Kroon' },
    { value: 'ETB', text: 'Ethiopian Birr' },
    { value: 'EUR', text: 'Euro' },
    { value: 'FKP', text: 'Falkland Islands Pound' },
    { value: 'FJD', text: 'Fijian Dollar' },
    { value: 'GMD', text: 'Gambian Dalasi' },
    { value: 'GEK', text: 'Georgian Kupon Larit' },
    { value: 'GEL', text: 'Georgian Lari' },
    { value: 'GHS', text: 'Ghanaian Cedi' },
    { value: 'GIP', text: 'Gibraltar Pound' },
    { value: 'GTQ', text: 'Guatemalan Quetzal' },
    { value: 'GNF', text: 'Guinean Franc' },
    { value: 'GYD', text: 'Guyanaese Dollar' },
    { value: 'HTG', text: 'Haitian Gourde' },
    { value: 'HNL', text: 'Honduran Lempira' },
    { value: 'HKD', text: 'Hong Kong Dollar' },
    { value: 'HUF', text: 'Hungarian Forint' },
    { value: 'ISK', text: 'Icelandic Króna' },
    { value: 'INR', text: 'Indian Rupee' },
    { value: 'IDR', text: 'Indonesian Rupiah' },
    { value: 'IRR', text: 'Iranian Rial' },
    { value: 'IQD', text: 'Iraqi Dinar' },
    { value: 'ILS', text: 'Israeli New Sheqel' },
    { value: 'JMD', text: 'Jamaican Dollar' },
    { value: 'JPY', text: 'Japanese Yen' },
    { value: 'JOD', text: 'Jordanian Dinar' },
    { value: 'KZT', text: 'Kazakhstan Tenge' },
    { value: 'KES', text: 'Kenyan Shilling' },
    { value: 'KWD', text: 'Kuwaiti Dinar' },
    { value: 'KGS', text: 'Kyrgystani Som' },
    { value: 'LAK', text: 'Laotian Kip' },
    { value: 'LVL', text: 'Latvian Lats' },
    { value: 'LBP', text: 'Lebanese Pound' },
    { value: 'LSL', text: 'Lesotho Loti' },
    { value: 'LRD', text: 'Liberian Dollar' },
    { value: 'LYD', text: 'Libyan Dinar' },
    { value: 'LTL', text: 'Lithuanian Litas' },
    { value: 'MOP', text: 'Macanese Pataca' },
    { value: 'MKD', text: 'Macedonian Denar' },
    { value: 'MGA', text: 'Malagasy Ariary' },
    { value: 'MWK', text: 'Malawian Kwacha' },
    { value: 'MYR', text: 'Malaysian Ringgit' },
    { value: 'MVR', text: 'Maldivian Rufiyaa' },
    { value: 'MRO', text: 'Mauritanian Ouguiya' },
    { value: 'MUR', text: 'Mauritian Rupee' },
    { value: 'MXN', text: 'Mexican Peso' },
    { value: 'MDL', text: 'Moldovan Leu' },
    { value: 'MNT', text: 'Mongolian Tugrik' },
    { value: 'MAD', text: 'Moroccan Dirham' },
    { value: 'MZN', text: 'Mozambican Metical' },
    { value: 'MMK', text: 'Myanma Kyat' },
    { value: 'NAD', text: 'Namibian Dollar' },
    { value: 'NPR', text: 'Nepalese Rupee' },
    { value: 'ANG', text: 'Netherlands Antillean Guilder' },
    { value: 'TWD', text: 'New Taiwan Dollar' },
    { value: 'NZD', text: 'New Zealand Dollar' },
    { value: 'NIC', text: 'Nicaraguan Cordoba' },
    { value: 'NGN', text: 'Nigerian Naira' },
    { value: 'KPW', text: 'North Korean Won' },
    { value: 'NOK', text: 'Norwegian Krone' },
    { value: 'ROL', text: 'Old Romanian Leu' },
    { value: 'TRL', text: 'Old Turkish Lira' },
    { value: 'OMR', text: 'Omani Rial' },
    { value: 'PKR', text: 'Pakistani Rupee' },
    { value: 'PAB', text: 'Panamanian Balboa' },
    { value: 'PGK', text: 'Papua New Guinean Kina' },
    { value: 'PYG', text: 'Paraguayan Guarani' },
    { value: 'PEN', text: 'Peruvian Nuevo Sol' },
    { value: 'PHP', text: 'Philippine Peso' },
    { value: 'PLN', text: 'Polish Zloty' },
    { value: 'QAR', text: 'Qatari Rial' },
    { value: 'RHD', text: 'Rhodesian Dollar' },
    { value: 'RON', text: 'Romanian Leu' },
    { value: 'RUB', text: 'Russian Ruble' },
    { value: 'RWF', text: 'Rwandan Franc' },
    { value: 'SHP', text: 'Saint Helena Pound' },
    { value: 'SVC', text: 'Salvadoran Colón' },
    { value: 'WST', text: 'Samoan Tala' },
    { value: 'SAR', text: 'Saudi Riyal' },
    { value: 'RSD', text: 'Serbian Dinar' },
    { value: 'SCR', text: 'Seychellois Rupee' },
    { value: 'SLL', text: 'Sierra Leonean Leone' },
    { value: 'SGD', text: 'Singapore Dollar' },
    { value: 'SKK', text: 'Slovak Koruna' },
    { value: 'SBD', text: 'Solomon Islands Dollar' },
    { value: 'SOS', text: 'Somali Shilling' },
    { value: 'ZAR', text: 'South African Rand' },
    { value: 'KRW', text: 'South Korean Won' },
    { value: 'LKR', text: 'Sri Lanka Rupee' },
    { value: 'SDG', text: 'Sudanese Pound' },
    { value: 'SRD', text: 'Surinamese Dollar' },
    { value: 'SZL', text: 'Swazi Lilangeni' },
    { value: 'SEK', text: 'Swedish Krona' },
    { value: 'CHF', text: 'Swiss Franc' },
    { value: 'SYP', text: 'Syrian Pound' },
    { value: 'STD', text: 'São Tomé and Príncipe Dobra' },
    { value: 'TJS', text: 'Tajikistani Somoni' },
    { value: 'TZS', text: 'Tanzanian Shilling' },
    { value: 'THB', text: 'Thai Baht' },
    { value: 'TOP', text: 'Tongan Paʻanga' },
    { value: 'TTD', text: 'Trinidad and Tobago Dollar' },
    { value: 'TND', text: 'Tunisian Dinar' },
    { value: 'TRY', text: 'Turkish Lira' },
    { value: 'TMM', text: 'Turkmenistani Manat' },
    { value: 'USD', text: 'US Dollar' },
    { value: 'UGX', text: 'Ugandan Shilling' },
    { value: 'UAH', text: 'Ukrainian Hryvnia' },
    { value: 'AED', text: 'United Arab Emirates Dirham' },
    { value: 'UYU', text: 'Uruguayan Peso' },
    { value: 'UZS', text: 'Uzbekistan Som' },
    { value: 'VUV', text: 'Vanuatu Vatu' },
    { value: 'VEB', text: 'Venezuelan Bolívar' },
    { value: 'VEF', text: 'Venezuelan Bolívar Fuerte' },
    { value: 'VND', text: 'Vietnamese Dong' },
    { value: 'CHE', text: 'WIR Euro' },
    { value: 'CHW', text: 'WIR Franc' },
    { value: 'YER', text: 'Yemeni Rial' },
    { value: 'ZMK', text: 'Zambian Kwacha' },
    { value: 'ZWD', text: 'Zimbabwean Dollar' }
  ].filter((c) => {
    if (currencies) return currencies.indexOf(c.value) !== -1;
    else return true;
  });
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { options, ...props })
  );

  return <div>{childrenWithProps}</div>;
}

CurrencyOptions.propTypes = {
  children: PropTypes.node.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string)
};

CurrencyOptions.defaultProps = {
  currencies: []
};

export { CurrencyOptions };
