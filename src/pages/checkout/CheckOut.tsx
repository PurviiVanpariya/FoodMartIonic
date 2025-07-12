import { useState } from 'react'
import { LiaUserCircle } from "react-icons/lia";
import { TbLocation } from "react-icons/tb";


import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCol, IonContent, IonInput, IonItem, IonPage, IonRow, IonSegment, IonSegmentButton, IonText } from '@ionic/react'

import Header from '../../components/header'

import './../home/Home.css'
import { GoVerified } from 'react-icons/go';
import CongratsModal from '../my-profile/CongratsModal';
import NoteModal, { PaymentModal } from '../my-profile/NoteModal';

const CheckOut = ({ showLogin = false }) => {

    const [showNoteModal, setShowNoteModal] = useState(false);

    const onNoteModalClick = () => {
        setShowNoteModal(true);
    };

    const [showPayment, setShowPayment] = useState(false);

    const showPaymentModal = () => [
        setShowPayment(true)
    ]

    const [showCongrats, setShowCongrats] = useState(false);

    const showCongratsModal = () => [
        setShowCongrats(true)
    ]

    return (
        <>
            {
                showLogin && (
                    <IonPage>
                        <Header
                            Heading='Login'
                        />
                        <IonContent className="Modalbg-color">
                            <IonRow className='flex-col justify-between h-full'>
                                <IonCol className=' p-4 pb-0'>
                                    <IonCard className='rounded-xl w-full mx-auto'>
                                        <IonCardSubtitle className='text-black text-center mx-auto pb-4 border-b border-[#dee2e6] ion-padding'>We will send an SMS with a confirmation code to this number</IonCardSubtitle>
                                        <IonCardContent className='space-y-2'>
                                            <IonItem className='item-native'>
                                                <IonInput
                                                    label="Phone Number *"
                                                    type='tel'
                                                    labelPlacement="stacked"
                                                    clearOnEdit={true}
                                                    placeholder="Enter Phone Number"
                                                    className='text-lg custom-input'
                                                ></IonInput>
                                            </IonItem>
                                            <IonItem className='item-native'>
                                                <IonInput
                                                    label="Use your referral code here"
                                                    labelPlacement="stacked"
                                                    clearOnEdit={true}
                                                    placeholder="Enter Code"
                                                    className='text-lg custom-input px-0 !w-full'
                                                ></IonInput>
                                            </IonItem>
                                            <IonButton className='orangebtn mx-auto flex !mt-5' onClick={onNoteModalClick}>Next</IonButton>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonSegment>
                                    <IonSegmentButton value="user" className="segment py-2" onClick={onNoteModalClick}>
                                        <LiaUserCircle className="w-6 h-6 text-current" />
                                        <IonText className='capitalize text-xs mt-1'>Address</IonText>
                                    </IonSegmentButton>

                                    <IonSegmentButton value="location" className="segment" onClick={showPaymentModal}>
                                        <TbLocation className="w-5 h-5 text-current" />
                                        <IonText className='capitalize text-xs mt-1'>Payment</IonText>
                                    </IonSegmentButton>

                                    <IonSegmentButton value="verify" className="segment" onClick={showCongratsModal}>
                                        <GoVerified className="w-5 h-5 text-current" />
                                        <IonText className='capitalize text-xs mt-1'>Complete</IonText>
                                    </IonSegmentButton>
                                </IonSegment>
                            </IonRow>
                        </IonContent>
                        <NoteModal showNoteModal={showNoteModal} setShowNoteModal={setShowNoteModal} />
                        <PaymentModal showPayment={showPayment} setShowPayment={setShowPayment} />
                        <CongratsModal showCongrats={showCongrats} />
                    </IonPage>
                )
            }
        </>
    )
}

export default CheckOut
