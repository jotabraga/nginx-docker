export const normalizePhoneNumber = (phone) => {
  const emptyNumbers = {
    fullNumber: "",
    withoutExtraNine: "",
    fullNumberWithWhatsapp: "",
    core: "",
  };
  if (!phone) return emptyNumbers;

  let phoneNumber = phone.replace(/\D/g, "");

  if (!phoneNumber) return emptyNumbers;

  const isPhoneNumberStartsWith55 = phoneNumber.startsWith("55");
  if (isPhoneNumberStartsWith55 && phoneNumber.length >= 12)
    phoneNumber = phoneNumber.slice(2, phoneNumber.length);

  const core = phoneNumber.substring(phoneNumber.length - 8);
  const isCoreNumberStartsWith3 = core.startsWith("3");
  const ddd = phoneNumber.slice(0, 2);
  let fullNumber = `${ddd}9${core}`;
  if (isCoreNumberStartsWith3) fullNumber = `${ddd}${core}`;
  const withoutExtraNine = `${ddd}${core}`;
  const fullNumberWithWhatsapp = `whatsapp:+55${fullNumber}`;

  return { fullNumber, withoutExtraNine, fullNumberWithWhatsapp, core };
};
