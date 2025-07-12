import { IonCol, IonContent, IonImg, IonPage, IonRow, IonSearchbar, IonText } from '@ionic/react'
import React, { useState } from 'react'
import Header from '../../components/header'
import Button from '../../components/common/Button';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { MdOutlineCancel } from "react-icons/md";
import SingleProduct from '../single-product/SingleProduct';

const walletData = [
    {
        storeName: "Super Store - Ludhiana",
        imgSrc: "https://askdemo-c24d7.web.app/assets/small/7.jpg",
        totalAmount: "$233,00",
        productID: "GURDEEEP8343743",
        originalAmount: "$233,00",
        finalAmount: "$00,00",
        order: 'Order Cancelled',
        orderIcon: <MdOutlineCancel />,
        orderColor: 'text-red-400'
    },
    {
        storeName: "Singh Store - Goa",
        imgSrc: "https://askdemo-c24d7.web.app/assets/small/5.jpg",
        totalAmount: "$533,00",
        productID: "GURDEEEP8343743",
        originalAmount: "$533,00",
        finalAmount: "$644,00",
        order: 'Order successfully',
        orderIcon: <IoIosCheckmarkCircleOutline />,
        orderColor: 'text-green-600'
    },
    {
        storeName: "Osahan Store - Puna",
        imgSrc: "https://askdemo-c24d7.web.app/assets/small/6.jpg",
        totalAmount: "$233,00",
        productID: "GURDEEEP8343743",
        originalAmount: "$233,00",
        finalAmount: "$00,00",
        order: 'Order Cancelled',
        orderIcon: <MdOutlineCancel />,
        orderColor: 'text-red-400'
    }
];
const OrderList = ({ showOrderList = false }) => {

    const [searchTerm,] = useState("");
    const [showSingleProduct, setShowSingleProduct] = useState(false)
    const onProductClick = () => {
        setShowSingleProduct(true)
    }
    return (
        <>
            {
                showOrderList && (
                    <IonPage className='bg-white'>
                        <Header Heading='Order List' />
                        <IonContent className='bg-color ion-padding'>
                            <IonSearchbar
                                style={{ "--box-shadow": "transparent", borderRadius: '22px !important' }}
                                className="h-10 !rounded-md !p-0 my-2"
                                placeholder="Search.."
                                value={searchTerm}
                                debounce={300}
                            />
                            <IonText className='text-sm flex justify-center py-1'>Placed on Fri, 22 Jun, 8 PM - 11 PM</IonText>
                            {
                                walletData.map((data, index) => (
                                    <IonRow key={index} className="bg-white rounded-xl py-4 shadow my-3">
                                        <IonRow className='grid grid-cols-7 pb-2 px-4'>
                                            <IonCol className='col-span-2'><IonImg src={data.imgSrc} className='h-20'></IonImg></IonCol>
                                            <IonCol className='col-span-5 flex flex-col'>
                                                <IonText className='font-semibold text-lg'>{data.storeName}</IonText>
                                                <IonText className='text-blue-950 text-sm'>{data.totalAmount}</IonText>
                                                <IonText className='text-sm'> Product ID: {data.productID}</IonText>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow className='px-4 py-1 border-y border-gray-200 w-full flex items-center justify-between'>
                                            <IonText className={`${data.orderColor} text-sm`}>{data.order}</IonText>
                                            <IonText className={`${data.orderColor}`}>{data.orderIcon}</IonText>
                                        </IonRow>
                                        <IonRow className='w-full pt-3'>
                                            <IonRow className='flex justify-between !w-full px-4 py-1'>
                                                <IonText className='text-primary text-sm'>Original Payable amount</IonText>
                                                <IonText className='text-sm'>{data.originalAmount}</IonText>
                                            </IonRow>
                                            <IonRow className='flex justify-between !w-full px-4 py-1'>
                                                <IonText className='text-sm'>Final paid amount</IonText>
                                                <IonText className='text-sm'>{data.finalAmount}</IonText>
                                            </IonRow>
                                            <IonRow className='px-4 py-2 mt-3 w-full'>
                                                <Button onClick={onProductClick} label='VIEW DETAILS' className='w-full'></Button>
                                            </IonRow>
                                        </IonRow>
                                    </IonRow>
                                ))}
                        </IonContent>
                        <SingleProduct showSingleProduct={showSingleProduct} />
                    </IonPage>

                )
            }
        </>
    )
}
export default OrderList
