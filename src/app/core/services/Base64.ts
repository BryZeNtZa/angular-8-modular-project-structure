
export class Base64 {
    public static encode(str: string) {
        try{
            return btoa(str);
        }catch(e){
            console.error("Base64.encode ", e);
        }
    }
    public static decode(str: string) {
        try{
            return atob(str);
        }catch(e){
            console.error("Base64.decode ", e);
        }
    }
}