import apiClient from "./api-client";
export interface user {
    id: string;
    name: string;
  }
class UserService
{
    getalluser(){
        const controller = new AbortController();
        const response= apiClient
      .get<user[]>("/users", {
        signal: controller.signal,
      })
      return {response,cancel:()=>controller.abort()}
    }
    deleteuser(id:string)
    {
      return apiClient
      .delete("/users/" + id)
     };
    add(newuser:user)
    {
      return apiClient.post("/users/",newuser)
    };
    update(upadateduser:user)
    {
        return apiClient.patch("/users/"+ upadateduser.id,upadateduser)
    }
}

export default new UserService()