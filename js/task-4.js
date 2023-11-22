function getShippingCost(country) {
    const countryLowerCase = country.toLowerCase();
    
    let message;
    switch (countryLowerCase) {
        case "china":
            message = `Shipping to ${countryLowerCase} will cost 100 credits`;
            break;
        case "chile":
            message = `Shipping to ${countryLowerCase} will cost 250 credits`;
            break;
        case "australia":
            message = `Shipping to ${countryLowerCase} will cost 170 credits`;
            break;
        case "jamaica":
            message = `Shipping to ${countryLowerCase} will cost 120 credits`;
            break;
        default:
            message = "Sorry, there is no delivery to your country";
        }
        return message;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));