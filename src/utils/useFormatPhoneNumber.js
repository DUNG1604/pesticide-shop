export default function useFormatPhoneNumber(phoneNumber) {
    let result;
    const formattedPhoneNumber = formatPhoneNumber(
        phoneNumber?.replace(/\D/g, "")
    );
    result = formattedPhoneNumber;
    if(result === 'undefined') {
        result = ''
    }
    return result
}

const formatPhoneNumber = (phoneNumber) => {
    let part1;
    let part2;
    let part3;
    if (phoneNumber?.length) {
        part1 = phoneNumber?.slice(0, 3);
    }
    if (phoneNumber?.length > 3) {
        part2 = `-${phoneNumber?.slice(3, 7)}`;
    }
    if (phoneNumber?.length > 7) {
        part3 = `-${phoneNumber?.slice(7, 12)}`;
    }
    const result = `${part1}${part2 ?? ""}${part3 ?? ""}`;
    return result;
};
