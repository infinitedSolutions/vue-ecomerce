import ConsApiClass from "@/models/consApi";

export default async function apiPeticion(path:string,language: string){
    const consApiClass = new ConsApiClass();
      try {
        const res = await fetch(consApiClass.url(path, language));     
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: any = await res.json(); // Imprime los datos devueltos
        return data;
      } catch (error: any) {
        console.error(
          "There was a problem with the fetch operation: " + error.message
        );
      } 
}