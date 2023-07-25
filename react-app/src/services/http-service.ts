import apiClient from "./api-client";
interface entity{
    id:number
}
class HTTPService
{
    endpoint:string
    constructor(endpoint:string)
    {
        this.endpoint=endpoint
    }
    getall<T>(){
        const controller = new AbortController();
        const response= apiClient
      .get<T[]>(this.endpoint, {
        signal: controller.signal,
      })
      return {response,cancel:()=>controller.abort()}
    }
    delete(id:number)
    {
      return apiClient
      .delete(this.endpoint +"/"+id)
     };
    add<T>(entity:T)
    {
      return apiClient.post(this.endpoint,entity)
    };
    update<T extends entity>(entity:T)
    {
        return apiClient.patch("/users/"+ entity.id,entity)
    }
}
const create=(endpoint:string)=> { return new HTTPService(endpoint)}

export default create