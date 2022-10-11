import { templateError } from "./error";
export const getData = async (param) => {
  try {
    const responseRaw = await fetch(`http://localhost:3000/${param}`);
    const responseJson = await responseRaw.json();
    return responseJson;
  } catch (error) {
    templateError(
      "There was an unspected error, try again in 1 human lifetime year, sorry for the unconviniences 👽☮️"
    );
  }
};
