export interface Producto {
    id: number;
    idioma: string;
    nombre: string;
    cantidad_disponible: number;
    vendidos: number;
    descripcion: string;
    precio: number;
    url: string;
}
export interface CartProducto {
    producto: Producto;
    quantity: number;
    total: number;
}
export interface Cart {
    productos: CartProducto[];
    quantity: number;
    total: number;
}