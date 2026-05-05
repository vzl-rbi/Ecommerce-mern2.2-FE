import React, { useMemo, useState } from "react";
import Navbar from "../../globals/components/navabr/Navabr";
import { useAppSelector } from "../../store/hooks";

type PaymentMethod = "COD" | "khalti";

type CheckoutItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CheckoutFormValues = {
  email: string;
  phoneNumber: string;
  shippingAddress: string;
};

const demoItems: CheckoutItem[] = [
  {
    id: "1",
    name: "Sneaker Shoes",
    price: 2500,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "2",
    name: "Casual Hoodie",
    price: 1800,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=60",
  },
];

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("COD");
  const [formData, setFormData] = useState<CheckoutFormValues>({
    email: "",
    phoneNumber: "",
    shippingAddress: "",
  });

  const shippingAmount = 100;

  const subTotal = useMemo(() => {
    return demoItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, []);

  const totalAmount = subTotal + shippingAmount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value as PaymentMethod);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your Redux dispatch or backend API call here.
    console.log({
      ...formData,
      paymentMethod,
      items: demoItems,
      totalAmount,
    });
  };

  const { items } = useAppSelector((state) => state.carts);
  // console.log(items);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="border-b bg-white px-4 py-5 sm:px-10 lg:px-20 xl:px-32">
          <h1 className="text-2xl font-semibold text-gray-900">Checkout</h1>
          <p className="mt-1 text-sm text-gray-500">
            Review your order and complete your details.
          </p>
        </div>

        <div className="grid gap-8 px-4 py-8 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <section>
            <p className="text-xl font-medium text-gray-900">Order Summary</p>
            <p className="mt-1 text-sm text-gray-400">
              Check your items and select a payment method.
            </p>

            <div className="mt-6 space-y-3 rounded-lg border bg-white px-3 py-4 sm:px-6">
              {items.length > 0 &&
                items.map((item) => (
                  <div
                    key={item?.Product?.id}
                    className="flex flex-col rounded-lg bg-white sm:flex-row"
                  >
                    <img
                      className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                      src={item?.Product?.image}
                      alt={item?.Product?.productName}
                    />

                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="font-semibold text-gray-900">
                        {item?.Product?.productName}
                      </span>
                      <span className="mt-1 text-sm text-gray-400">
                        Qty: {item?.Product?.productTotalStockQty}
                      </span>
                      <p className="mt-1 text-lg font-bold text-gray-900">
                        Rs. {item?.Product?.productPrice}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <p className="mt-8 text-lg font-medium text-gray-900">
              Payment Methods
            </p>

            <div className="mt-5 grid gap-5">
              <PaymentOption
                id="payment_cod"
                value="COD"
                label="COD (Cash On Delivery)"
                checked={paymentMethod === "COD"}
                onChange={handlePaymentChange}
              />

              <PaymentOption
                id="payment_khalti"
                value="khalti"
                label="Online Payment (Khalti)"
                checked={paymentMethod === "khalti"}
                onChange={handlePaymentChange}
                isKhalti
              />
            </div>
          </section>

          <form onSubmit={handleSubmit} noValidate>
            <div className="rounded-lg bg-white px-4 py-6 shadow-sm sm:px-6">
              <p className="text-xl font-medium text-gray-900">
                Customer Details
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Enter your contact and shipping information.
              </p>

              <FormInput
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="your.email@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
              />

              <FormInput
                label="Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="98XXXXXXXX"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />

              <FormInput
                label="Shipping Address"
                id="shippingAddress"
                name="shippingAddress"
                type="text"
                placeholder="Street Address"
                value={formData.shippingAddress}
                onChange={handleInputChange}
              />

              <div className="mt-6 border-y py-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">Rs {subTotal}</p>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">
                    Rs {shippingAmount}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  Rs {totalAmount}
                </p>
              </div>

              <button
                type="submit"
                className={`mt-6 w-full rounded-md px-6 py-3 font-medium text-white transition hover:opacity-90 ${
                  paymentMethod === "khalti" ? "bg-purple-700" : "bg-gray-900"
                }`}
              >
                {paymentMethod === "khalti" ? "Pay With Khalti" : "Place Order"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

type FormInputProps = {
  label: string;
  id: string;
  name: keyof CheckoutFormValues;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
}: FormInputProps) => {
  return (
    <div className="mt-4">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
};

type PaymentOptionProps = {
  id: string;
  value: PaymentMethod;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isKhalti?: boolean;
};

const PaymentOption = ({
  id,
  value,
  label,
  checked,
  onChange,
  isKhalti = false,
}: PaymentOptionProps) => {
  return (
    <div className="relative">
      <input
        className="peer hidden"
        id={id}
        type="radio"
        name="paymentMethod"
        value={value}
        checked={checked}
        onChange={onChange}
      />

      <span
        className={`absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white ${
          isKhalti
            ? "peer-checked:border-purple-700"
            : "peer-checked:border-gray-700"
        }`}
      />

      <label
        htmlFor={id}
        className={`flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 transition ${
          isKhalti
            ? "peer-checked:border-2 peer-checked:border-purple-700 peer-checked:bg-purple-50"
            : "peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
        }`}
      >
        <span className="font-semibold text-gray-900">{label}</span>
      </label>
    </div>
  );
};

export default CheckoutPage;
