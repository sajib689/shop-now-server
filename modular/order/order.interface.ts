
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
  trxId: string;
  status: string;
  createAt: Date;
}
export default IOrder;