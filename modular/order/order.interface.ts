
 interface IOrder {
    id: string;
    email: string;
    address: string;
    phone: string;
    deliveryLocation: string;
    paymentType: boolean;
    productName: string;
    price: string;
    quantity: string;
    total: string;
    trxId: string;
    status: boolean;
    createAt: Date;
}
export default IOrder;