import{Deserializable} from "./deserializable.model";

export class Product implements Deserializable{
    id:number;
    title:string;
    description:string;
    price:number;
    discount_percentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string;
    thumbnail:string;
    images:any;

    deserialize(input: any) {
        
        Object.assign(this, input);
    return this;
    }
}
