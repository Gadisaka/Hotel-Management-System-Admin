import { toEthiopian } from "ethiopian-date";

const getEthiopianDate = () => {
  const today = new Date();
  const [year, month, day] = toEthiopian(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );
  const monthNames = [
    "መስከረም",
    "ጥቅምት",
    "ህዳር",
    "ታህሳስ",
    "ጥር",
    "የካቲት",
    "መጋቢት",
    "ሚያዚያ",
    "ግንቦት ",
    "ሰኔ",
    "ሃምሌ",
    "ነሃሴ",
    "ጳጉሜን",
  ];
  return `${monthNames[month - 1]} ${day}, ${year}`;
};

export default getEthiopianDate;
