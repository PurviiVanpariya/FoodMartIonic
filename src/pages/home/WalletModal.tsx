import { IonContent, IonPage, IonRouterLink, IonRow, IonText } from '@ionic/react'
import React, { useState } from 'react'
import Header from '../../components/header'
import { CgProfile } from 'react-icons/cg'
import { IoWallet } from 'react-icons/io5'
import Button from '../../components/common/Button'
import Profile from './Profile'
import { PaymentModal } from './NoteModal'

const transactions = [
    { id: 1, shop: "xyz Shop", amount: -45 },
    { id: 2, shop: "jkd Shop", amount: -678 },
    { id: 3, shop: "lis Shop", amount: -98 },
    { id: 4, shop: "erf Shop", amount: -12 },
    { id: 5, shop: "acs Shop", amount: -33 },
    { id: 6, shop: "ioo Shop", amount: -9 },
    { id: 7, shop: "lis Shop", amount: -98 },
    { id: 8, shop: "erf Shop", amount: -12 },
    { id: 9, shop: "acs Shop", amount: -33 },
    { id: 10, shop: "ioo Shop", amount: -9 }
];

const WalletModal = ({ showWalletModal = false }) => {

    const [showProfile, setShowProfile] = useState(false)
    const onProfileClick = () => {
        setShowProfile(true)
    }

    const [showPayment, setShowPayment] = useState(false);

    const showPaymentModal = () => [
        setShowPayment(true)
    ]

    return (
        <>
            {
                showWalletModal && (
                    <IonPage>
                        <Header Heading='My Wallet' cartIcon={CgProfile} cartClassName='after:hidden' onCartClick={onProfileClick} />
                        <IonContent className='bg-color'>
                            <IonRow className='w-full bg-[#003049] px-6 pt-10 pb-24 text-center space-y-2'>
                                <IonText className='w-full'><IoWallet className='text-8xl text-white mx-auto' /></IonText>
                                <IonText className='w-full text-white font-medium text-lg'>Total Balance</IonText>
                                <IonText className='w-full text-white font-semibold text-5xl'>$24,000</IonText>
                                <Button label='ADD MONEY' className='!mt-5' onClick={showPaymentModal}></Button>
                            </IonRow>
                            <IonRow className='ion-padding'>
                                <IonRow className='bg-white rounded-xl border border-gray-200 py-3 w-full -mt-24'>
                                    {
                                        transactions.map(transaction => (
                                            <IonRow key={transaction.id} className='w-full flex justify-between items-center px-4 py-3 border-b'>
                                                <IonText>{`Payment to ${transaction.shop}`}</IonText>
                                                <IonText className='text-red-600 '>{`$${transaction.amount}`}</IonText>
                                            </IonRow>
                                        ))
                                    }
                                </IonRow>
                            </IonRow>
                        </IonContent>
                        <PaymentModal showPayment={showPayment} setShowPayment={setShowPayment} />
                        <Profile showProfile={showProfile} />
                    </IonPage>
                )
            }
        </>
    )
}

export default WalletModal
