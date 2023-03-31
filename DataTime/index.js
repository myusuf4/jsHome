const moment = () => {
    return {
      format(type) {
        let date = new Date();
        let hours = date.getHours();
        let hour = date.getHours();
        let ameClock = hour - 12;
        let minutes = date.getMinutes();
        let clock12 = hours >= 12 ? "PM" : "AM";
        let seconds = date.getSeconds();
        let clockType = hour >= 12 ? "PM" : "AM";
        let day = date.getDate();
        let week = date.getDay()
        let month = date.getMonth();
        let trueMonth = month + 1;
        let year = date.getFullYear();
  
        let months = [
          "January",
          "February",
          "March",
          "Aprel",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
  
        let weeks = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        
  
        switch (type) {
          case "LT":
            return `${hours - 12}:${minutes} ${clock12}`;
            break;
          case "LTS":
            return date.toLocaleTimeString();
            break;
          case "L":
          case "l":
            return date.toLocaleDateString();
            break;
          case "LL":
            return `${
              months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()}`;
            break;
          case "ll":
            return `${months[date.getMonth()].slice(
              0,
              3
            )} ${date.getDate()}, ${date.getFullYear()}`;
            break;
          case "LLL":
            return `${
              months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()} ${
              hours - 12
            }:${minutes} ${clock12}`;
            break;
          case "lll":
            return `${months[date.getMonth()].slice(
              0,
              3
            )} ${date.getDate()}, ${date.getFullYear()} ${
              hours - 12
            }:${minutes} ${clock12}`;
            break;
          case "LLLL":
            return `${weeks[date.getDay()]}, ${
              months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()} ${
              hours - 12
            }:${minutes} ${clock12}`;
            break;
          case "llll":
            return `${weeks[date.getDay()].slice(0, 3)}, ${months[
              date.getMonth()
            ].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()} ${
              hours - 12
            }:${minutes} ${clock12}`;
            break;
        if (type === "LT") {
          console.log(`${ameClock} : ${minutes} ${clockType}`);
        } else if (type === "LTS") {
          console.log(`${ameClock} : ${minutes} : ${seconds} ${clockType}`);
        } else if (type === "L" || type === "l") {
          console.log(`${trueMonth}/${day}/${year}`);
        } else if (type === "LL") {
          console.log(`${months[month]} ${day}, ${year}`);
        } else if (type === "ll") {
          console.log(`${months[month].slice(0, 3)} ${day}, ${year}`);
        } else if (type === "LLL") {
          console.log(`${months[month]} ${day}, ${year} ${ameClock}:${minutes} ${clockType}`);
        } else if (type === "lll") {
          console.log(`${months[month].slice(0, 3)} ${day}, ${year} ${ameClock}:${minutes} ${clockType}`);
        } else if (type === "LLLL") {
          console.log(`${weeks[week]}, ${months[month]} ${day}, ${year} ${ameClock}:${minutes} ${clockType}`);
        } else if (type === "llll") {
          console.log(`${weeks[week].slice(0, 3)}, ${months[month].slice(0, 3)} ${day}, ${year} ${ameClock}:${minutes} ${clockType}`);
        }
      }
    }
  };
  
}
  console.log(moment().format("L"));


  let name=-5.676;

  console.log(Math.ceil(name));


  