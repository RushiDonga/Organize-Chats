import { gptApi } from "../api/gptApi";
import { cleanData } from "./cleanData";
import extractZip from "./extractZip";

export async function handleApiCalls(file){
    try{
        const zipData = await extractZip(file);
    const cleanedData = cleanData(zipData);
    const response = await gptApi(cleanedData);
    return response;
    }catch(e){
        console.log("Error in organizing data: ", e);
    }
}

export async function handleSampleData(data){
    try{
    const cleanedData = cleanData(data);
    const response = await gptApi(cleanedData);
    return response;
    }catch(e){
        console.log("Error in organizing data: ", e);
    }
}