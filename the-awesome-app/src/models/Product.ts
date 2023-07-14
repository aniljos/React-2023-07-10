export class Product{

    id: number | undefined;
    name: string | undefined;
    price: number | undefined;
    description: string | undefined;
    imageUrl: string | undefined;

    //decclartions
    // constructor();
    // constructor(id: number, name: string);
    // constructor(id: number, name: string, price: number, description: string, imageUrl: string)

    //implementation
    constructor(id?: number, name?: string, price?: number, description?: string, imageUrl?: string){
        
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}